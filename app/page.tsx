import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  DatabaseZap,
  MailCheck,
  MousePointerClick,
  Sparkles,
  Workflow,
} from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "AI Website UX Audit",
    description:
      "Turned qualitative observations, page screenshots, and customer friction points into a prioritised CRO improvement backlog.",
    metric: "CRO roadmap",
    icon: MousePointerClick,
  },
  {
    title: "Lifecycle Email Refresh",
    description:
      "Mapped CRM journeys, tightened segmentation logic, and rewrote campaign messaging for clearer ecommerce conversion moments.",
    metric: "CRM strategy",
    icon: MailCheck,
  },
  {
    title: "Marketing Data Snapshot",
    description:
      "Used AI-assisted analysis to translate channel, sales, and customer data into weekly actions for growth teams.",
    metric: "Insight workflow",
    icon: BarChart3,
  },
  {
    title: "AI Workflow Library",
    description:
      "Built reusable prompts and operating checklists for merchandising, competitor research, landing pages, and reporting.",
    metric: "Repeatable systems",
    icon: Workflow,
  },
];

const skills = [
  "AI-assisted research",
  "Ecommerce CRO",
  "CRM and lifecycle email",
  "Customer journey mapping",
  "Marketing analytics",
  "Prompt design",
  "Workflow automation",
  "Landing page optimisation",
  "Content strategy",
  "Stakeholder communication",
  "Experiment planning",
  "Commercial storytelling",
];

const workflowSteps = [
  "Collect ecommerce, campaign, and customer context",
  "Use AI to structure patterns, risks, and opportunity areas",
  "Translate findings into prioritised actions and test ideas",
  "Create reporting outputs that teams can reuse every week",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          AI Growth Portfolio
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a className="transition hover:text-foreground" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-foreground" href="#case-study">
            Case Study
          </a>
          <a className="transition hover:text-foreground" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="relative px-6 pb-20 pt-12 sm:pt-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge className="border-accent/30 bg-white/70 text-foreground">
              Marketing, AI workflows, ecommerce growth
            </Badge>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Marketing professional building AI-powered ecommerce and growth
              workflows.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              I combine commercial marketing experience with practical AI
              systems: sharper customer journeys, faster insight generation,
              better CRM campaigns, and conversion-focused ecommerce
              improvements.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#projects">
                  View projects <ArrowUpRight size={17} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact me</a>
              </Button>
            </div>
          </div>

          <Card className="relative overflow-hidden border-foreground/10 bg-white/78 p-5 shadow-soft backdrop-blur">
            <div className="glass-line absolute left-0 top-0 h-px w-full" />
            <div className="rounded-md border border-border bg-background/80 p-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Growth operating system
                  </p>
                  <p className="mt-1 font-medium">AI-assisted workflow map</p>
                </div>
                <Sparkles className="text-accent" size={22} />
              </div>
              <div className="grid gap-3 py-5">
                {[
                  ["Research", "Customer reviews, page data, competitors"],
                  ["Analyse", "Patterns, friction, segmentation, intent"],
                  ["Prioritise", "CRO tests, CRM journeys, content actions"],
                  ["Ship", "Briefs, reports, experiments, workflows"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[6.5rem_1fr] items-start gap-3 rounded-md border border-border bg-white p-3"
                  >
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-sm leading-6 text-muted-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["CRO", "CRM", "AI Ops"].map((item) => (
                  <div
                    key={item}
                    className="rounded-md bg-foreground px-3 py-4 text-center text-sm font-medium text-background"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <MotionSection id="projects" className="px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Project showcase"
          title="Practical AI work for marketing teams"
          description="A portfolio designed around the roles you are targeting: AI marketing, AI workflow operations, and ecommerce growth."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="group bg-white/78 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-muted text-foreground">
                  <Icon size={21} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 text-sm font-medium text-accent">
                  {project.metric}
                </div>
              </Card>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection id="case-study" className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Badge>Featured case study</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI-assisted website UX and CRO optimisation
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              A structured conversion review for an ecommerce website, combining
              user journey thinking, AI-assisted page analysis, and commercial
              prioritisation.
            </p>
          </div>
          <Card className="bg-white/78 p-6 shadow-soft">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Challenge", "Visitors were reaching key product pages but the path to purchase lacked clarity and confidence."],
                ["Approach", "Reviewed page hierarchy, copy, trust signals, calls to action, and customer objections with AI-supported synthesis."],
                ["Output", "Created a prioritised CRO backlog with test hypotheses, page recommendations, and measurement notes."],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-border bg-background/70 p-5">
              <p className="text-sm font-semibold">Example recommendations</p>
              <div className="mt-4 grid gap-3">
                {[
                  "Clarify above-the-fold value proposition and product differentiation.",
                  "Strengthen purchase confidence with delivery, returns, reviews, and guarantee messaging.",
                  "Simplify page hierarchy so the next action is obvious on mobile and desktop.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card className="bg-foreground p-7 text-background shadow-soft">
            <MailCheck className="text-accent-foreground" size={28} />
            <h2 className="mt-7 text-3xl font-semibold tracking-tight">
              CRM and email optimisation
            </h2>
            <p className="mt-4 leading-7 text-background/72">
              Designed lifecycle improvements across welcome, browse, abandoned
              basket, post-purchase, and reactivation journeys. The work focuses
              on clearer segmentation, sharper messaging, and campaign logic that
              supports ecommerce revenue without overwhelming the customer.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Lifecycle map", "Segmentation plan", "Email copy refresh", "Testing priorities"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/12 bg-white/7 px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </Card>

          <Card className="bg-white/78 p-7 shadow-soft">
            <DatabaseZap className="text-accent" size={28} />
            <h2 className="mt-7 text-3xl font-semibold tracking-tight">
              AI-assisted data analysis and workflow efficiency
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A repeatable way to move from scattered marketing inputs to clear
              actions. The goal is not just faster analysis, but better team
              rhythm: consistent briefs, cleaner reporting, and decisions that
              connect to customer behaviour.
            </p>
            <div className="mt-7 space-y-3">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-md border border-border bg-background/70 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </MotionSection>

      <MotionSection id="skills" className="px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Marketing judgment, upgraded with AI execution"
          description="The positioning is intentionally practical: enough strategy to be credible, enough workflow detail to show you can create value quickly."
        />
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} className="bg-white px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="contact" className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-border bg-white/78 p-7 shadow-soft md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge>Contact</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Open to AI marketing, ecommerce growth, and workflow roles.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Replace the placeholder email and LinkedIn below with your real
              details when you are ready to share the portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild>
              <a href="mailto:your.email@example.com">
                Email me <ArrowUpRight size={17} />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={17} />
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>

      <footer className="px-6 py-10 text-center text-sm text-muted-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span>AI Growth Portfolio</span>
          <span>Built with Next.js, Tailwind CSS, shadcn-style UI, and Framer Motion.</span>
        </div>
      </footer>
    </main>
  );
}
