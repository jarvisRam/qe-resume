// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for the home page, résumé and shared profile data.
// Case-study detail content (the 12-entry data object) lives in
// `caseStudies.ts` — copied verbatim from the Nocturne design handoff.
// ─────────────────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summaryShort: string; // meta description
  links: Link[];
};

export const profile: Profile = {
  name: "Sriram Venkataraman",
  title: "Lead / Staff Quality Engineer",
  location: "Edinburgh, UK",
  email: "sriram20mail@gmail.com",
  summaryShort: "I build the systems other engineers test through.",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/SriramVenkataramanlkd" }],
};

export const hero = {
  kicker: "whoami — Lead / Staff Quality Engineer · Edinburgh, UK",
  nameLines: ["Sriram", "Venkataraman"],
  tagline: "I build the systems other engineers test through.",
  intro:
    "I make testing faster, more reliable, and part of how teams build — not a downstream gate. I design the platforms, automation and CI that let engineers ship with confidence, turning quality from an organisational bottleneck into a force multiplier across every team.",
  showHeadshot: false, // no headshot asset supplied yet — type-only hero
};

export type ImpactMetric = { value: string; label: string };

export const impactMetrics: ImpactMetric[] = [
  { value: "~70%", label: "faster native CI test runs" },
  { value: "<2%", label: "perf-regression false positives" },
  { value: "−80%", label: "test-build time (180m → 30m)" },
  { value: "20+", label: "teams' quality lifted org-wide" },
];

export type WorkRow = {
  index: string;
  slug: string;
  title: string;
  desc: string;
  metric: string;
  era: "fanduel" | "earlier";
};

export const workRows: WorkRow[] = [
  {
    index: "01",
    slug: "perf-detector",
    title: "Performance Regression Detector",
    desc: "Statistical changepoint detection that catches perf regressions in CI before they ship.",
    metric: "<2% noise",
    era: "fanduel",
  },
  {
    index: "02",
    slug: "ai-test-automation",
    title: "AI-Driven Test Automation",
    desc: "Tests authored in plain English across Detox, Cypress and Appium — not imperative code.",
    metric: "wix-pilot",
    era: "fanduel",
  },
  {
    index: "03",
    slug: "ci-acceleration",
    title: "CI Acceleration",
    desc: "Cut native test runs ~70% and test-build time ~80% — without touching test code.",
    metric: "~70% faster",
    era: "fanduel",
  },
  {
    index: "04",
    slug: "native-e2e",
    title: "Cross-Platform Native E2E",
    desc: "A unified iOS + Android E2E suite covering core betting flows, with visual regression.",
    metric: "58 specs",
    era: "fanduel",
  },
  {
    index: "05",
    slug: "quality-maturity-model",
    title: "Quality Maturity Model & Docs",
    desc: "Defined the shift-left testing pillars, layers and maturity model the org tests by.",
    metric: "40+ docs",
    era: "fanduel",
  },
  {
    index: "06",
    slug: "sonarcloud-quality-gates",
    title: "SonarCloud Quality Gates",
    desc: "PR-blocking gates for coverage, readability, maintainability and security across the codebase.",
    metric: "55% → 70%",
    era: "fanduel",
  },
  {
    index: "07",
    slug: "testability",
    title: "Launch-Argument Testability",
    desc: "Runtime environment switching, mock injection and testIDs that survive production builds.",
    metric: "DX & ROI",
    era: "fanduel",
  },
  {
    index: "08",
    slug: "qa-env-smoke",
    title: "QA Environment Smoke Framework",
    desc: "Turned 6 months of silent QA-environment failures into automated, alerted detection.",
    metric: "76+ issues",
    era: "fanduel",
  },
  {
    index: "09",
    slug: "test-infra",
    title: "Build-Cache & AI Test Infrastructure",
    desc: "Terraform-provisioned S3 build cache and Bedrock access powering CI, owned as shared infra.",
    metric: "Terraform",
    era: "fanduel",
  },
  {
    index: "10",
    slug: "accessibility-automation",
    title: "Accessibility Regression Automation",
    desc: "A Protractor framework that automated accessibility regression and saved ~40% of the effort.",
    metric: "−40% effort",
    era: "earlier",
  },
  {
    index: "11",
    slug: "api-framework",
    title: "API Test Framework & Assertion Library",
    desc: "A ReadyAPI framework with a custom Groovy validation library, reused across E2E testing.",
    metric: "Groovy",
    era: "earlier",
  },
  {
    index: "12",
    slug: "test-leadership",
    title: "Offshore Test Leadership & Enablement",
    desc: "Led a 7-person offshore team and seeded automation and best-practice standards.",
    metric: "7 engineers",
    era: "earlier",
  },
];

