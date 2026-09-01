// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Edit this file to update every surface: home page, /work/* detail pages,
// and the downloadable /resume PDF. Nothing else needs to change.
//
// Positioning model — the profile argues on two axes at once, because the
// target roles split between hands-on Staff/Principal IC and Head of Quality:
//   - what I BUILD   → frameworks, CI, agentic quality  (`whatIBring`)
//   - what I GOVERN  → gates, exit criteria, 21 teams   (`scope`, `keyImpact`)
// Dropping either one weakens the profile for one of the two tracks.
//
// Density model:
//   - `impact[]`             → rich bullets on the website detail pages
//   - `pdfSummary`           → one compressed line on the PDF
//   - experiences `groups[]` → concise, shared by website timeline + PDF
// ─────────────────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Metric = { label: string; value: string };

// A number that carries its own "so what". The consequence clause is the
// point: the same figures were already on the site and read as trivia. What
// a number bought is what a hiring manager reacts to.
export type ImpactMetric = { value: string; label: string; consequence: string };

// Groups the accomplishment cards on the home page so they don't all sit at
// equal weight. Keep in sync with `pillars` below.
export type PillarId =
  | "frameworks"
  | "test-layers"
  | "ai"
  | "ci-signal"
  | "governance";

export const pillars: { id: PillarId; label: string; blurb: string }[] = [
  {
    id: "frameworks",
    label: "Framework ownership, end to end",
    blurb:
      "Designing, building and evolving TypeScript automation frameworks engineers actually adopt — page/screen-object architecture, conventions, reusable helpers, onboarding docs and the CI that runs them — across web, native and API layers.",
  },
  {
    id: "ai",
    label: "AI-augmented & agentic quality",
    blurb:
      "Reusable multi-agent skills that triage regressions and diagnose failing suites, with bounded responsibility, isolated execution and human review — not prompting an IDE to generate test code. Natural-language test authoring over a reusable prompt library.",
  },
  {
    id: "test-layers",
    label: "Test-layer strategy & coverage",
    blurb:
      "Defining which layer a test belongs at — testing pyramid as the default, trophy and honeycomb where component or service architecture warrants — and driving new coverage into the right layer instead of defaulting to E2E.",
  },
  {
    id: "ci-signal",
    label: "CI speed & production signal",
    blurb:
      "Test parallelisation, build sharing and git-aware caching to keep CI inside the developer loop; statistical change-point detection, visual regression and environment smoke testing to keep the signal coming back trustworthy.",
  },
  {
    id: "governance",
    label: "Quality governance & influence at scale",
    blurb:
      "Quality gates, exit criteria and release-readiness signals squads ship against; testing-efficiency audits, a QA Community of Practice, and adoption earned by embedding with teams rather than mandating from a distance.",
  },
];

export type Profile = {
  name: string;
  title: string;
  titleQualifier: string; // keyword-bearing subtitle; recruiters filter on these terms
  location: string;
  remote: string;
  workAuthorisation: string; // UK recruiters drop ambiguous right-to-work silently
  email: string;
  phone: string; // rendered on the PDF only, never on the live site
  summaryShort: string; // hero positioning — build *and* govern, in two sentences
  summary: string; // full positioning statement (PDF "Professional Summary")
  impactMetrics: ImpactMetric[]; // hero band: numbers that carry their consequence
  scope: { line: string; governance: string }; // the Head-of-Quality axis
  website: string;
  links: Link[];
};

export type SkillGroup = { group: string; items: string[] };

// Bullets grouped under optional sub-headings. The FanDuel Lead role covers
// four distinct kinds of work; a flat list of nine bullets buried that.
export type BulletGroup = { group?: string; items: string[] };

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  groups: BulletGroup[];
};

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

// Label + prose. Used by both "What I bring" (capabilities) and "Key impact"
// (outcomes) — same shape, different question answered.
export type CapabilityBlock = { label: string; body: string };

export type Accomplishment = {
  slug: string;
  era?: "fanduel" | "earlier"; // defaults to fanduel; "earlier" = pre-FanDuel
  pillar: PillarId;
  aiRelated?: boolean; // true → also shown in the AI engineering section
  title: string;
  tagline: string;
  tags: string[];
  metrics: Metric[];
  problem: string;
  approach: string[];
  impact: string[]; // website detail
  pdfSummary: string; // one compressed line for the ATS PDF
  stack: string[];
  links?: Link[];
};

export const profile: Profile = {
  name: "Sriram Venkataraman",
  title: "Lead / Staff Quality Engineer",
  titleQualifier: "Test Automation Frameworks & AI Quality Engineering",
  location: "Edinburgh, UK",
  remote: "Remote (GMT)",
  workAuthorisation: "Full right to work in the UK — no sponsorship required",
  email: "sriram20mail@gmail.com",
  phone: "+44 7459 606294",
  summaryShort:
    "I build the TypeScript automation frameworks and CI that 21 engineering teams ship against — web, iOS and Android — and define the quality gates, exit criteria and release-readiness signals they ship to. I set the test-layer model teams work to, so coverage lands at the cheapest layer that can catch the defect and E2E stays on critical journeys.",
  summary:
    "Lead quality engineer with 16 years in the discipline, the last five building the TypeScript automation frameworks, CI pipelines and quality gates that 21 engineering teams ship against across web, iOS and Android — Cypress on web, WebdriverIO/Appium and Detox on native, Postman and SuperTest on the API layer. I define the test-layer model teams work to, using the testing pyramid as the default shape and the trophy or honeycomb where the architecture warrants it, so coverage lands where it is cheapest and E2E stays on critical journeys. I own the test strategy, quality gates, exit criteria and release-readiness signals for 21 teams across 3 pillars and 3 geographic locations with no direct reports — adoption earned by embedding with squads, running a QA Community of Practice and testing-efficiency audits, and giving go/no-go input at release time. Hands-on with agentic quality workflows rather than AI code generation alone: reusable multi-agent skills with bounded responsibility and human review, plus natural-language test authoring across web and native.",
  impactMetrics: [
    {
      value: "180m → 30m",
      label: "test build time",
      consequence:
        "CI stays inside the developer feedback loop — not a step engineers learn to route around.",
    },
    {
      value: "55% → 70%",
      label: "code coverage, with duplication 45% → 20%",
      consequence:
        "Earned at unit and component level, not by adding more E2E.",
    },
    {
      value: "<2%",
      label: "false positives on a CI performance gate",
      consequence:
        "Alerts stayed trusted and acted on instead of muted — the difference between a gate and noise.",
    },
  ],
  scope: {
    line: "21 engineering teams · 3 product pillars · 3 locations — no direct reports",
    governance:
      "Quality gates, exit criteria and release-readiness signals · testing-efficiency audits · QA Community of Practice · embedded with squads, not mandating from a distance.",
  },
  website: "https://sriramvenkataraman-portfolio.vercel.app",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/SriramVenkataramanlkd" }],
};

