import { cn } from "@/lib/utils";

import Glow from "../../ui/glow";
import {
  PricingColumn,
  type PricingColumnProps,
} from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title: string;
  description: string;
  plans: PricingColumnProps[];
  className?: string;
}

export default function Pricing({
  title,
  description,
  plans,
  className,
}: PricingProps) {
  return (
    <Section className={cn(className, "relative overflow-hidden")}>
      {/* Glow behind the pricing cards */}
      <Glow
        variant="center"
        className="absolute top-2/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="text-muted-foreground sm:text-md max-w-[600px] text-sm">
            {description}
          </p>
        </div>

        <div className="max-w-container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <PricingColumn key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </Section>
  );
}
