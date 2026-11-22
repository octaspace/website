import { cva, type VariantProps } from "class-variance-authority";

import { cn, linkTarget } from "@/lib/utils";

import { Button, type ButtonProps } from "./button";

// Pricing panel styling
const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 shadow-md",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-2",
        glow: "glass-2 to-transparent dark:glass-3",
        "glow-brand": "glass-3 from-card/100 to-card/100 dark:glass-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  description: string;
  price: string;
  priceNote?: string; // e.g., "per hour"
  cta: {
    variant: ButtonProps["variant"];
    label: string;
    href: string;
  };
}

export function PricingColumn({
  name,
  description,
  price,
  priceNote = "",
  cta,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">{name}</h2>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-1">
          <span className="text-muted-foreground text-sm">From</span>
          <div className="flex items-baseline gap-2">
            <span className="text-muted-foreground text-2xl font-bold">$</span>
            <span className="text-3xl font-bold">{price}</span>
            {priceNote && (
              <span className="text-muted-foreground text-sm">{priceNote}</span>
            )}
          </div>
        </div>

        <Button variant={cta.variant} size="lg" asChild>
          <a href={cta.href} {...linkTarget(cta.href)}>
            {cta.label}
          </a>
        </Button>
      </div>
    </div>
  );
}