export const aiSection = {
  heading: "Not a consumer of autocomplete — I design agentic systems other engineers reuse.",
  intro:
    "I work in a plan-and-implement flow: have the AI produce a reviewed plan/spec first, then implement against it — keeping changes deliberate and verifiable.",
  subtext:
    "I build agentic systems — reusable agent skills that compress the slow, repetitive parts of quality engineering: triaging performance-change reports, debugging flaky acceptance tests, reviewing diffs for risk. Work that used to eat hours becomes a reviewed, verifiable step. I run a plan-and-implement flow — the AI drafts a spec I review, then implements against it — so speed never costs control.",
  cards: [
    {
      kicker: "Agent skill · reused org-wide",
      title: "Performance Impact Review",
      body: "A multi-agent skill that turns a raw change-point report into a validated review — pinpointing the commit range behind each regression, analysing the diff, adversarially verifying findings, and producing an actionable remediation plan.",
    },
    {
      kicker: "Agent skill · reused org-wide",
      title: "Acceptance-Test Debugger",
      body: "Diagnoses failing native acceptance tests end to end — environment diagnostics, build/test config alignment, failure-artifact analysis — and self-updates its known-error playbook as new issues are solved.",
    },
  ],
  dailyTools: ["Claude / Claude Code", "Cursor", "GitHub Copilot"],
  waysOfWorking: [
    "Plan-and-implement workflows",
    "Multi-agent orchestration",
    "Reusable agent skills",
    "NL test automation",
  ],
};

