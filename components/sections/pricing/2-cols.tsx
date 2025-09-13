import { cn } from "@/lib/utils";
import { User, Users } from "lucide-react";

import { Section } from "../../ui/section";
import {
  PricingColumn,
  PricingColumnProps,
} from "../../ui/pricing-column";

interface PricingProps {
  title?: string;
  description?: string;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Build your dream landing page, today.",
  description = "Get lifetime access to all the components. No recurring fees. Just simple, transparent pricing.",
  plans = [
    {
      name: "Pro",
      icon: <User className="size-4" />,
      description: "For early-stage founders, solopreneurs and indie devs",
      price: 99,
      priceNote: "Lifetime access. Free updates. No recurring fees.",
      cta: {
        variant: "default",
        label: "Get all-access",
        href: "https://www.launchuicomponents.com/",
      },
      features: [
        `$1000 website templates`,
        `$1000 app templates`,
        `$1000 blocks and sections`,
        `$1000 illustrations`,
        `$1000 custom animations`,
      ],
      variant: "glow-brand",
    },
    {
      name: "Pro Team",
      icon: <Users className="size-4" />,
      description: "For teams and agencies working on cool products together",
      price: 499,
      priceNote: "Lifetime access. Free updates. No recurring fees.",
      cta: {
        variant: "glow",
        label: "Get all-access for your team",
        href: "https://www.launchuicomponents.com/",
      },
      features: [
        "All the templates, components and sections available for your entire team",
      ],
      variant: "glow",
    },
  ],
  className,
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        {plans !== false && plans.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
