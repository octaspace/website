import type { PricingColumnProps } from "@/components/ui/pricing-column";
import { siteConfig } from "@/config/site";

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface OctaNetworkSnapshot {
  statsItems: StatItem[];
  stats2Items: StatItem[];
  plans: PricingColumnProps[];
}

// `GET /network` of the public API (oas `OasWeb.Schemas.Network`), the fields used here.
interface NetworkResponse {
  nodes: { online: number; countries: number };
  power: { gpus: number; tflops: number };
  users: { total: number };
  render: { frames_total: number };
}

// `GET /stats/gpu/current` (oas `OasWeb.Schemas.GpuCurrent`). Prices are
// micro-USD per GPU-hour, null where there is nothing to take them of.
interface GpuCurrentResponse {
  gpus: {
    model: string;
    available: number;
    available_price: { p10: number | null; p50: number | null };
  }[];
}

// Shown first, in this order; the rest by GPUs available.
const gpuPriority: Record<string, number> = {
  "NVIDIA H100 80GB HBM3": 100,
  "NVIDIA A100-SXM4-40GB": 99,
  "NVIDIA RTX A6000": 98,
  "NVIDIA GeForce RTX 5090": 90,
  "NVIDIA GeForce RTX 4090": 85,
  "NVIDIA GeForce RTX 5080": 80,
  "NVIDIA GeForce RTX 4080": 75,
  "NVIDIA GeForce RTX 4070": 70,
  "NVIDIA GeForce RTX 3090": 60,
  "NVIDIA GeForce RTX 5070": 50,
};

export const fallbackOctaNetworkSnapshot: OctaNetworkSnapshot = {
  statsItems: [
    {
      value: "Global",
      label: "GPU network:",
      description: "Available for AI, rendering, and cloud workloads",
    },
    {
      value: "P2P",
      label: "Node marketplace:",
      description: "Providers offering compute power directly",
    },
    {
      value: "Pay as you go",
      label: "Access model:",
      description: "No subscriptions required",
    },
  ],
  stats2Items: [
    {
      value: "On demand",
      label: "Raw Power Unleashed",
      description: "Global GPU compute when your workload needs it",
    },
    {
      value: "Worldwide",
      label: "Global Reach",
      description: "Decentralized compute locations",
    },
    {
      value: "Distributed",
      label: "Frames Rendered",
      description: "Rendering across the global network",
    },
  ],
  plans: [],
};

const formatCount = (n: number) => Math.round(n).toLocaleString("en-US");

function toPlans(gpus: GpuCurrentResponse["gpus"]): PricingColumnProps[] {
  return gpus
    .flatMap((gpu) => {
      const price = gpu.available_price.p10 ?? gpu.available_price.p50;
      return gpu.available > 0 && price ? [{ ...gpu, price }] : [];
    })
    .sort(
      (a, b) =>
        (gpuPriority[b.model] ?? 0) - (gpuPriority[a.model] ?? 0) ||
        b.available - a.available,
    )
    .map((gpu) => ({
      name: gpu.model.replace(/NVIDIA\s*|GeForce\s*/g, "").trim(),
      description: `${gpu.available} available`,
      price: (gpu.price / 1_000_000).toFixed(2),
      priceNote: "per hour",
      cta: {
        label: "Rent now",
        href: siteConfig.console.compute,
        variant: "glow" as const,
      },
    }));
}

function normalizeOctaNetworkData(
  network: NetworkResponse,
  gpus: GpuCurrentResponse,
): OctaNetworkSnapshot {
  return {
    statsItems: [
      {
        value: formatCount(network.power.gpus),
        label: "Total GPUs:",
        description: "Online in the network",
      },
      {
        value: formatCount(network.nodes.online),
        label: "Total nodes:",
        description: "Offering Compute Power",
      },
      {
        value: formatCount(network.users.total),
        label: "Registered users:",
        description: "Users & Growing",
      },
    ],
    stats2Items: [
      {
        value: formatCount(network.power.tflops),
        label: "Raw Power Unleashed",
        description: "Global TFLOPS on Demand",
      },
      {
        value: formatCount(network.nodes.countries),
        label: "Global Reach",
        description: "Countries",
      },
      {
        value: formatCount(network.render.frames_total),
        label: "Frames Rendered",
        description: "By OctaRender",
      },
    ],
    plans: toPlans(gpus.gpus),
  };
}

async function fetchJson<T>(path: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(`${siteConfig.apiUrl}${path}`, { signal });

  if (!response.ok) {
    throw new Error(`${path} responded with ${response.status}`);
  }

  return response.json();
}

export async function getOctaNetworkSnapshot(): Promise<OctaNetworkSnapshot> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const [network, gpus] = await Promise.all([
      fetchJson<NetworkResponse>("/network", controller.signal),
      fetchJson<GpuCurrentResponse>("/stats/gpu/current", controller.signal),
    ]);

    return normalizeOctaNetworkData(network, gpus);
  } catch {
    return fallbackOctaNetworkSnapshot;
  } finally {
    clearTimeout(timeout);
  }
}
