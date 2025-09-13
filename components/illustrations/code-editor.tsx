import * as React from "react";
import Glow from "../ui/glow";
import ReactLogo from "../logos/react";
import Tailwind from "../logos/tailwind";

function CodeEditorIllustration() {
  return (
    <div data-slot="code-editor-illustration" className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0">
          <div className="border-border/100 bg-muted dark:border-border/5 dark:border-t-border/15 dark:bg-accent/30 relative flex min-h-[540px] min-w-[460px] flex-col gap-4 rounded-[12px] border">
            <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
              <div className="hidden gap-2 pl-4 lg:flex">
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
              </div>
              <div className="relative flex w-[320px]">
                <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                  <ReactLogo className="size-4" />
                  <p>page.tsx</p>
                </div>
                <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                  <Tailwind className="size-4" />
                  <p>globals.css</p>
                </div>
                <div className="absolute top-0 left-0 h-full w-[50%] px-2 transition-all duration-1000 ease-in-out group-hover:left-[50%]">
                  <div className="glass-4 h-full w-full rounded-md shadow-md"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full grow overflow-hidden">
              <div className="absolute top-0 left-0 translate-x-0 px-8 transition-all duration-1000 ease-in-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                <pre className="text-muted-foreground font-mono text-xs">
                  <span className="text-brand">import</span>
                  <span className="text-muted-foreground"> {`{ `}</span>
                  <span className="text-foreground">cn</span>
                  <span className="text-muted-foreground"> {`}`} </span>
                  <span className="text-brand">from </span>
                  <span className="text-brand-foreground">
                    &quot;@/lib/utils&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-brand">import</span>
                  <span className="text-foreground"> clsx</span>
                  <span className="text-brand"> from </span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;clsx&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-brand">import</span>
                  <span className="text-muted-foreground"> {`{ `}</span>
                  <span className="text-foreground">PropsWithChildren</span>
                  <span className="text-muted-foreground">{` }`} </span>
                  <span className="text-brand">from </span>
                  <span className="text-brand-foreground">
                    &quot;react&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-brand">type</span>
                  <span className="text-foreground"> NoteProps</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-foreground">PropsWithChildren</span>
                  <span className="text-muted-foreground"> & {`{`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> title?: </span>
                  <span className="text-foreground">string</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type?: </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;danger&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;warning&quot;
                  </span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="text-brand-foreground">
                    &quot;success&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground"> className?: </span>
                  <span className="text-foreground">string</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">{` }`}</span>
                  <span className="text-muted-foreground">{`;`}</span>
                  {"\n\n"}
                  <span className="text-brand">export default function</span>
                  <span className="text-foreground"> Note</span>
                  <span className="text-muted-foreground">{`({`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> children,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> title = </span>
                  <span className="text-brand-foreground">
                    &quot;Note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type = </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> className,</span>
                  {"\n"}
                  <span className="text-muted-foreground">{` }`}</span>
                  <span className="text-foreground">: </span>
                  <span className="text-foreground">NoteProps</span>
                  <span className="text-muted-foreground">{` ) {`}</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    const noteClassNames ={" "}
                  </span>
                  <span className="text-foreground">clsx</span>
                  <span className="text-muted-foreground">{`({`}</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-stone-950/25 bg-stone-50&quot;
                  </span>
                  <span className="text-muted-foreground">: type == </span>
                  <span className="text-brand-foreground">
                    &quot;note&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-red-950 bg-red-100 border-red-200
                    dark:border-red-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;danger&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-orange-950 bg-orange-100 border-orange-200
                    dark:border-orange-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;warning&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> </span>
                  <span className="text-brand-foreground">
                    &quot;dark:bg-green-950 bg-green-100 border-green-200
                    dark:border-green-900&quot;
                  </span>
                  <span className="text-muted-foreground">:</span>
                  {"\n"}
                  <span className="text-muted-foreground"> type === </span>
                  <span className="text-brand-foreground">
                    &quot;success&quot;
                  </span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  <span className="text-muted-foreground"> {` });`}</span>
                </pre>
              </div>

              <div className="absolute top-0 left-0 translate-x-[100%] px-8 opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <pre className="text-muted-foreground font-mono text-xs">
                  <span className="text-brand">@import</span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;tailwindcss&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-brand">@plugin</span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;tailwindcss-animate&quot;
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-brand">@import</span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;../styles/syntax.css&quot;
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    layer(utilities);
                  </span>
                  {"\n"}
                  <span className="text-brand">@import</span>
                  <span className="text-brand-foreground">
                    {" "}
                    &quot;../styles/theme.css&quot;
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    layer(utilities);
                  </span>
                  {"\n\n"}
                  <span className="text-brand">@custom-variant</span>
                  <span className="text-foreground"> dark</span>
                  <span className="text-muted-foreground">
                    {" "}
                    (&:where(.dark, .dark *));
                  </span>
                  {"\n\n"}
                  <span className="text-brand">@theme</span>
                  <span className="text-foreground"> inline</span>
                  <span className="text-muted-foreground"> {`{`}</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-brand:{" "}
                  </span>
                  <span className="text-foreground">var(--brand)</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-brand-foreground:{" "}
                  </span>
                  <span className="text-foreground">
                    var(--brand-foreground)
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-light:{" "}
                  </span>
                  <span className="text-foreground">var(--light)</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-light-foreground:{" "}
                  </span>
                  <span className="text-foreground">
                    var(--light-foreground)
                  </span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-background:{" "}
                  </span>
                  <span className="text-foreground">var(--background)</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-foreground:{" "}
                  </span>
                  <span className="text-foreground">var(--foreground)</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n"}
                  <span className="text-muted-foreground">
                    {" "}
                    --color-sidebar-ring:{" "}
                  </span>
                  <span className="text-foreground">var(--sidebar-ring)</span>
                  <span className="text-muted-foreground">;</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <Glow
          variant="below"
          className="translate-y-32 scale-150 opacity-40 transition-all duration-1000 group-hover:scale-200 group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default CodeEditorIllustration;
