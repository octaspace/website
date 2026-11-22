"use client";

import { ReactNode } from "react";
import { Section } from "../../ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import Glow from "../../ui/glow";

interface TabProps {
  value: string;
  title: string;
  description: string;
  icon: ReactNode;
  content: ReactNode;
}

interface TabsTopProps {
  title: string;
  description: string;
  tabs: TabProps[];
  defaultTab: string;
  className?: string;
}

export default function TabsTop({
  title,
  description,
  defaultTab,
  tabs,
  className,
}: TabsTopProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col gap-8 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[720px] text-center font-medium text-balance sm:text-xl">
            {description}
          </p>
        </div>
        <div className="w-full">
          {tabs.length > 0 && (
            <Tabs
              defaultValue={defaultTab}
              className="flex flex-col items-start gap-4"
            >
              <TabsList className="grid w-full grid-cols-1 items-stretch gap-2 sm:grid-cols-2 md:gap-4 lg:flex">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex w-full flex-row gap-2 p-3"
                  >
                    {tab.icon}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{tab.title}</h3>
                      <p className="text-muted-foreground text-xs">
                        {tab.description}
                      </p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="col-span-2 aspect-16/9 w-full p-8"
                >
                  {tab.content}
                  <Glow variant="center" />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </Section>
  );
}
