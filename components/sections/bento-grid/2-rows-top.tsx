import { ReactNode } from "react";

import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
  TileLink,
} from "../../ui/tile";
import { Section } from "../../ui/section";
import GlobeIllustration from "../../illustrations/globe";
import PipelineIllustration from "../../illustrations/pipeline";
import CodeEditorIllustration from "../../illustrations/code-editor";
import MockupMobileIllustration from "../../illustrations/mockup-mobile";
import TilesIllustration from "../../illustrations/tiles";

interface TileProps {
  title: string;
  description: ReactNode;
  visual: ReactNode;
  size?: string;
}

interface BentoGridProps {
  title?: string;
  description?: string;
  tiles?: TileProps[] | false;
  className?: string;
}

export default function BentoGrid({
  title = "Build a website that is hard to forget.",
  description = "Build a top-notch landing page even if you don't have the time for it. Create an irresistible offer that speaks professionalism and hi-end design.",
  tiles = [
    {
      title: "Made for search engines",
      description: (
        <p className="max-w-[460px]">
          Unlike the bloated no-code solutions, Launch UI is built to be
          perfectly optimized for search engines.
        </p>
      ),
      visual: (
        <div className="min-h-[160px] grow items-center self-center">
          <PipelineIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-5",
    },
    {
      title: "The code is yours",
      description: (
        <>
          <p className="max-w-[320px] lg:max-w-[460px]">
            With Launch UI, the code is yours forever. You can use it as a
            starting point for your own projects and customize it to your needs.
          </p>
          <p>Never bother about subscriptions and lock-ins.</p>
        </>
      ),
      visual: (
        <div className="min-h-[240px] w-full grow items-center self-center p-4 lg:px-12">
          <CodeEditorIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-7",
    },
    {
      title: "Mobile-first",
      description: (
        <p>
          Optimized to look and feel great on all devices, operating systems,
          and screen sizes.
        </p>
      ),
      visual: (
        <div className="min-h-[300px] w-full py-12">
          <MockupMobileIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Top-level performance",
      description:
        "Lightweight and optimized, your website will will feel snappy and load instantly.",
      visual: (
        <div className="-mt-12 -mb-20 [&_svg]:h-[420px] [&_svg]:w-[420px]">
          <GlobeIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Fits right into your stack",
      description: (
        <p className="max-w-[460px]">
          Integrate your landing page directly in the product while using your
          favorite tools.
        </p>
      ),
      visual: (
        <div className="-mr-32 -ml-40">
          <TilesIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
  ],
  className,
}: BentoGridProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
          {title}
        </h2>
        <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl">
          {description}
        </p>
        {tiles !== false && tiles.length > 0 && (
          <div className="grid grid-cols-12 gap-4">
            {tiles.map((tile, index) => (
              <Tile key={index} className={tile.size}>
                <TileLink />
                <TileContent>
                  <TileTitle>{tile.title}</TileTitle>
                  <TileDescription>{tile.description}</TileDescription>
                </TileContent>
                <TileVisual>{tile.visual}</TileVisual>
              </Tile>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
