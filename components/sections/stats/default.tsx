import type { StatItem } from "@/lib/octa-network";

import { Section } from "../../ui/section";

interface StatsProps {
  items: StatItem[];
  className?: string;
}

export default function Stats({ items, className }: StatsProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[960px]">
        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
