// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Edit this file to update every surface: home page, /work/* detail pages,
// and the ATS-friendly /resume PDF. Nothing else needs to change.
//
// Density model:
//   - `impact[]`            → rich bullets shown on the website detail pages
//   - `pdfSummary`          → one compressed line shown on the ATS PDF
//   - experiences `bullets` → concise, shared by website timeline + PDF
// ─────────────────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Metric = { label: string; value: string };

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string; // rendered on the PDF only, never on the live site
  summaryShort: string; // one-liner (meta + hero tagline)
  summary: string; // 2–3 sentence positioning statement
  headlineMetrics: Metric[]; // career-level numbers (home intro band + PDF band)
  website: string; // portfolio URL, linked from the PDF
  links: Link[];
};

export type SkillGroup = { group: string; items: string[] };

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

export type Accomplishment = {
  slug: string;
  era?: "fanduel" | "earlier"; // defaults to fanduel; "earlier" = pre-FanDuel
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
  location: "Edinburgh, UK",
  email: "sriram20mail@gmail.com",
  phone: "+44 7459 606294",
  summaryShort:
    "I build the systems other engineers test through — across 21 teams, 3 pillars, and 3 locations. I design the platforms, automation and CI that let engineers ship with confidence, turning quality from an organisational bottleneck into a force multiplier across every team.",
  summary:
    "Sixteen years in quality engineering — the last five at FanDuel, where I own the test strategy and Quality Maturity Model for 21 teams across 3 pillars and 3 geographic locations, building the testing platform behind the Sportsbook apps on iOS, Android, and web. I lead without authority: defining the quality gates, exit criteria, and release-readiness signals teams ship against, running testing-efficiency audits and a QA Community of Practice, and embedding with feature squads rather than sitting apart from them — so quality maturity is something every team owns. The engineering sits a layer beneath the product: AI-driven test automation, statistical performance-regression detection, cross-platform native E2E and real-device visual regression, feature-flag test control, and CI fast enough that teams keep it in their loop. Earlier I built UI and API automation frameworks from scratch and led offshore test teams across insurance and financial-services clients.",
  headlineMetrics: [
    { label: "Teams on the quality model", value: "21" },
    { label: "Pillars × locations", value: "3 × 3" },
    { label: "In quality engineering", value: "16 yrs" },
    { label: "Faster CI feedback", value: "~70%" },
    { label: "Codebase test coverage", value: "55%→70%" },
  ],
  website: "https://sriramvenkataraman-portfolio.vercel.app",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/SriramVenkataramanlkd" }],
};