// What I can do for you. Answers "what would you bring here", which the
// accomplishment cards alone never state — they only show what was done.
export const whatIBring: CapabilityBlock[] = [
  {
    label: "Framework ownership, end to end",
    body: "Designing, building and evolving TypeScript automation frameworks engineers actually adopt — page/screen-object architecture, conventions, reusable helpers, onboarding docs and the CI that runs them — across web, native and API layers.",
  },
  {
    label: "AI-augmented and agentic quality workflows",
    body: "Reusable multi-agent skills that triage regressions and diagnose failing suites, with clear responsibilities, isolated execution and human review — not simply prompting an IDE to generate test code. Natural-language test authoring over a reusable prompt library.",
  },
  {
    label: "Pragmatic AI adoption in regulated environments",
    body: "Deterministic LLM caching for cost control and repeatability, false-positive discipline (sub-2% on a CI gate), least-privilege cloud access for model infrastructure, and human sign-off on anything that changes a repository.",
  },
  {
    label: "Test coverage strategy across test-layer models",
    body: "Defining which layer a test belongs at — testing pyramid as the default, trophy and honeycomb where component or service architecture warrants — and driving new coverage into the right layer instead of defaulting to E2E; coverage-gap audits and cross-layer coverage mapping.",
  },
  {
    label: "Unit, component, API and integration testing",
    body: "Jest and React Testing Library component tests, Postman and SuperTest API suites, contract testing, and service virtualisation against stubbed, containerised environments (Mountebank, WireMock, Docker).",
  },
  {
    label: "Quality gates that hold",
    body: "PR-blocking gates on coverage, maintainability, security and performance; exit criteria and release-readiness signals; actionable failure reporting rather than red builds teams ignore.",
  },
  {
    label: "CI fast enough that engineers keep it in the loop",
    body: "Test parallelisation and sharding, build sharing and git-aware caching, Terraform-provisioned AWS infrastructure — ~70% faster test runs and 180m→30m test builds.",
  },
  {
    label: "Quality observability and non-functional breadth",
    body: "Datadog, Sentry, SLOs and error budgets, statistical change-point detection for performance regressions; accessibility regression automation; security and reliability gates; POC-led tool evaluation before adoption.",
  },
  {
    label: "Influence without authority",
    body: "Coaching engineers on test design and the testing pyramid, running a QA Community of Practice, hiring quality engineers, and defending quality in go/no-go discussions across 21 teams.",
  },
];

// Outcomes. Every figure here was already on the old site and read as trivia —
// what changed is the clause after the dash saying what the number bought.
export const keyImpact: CapabilityBlock[] = [
  {
    label: "Rapid feedback enablement",
    body: "Cut native test runs ~70% and test-build time ~80% (180m→30m) through 4-way Buildkite/Jest sharding, build sharing and a hybrid git-aware cache — keeping CI inside the developer feedback loop rather than a step engineers learn to route around.",
  },
  {
    label: "Org-wide code quality lift",
    body: "Unit-test coverage across the codebase improved from 55% to 70% and duplication cut from 45% to 20% by introducing PR-blocking SonarCloud quality gates — coverage earned at unit and component level, not by adding more E2E.",
  },
  {
    label: "Performance regressions caught before they shipped",
    body: "A Python E-Divisive + Datadog change-point detector gating CI at under 2% false positives, so the alerts stayed trusted and acted on instead of being muted — the difference between a gate and noise.",
  },
  {
    label: "Systematic quality improvement at org scale",
    body: "One Quality Maturity Model adopted across 21 teams, 3 pillars and 3 geographic locations, giving every squad the same quality gates, exit criteria and release-readiness bar instead of 21 local interpretations — a consistent route to shipping faster without trading product quality for speed.",
  },
  {
    label: "Silent failures turned into automated signal",
    body: "A QA-environment smoke framework that surfaced 76+ recurring failures across five categories over six months — previously dependent on someone noticing.",
  },
  {
    label: "New AI capability introduced, not merely adopted",
    body: "Reusable multi-agent skills for performance triage and E2E failure diagnosis, now used beyond my own team, plus natural-language test authoring across web and native — lowering the cost of writing and maintaining coverage.",
  },
];

