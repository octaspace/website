import * as React from "react";

import { Beam } from "../ui/beam";
import TailwindLogo from "../logos/tailwind";
import ReactLogo from "../logos/react";
import TypeScriptLogo from "../logos/typescript";
import Ubuntuicon from "../logos/ubuntu";
import DockerLogo from "../logos/docker";
import Glow from "../ui/glow";
import Tensorflow from "../logos/tailwind";
import Pytorch from "../logos/pytorch";
import OpenAI from "../logos/openai";

function TilesIllustration() {
  return (
    <div
      data-slot="tiles-illustration"
      className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6"
    >
      <div className="row-span-2 row-start-2"></div>
      <div className="fade-left-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
      <div className="fade-top-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <Tensorflow />
          </div>
        </Beam>
      </div>
      <div className="fade-bottom-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <Pytorch />
          </div>
        </Beam>
      </div>
      <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <OpenAI />
          </div>
        </Beam>
      </div>
      <div className="fade-top-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
      <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <Ubuntuicon />
          </div>
        </Beam>
      </div>
      <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-[.8]">
        <Beam tone="brandLight">
          <div className="text-light relative z-10">
            <DockerLogo />
          </div>
        </Beam>
      </div>
      <div className="fade-right-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
      <Glow
        variant="center"
        className="scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  );
}

export default TilesIllustration;