export type Experience = {
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

// Home-page timeline — matches Portfolio.dc.html exactly.
export const experiences: Experience[] = [
  {
    role: "Lead Quality Engineer — Sportsbook · FanDuel",
    period: "2022 – Present",
    location: "Edinburgh, UK",
    bullets: [
      "Own the test strategy and Quality Maturity Model for the Sportsbook RN/web monorepo across iOS, Android and web.",
      "Built a Python E-Divisive + Datadog perf-regression detector gating CI with <2% false-positive noise and Slack alerting.",
      "Pioneered AI-driven E2E by integrating wix-pilot — tests authored in natural language over a reusable prompt library.",
      "Cut native test runs ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing + a hybrid git-aware cache, backed by Terraform S3 + Bedrock infra.",
      "Introduced SonarCloud PR quality gates (coverage, readability, maintainability, security) that lifted codebase coverage 55%→70% and cut duplication 45%→20%.",
    ],
  },
  {
    role: "Senior Quality Engineer — Sportsbook · FanDuel",
    period: "2021 – 2022",
    location: "Edinburgh, UK",
    bullets: [
      "Implemented automation frameworks across iOS, Android and web — Cypress for web, Appium for iOS and Android.",
      "Authored the Detox acceptance framework, screen-object patterns and onboarding docs, and stood up the foundational CI test pipelines and Datadog observability later work built on.",
    ],
  },
  {
    role: "Lead / Senior Test Analyst · Cognizant",
    period: "Jul 2017 – 2021",
    location: "Edinburgh, UK",
    bullets: [
      "Built UI and API automation frameworks from scratch (Protractor–Cucumber–TypeScript; ReadyAPI + Groovy) and the Azure DevOps pipelines to run them — Royal London, Resonate Tech.",
      "Delivered an accessibility-regression framework that cut effort ~40%, plus a UI error-handling/mocking framework.",
      "Authored Gherkin standards adopted across Test/BA/Dev and trained clients and peers to scale automation.",
    ],
  },
  {
    role: "Offshore Test Lead / Senior Test Analyst · Cognizant",
    period: "Jan 2010 – Jul 2017",
    location: "Chennai & Coimbatore, India",
    bullets: [
      "Led a 7-member offshore test team for Voya Financial — capacity planning, cross-module KT and status reporting across five modules.",
      "Kick-started automation with a Selenium/TestNG POC and Excel-macro tooling; delivered functional/regression testing for Travelers and Lincoln Financial.",
    ],
  },
];

// Résumé timeline — matches Resume.dc.html exactly (condensed titles, one
// extra bullet on the lead role folding in native E2E + testability, since
// the résumé has no separate case-study pages to carry that detail).
export const resumeExperiences: Experience[] = [
  {
    role: "Lead Quality Engineer — Sportsbook · FanDuel",
    period: "2022 – Present",
    location: "Edinburgh, UK",
    bullets: [
      "Own the test strategy and Quality Maturity Model (pillars, layers, levels) for the Sportsbook RN/web monorepo across iOS, Android and web.",
      "Built a Python E-Divisive + Datadog performance-regression detector gating CI with <2% false-positive noise and Slack alerting.",
      "Pioneered AI-driven E2E by integrating wix-pilot — tests authored in natural language over a reusable prompt library, not imperative code.",
      "Cut native test runs ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing + a hybrid git-aware cache, on Terraform S3 + Bedrock infra.",
      "Built cross-platform native E2E (Appium/WebdriverIO + Detox, Percy visual) and launch-argument testability — runtime env switching, mock injection, prod-safe testIDs.",
      "Introduced SonarCloud PR quality gates (coverage, readability, maintainability, security) — codebase coverage 55%→70%, duplication 45%→20%.",
    ],
  },
  {
    role: "Senior Quality Engineer — Sportsbook · FanDuel",
    period: "2021 – 2022",
    location: "Edinburgh, UK",
    bullets: [
      "Implemented automation frameworks across iOS, Android and web — Cypress for web, Appium for iOS and Android.",
      "Authored the Detox acceptance framework, screen-object patterns and onboarding docs, and stood up the foundational CI test pipelines and Datadog observability later work built on.",
    ],
  },
  {
    role: "Lead / Senior Test Analyst — Automation · Cognizant",
    period: "Jul 2017 – 2021",
    location: "Edinburgh, UK",
    bullets: [
      "Built UI and API automation frameworks from scratch (Protractor–Cucumber–TypeScript; ReadyAPI + Groovy assertion library) and the Azure DevOps pipelines to run them — Royal London, Resonate Tech.",
      "Delivered an accessibility-regression framework that cut effort ~40%, plus a UI error-handling/mocking framework.",
      "Authored Gherkin standards adopted across Test/BA/Dev and trained clients and peers to scale automation.",
    ],
  },
  {
    role: "Offshore Test Lead / Senior Test Analyst · Cognizant",
    period: "Jan 2010 – Jul 2017",
    location: "Chennai & Coimbatore, India",
    bullets: [
      "Led a 7-member offshore test team for Voya Financial — capacity planning, cross-module KT and status reporting across five modules.",
      "Kick-started automation with a Selenium/TestNG POC and Excel-macro tooling; delivered functional/regression testing for Travelers and Lincoln Financial.",
    ],
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Test Strategy & Architecture",
    items: [
      "Quality Maturity Model",
      "Shift-left / defect prevention",
      "Test pyramid & strategy",
      "Contract testing",
      "Screen-object patterns",
      "BDD / Gherkin",
      "Accessibility",
      "Mentoring & enablement",
    ],
  },
  {
    group: "Mobile & E2E Automation",
    items: ["Detox (React Native)", "Appium / WebdriverIO", "Maestro", "wix-pilot", "Percy visual", "Cypress", "Jest / RTL", "BrowserStack"],
  },
  {
    group: "Performance & Reliability",
    items: [
      "Perf regression (E-Divisive)",
      "Baseline / anomaly detection",
      "iOS / Android perf instrumentation",
      "Datadog",
      "Sentry",
      "SLOs & error budgets",
    ],
  },
  {
    group: "CI/CD & Infrastructure",
    items: ["Buildkite", "GitHub Actions", "Jest sharding", "Build caching (hybrid iOS)", "Terraform / AWS", "Azure DevOps", "Docker"],
  },
  {
    group: "Web & API Automation",
    items: ["Protractor", "Cucumber", "Selenium", "SpecFlow", "ReadyAPI", "Postman", "Mountebank / WireMock"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Bash", "C#", "Groovy", "SQL"],
  },
];

// Compact "label — description" form for the résumé's Core skills block.
export const resumeSkillGroups: { label: string; body: string }[] = [
  {
    label: "Strategy & architecture",
    body: "Quality Maturity Model, shift-left / defect prevention, test pyramid, contract testing, screen-object patterns, BDD/Gherkin, accessibility, mentoring.",
  },
  {
    label: "Mobile & E2E",
    body: "Detox (RN), Appium/WebdriverIO, Maestro, wix-pilot, Percy, Cypress, Jest/RTL, BrowserStack.",
  },
  {
    label: "Performance & reliability",
    body: "E-Divisive regression detection, baseline/anomaly detection, iOS/Android perf instrumentation, Datadog, Sentry, SLOs.",
  },
  {
    label: "CI/CD & infra",
    body: "Buildkite, GitHub Actions, Jest sharding, hybrid iOS build caching, Terraform/AWS (S3, IAM, Bedrock), Azure DevOps, Docker.",
  },
  {
    label: "Web & API",
    body: "Protractor, Cucumber, Selenium, SpecFlow, ReadyAPI, Postman, Mountebank/WireMock.",
  },
  {
    label: "Languages",
    body: "TypeScript, JavaScript, Python, Bash, C#, Groovy, SQL.",
  },
];

export type PersonalProject = {
  slug: string;
  kicker: string;
  title: string;
  body: string;
  chips: string[];
  url?: string;
};

export const personalProjectsIntro =
  "Side projects built for fun, learning and the people I love — from validating AI-first development to keeping my daughter entertained on long car rides.";

export const personalProjects: PersonalProject[] = [
  {
    slug: "scorebook",
    kicker: "Mobile app",
    title: "Scorebook App",
    body: 'A cross-platform sports score tracker built end-to-end with AI assistance to stress-test the "million-dollar single-person startup" claim. RN/Expo app + Node/Express API, Maestro flows, GitHub Actions CI.',
    chips: ["React Native", "Node", "Maestro"],
  },
  {
    slug: "flag-explorer",
    kicker: "Web game ↗",
    title: "Flag Explorer Game",
    body: "A multi-level flag quiz with country facts, built for my 8-year-old daughter's iPad. Progressive difficulty, right answers unlock a fact. Deliberately zero-framework vanilla HTML/CSS/JS.",
    chips: ["HTML", "CSS", "JS"],
    url: "https://flag-explorer.vercel.app",
  },
  {
    slug: "birthday-rsvp",
    kicker: "Web app ↗",
    title: "Birthday RSVP & Memory Share",
    body: "RSVP + allergy capture before the party, photo/video sharing from host to guests after. Built for my daughter's 9th birthday in her favourite theme — vanilla HTML/CSS/JS bundled with Vite.",
    chips: ["Vanilla JS", "Vite", "Vercel"],
    url: "https://harshini-birthday-invite.vercel.app",
  },
  {
    slug: "cricbuds",
    kicker: "Full-stack ↗",
    title: "CricBuds Prediction Game",
    body: "A season-long score-prediction game for our Edinburgh cricket friends group — leaderboard and banter between match days. Next.js, Neon Postgres, Drizzle ORM, live all season.",
    chips: ["Next.js", "Neon", "Drizzle"],
    url: "https://cricbuds.vercel.app",
  },
];

export const contact = {
  kicker: 'echo "let\'s talk quality"',
  heading: "Building something worth testing well?",
  credit: "Sriram Venkataraman · Lead / Staff Quality Engineer · Edinburgh, UK",
};

// ── Résumé-only copy (Resume.dc.html) ──────────────────────────────────
export const resumeSummary =
  "Lead Quality Engineer with 16 years across test automation, performance engineering and CI/CD — the last five building the testing platform the whole FanDuel Sportsbook org depends on. I design the systems other engineers test through: AI-driven test automation, statistical performance-regression detection, cross-platform native E2E, and CI I made ~70% faster. A shift-left practitioner who prevents defects rather than catches them, and a force multiplier bridging capability-building and feature teams to raise quality maturity — engineering quality into how teams build rather than gating them from the outside.";

export const resumeMetrics: ImpactMetric[] = [
  { value: "~70%", label: "faster CI test runs" },
  { value: "<2%", label: "perf-regression noise" },
  { value: "−80%", label: "test-build time" },
  { value: "20+", label: "teams' quality lifted" },
];

export const resumeAiParagraph = {
  before: "Design agentic solutions other engineers reuse, working plan-and-implement (spec-first). Daily: Claude / Claude Code, Cursor, Copilot. Authored reusable org-wide agent skills — a multi-agent ",
  skillOne: "Performance Impact Review",
  mid: " (change-point report → validated, remediation-ready review) and an ",
  skillTwo: "Acceptance-Test Debugger",
  after: " that self-updates its known-error playbook.",
};