// Seven groups, down from twelve. Listing Postman and Bash at the same weight
// as change-point detection flattened a Staff profile into a tools inventory.
export const skills: SkillGroup[] = [
  {
    group: "Automation Frameworks & Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Bash",
      "SQL",
      "Cypress",
      "WebdriverIO",
      "Selenium WebDriver",
      "Protractor",
      "Detox",
      "Appium",
      "Maestro",
      "Jest / React Testing Library",
      "Cucumber / Gherkin (BDD)",
      "Page-object & screen-object architecture",
    ],
  },
  {
    group: "Test Strategy & Coverage",
    items: [
      "Testing pyramid, trophy and honeycomb models",
      "Test-layer rationalisation",
      "Coverage strategy & cross-layer coverage mapping",
      "Risk-based testing",
      "Shift-left / defect prevention",
      "Unit / component / API / integration testing",
      "Contract testing",
      "Test data strategy",
      "Exploratory testing",
      "Flaky-test detection",
    ],
  },
  {
    group: "AI & Agentic Quality Engineering",
    items: [
      "Claude / Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Multi-agent orchestration",
      "Authoring reusable agent skills",
      "Spec-first plan-and-implement workflows",
      "Human-in-the-loop agent design",
      "Natural-language test authoring (wix-pilot, cy.prompt)",
      "LLM prompt libraries",
      "Deterministic caching & cost control",
      "AWS Bedrock",
    ],
  },
  {
    group: "API & Service Testing",
    items: [
      "Postman",
      "SuperTest",
      "ReadyAPI",
      "REST API automation",
      "Mountebank",
      "WireMock",
      "Swagger-driven mocks",
      "Service virtualisation",
      "Stubbed & containerised pre-integration environments",
    ],
  },
  {
    group: "CI/CD, Cloud & Infrastructure",
    items: [
      "Buildkite",
      "GitHub Actions",
      "Jenkins",
      "Azure DevOps",
      "Git / GitHub",
      "Test parallelisation & Jest sharding",
      "Build caching",
      "PR quality gates",
      "Docker",
      "Terraform",
      "AWS (S3, IAM, Bedrock, Cognito)",
    ],
  },
  {
    group: "Quality Observability & Non-Functional",
    items: [
      "Datadog metrics & events",
      "Sentry",
      "SLOs & error budgets",
      "Statistical change-point detection (E-Divisive)",
      "Performance-regression detection & baseline validation",
      "k6 load testing",
      "Accessibility testing",
      "SonarCloud security, maintainability & coverage gates",
      "Reliability & smoke monitoring",
      "Visual regression (BrowserStack App Percy)",
      "Device-farm management",
    ],
  },
  {
    group: "Leadership & Ways of Working",
    items: [
      "Quality gates & exit criteria",
      "Release readiness / go-no-go",
      "3 Amigos & refinement",
      "Coaching & mentoring engineers",
      "POC-led tool evaluation",
      "QA Community of Practice",
      "Distributed & remote teams",
      "Test estimation & planning",
      "Defect management & triage",
      "Regulated & complex domains (financial services, insurance, betting, logistics)",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "FanDuel",
    role: "Lead Quality Engineer — Sportsbook",
    period: "2022 – Present",
    location: "Edinburgh, UK",
    groups: [
      {
        group: "Framework & CI engineering",
        items: [
          "Designed and evolved the TypeScript automation frameworks other squads build on — Cypress for Sportsbook web, WebdriverIO/Appium and Detox for iOS and Android (58 specs) — with page and screen-object architecture, reusable helpers, conventions and onboarding docs.",
          "Extended API-layer coverage with Postman collections and SuperTest suites run in CI, keeping service contracts verified below the UI rather than through E2E journeys.",
          "Cut test runtime ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing and a hybrid git-aware cache, on Terraform-provisioned AWS S3 with least-privilege IAM.",
          "Built launch-argument testability into the product (native Swift/Kotlin + React Native module) — runtime environment switching, mock injection, feature-flag overrides and test IDs in production builds — giving deterministic tests with zero rebuilds; reused by another product line.",
          "Extended that channel to carry feature-flag overrides that survive an Android deeplink relaunch, making deterministic flag-on/flag-off testing the standard across the acceptance and E2E suites.",
          "Built BrowserStack App Percy visual regression across a 10-device real-device matrix (iOS + Android) for a fast-moving home-page redesign — POC-selected tooling, delivered in ~5 weeks, adopted by 3 squads.",
          "Own the BrowserStack device-farm estate and the integration patterns other squads plug into, rather than each team standing up its own device-cloud access.",
          "Built a QA-environment smoke framework automating detection of 76+ recurring failures across five categories.",
        ],
      },
      {
        group: "Test-layer strategy, quality gates & coverage",
        items: [
          "Define the test-layer model squads work to — testing pyramid as the default shape, with trophy and honeycomb variants where component and service architecture warrants — and drive new automated coverage into the cheapest layer that can catch the defect rather than defaulting to E2E.",
          "Introduced SonarCloud PR-blocking quality gates (coverage, maintainability, readability, security) that lifted unit-test coverage 55%→70% and cut duplication 45%→20%, pulling coverage down the pyramid to unit and component level.",
          "Ran testing-efficiency audits across squads — coverage gaps, flaky-test patterns, tests sitting at the wrong layer, automation opportunities — and turned them into per-team remediation plans.",
          "Built a Python E-Divisive + Datadog change-point detector that gates CI on performance regressions with under 2% false-positive noise and Slack alerting, on quality observability instrumented in Datadog and Sentry with SLOs and error budgets.",
        ],
      },
      {
        group: "AI-augmented quality",
        items: [
          "Built reusable multi-agent skills used beyond my own team: a Performance Impact Review agent that traces a change-point report to the responsible commit range, analyses the diff, adversarially verifies its own findings and produces a remediation plan; and an Acceptance-Test Debugger that diagnoses failing E2E runs from environment, build config and failure artefacts, self-updating its known-error playbook.",
          "Designed agent workflows with bounded responsibility and human review — agents assist engineers and never merge their own changes.",
          "Ran the POC for and integrated natural-language test authoring (wix-pilot with Detox and Appium; Cypress cy.prompt) with a reusable prompt library and a custom handler forcing deterministic LLM cache hits to control cost and non-determinism.",
        ],
      },
      {
        group: "Strategy & influence",
        items: [
          "Own the test strategy and shift-left Quality Maturity Model (40+ documents) for 21 teams across 3 pillars and 3 locations with no direct reports — adoption earned by embedding with squads, running a QA Community of Practice and hands-on onboarding.",
          "Define the quality gates, exit criteria and release-readiness signals the Sportsbook apps ship against, give go/no-go input, and report quality status to senior leadership.",
          "Lead POC-driven tool evaluation for the org's testing stack, interview and hire quality engineers, and coach engineers on test design and the testing pyramid.",
        ],
      },
    ],
  },
  {
    company: "FanDuel",
    role: "Senior Quality Engineer — Sportsbook",
    period: "2021 – 2022",
    location: "Edinburgh, UK",
    groups: [
      {
        items: [
          "Authored the Detox acceptance-test framework from scratch — screen-object patterns, conventions and onboarding documentation — and stood up the foundational CI test pipelines and Datadog observability that every later capability was built on.",
          "Built and maintained Cypress E2E automation for Sportsbook web alongside the native suites, establishing the shared TypeScript conventions used across both.",
          "Introduced Postman-based API regression coverage to verify service behaviour independently of the UI.",
        ],
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Lead / Senior Test Analyst — Automation",
    period: "Jul 2017 – 2021",
    location: "Edinburgh, UK",
    groups: [
      {
        items: [
          "Built UI and API automation frameworks from scratch for Angular web applications in a microservices environment — Protractor–Cucumber in TypeScript, and ReadyAPI/Postman with a custom Groovy assertion library — plus the Azure DevOps pipelines that ran them (Royal London, Resonate Tech).",
          "Owned a programme-wide UI framework uplift: hardened reliability against flakiness and built failure-analysis reporting into the pipeline.",
          "Tested microservices against fully stubbed, containerised environments (Mountebank, WireMock, Swagger-driven mocks, Docker) before integration environments existed.",
          "Delivered a Protractor accessibility-regression framework in Azure CI/CD that cut accessibility regression effort ~40%, plus a UI error-mocking framework that made error paths automatable.",
          "Shifted testing left into refinement — static-tested requirements with the PO before stories entered the backlog, and wrote the Gherkin standards and CI/CD acceptance scenarios adopted across Test, BA and Dev.",
          "Trained client teams and peers in test automation and ran automation feasibility analysis and tool selection with business sign-off — widening who could contribute to the suites.",
          "Fixed minor application bugs with their accompanying unit tests, and diagnosed defects on integrated environments through Splunk log analysis.",
        ],
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Offshore Test Lead / Senior Test Analyst",
    period: "Jan 2010 – Jul 2017",
    location: "Chennai & Coimbatore, India",
    groups: [
      {
        items: [
          "Test Analyst through to Offshore Test Lead: functional and regression testing for Travelers and Lincoln Financial from 2010, then led a 7-engineer test team for Voya Financial across five modules from 2014 — capacity planning, work allocation, cross-module knowledge transfer and status reporting.",
          "Kick-started test automation with a Selenium/TestNG POC and built Excel-macro tooling that automated weekly status reporting and test-data validation.",
        ],
      },
    ],
  },
];

// Kept deliberately: tooling built outside the commercial stack, labelled as
// non-commercial so it closes keyword gaps without overclaiming.
export const selfDirected =
  "Playwright E2E suites, k6 load-test scripts and Jenkins pipelines built on my own projects to stay current with tooling outside my day-to-day commercial stack.";

export const education: Education[] = [
  {
    qualification: "B.E. Mechanical Engineering",
    institution: "Anna University",
    period: "2005 – 2009",
  },
];

export const certifications: string[] = ["ISTQB Foundation Level Certified"];

export type AiSkill = { name: string; desc: string };

export const aiExpertise = {
  summary:
    "I build with AI day to day — not just as a consumer of autocomplete, but designing agentic solutions that other engineers reuse. I work in a plan-and-implement flow: have the AI produce a reviewed plan/spec first, then implement against it, keeping changes deliberate and verifiable.",
  tools: ["Claude / Claude Code", "Cursor", "GitHub Copilot"],
  practices: [
    "Plan-and-implement (spec-first) agentic workflows",
    "Multi-agent orchestration",
    "Authoring reusable agent skills",
    "Natural-language test automation (wix-pilot, cy.prompt)",
  ],
  // Reusable agent skills authored in the Sportsbook repo, described generically.
  skills: [
    {
      name: "Performance Impact Review",
      desc: "A multi-agent skill that turns a raw performance change-point report into a validated review — pinpointing the commit range behind each regression, analysing the diff for performance concerns, adversarially verifying findings, and producing an actionable remediation plan. Reusable by any team triaging performance reports.",
    },
    {
      name: "Acceptance-Test Debugger",
      desc: "An agent skill that diagnoses failing native acceptance tests end to end — environment diagnostics, build/test config alignment, and failure-artifact analysis (screenshots, videos, reports) — and self-updates its known-error playbook as new issues are solved. Useful to any engineer debugging flaky or failing E2E tests.",
    },
  ] as AiSkill[],
};

export type LeadershipGroup = { group: string; items: string[] };

export const leadership = {
  summary:
    "I lead without formal authority. Nobody reports to me, but the test strategy, quality gates, and shift-left standards for 21 teams across 3 pillars and 3 geographic locations are mine to define — and adopted by embedding with squads, not mandating from a distance.",
  groups: [
    {
      group: "Influence at scale",
      items: [
        "Drive shift-left and test-automation adoption across 21 teams, 3 pillars, 3 geographic locations — with no direct reports",
        "Bridge the central Quality Engineering Capabilities team and feature squads",
        "Partner with pillar-level Staff QAs toward one unified quality strategy",
      ],
    },
    {
      group: "Governance",
      items: [
        "Define quality gates and exit criteria squads ship against",
        "Provide release-readiness / go-no-go input at release time",
      ],
    },
    {
      group: "Enablement",
      items: [
        "Run a QA Community of Practice",
        "Run testing-efficiency audits — coverage gaps, flaky-test patterns, automation opportunities",
        "Sit in 3 Amigos / refinement to shape acceptance criteria and edge cases up front",
        "Onboard squads with documentation and hands-on support",
      ],
    },
    {
      group: "Organisational",
      items: [
        "Interview and hire quality engineers",
        "Lead POC-driven tool evaluation and selection for the org's testing stack",
        "Proactively introduce new capability — AI-driven test automation is the clearest example",
      ],
    },
  ] as LeadershipGroup[],
};

export const accomplishments: Accomplishment[] = [
  {
    slug: "perf-detector",
    pillar: "ci-signal",
    title: "Performance Regression Detector",
    tagline: "Statistical changepoint detection that catches perf regressions in CI before they ship.",
    tags: ["Python", "E-Divisive", "Datadog", "Buildkite"],
    metrics: [
      { label: "Noise / false-positive filter", value: "<2%" },
      { label: "Flows × metrics", value: "12 × 7" },
      { label: "Platforms", value: "iOS + Android" },
    ],
    problem:
      "Performance regressions in the Sportsbook app were only discovered after release, when users felt slow screens and bet-placement lag. There was no statistically rigorous, per-commit way to detect that a change had degraded a critical user flow without drowning the team in false alarms.",
    approach: [
      "Built a native iOS performance-metrics module (mach kernel APIs) plus Android instrumentation to capture duration, memory, CPU, and UI view counts across 12 betting flows (7 metrics each), uploaded to Datadog tagged by commit SHA.",
      "Researched the field (MongoDB Hunter, Netflix's rolling-baseline anomaly detection, t-test/p-value methods) and built a Python engine using E-Divisive changepoint detection against a rolling historical baseline.",
      "Layered a multi-stage filtering pipeline (magnitude tolerance, test-harness noise, cross-flow correlation, dedup) to hold the false-positive rate under 2%.",
      "Persisted findings as immutable Datadog Events (event-sourced status), wired the check into Buildkite, and posted triaged alerts to Slack via Block Kit with an accept/mute/resolve triage CLI.",
    ],
    impact: [
      "Turned performance regression detection from post-release firefighting into an automated, per-commit CI gate.",
      "Held the false-positive rate under 2%, so the signal is trusted rather than ignored.",
      "Gave every squad a triage workflow (accept / mute / resolve) and a Datadog event trail for trend analysis.",
    ],
    pdfSummary:
      "Built a Python E-Divisive + Datadog perf-regression detector gating CI with <2% noise and Slack alerting (iOS & Android).",
    stack: ["Python", "E-Divisive", "Datadog Events & Metrics API", "Buildkite", "Slack Block Kit"],
  },
  {
    slug: "ai-test-automation",
    pillar: "ai",
    aiRelated: true,
    title: "AI-Driven Test Automation",
    tagline: "Tests authored in plain English across Detox, Cypress, and Appium — not imperative code.",
    tags: ["wix-pilot", "cy.prompt()", "Detox", "Appium", "LLM"],
    metrics: [
      { label: "Frameworks", value: "Detox / Cypress / Appium" },
      { label: "Test authoring", value: "Natural language" },
      { label: "Reach", value: "Native + Web" },
    ],
    problem:
      "E2E tests were expensive to write and maintain — every flow meant imperative selector-and-tap code that broke on UI churn and demanded automation expertise, slowing how fast teams could cover new features across native and web.",
    approach: [
      "Ran the POC and integrated wix-pilot (LLM-driven natural-language automation) with Detox, then a reusable prompt library, composable flows, and a custom handler to keep LLM cache hits deterministic.",
      "Extended the approach to web via Cypress `cy.prompt()` natural-language tests and to native real devices via Appium + Wix Pilot on BrowserStack.",
      "Prototyped cross-platform AI tests that drive native and web from a single test file, and documented self-healing/caching behaviour of the LLM test engine.",
    ],
    impact: [
      "Lowered the barrier to writing E2E coverage — engineers express tests in natural language across native and web.",
      "Established the patterns, prompt library, and guardrails for AI-based testing to scale across squads and frameworks.",
      "Reduced maintenance churn by decoupling test intent from brittle imperative selectors.",
    ],
    pdfSummary:
      "Pioneered AI-driven testing — wix-pilot+Detox, Cypress cy.prompt(), Appium+Wix Pilot on BrowserStack — authoring E2E tests in natural language across native and web.",
    stack: ["wix-pilot", "Detox", "Cypress (cy.prompt)", "Appium", "BrowserStack", "LLM prompt engineering"],
  },
  {
    slug: "perf-impact-review-agent",
    pillar: "ai",
    aiRelated: true,
    title: "Performance Impact Review Agent",
    tagline: "A multi-agent skill that turns a raw change-point report into a verified, actionable remediation plan.",
    tags: ["Multi-agent", "Claude Code", "Performance", "Agent skills"],
    metrics: [
      { label: "Reuse", value: "Beyond my team" },
      { label: "Verification", value: "Adversarial self-check" },
      { label: "Merge rights", value: "None — human review" },
    ],
    problem:
      "The change-point detector reliably said a performance regression had happened, but triage was still expensive manual work: find the commit range behind the change point, read the diff for the cause, judge whether the finding was real, and decide what to do about it. That analysis needed the detector's author every time, which made the signal a bottleneck instead of a capability.",
    approach: [
      "Decomposed triage into agents with bounded responsibility — commit-range identification, diff analysis for performance concerns, adversarial verification of findings, and remediation planning — rather than one prompt asked to do everything.",
      "Made verification adversarial on purpose: a separate agent argues against each finding before it is reported, so plausible-but-wrong conclusions are caught inside the workflow rather than by the engineer reading the output.",
      "Isolated execution per stage and kept a human in the loop at the end — the agent produces a plan and never merges its own changes.",
      "Packaged it as a reusable skill any team triaging a performance report can run, not a bespoke script tied to one pipeline.",
    ],
    impact: [
      "Turned performance triage from specialist manual analysis into a repeatable workflow other teams run themselves.",
      "Adversarial verification keeps the output trustworthy — the same discipline that holds the detector's false-positive rate under 2%.",
      "Demonstrates agentic AI applied to a real engineering workflow with governance built in, rather than AI code generation.",
    ],
    pdfSummary:
      "Built a reusable multi-agent Performance Impact Review skill — traces a change-point report to the responsible commit range, analyses the diff, adversarially verifies its own findings, and produces a remediation plan. Used beyond my own team.",
    stack: ["Claude / Claude Code", "Multi-agent orchestration", "Git", "Datadog"],
  },
  {
    slug: "acceptance-test-debugger",
    pillar: "ai",
    aiRelated: true,
    title: "Acceptance-Test Debugger Agent",
    tagline: "Diagnoses failing native E2E runs end to end — and updates its own known-error playbook as it learns.",
    tags: ["Multi-agent", "Claude Code", "Detox", "Agent skills"],
    metrics: [
      { label: "Diagnoses", value: "Env / build / artefacts" },
      { label: "Playbook", value: "Self-updating" },
      { label: "Reuse", value: "Beyond my team" },
    ],
    problem:
      "A failing native acceptance run gives an engineer a wall of possible causes — environment drift, build/test config mismatch, a genuine product defect, or flakiness — and the evidence is scattered across screenshots, videos, device logs and reports. Working through that is slow, and the knowledge earned each time stayed in the head of whoever debugged it.",
    approach: [
      "Built an agent skill that works the diagnosis in order — environment diagnostics first, then build and test-config alignment, then failure-artefact analysis across screenshots, videos and reports.",
      "Gave it a known-error playbook it updates itself as new failure modes are solved, so each debugging session compounds instead of evaporating.",
      "Kept the same governance as the performance agent: bounded responsibility, isolated execution, and a human deciding what actually changes.",
    ],
    impact: [
      "Any engineer can diagnose a failing E2E run without the tribal knowledge that debugging previously required.",
      "The playbook turns one-off debugging into accumulating institutional knowledge.",
      "Cut the time between a red acceptance run and knowing whether it is environment, config, or a real defect.",
    ],
    pdfSummary:
      "Built a reusable Acceptance-Test Debugger agent skill diagnosing failing native E2E runs end to end (environment, build config, failure artefacts) with a self-updating known-error playbook.",
    stack: ["Claude / Claude Code", "Detox", "Appium", "BrowserStack"],
  },
  {
    slug: "native-e2e",
    pillar: "frameworks",
    title: "Cross-Platform Native E2E",
    tagline: "A unified iOS + Android E2E suite covering core betting flows on real devices.",
    tags: ["Appium", "WebdriverIO", "Detox", "BrowserStack"],
    metrics: [
      { label: "Appium specs", value: "58" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Approx. LOC", value: "~4k" },
    ],
    problem:
      "Betting flows (straight, parlay, SGP, teaser, round-robin) needed reliable automated coverage across both platforms, running against real devices rather than simulators alone.",
    approach: [
      "Built an Appium/WebdriverIO acceptance suite (58 specs, ~4k LOC) with page objects, gesture helpers, and BrowserStack configs for iOS and Android.",
      "Authored cross-platform label matchers so a single test body runs on both platforms, and tagged tests for selective PR execution.",
      "Layered visual-regression baselines on top of this suite for the home-screen sport tabs (see Visual Regression at Device-Matrix Scale).",
    ],
    impact: [
      "Gave the org dependable automated coverage of revenue-critical bet-placement flows on iOS and Android.",
      "Cut manual regression effort through reusable page objects and cross-platform single-source tests.",
      "Became the real-device foundation the visual-regression and device-farm work builds on.",
    ],
    pdfSummary:
      "Built a 58-spec Appium/WebdriverIO + Detox E2E suite (iOS & Android) on real devices for core betting flows.",
    stack: ["Appium", "WebdriverIO", "Detox", "BrowserStack", "TypeScript"],
  },
  {
    slug: "ci-acceleration",
    pillar: "ci-signal",
    title: "CI Acceleration",
    tagline: "Cut native test runs ~70% and test-build time ~80% — without touching test code.",
    tags: ["Buildkite", "Parallelization", "Build caching", "Bash"],
    metrics: [
      { label: "Test run time", value: "~70% faster" },
      { label: "Test build time", value: "180m → 30m" },
      { label: "Parallelism", value: "4-way" },
    ],
    problem:
      "Native test feedback was painfully slow — every test kick-off triggered a fresh full build (up to ~180 minutes across instances) and acceptance runs executed serially, throttling merge velocity across the monorepo.",
    approach: [
      "Parallelized acceptance tests with Buildkite test splitting + Jest sharding across 4 threads, taking a 42-test suite from ~15 minutes to ~5 minutes (~70%).",
      "Re-architected test builds for build sharing and added a hybrid git-aware iOS build cache (exact / JS-only Metro rebundle / full-rebuild tiers), cutting build time from ~180 to ~30 minutes (~80%).",
      "Added dependency caching (node_modules, Ruby gems, CocoaPods) and parallelized multi-iteration performance runs across agents.",
    ],
    impact: [
      "Reduced acceptance test run time ~70% with zero changes to test or app code.",
      "Cut test-build time ~80% (180m → 30m) so feedback is fast for the JS-only changes that dominate PRs.",
      "Scales automatically as the suite grows — no pipeline edits required.",
    ],
    pdfSummary:
      "Cut native test runs ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing + a hybrid git-aware cache.",
    stack: ["Buildkite", "Jest --shard", "Bash", "Xcode / Metro", "CocoaPods"],
  },
  {
    slug: "testability",
    pillar: "frameworks",
    title: "Launch-Argument Testability",
    tagline: "Runtime environment switching, mock injection, and testIDs that survive production builds.",
    tags: ["React Native", "Swift", "Kotlin", "DX"],
    metrics: [
      { label: "Switchable environments", value: "4" },
      { label: "testIDs in prod", value: "Enabled" },
      { label: "Code changes to switch", value: "0" },
    ],
    problem:
      "Tests and manual QA couldn't easily switch environments (QA / staging / devstack / local mocks) or inject mocks without code changes, and testIDs were stripped from production builds — forcing separate test/prod builds and blocking production testing.",
    approach: [
      "Built a launch-arguments module (native Swift/Kotlin bridge + RN) parsing runtime args for environment switching, deep-linking, and mock injection, invoked via xcrun simctl / adb shell.",
      "Stopped stripping testIDs from production builds so the same binary is testable in prod.",
      "Documented invocation patterns for QA and automation engineers across iOS and Android.",
    ],
    impact: [
      "QA and automation can switch environments and inject mocks at runtime with no code changes or rebuilds.",
      "Eliminated the need for separate test vs. production builds, enabling production-level testing when needed.",
      "Became foundational plumbing that the Detox and Appium suites rely on — later extended to carry feature-flag overrides too (see Feature-Flag Test Control).",
    ],
    pdfSummary:
      "Built launch-argument testability (runtime env switching, mock injection, testIDs-in-prod) via a native Swift/Kotlin + RN module — reused by Casino.",
    stack: ["React Native", "Swift", "Kotlin", "Detox", "Native storage"],
  },
  {
    slug: "feature-flag-testing",
    pillar: "test-layers",
    title: "Feature-Flag Test Control",
    tagline: "Deterministic flag-on / flag-off testing on demand — no rebuilds, no dashboard changes.",
    tags: ["Feature flags", "Detox", "React Native", "Swift", "Kotlin"],
    metrics: [
      { label: "Rebuilds to switch flags", value: "0" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Suites covered", value: "Acceptance + E2E" },
    ],
    problem:
      "Sportsbook features ship behind flags, but tests had no reliable way to reach flagged code paths on demand — they either couldn't exercise a flag at all or depended on remote dashboard state, which is non-deterministic and unrepeatable in CI. Android made it worse: a deeplink relaunch recreates the host activity with a cleared task, dropping any flag state that had been set at launch.",
    approach: [
      "Extended the existing launch-argument channel (see Launch-Argument Testability) to also carry feature-flag overrides through to the app at startup.",
      "Added launch and relaunch helpers to the shared Detox test utilities so both acceptance and E2E suites can start — or restart — the app under a specific flag configuration.",
      "Made the flag override survive an Android deeplink relaunch, so flag state stays intact even when the activity is recreated mid-test.",
    ],
    impact: [
      "Squads verify flag-on and flag-off behaviour deterministically within a single test run, with zero rebuilds and zero dashboard changes.",
      "Became the standard way flagged work is tested across the acceptance and E2E suites.",
      "Removed a whole class of flag-related test flakiness caused by relying on remote, mutable flag state.",
    ],
    pdfSummary:
      "Extended launch-argument testability to carry feature-flag overrides (surviving Android deeplink relaunch) — deterministic flag-on/off testing with zero rebuilds, adopted as the standard across acceptance and E2E suites.",
    stack: ["React Native", "Swift", "Kotlin", "Detox", "Feature flags"],
  },
  {
    slug: "visual-regression",
    pillar: "ci-signal",
    title: "Visual Regression at Device-Matrix Scale",
    tagline: "Real-device visual regression for a fast-moving home-page redesign, shifted left of release candidates.",
    tags: ["BrowserStack App Percy", "WebdriverIO", "Visual regression"],
    metrics: [
      { label: "Real devices", value: "10" },
      { label: "Handover", value: "~5 weeks" },
      { label: "Squads adopted", value: "3" },
    ],
    problem:
      "A home-page redesign built on a shared component library meant the UI changed frequently and significantly as new market layouts and personalisation shipped. Verifying it across many iOS and Android devices was heavy, repetitive manual work, and bug analysis found a considerable share of reported defects were visual — most only caught on release candidates or in incident management, when they were most expensive to fix. Because the components were shared building blocks, a regression there only became visible once it had propagated into the full app, making it costly to trace back.",
    approach: [
      "Ran a POC evaluating visual-regression tools against 7 requirements — multi-device support, ignore-regions, WebdriverIO integration, CI/CD integration, ease of use, issue reporting, and snapshot stabilisation — and selected BrowserStack App Percy.",
      "Built the baseline → real-device run → diff → dashboard review → approve/reject loop, where an approved diff promotes the new baseline.",
      "Layered it on the existing WebdriverIO/BrowserStack infrastructure with per-platform, per-environment configs, running against a mocked environment so screenshots stay data-stable, plus dedicated per-platform CI pipelines.",
      "Delivered baselines across a 10-device real-device matrix (5 iOS, 5 Android) covering the redesigned home-screen sport tabs.",
    ],
    impact: [
      "Delivered full iOS + Android capability across the whole device matrix and handed it over in ~5 weeks — beyond the originally agreed iOS-only sample scope.",
      "Adopted by three squads, including the team that led the initial POC.",
      "Automated a visual check that was previously manual and repetitive across many real devices, backed by demos, check-ins, and full documentation for the teams that adopted it.",
    ],
    pdfSummary:
      "Built BrowserStack App Percy visual regression across a 10-device real-device matrix (iOS + Android) for a fast-moving home-page redesign — POC-selected tooling, ~5-week delivery, adopted by 3 squads.",
    stack: ["BrowserStack App Percy", "WebdriverIO", "Azure DevOps", "Visual regression"],
  },
  {
    slug: "device-farm",
    pillar: "ci-signal",
    title: "Device Farm Ownership & Enablement",
    tagline: "Own the real-device estate other squads test against, and how they plug into it.",
    tags: ["BrowserStack", "Device farm", "Enablement"],
    metrics: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "Ownership", value: "Account + estate" },
      { label: "Onboarding", value: "Docs + hands-on" },
    ],
    problem:
      "Mobile testing across 21 teams needed a governed, shared real-device estate rather than each squad solving device-cloud access, configuration, and coverage on its own — duplicated setup effort and inconsistent device coverage against what users actually run.",
    approach: [
      "Own the BrowserStack account and device/OS estate, and maintain the real-device matrix (iPhone 15 Pro Max down to 12 Mini; Pixel 7 and Galaxy S22–S24 Ultra) the Appium, Detox, and Percy suites run against.",
      "Build and maintain the App Automate / WebdriverIO integration patterns and per-platform, per-environment configs squads plug into rather than each standing up their own.",
      "Onboard squads onto the shared estate with documentation, demos, and hands-on support.",
      "Run POC-led evaluations to make evidence-based tool decisions for the estate, rather than defaulting on vendor claims.",
    ],
    impact: [
      "Replaced per-team ad-hoc device-cloud setup with one governed estate other squads test against.",
      "Squads onboard onto real-device testing without rebuilding device-cloud infrastructure themselves.",
      "Tooling decisions for the estate are made on documented POC evidence, not vendor claims.",
    ],
    pdfSummary:
      "Own the BrowserStack device-farm estate and integration patterns other squads test against — real-device matrix, onboarding, and POC-led tool evaluation.",
    stack: ["BrowserStack", "Appium", "WebdriverIO", "Device farm management"],
  },
  {
    slug: "qa-env-smoke",
    pillar: "ci-signal",
    title: "QA Environment Smoke Framework",
    tagline: "Turned 6 months of silent QA-environment failures into automated, alerted detection.",
    tags: ["Monitoring", "Smoke tests", "Reliability"],
    metrics: [
      { label: "Issues over 6 months", value: "76+" },
      { label: "Recurring categories", value: "5" },
      { label: "Detection", value: "Manual → automated" },
    ],
    problem:
      "Over six months, QA environments hit 76+ issues across five recurring categories — bet-placement 500s, silent SGP validation failures, and more — all caught manually, often days after they began blocking test execution and eroding confidence in results.",
    approach: [
      "Catalogued the recurring failure categories and the user-facing flows each one breaks.",
      "Built a smoke-test framework that continuously exercises critical QA-environment flows and flags breakages early.",
      "Wired in alerting so environment health surfaces proactively instead of being discovered mid-test-run.",
    ],
    impact: [
      "Shifted QA-environment failure detection from manual and days-late to automated and immediate.",
      "Protected downstream test execution from wasted runs against a broken environment.",
      "Gave the team a continuous health signal for the environments their testing depends on.",
    ],
    pdfSummary:
      "Built a QA-environment smoke framework that automated detection of 76+ recurring failures (across 5 categories) previously caught manually.",
    stack: ["TypeScript", "Smoke tests", "Alerting", "CI"],
  },
  {
    slug: "test-infra",
    pillar: "frameworks",
    aiRelated: true,
    title: "Build-Cache & AI Test Infrastructure",
    tagline: "Terraform-provisioned S3 build cache and Bedrock access powering CI, owned as shared infra.",
    tags: ["Terraform", "AWS S3", "IAM", "Bedrock"],
    metrics: [
      { label: "Provisioned with", value: "Terraform" },
      { label: "Cache lifecycle", value: "4-day retention" },
      { label: "IAM", value: "Least-privilege" },
    ],
    problem:
      "The build-caching and AI-testing work needed durable, governed infrastructure — an S3 cache Buildkite agents could read/write securely, and managed foundation-model access for AI test runs — rather than ad-hoc resources.",
    approach: [
      "Authored Terraform to provision an encrypted, versioned S3 cache bucket with a 4-day object-lifecycle policy to control storage cost.",
      "Set up cross-account, least-privilege IAM (role assumption + scoped S3 permissions) so Buildkite agents read/write the cache safely.",
      "Provisioned multi-region AWS Bedrock access (Claude models with global inference profiles) so CI agents can invoke foundation models for AI-assisted test runs.",
    ],
    impact: [
      "Provided the durable, governed cache layer the iOS hybrid build cache depends on.",
      "Enabled AI-assisted testing in CI through managed, high-availability Bedrock access — no manual permission churn.",
      "Owned shared CI infrastructure with security and cost controls baked in.",
    ],
    pdfSummary:
      "Provisioned the Terraform S3 build-cache (lifecycle + least-privilege IAM) and multi-region Bedrock access powering CI.",
    stack: ["Terraform", "AWS S3", "AWS IAM", "AWS Bedrock", "Buildkite"],
  },
  {
    slug: "quality-maturity-model",
    pillar: "governance",
    title: "Org-Wide Quality Strategy & Governance",
    tagline: "Test strategy, quality gates, and a shift-left maturity model for 21 teams across 3 pillars and 3 locations.",
    tags: ["Strategy", "Governance", "Shift-left", "Docusaurus"],
    metrics: [
      { label: "Teams", value: "21" },
      { label: "Pillars / locations", value: "3 / 3" },
      { label: "Docs published", value: "40+" },
    ],
    problem:
      "Squads tested inconsistently with no shared definition of what 'good' looked like, no consistent quality gates at merge or release, and no forum for spreading what was working — quality engineering sat as one central capability-building team, distant from the 21 feature teams (across 3 pillars and 3 geographic locations) that needed to adopt it. Defects were being caught late rather than prevented early.",
    approach: [
      "Defined the testing layers (unit & component → acceptance on mocked environments → contract testing → E2E) and the per-channel testing pillars (web acceptance, native automation, web E2E, CMS, SB API), underpinned by a shift-left philosophy — test at the lowest effective layer, catch defects before they propagate. Published across 40+ Docusaurus pages.",
      "Defined the quality gates, exit criteria, and release-readiness signals squads ship against, and provide go/no-go input at release time without holding formal sign-off authority.",
      "Run a QA Community of Practice and quarterly-style testing-efficiency audits (coverage gaps, flaky-test patterns, automation opportunities) across the 21 teams, and sit in 3 Amigos/refinement to shape acceptance criteria before stories are built.",
      "Act as a force multiplier — bridging the Quality Engineering Capabilities team and feature squads across all 3 locations, partnering with pillar-level Staff QAs toward one unified strategy, and reporting quality status to senior leadership.",
      "Paired with squads to adopt the model, push testing left, and migrate brittle high-level tests down to faster, more reliable layers — acceptance on mocked environments and contract tests instead of expensive E2E.",
    ],
    impact: [
      "Gave the org a single, documented language, gate, and target for quality maturity across 21 teams, 3 pillars, 3 locations, and iOS/Android/web.",
      "Embedded a shift-left mindset — squads catch defects at the acceptance or contract layer rather than at E2E or in production.",
      "Turned quality reviews into a standing practice — a Community of Practice and recurring efficiency audits, not one-off interventions.",
      "Drove adoption by embedding closer to feature teams across every location, so each owns its quality outcome.",
    ],
    pdfSummary:
      "Own test strategy, quality gates/exit criteria, and the shift-left Quality Maturity Model (40+ docs) for 21 teams across 3 pillars and 3 locations — QA Community of Practice, efficiency audits, and release-readiness input.",
    stack: ["Docusaurus", "Test strategy", "Quality governance", "Shift-left", "Contract testing"],
  },
  {
    slug: "sonarcloud-quality-gates",
    pillar: "test-layers",
    title: "SonarCloud Quality Gates",
    tagline: "PR-blocking quality gates that lifted codebase coverage from 55% to 70% and cut duplication from 45% to 20%.",
    tags: ["SonarCloud", "Quality gates", "Unit testing", "CI"],
    metrics: [
      { label: "Unit-test coverage", value: "55% → 70%" },
      { label: "Code duplication", value: "45% → 20%" },
      { label: "Enforced at", value: "Merge time" },
    ],
    problem:
      "Code health was drifting — coverage sat around 55% and duplication near 45% — because nothing enforced a baseline at merge time. Quality depended on reviewer diligence, so gaps and copy-paste crept in one pull request at a time.",
    approach: [
      "Implemented SonarCloud across the repo and configured quality gates that block any pull request lacking sufficient unit-test coverage.",
      "Extended the gates to enforce readability, maintainability, and security standards — not coverage alone.",
      "Wired the gate into CI so it fails the PR check automatically, making quality a merge precondition rather than a review afterthought.",
    ],
    impact: [
      "Lifted codebase unit-test coverage from 55% to 70% across the board.",
      "Cut code duplication from 45% to 20%.",
      "Turned code health into an enforced, org-wide standard instead of a reviewer's judgement call.",
    ],
    pdfSummary:
      "Introduced SonarCloud PR quality gates (coverage, readability, maintainability, security) that lifted codebase coverage 55%→70% and cut duplication 45%→20%.",
    stack: ["SonarCloud", "Quality Gates", "CI", "Unit Testing"],
  },

  // ── Earlier career (Cognizant, 2010–2021) ──
  {
    slug: "mocked-environments",
    pillar: "frameworks",
    era: "earlier",
    title: "Mocked & Stubbed Environment Testing",
    tagline: "Testing microservices before integration existed — the 2018 ancestor of how I shift left today.",
    tags: ["Mountebank", "WireMock", "Docker", "Swagger"],
    metrics: [
      { label: "Dependencies", value: "Fully stubbed" },
      { label: "Mock source", value: "Swagger specs" },
      { label: "Environments", value: "Dockerised" },
    ],
    problem:
      "Newly built microservices had to be tested long before their downstream dependencies were available or stable. Waiting for a fully integrated environment meant testing started late, ran against flaky third-party systems, and could not reliably reproduce error conditions at all.",
    approach: [
      "Stood up mocked service environments with Mountebank and WireMock, generating JSON mock data directly from the Swagger specs so stubs stayed faithful to the real contracts.",
      "Ran automation against containerised environments, using DockerHub and Portainer for image and port switching to move a suite between mocked, integrated, and cloud (AWS S3 / Cognito) setups without code changes.",
      "Built a Protractor UI error-handling framework that mocked failure responses, making error and edge-case paths automatable that were previously impossible to trigger on demand.",
    ],
    impact: [
      "Decoupled test execution from dependency availability — testing began as soon as a service was built, not when integration was ready.",
      "Increased coverage of error and edge-case paths that could not be reproduced against real downstream systems, cutting manual testing effort.",
      "Established the acceptance-against-mocks pattern I now run at Sportsbook scale — the same principle, years earlier.",
    ],
    pdfSummary:
      "Tested microservices against stubbed environments (Mountebank/WireMock, Swagger-driven mock data, Docker via DockerHub/Portainer, AWS S3 & Cognito) and built a Protractor UI error-mocking framework that made error paths automatable.",
    stack: ["Mountebank", "WireMock", "Swagger / OpenAPI", "Docker", "Portainer", "Protractor", "AWS S3 & Cognito"],
  },
  {
    slug: "program-ui-framework",
    pillar: "frameworks",
    era: "earlier",
    title: "Program-Level UI Framework Uplift",
    tagline: "Owned a program-wide framework rewrite — reliability up, failure analysis built into the pipeline.",
    tags: ["Protractor", "Azure Pipelines", "Reliability", "Ownership"],
    metrics: [
      { label: "Scope", value: "Program-wide" },
      { label: "Focus", value: "Reliability" },
      { label: "Reporting", value: "In-pipeline" },
    ],
    problem:
      "The UI automation framework shared across a client's program had become unreliable — flaky tests eroded trust in the suite, and when a pipeline run failed, engineers had no way to tell a real defect from a framework problem without manually re-running and digging through raw logs.",
    approach: [
      "Took ownership of the framework across the whole program rather than patching it team by team, and re-worked the layers responsible for the flakiness.",
      "Hardened waits, synchronisation, and test isolation so results became repeatable and trustworthy.",
      "Implemented reporting capabilities inside the Azure pipelines so every run surfaced structured, triage-ready failure information.",
    ],
    impact: [
      "Made the shared suite reliable enough that teams acted on its results instead of re-running and ignoring them.",
      "Cut failure-analysis time by giving engineers readable failure reports directly in the pipeline.",
      "First time I owned test infrastructure at program level rather than a single team's suite — the pattern the FanDuel platform work grew from.",
    ],
    pdfSummary:
      "Owned a program-wide UI framework uplift — hardened test reliability and built in-pipeline failure-analysis reporting in Azure DevOps.",
    stack: ["Protractor", "TypeScript", "Cucumber", "Azure Pipelines"],
  },
  {
    slug: "accessibility-automation",
    pillar: "test-layers",
    era: "earlier",
    title: "Accessibility Regression Automation",
    tagline: "A Protractor framework that automated accessibility regression and saved ~40% of the effort.",
    tags: ["Protractor", "Accessibility", "Azure DevOps"],
    metrics: [
      { label: "Accessibility regression effort", value: "−40%" },
      { label: "Integration", value: "CI/CD pipeline" },
      { label: "Client", value: "Royal London" },
    ],
    problem:
      "Accessibility regression testing for the client's Angular applications was manual, slow, and easy to skip under delivery pressure — leaving accessibility defects to surface late.",
    approach: [
      "Built a Protractor (TypeScript) test-automation framework dedicated to accessibility regression checks.",
      "Integrated it into the Azure DevOps CI/CD pipeline so accessibility checks ran automatically on every relevant change.",
      "Added reporting so failures were easy to triage within the pipeline.",
    ],
    impact: [
      "Cut accessibility regression testing effort by roughly 40%.",
      "Made accessibility a continuous, automated gate rather than a manual afterthought.",
      "Established a reusable pattern the wider test practice adopted.",
    ],
    pdfSummary:
      "Built a Protractor accessibility-regression framework integrated into Azure CI/CD, cutting regression effort ~40%.",
    stack: ["Protractor", "TypeScript", "Cucumber", "Azure DevOps"],
  },
  {
    slug: "api-framework",
    pillar: "frameworks",
    era: "earlier",
    title: "API Test Framework & Assertion Library",
    tagline: "A ReadyAPI framework with a custom Groovy validation library, reused across E2E testing.",
    tags: ["ReadyAPI", "Groovy", "API testing"],
    metrics: [
      { label: "Custom library", value: "Groovy assertions" },
      { label: "Reuse", value: "Org-wide E2E" },
      { label: "Built", value: "From scratch" },
    ],
    problem:
      "API and service-layer testing lacked a consistent, reusable framework, so validation logic was duplicated and inconsistent across teams and end-to-end scenarios.",
    approach: [
      "Built an API testing framework in ReadyAPI covering services, technical endpoints, and stored procedures.",
      "Authored a Groovy-based assertion/validation library to standardize response validation.",
      "Designed it for reuse so other testers could adopt it for end-to-end functional testing.",
    ],
    impact: [
      "Became a widely reused foundation for end-to-end functional API testing.",
      "Standardized response validation through a shared assertion library.",
      "Reduced duplicated effort and raised consistency across teams.",
    ],
    pdfSummary:
      "Built a ReadyAPI test framework with a custom Groovy assertion library, reused widely for end-to-end functional testing.",
    stack: ["ReadyAPI", "Groovy", "Postman", "REST/SOAP"],
  },
  {
    slug: "test-leadership",
    pillar: "governance",
    era: "earlier",
    title: "Offshore Test Leadership & Enablement",
    tagline: "Led a 7-person offshore team and seeded automation and best-practice standards.",
    tags: ["Leadership", "Selenium", "Enablement"],
    metrics: [
      { label: "Team led", value: "7 engineers" },
      { label: "Modules owned", value: "5" },
      { label: "Standards", value: "Gherkin / BDD" },
    ],
    problem:
      "Offshore delivery for Voya Financial needed reliable quality across five modules with limited automation maturity and a team that depended heavily on a few specialists.",
    approach: [
      "Led a 7-member offshore test team — capacity planning, work allocation, cross-module knowledge transfer, and status reporting to onshore stakeholders.",
      "Kick-started automation with a Selenium/TestNG proof-of-concept and built Excel-macro productivity tools (automated status reports, test-data validators).",
      "Authored Gherkin best-practice standards adopted across Test, BA, and Dev, and trained clients and peers.",
    ],
    impact: [
      "Delivered quality on schedule across five modules with reduced key-person dependency.",
      "Introduced automation and reusable tooling that lifted team productivity.",
      "Scaled good practice through standards and hands-on training.",
    ],
    pdfSummary:
      "Led a 7-member offshore test team, seeded Selenium/TestNG automation, and rolled out Gherkin standards across disciplines.",
    stack: ["Selenium WebDriver", "TestNG", "Gherkin / BDD", "HP ALM"],
  },
];

export type PersonalProject = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  pdfSummary: string;
  screenshot?: string;
  url?: string;
  stack: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "scorebook",
    title: "Scorebook App",
    tagline: "A cross-platform sports score tracker — built to stress-test the AI-first startup claim.",
    description:
      "A serious personal project to validate the claims of big AI tech CEOs around million-dollar single-person startups — built end to end with AI assistance. A full-stack monorepo: a React Native / Expo mobile app and a Node.js + Express REST backend, with Maestro mobile flows for automated testing and GitHub Actions for CI. The whole build process was documented to honestly evaluate what AI-assisted solo development actually enables.",
    pdfSummary:
      "React Native / Expo + Node.js/Express monorepo built solo with AI assistance — Maestro mobile flows, GitHub Actions CI. A documented experiment to validate AI-first single-person startup claims.",
    stack: ["React Native", "Expo", "Node.js", "Express", "Maestro", "GitHub Actions", "Zustand", "React Query"],
  },
  {
    slug: "flag-explorer",
    title: "Flag Explorer Game",
    tagline: "A multi-level flag quiz with country facts — built for my daughter's iPad.",
    description:
      "A fun geography game built for my 8-year-old daughter. Progressive difficulty levels, right answers unlock an interesting fact about that country. Entirely vanilla HTML, CSS, and JavaScript — deliberately zero framework, shipped and running on her iPad.",
    pdfSummary:
      "Vanilla JS multi-level flag quiz with country facts, built for my daughter. Zero dependencies, deployed on Vercel. flag-explorer.vercel.app",
    screenshot: "/projects/flag-explorer.png",
    url: "https://flag-explorer.vercel.app",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    slug: "birthday-rsvp",
    title: "Birthday RSVP & Memory Share",
    tagline: "RSVP + allergy capture + post-party photo sharing from host to guests — in her favourite theme.",
    description:
      "Built to organise my daughter's 9th birthday: guests RSVP and flag dietary allergies before the party, then after the event I shared photos and videos from the celebration with all the guests through the site. Entirely vanilla HTML, CSS, and JavaScript bundled with Vite — deployed on Vercel in her favourite party theme.",
    pdfSummary:
      "Vanilla JS + Vite RSVP site for my daughter's 9th birthday — guest attendance, allergy capture, and host-curated post-party photo sharing. Deployed on Vercel.",
    screenshot: "/projects/birthday-rsvp.png",
    url: "https://harshini-birthday-invite.vercel.app",
    stack: ["HTML", "CSS", "JavaScript", "Vite", "Vercel"],
  },
  {
    slug: "cricbuds",
    title: "CricBuds Prediction Game",
    tagline: "Season-long score prediction game for our Edinburgh cricket friends group.",
    description:
      "All of us play for different clubs across Edinburgh in the East of Scotland league. CricBuds lets us predict each other's scores across the season, tracks the leaderboard, and keeps the banter going between match days. Built with Next.js, Neon Postgres, and Drizzle ORM — live throughout the cricket season.",
    pdfSummary:
      "Next.js + Neon DB cricket score prediction game for our Edinburgh East of Scotland league group — season-long leaderboard. cricbuds.vercel.app",
    screenshot: "/projects/cricbuds.png",
    url: "https://cricbuds.vercel.app",
    stack: ["Next.js", "Neon DB", "Drizzle ORM", "NextAuth", "shadcn/ui", "Tailwind", "Framer Motion"],
  },
];

// Closing call-to-action on the PDF. Sits after Education so it never gets in
// the way of an ATS parsing the sections that matter.
export const closingHook = {
  headline: "“Ship fast or ship good” is a false choice.",
  body: "Every team I've worked with was told they had to pick one. Building the right testing platform is how they stopped having to. Let's talk.",
};

export const resume = {
  profile,
  closingHook,
  whatIBring,
  keyImpact,
  skills,
  experiences,
  selfDirected,
  education,
  certifications,
  aiExpertise,
  leadership,
  accomplishments,
  personalProjects,
};
