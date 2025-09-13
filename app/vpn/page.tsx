import {
    CheckCircle2,
    ListChecks,
    Bell,
    Share2,
    CalendarClock,
    Tag,
  } from "lucide-react";
  
  import Navbar from "../../components/sections/navbar/static";
  import Hero from "../../components/sections/hero/mobile-app";
  import LogosStatic from "../../components/sections/logos/static";
  import BentoGrid from "../../components/sections/bento-grid/3-rows-bottom";
  import FeatureStickyLeft from "../../components/sections/feature/sticky-left";
  import FeatureStickyRight from "../../components/sections/feature/sticky-right";
  import ItemsLargeBrand from "../../components/sections/items/large-brand";
  import TabsLeft from "../../components/sections/tabs/left";
  import TestimonialsGrid from "../../components/sections/testimonials/grid";
  import CTA from "../../components/sections/cta/default";
  import Footer from "../../components/sections/footer/5-columns";
  import PlutoLogo from "../../components/logos/pluto";
  import FAQ from "../../components/sections/faq/raised";
  import SocialProof from "../../components/sections/social-proof/marquee-2-rows";
  import RippleIllustration from "../../components/illustrations/ripple";
  import ChatIllustration from "../../components/illustrations/chat";
  import MockupBrowserIllustration from "../../components/illustrations/mockup-browser";
  import MockupResponsiveBottomIllustration from "../../components/illustrations/mockup-responsive-bottom";
  import RadarSmallIllustration from "../../components/illustrations/radar-small";
  import { Mockup, MockupFrame } from "../../components/ui/mockup";
  import Screenshot from "../../components/ui/screenshot";
  
  export default function PlutoPage() {
    return (
      <div
        className="flex flex-col"
        style={
          {
            "--brand-foreground": "var(--brand-emerald-foreground)",
            "--brand": "var(--brand-emerald)",
            "--primary": "light-dark(var(--brand-emerald), oklch(0.985 0 0))",
            "--background": "var(--background-emerald)",
            "--muted": "var(--background-emerald)",
            "--radius": "1rem",
          } as React.CSSProperties
        }
      >
        <Navbar
          logo={<PlutoLogo className="text-foreground dark:text-white" />}
          name="Pluto"
          actions={[
            { text: "Features", href: "#", variant: "ghost" },
            { text: "Pricing", href: "#", variant: "outline" },
            { text: "Download", isButton: true, href: "#", variant: "default" },
          ]}
        />
        <main className="flex-1">
          <Hero
            badge={false}
            title="Your personal todo list on the go"
            description="TodoPluto helps you organize your life, track tasks, and boost productivity with a beautiful, intuitive mobile experience."
            buttons={[
              { text: "Download for iOS", href: "#", variant: "default" },
              { text: "Download for Android", href: "#", variant: "glow" },
            ]}
          />
          <LogosStatic title="Trusted by thousands of productivity enthusiasts" />
          <BentoGrid
            title="The todo app that adapts to your workflow"
            description="TodoPluto combines powerful task management with a beautiful interface, helping you stay organized and accomplish more every day."
            tiles={[
              {
                title: "Smart task organization",
                description: (
                  <>
                    <p className="max-w-[320px] lg:max-w-[460px]">
                      Create lists, set priorities, and organize tasks your way.
                      TodoPluto adapts to how you work, not the other way around.
                    </p>
                    <p>
                      No more juggling between different apps for different needs.
                    </p>
                  </>
                ),
                visual: (
                  <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
                    <MockupBrowserIllustration />
                  </div>
                ),
                icon: (
                  <ListChecks className="text-muted-foreground size-8 stroke-1" />
                ),
                size: "col-span-12 md:flex-row",
                contentClassName: "grow basis-0 md:justify-end",
              },
              {
                title: "Seamless reminders",
                description: (
                  <>
                    <p>
                      Never miss a deadline with smart notifications that sync
                      across all your devices.
                    </p>
                    <p>Get reminders exactly when you need them.</p>
                  </>
                ),
                visual: (
                  <div className="w-full sm:p-4 md:p-8">
                    <ChatIllustration />
                  </div>
                ),
                icon: <Bell className="text-muted-foreground size-8 stroke-1" />,
                size: "col-span-12 md:col-span-6 lg:col-span-5",
              },
              {
                title: "Share and collaborate",
                description: (
                  <>
                    <p className="max-w-[460px]">
                      Share shopping lists, project tasks, or travel plans with
                      family, friends, or colleagues with just a tap.
                    </p>
                    <p>Real-time updates keep everyone on the same page.</p>
                  </>
                ),
                visual: (
                  <div className="-mx-32 pt-8">
                    <RippleIllustration />
                  </div>
                ),
                icon: (
                  <Share2 className="text-muted-foreground size-8 stroke-1" />
                ),
                size: "col-span-12 md:col-span-6 lg:col-span-7",
              },
              {
                title: "Distraction-free design",
                description:
                  "Clean, intuitive interface that keeps you focused on your tasks, not figuring out the app.",
                visual: (
                  <div className="h-full min-h-[240px] grow sm:p-4 md:min-h-[320px] lg:px-12">
                    <MockupResponsiveBottomIllustration />
                  </div>
                ),
                icon: (
                  <CheckCircle2 className="text-muted-foreground size-8 stroke-1" />
                ),
                size: "col-span-12 md:col-span-6 lg:col-span-6",
              },
              {
                title: "Works offline",
                description: (
                  <p className="max-w-[460px]">
                    Add and complete tasks even without internet connection.
                    TodoPluto syncs automatically when you&apos;re back online.
                  </p>
                ),
                visual: (
                  <div className="relative min-h-[240px]">
                    <RadarSmallIllustration className="absolute top-1/2 left-1/2 -mt-24 h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2" />
                  </div>
                ),
                icon: (
                  <CheckCircle2 className="text-muted-foreground size-8 stroke-1" />
                ),
                size: "col-span-12 md:col-span-6 lg:col-span-6",
              },
            ]}
          />
          <FeatureStickyRight
            title="Simple task management"
            description={
              <>
                <p>
                  Create, organize, and complete tasks with just a few taps. Our
                  intuitive interface makes managing your todo list effortless.
                </p>
                <p>
                  Set priorities, deadlines, and categories to keep your life
                  organized in one place.
                </p>
              </>
            }
          />
          <FeatureStickyLeft
            title="Stay productive anywhere"
            description={
              <>
                <p>
                  Access your tasks across all your devices with real-time
                  syncing. Never worry about forgetting important to-dos again.
                </p>
                <p>
                  Work offline and sync automatically when you&apos;re back
                  online.
                </p>
              </>
            }
          />
          <ItemsLargeBrand
            title="Features designed for your productivity"
            items={[
              {
                title: "Smart task lists",
                description: "Organize tasks by project, priority or due date",
                icon: <ListChecks className="text-brand size-8 stroke-1" />,
              },
              {
                title: "Custom reminders",
                description:
                  "Set precise notifications that work for your schedule",
                icon: <Bell className="text-brand size-8 stroke-1" />,
              },
              {
                title: "Calendar integration",
                description:
                  "See your tasks alongside your existing calendar events",
                icon: <CalendarClock className="text-brand size-8 stroke-1" />,
              },
              {
                title: "Tags & categories",
                description: "Add context to tasks for better organization",
                icon: <Tag className="text-brand size-8 stroke-1" />,
              },
              {
                title: "Progress tracking",
                description: "Visualize your productivity with intuitive charts",
                icon: <CheckCircle2 className="text-brand size-8 stroke-1" />,
              },
              {
                title: "Collaboration tools",
                description:
                  "Share lists and assign tasks to family or team members",
                icon: <Share2 className="text-brand size-8 stroke-1" />,
              },
            ]}
          />
          <TestimonialsGrid
            items={[
              {
                name: "Sarah Johnson",
                role: "Busy Parent",
                text: "TodoPluto has transformed how I manage my family&apos;s schedule. I can easily track school activities, grocery lists, and household tasks all in one beautifully designed app.",
                image: "/avatars/sarah.jpg",
              },
              {
                name: "Marcus Lee",
                role: "Freelance Designer",
                text: "The clean interface and smart reminders help me stay on top of client deadlines. The ability to attach files to tasks is a game-changer for my project workflows.",
                image: "/avatars/marcin.jpg",
              },
            ]}
          />
          <TabsLeft
            title="See how TodoPluto works"
            description="Our intuitive workflow adapts to how you like to manage tasks, making productivity feel natural"
            defaultTab="create-tasks"
            tabs={[
              {
                value: "create-tasks",
                title: "Create tasks easily",
                description:
                  "Add new tasks in seconds with natural language input that automatically detects dates and priorities",
                icon: (
                  <ListChecks className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
                ),
                content: (
                  <MockupFrame size="small">
                    <Mockup type="responsive">
                      <Screenshot
                        srcLight="/app-light.png"
                        srcDark="/app-dark.png"
                        alt="TodoPluto creating tasks screenshot"
                        width={1248}
                        height={765}
                      />
                    </Mockup>
                  </MockupFrame>
                ),
              },
              {
                value: "organize",
                title: "Organize your way",
                description:
                  "Drag and drop tasks into custom lists, set priorities, or group by project",
                icon: <Tag className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />,
                content: (
                  <MockupFrame size="small">
                    <Mockup type="responsive">
                      <Screenshot
                        srcLight="/app-mail-light.png"
                        srcDark="/app-mail-dark.png"
                        alt="TodoPluto organization screenshot"
                        width={1248}
                        height={765}
                      />
                    </Mockup>
                  </MockupFrame>
                ),
              },
              {
                value: "collaborate",
                title: "Share & collaborate",
                description:
                  "Share lists with others and work together on shared projects",
                icon: (
                  <Share2 className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
                ),
                content: (
                  <MockupFrame size="small">
                    <Mockup type="responsive">
                      <Screenshot
                        srcLight="/app-settings-light.png"
                        srcDark="/app-settings-dark.png"
                        alt="TodoPluto sharing screenshot"
                        width={1248}
                        height={765}
                      />
                    </Mockup>
                  </MockupFrame>
                ),
              },
            ]}
          />
          <SocialProof
            title="Join thousands of organized, productive users"
            description="Here's what people are saying about how TodoPluto has transformed their productivity"
            items={[
              {
                name: "Jason Parker",
                username: "jparker",
                text: (
                  <>
                    <span className="text-brand">@TodoPluto</span> has completely
                    changed how I manage my day. The UI is beautiful and the
                    reminders actually work for my schedule!
                  </>
                ),
                image: "/avatars/fabrizio.jpg",
                url: "https://twitter.com/example",
              },
              {
                name: "Emma Rodriguez",
                username: "emmarod",
                text: (
                  <>
                    Been using <span className="text-brand">@TodoPluto</span> for
                    3 months and my productivity has skyrocketed. The ability to
                    quickly organize tasks by context is brilliant.
                  </>
                ),
                image: "/avatars/darius.jpg",
                url: "https://twitter.com/example",
              },
              {
                name: "Tyler Wilson",
                username: "tylerwilson",
                text: (
                  <>
                    Finally found a todo app that works the way I think!{" "}
                    <span className="text-brand">@TodoPluto</span> feels like it
                    was designed specifically for my brain.
                  </>
                ),
                image: "/avatars/felix.jpg",
                url: "https://twitter.com/example",
              },
              {
                name: "Priya Sharma",
                username: "priya_s",
                text: (
                  <>
                    <span className="text-brand">@TodoPluto</span> is the perfect
                    blend of simplicity and power. Love how I can go from basic
                    lists to complex project management.
                  </>
                ),
                image: "/avatars/olivia.jpg",
                url: "https://twitter.com/example",
              },
              {
                name: "Noah Chen",
                username: "noahc",
                text: (
                  <>
                    The offline mode in{" "}
                    <span className="text-brand">@TodoPluto</span> is a lifesaver
                    during my commute. I can organize my entire day without
                    worrying about connection issues.
                  </>
                ),
                image: "/avatars/esme.jpg",
                url: "https://twitter.com/example",
              },
              {
                name: "Mia Jackson",
                username: "miajacks",
                text: (
                  <>
                    Sharing grocery lists with my partner through{" "}
                    <span className="text-brand">@TodoPluto</span> has eliminated
                    so many miscommunications. Best feature ever!
                  </>
                ),
                image: "/avatars/kai.jpg",
                url: "https://twitter.com/example",
              },
            ]}
          />
          <FAQ
            title="Frequently Asked Questions"
            items={[
              {
                question: "Is TodoPluto free to use?",
                answer: (
                  <>
                    <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                      TodoPluto offers a free version with all the essential
                      features for basic task management. For advanced features
                      like unlimited collaborators, file attachments, and priority
                      support, we offer affordable premium plans.
                    </p>
                  </>
                ),
              },
              {
                question: "Does TodoPluto work offline?",
                answer: (
                  <>
                    <p className="text-muted-foreground mb-4 max-w-[600px]">
                      Yes! TodoPluto is designed to work seamlessly offline. You
                      can create, edit, and complete tasks without an internet
                      connection, and everything will sync automatically when
                      you&apos;re back online.
                    </p>
                  </>
                ),
              },
              {
                question: "Can I share my todo lists with others?",
                answer: (
                  <>
                    <p className="text-muted-foreground mb-4 max-w-[580px]">
                      Absolutely! TodoPluto makes it easy to share lists with
                      family members, friends, or colleagues. You can control who
                      has view-only or edit permissions for each shared list.
                    </p>
                  </>
                ),
              },
              {
                question: "How does TodoPluto handle recurring tasks?",
                answer: (
                  <>
                    <p className="text-muted-foreground mb-4 max-w-[580px]">
                      TodoPluto offers flexible recurring task options. Set tasks
                      to repeat daily, weekly, monthly, or on custom schedules.
                      You can also create rules like &quot;every weekday&quot; or
                      &quot;first Monday of the month.&quot;
                    </p>
                  </>
                ),
              },
              {
                question: "Is my data secure with TodoPluto?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[580px]">
                    We take data security seriously. TodoPluto uses
                    industry-standard encryption to protect your data, and we
                    never share your personal information with third parties. Your
                    tasks and personal data belong to you.
                  </p>
                ),
              },
              {
                question: "Can I import tasks from other apps?",
                answer: (
                  <>
                    <p className="text-muted-foreground mb-4 max-w-[580px]">
                      Yes! TodoPluto supports importing tasks from popular task
                      management apps like Todoist, Wunderlist, and Apple
                      Reminders. Our easy migration tool ensures you won&apos;t
                      lose any of your existing tasks when switching to TodoPluto.
                    </p>
                  </>
                ),
              },
            ]}
          />
          <CTA
            title="Get organized with TodoPluto today"
            buttons={[
              {
                href: "#",
                text: "Download for iOS",
                variant: "default",
              },
              {
                href: "#",
                text: "Download for Android",
                variant: "glow",
              },
            ]}
          />
        </main>
        <Footer
          logo={<PlutoLogo className="text-foreground dark:text-white" />}
          columns={[
            {
              title: "Product",
              links: [
                { text: "Features", href: "#" },
                { text: "Pricing", href: "#" },
                { text: "Premium", href: "#" },
              ],
            },
            {
              title: "Resources",
              links: [
                { text: "User Guide", href: "#" },
                { text: "Help Center", href: "#" },
                { text: "Productivity Tips", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { text: "About", href: "#" },
                { text: "Blog", href: "#" },
                { text: "Contact", href: "#" },
              ],
            },
          ]}
          copyright="© 2023 TodoPluto. All rights reserved."
        />
      </div>
    );
  }
  