export const skills: SkillGroup[] = [
  {
    group: "Quality Governance & Programme Leadership",
    items: [
      "Release readiness / go-no-go criteria",
      "Quality gates & exit criteria",
      "Testing efficiency audits (coverage gaps, flaky tests)",
      "QA Community of Practice",
      "3 Amigos / refinement participation",
      "Cross-team test strategy",
      "Quality reporting to senior leadership",
      "Distributed-team collaboration (3 locations)",
      "POC-led tool evaluation & selection",
    ],
  },
  {
    group: "Test Strategy & Architecture",
    items: [
      "Quality Maturity Model (testing pillars & layers)",
      "Shift-left / defect prevention",
      "Test pyramid & strategy",
      "Test data strategy",
      "Contract testing",
      "Feature-flag testing",
      "Gray-box / screen-object patterns",
      "BDD / Gherkin standards",
      "Accessibility testing",
      "Mentoring & enablement",
    ],
  },
  // Paired with Test Strategy above: both are tall cards, so the two-column
  // grid stays balanced instead of leaving a short card stranded beside them.
  {
    group: "Test Management & Delivery",
    items: [
      "System integration testing (SIT)",
      "User acceptance testing (UAT)",
      "Risk-based & exploratory testing",
      "Test estimation & planning",
      "Test design optimisation",
      "Defect management & triage",
      "Capacity planning & work allocation",
      "Onshore–offshore coordination",
      "Stakeholder status reporting",
    ],
  },
  {
    group: "Mobile & E2E Automation",
    items: [
      "Detox (React Native)",
      "Appium / WebdriverIO",
      "Maestro (mobile flows)",
      "wix-pilot (AI / NLP tests)",
      "BrowserStack App Percy (visual regression)",
      "Device farm management",
      "Cypress",
      "Jest / RTL",
    ],
  },
  {
    group: "Performance & Reliability",
    items: [
      "Perf regression detection (E-Divisive)",
      "Baseline validation & anomaly detection",
      "iOS / Android perf instrumentation",
      "Datadog metrics & events",
      "Sentry (crash reporting & alerting)",
      "SLOs & error budgets",
    ],
  },
  {
    group: "CI/CD & Infrastructure",
    items: [
      "Buildkite",
      "GitHub Actions",
      "Test parallelization (Jest sharding)",
      "Build caching (hybrid iOS)",
      "Terraform / AWS (S3, IAM, Bedrock)",
      "Azure DevOps",
      "Docker",
    ],
  },
  {
    group: "Web & API Automation",
    items: ["Protractor", "Cucumber", "Selenium WebDriver", "SpecFlow", "ReadyAPI", "Postman", "Mountebank / WireMock"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Bash", "C#", "Groovy", "SQL"],
  },
];

export const experiences: Experience[] = [
  {
    company: "FanDuel",
    role: "Lead Quality Engineer — Sportsbook",
    period: "2022 – Present",
    location: "Edinburgh, UK",
    bullets: [
      "Own the test strategy and Quality Maturity Model (pillars, layers, maturity levels) for 21 teams across 3 pillars and 3 geographic locations, spanning iOS, Android, and web.",
      "Define the quality gates, exit criteria, and release-readiness signals the Sportsbook apps ship against — go/no-go input without holding sign-off authority.",
      "Run a QA Community of Practice and quarterly-style testing-efficiency audits (coverage gaps, flaky-test patterns), sit in 3 Amigos/refinement, report quality status to senior leadership, interview and hire QEs, and lead POC-driven tool evaluation and selection for the org's testing stack.",
      "Built a Python E-Divisive + Datadog performance-regression detector that gates CI with under 2% false-positive noise and Slack alerting.",
      "Pioneered AI-driven E2E testing by integrating wix-pilot — tests authored in natural language over a reusable prompt library, not imperative code.",
      "Cut native test runs ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing + a hybrid git-aware cache, backed by Terraform S3 + Bedrock infra.",
      "Built cross-platform native E2E (Appium/WebdriverIO + Detox) and launch-argument testability — runtime env switching, mock injection, feature-flag overrides, and testIDs in prod.",
      "Built BrowserStack App Percy visual regression across a real-device matrix (iOS + Android) and own the BrowserStack device-farm estate other squads test against.",
      "Introduced SonarCloud PR quality gates (coverage, readability, maintainability, security) that lifted codebase coverage 55%→70% and cut duplication 45%→20%.",
    ],
  },
  {
    company: "FanDuel",
    role: "Senior Quality Engineer — Sportsbook",
    period: "2021 – 2022",
    location: "Edinburgh, UK",
    bullets: [
      "Authored the Detox acceptance framework, screen-object patterns, and onboarding docs, and stood up the foundational CI test pipelines and Datadog observability later work built on.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Lead / Senior Test Analyst — Automation",
    period: "Jul 2017 – 2021",
    location: "Edinburgh, UK",
    bullets: [
      "Built UI and API automation frameworks from scratch (Protractor–Cucumber–TypeScript; ReadyAPI + Groovy assertion library) and the Azure DevOps pipelines to run them — Royal London, Resonate Tech.",
      "Owned a program-wide UI framework uplift — hardened test reliability and built failure-analysis reporting into the Azure pipelines.",
      "Tested newly built microservices against stubbed environments (Mountebank, WireMock, Swagger-driven mock data; Docker via DockerHub/Portainer) before integration was available.",
      "Delivered an accessibility-regression framework that cut accessibility regression effort ~40%, plus a UI error-handling/mocking framework.",
      "Shifted testing left into refinement — static-tested requirements and raised ambiguities with the PO before stories entered the backlog, and drafted the Gherkin E2E scenarios used as CI/CD acceptance tests.",
      "Diagnosed defects on integrated environments through Splunk log analysis, and fixed minor application bugs with their accompanying unit tests.",
      "Authored Gherkin standards adopted across Test/BA/Dev and trained clients and peers to scale automation.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Offshore Test Lead / Senior Test Analyst",
    period: "Jan 2010 – Jul 2017",
    location: "Chennai & Coimbatore, India",
    bullets: [
      "Led a 7-member offshore test team for Voya Financial — capacity planning, cross-module KT, and status reporting across five modules.",
      "Kick-started automation with a Selenium/TestNG POC and Excel-macro tooling; delivered functional/regression testing for Travelers and Lincoln Financial.",
    ],
  },
];

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
    slug: "native-e2e",
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
  skills,
  experiences,
  education,
  certifications,
  aiExpertise,
  leadership,
  accomplishments,
  personalProjects,
};
