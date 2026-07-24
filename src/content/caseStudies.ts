// ─────────────────────────────────────────────────────────────────────────
// Case-study data — copied verbatim from the Nocturne design handoff
// (CaseStudy.dc.html`s DATA object + ORDER list). Drives /work/[slug].
// ─────────────────────────────────────────────────────────────────────────

export type CaseStudyMetric = { n: string; l: string };

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  tagline: string;
  stack: string[];
  metrics: CaseStudyMetric[];
  problem: string;
  approach: string[];
  impact: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "perf-detector": {
    slug: "perf-detector",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "Performance Regression Detector",
    tagline: "Statistical changepoint detection that catches performance regressions in CI before they ship.",
    stack: ["Python", "E-Divisive", "Datadog", "Buildkite", "Slack"],
    metrics: [
      { n: "<2%", l: "false-positive / noise filter" },
      { n: "In CI", l: "gated before merge, not after release" },
    ],
    problem:
      "Performance regressions were slipping through because thresholds are a blunt instrument — set them tight and CI drowns in false alarms, set them loose and real regressions ship. The team needed a signal that could tell a genuine step-change from ordinary run-to-run noise, automatically, on every build.",
    approach: [
      "Applied E-Divisive changepoint detection over the Datadog performance time-series to statistically locate where a metric's distribution actually shifts — rather than comparing against a static threshold.",
      "Tuned the detector to keep false-positive noise under 2%, so alerts stay trustworthy and engineers act on them.",
      "Wired it into Buildkite CI with Slack alerting, so a regression surfaces to the owning team with context the moment it's introduced.",
      "Paired it with a multi-agent 'Performance Impact Review' skill that pinpoints the commit range, analyses the diff and drafts a remediation plan.",
    ],
    impact: [
      "Perf regressions are now caught in CI before they reach production, not diagnosed after users feel them.",
      "Under-2% noise meant the gate earned engineers' trust instead of being muted like most perf alarms.",
      "Became the reference example of statistical, shift-left quality gating across the Sportsbook org.",
    ],
  },
  "ai-test-automation": {
    slug: "ai-test-automation",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "AI-Driven Test Automation",
    tagline: "Tests authored in plain English across Detox, Cypress and Appium — not imperative code.",
    stack: ["wix-pilot", "cy.prompt()", "Detox", "Appium", "LLM"],
    metrics: [
      { n: "Plain English", l: "test intent over imperative code" },
      { n: "Org-wide", l: "reusable prompt library" },
    ],
    problem:
      "Imperative E2E code is expensive to write, brittle against UI change and gatekept behind framework expertise. Feature teams wanted to express test intent without learning each framework's API, and the org wanted tests that survive refactors.",
    approach: [
      "Pioneered AI-driven E2E by integrating wix-pilot and cy.prompt() so tests are authored in natural language over Detox, Cypress and Appium.",
      "Built a reusable prompt library so intent — not selectors — is the unit of a test, shared across teams.",
      "Kept a plan-and-implement flow: the AI produces a reviewed plan first, then implements against it, keeping generated tests deliberate and verifiable.",
    ],
    impact: [
      "Lowered the barrier for feature engineers to author their own E2E coverage.",
      "Tests describe behaviour, so they're more resilient to UI churn than selector-bound scripts.",
      "Established a repeatable pattern for natural-language testing that other teams adopted.",
    ],
  },
  "ci-acceleration": {
    slug: "ci-acceleration",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "CI Acceleration",
    tagline: "Cut native test runs ~70% and test-build time ~80% — without touching a line of test code.",
    stack: ["Buildkite", "Jest sharding", "Build caching", "Bash", "Terraform"],
    metrics: [
      { n: "~70%", l: "faster native test runs" },
      { n: "180m → 30m", l: "test-build time (~80% cut)" },
    ],
    problem:
      "Slow CI is a tax on every engineer, every day — long native test runs and multi-hour test builds throttled how fast the whole org could merge. The win had to come from infrastructure, not from weakening or deleting tests.",
    approach: [
      "Introduced 4-way Buildkite/Jest sharding to parallelise the native test suite.",
      "Built build sharing plus a hybrid, git-aware build cache so unchanged work is never rebuilt.",
      "Provisioned the S3 cache and access with Terraform and owned it as shared infrastructure.",
    ],
    impact: [
      "Native test runs dropped ~70% and test-build time ~80% (180m → 30m) — with test coverage untouched.",
      "Faster feedback loops across every team merging into the monorepo.",
      "A concrete example of quality engineering delivering measurable developer-experience ROI.",
    ],
  },
  "native-e2e": {
    slug: "native-e2e",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "Cross-Platform Native E2E",
    tagline: "A unified iOS + Android E2E suite covering the core betting flows, with visual regression.",
    stack: ["Appium", "WebdriverIO", "Detox", "Percy"],
    metrics: [
      { n: "58", l: "Appium specs across iOS + Android" },
      { n: "1 suite", l: "unified across both platforms" },
    ],
    problem:
      "iOS and Android betting flows needed real end-to-end confidence, but maintaining separate per-platform suites doubles the cost and lets the two drift apart in coverage.",
    approach: [
      "Built cross-platform native E2E on Appium/WebdriverIO alongside Detox, covering the core betting journeys.",
      "Added Percy visual regression so UI changes are caught pixel-level, not just functionally.",
      "Used screen-object / gray-box patterns so specs stay readable and maintainable as the app evolves.",
    ],
    impact: [
      "58 specs give unified coverage of the flows that matter most to revenue.",
      "Visual regression catches UI defects that functional assertions miss.",
      "One suite to reason about instead of two diverging ones.",
    ],
  },
  "quality-maturity-model": {
    slug: "quality-maturity-model",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "Quality Maturity Model & Docs",
    tagline: "Defined the shift-left testing pillars, layers and maturity model the Sportsbook org tests by.",
    stack: ["Strategy", "Shift-left", "Docusaurus", "Mentoring"],
    metrics: [
      { n: "40+", l: "engineering docs authored" },
      { n: "Org-wide", l: "the model teams are measured against" },
    ],
    problem:
      "Quality maturity is uneven without a shared definition of 'good'. Teams need an explicit model — pillars, layers, levels — to know where they stand and what to improve next, and the strategy has to be written down to scale beyond any one person.",
    approach: [
      "Defined the testing pillars and layers and a maturity model with concrete levels teams can assess against.",
      "Authored 40+ engineering docs (Docusaurus) codifying shift-left practice: prevent defects rather than catch them.",
      "Championed acceptance suites against mocked environments and contract testing to guard integration boundaries.",
      "Acted as a force multiplier — bridging capability-building and feature teams and mentoring toward higher maturity.",
    ],
    impact: [
      "Gave the whole Sportsbook org a common language and yardstick for quality.",
      "Made the strategy durable and teachable rather than tribal knowledge.",
      "Raised quality maturity across teams through a shared, measurable framework.",
    ],
  },
  "sonarcloud-quality-gates": {
    slug: "sonarcloud-quality-gates",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "SonarCloud Quality Gates",
    tagline: "PR-blocking quality gates that lifted codebase coverage from 55% to 70% and cut duplication from 45% to 20%.",
    stack: ["SonarCloud", "Quality gates", "Unit testing", "CI"],
    metrics: [
      { n: "55% → 70%", l: "unit-test coverage, across the board" },
      { n: "45% → 20%", l: "code duplication" },
    ],
    problem:
      "Code health was drifting — coverage sat around 55% and duplication near 45% — because nothing enforced a baseline at merge time. Quality depended on reviewer diligence, so gaps and copy-paste crept in one pull request at a time.",
    approach: [
      "Implemented SonarCloud across the repo and configured quality gates that block any pull request lacking sufficient unit-test coverage.",
      "Extended the gates to enforce readability, maintainability and security standards — not coverage alone.",
      "Wired the gate into CI so it fails the PR check automatically, making quality a merge precondition rather than a review afterthought.",
    ],
    impact: [
      "Lifted codebase unit-test coverage from 55% to 70% across the board.",
      "Cut code duplication from 45% to 20%.",
      "Turned code health into an enforced, org-wide standard instead of a reviewer's judgement call.",
    ],
  },
  testability: {
    slug: "testability",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "Launch-Argument Testability",
    tagline: "Runtime environment switching, mock injection and testIDs that survive production builds.",
    stack: ["React Native", "Swift", "Kotlin", "DX"],
    metrics: [
      { n: "4", l: "switchable environments at runtime" },
      { n: "Prod-safe", l: "testIDs that survive release builds" },
    ],
    problem:
      "Automated tests are only as good as the app's testability. Without runtime hooks, tests resort to brittle workarounds, can't isolate dependencies and lose their anchors in production builds — hurting both reliability and developer experience.",
    approach: [
      "Added launch-argument driven runtime environment switching across 4 environments.",
      "Built mock injection so tests can isolate the app from flaky downstream dependencies.",
      "Ensured testIDs persist into production builds by working across React Native, Swift and Kotlin layers.",
    ],
    impact: [
      "Made the app genuinely testable — the foundation the E2E suite depends on.",
      "Improved developer experience: less test scaffolding, more reliable anchors.",
      "A clear case of addressing testability at the source for the best ROI.",
    ],
  },
  "qa-env-smoke": {
    slug: "qa-env-smoke",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "QA Environment Smoke Framework",
    tagline: "Turned six months of silent QA-environment failures into automated, alerted detection.",
    stack: ["Monitoring", "Smoke tests", "Reliability", "Alerting"],
    metrics: [
      { n: "76+", l: "issues surfaced over 6 months" },
      { n: "0 → alerted", l: "silent failures now detected" },
    ],
    problem:
      "QA environments were failing silently — broken in ways nobody noticed until a test run wasted time or a defect leaked. Six months of these failures were going undetected.",
    approach: [
      "Built a smoke-test framework that continuously exercises QA environments and asserts they're healthy.",
      "Added alerting so environment breakage surfaces immediately instead of being discovered by accident.",
      "Treated environment health as a first-class reliability signal, not an afterthought.",
    ],
    impact: [
      "Surfaced 76+ issues over six months that had previously been silent.",
      "Stopped wasted test cycles and false test failures caused by broken environments.",
      "Made environment reliability observable and owned.",
    ],
  },
  "test-infra": {
    slug: "test-infra",
    tag: "FanDuel · Sportsbook · 2022–Present",
    title: "Build-Cache & AI Test Infrastructure",
    tagline: "Terraform-provisioned S3 build cache and Bedrock access powering CI, owned as shared infra.",
    stack: ["Terraform", "AWS S3", "IAM", "Bedrock"],
    metrics: [
      { n: "IaC", l: "reproducible, versioned provisioning" },
      { n: "Shared", l: "infra other teams build on" },
    ],
    problem:
      "The CI accelerations and AI-driven testing needed real infrastructure underneath — a build cache and model access that were reproducible, secure and owned rather than hand-provisioned and fragile.",
    approach: [
      "Provisioned an S3 build cache with Terraform, with IAM scoped for CI's needs.",
      "Set up AWS Bedrock access to power AI-driven test tooling.",
      "Owned it as shared infrastructure the wider org's CI depends on.",
    ],
    impact: [
      "Gave CI acceleration and AI testing a durable, reproducible foundation.",
      "Infrastructure-as-code means it's versioned, reviewable and repeatable.",
      "Quality engineering owning shared infra — not just consuming it.",
    ],
  },
  "accessibility-automation": {
    slug: "accessibility-automation",
    tag: "Cognizant · Royal London / Resonate · 2017–2021",
    title: "Accessibility Regression Automation",
    tagline: "A Protractor framework that automated accessibility regression and saved ~40% of the effort.",
    stack: ["Protractor", "Accessibility", "Azure DevOps"],
    metrics: [
      { n: "−40%", l: "accessibility regression effort" },
      { n: "Automated", l: "was manual and repetitive" },
    ],
    problem:
      "Accessibility regression testing was manual, repetitive and easy to skip under delivery pressure — meaning a11y quality quietly eroded between releases.",
    approach: [
      "Built a Protractor framework that automates accessibility regression checks.",
      "Integrated it into Azure DevOps pipelines so a11y is verified on every run.",
      "Standardised the approach so it was reusable across the client's suites.",
    ],
    impact: [
      "Cut accessibility regression effort by ~40%.",
      "Made a11y a consistent, automated gate instead of a manual chore.",
      "Freed testers for higher-value exploratory work.",
    ],
  },
  "api-framework": {
    slug: "api-framework",
    tag: "Cognizant · Financial services · 2017–2021",
    title: "API Test Framework & Assertion Library",
    tagline: "A ReadyAPI framework with a custom Groovy validation library, reused across E2E testing.",
    stack: ["ReadyAPI", "Groovy", "API testing"],
    metrics: [
      { n: "Reusable", l: "assertion library across suites" },
      { n: "From scratch", l: "built the framework end to end" },
    ],
    problem:
      "API validation was ad-hoc and duplicated across suites, with no shared way to express and reuse assertions — so coverage was inconsistent and maintenance costly.",
    approach: [
      "Built a ReadyAPI-based API test framework from scratch.",
      "Wrote a custom Groovy assertion library so validations are expressed once and reused.",
      "Reused the library across E2E testing to keep checks consistent.",
    ],
    impact: [
      "Consistent, reusable API validation across the client's testing.",
      "Lower maintenance through a shared assertion library.",
      "Raised the baseline of API test quality.",
    ],
  },
  "test-leadership": {
    slug: "test-leadership",
    tag: "Cognizant · Voya Financial · 2010–2017",
    title: "Offshore Test Leadership & Enablement",
    tagline: "Led a 7-person offshore team and seeded automation and best-practice standards.",
    stack: ["Leadership", "Selenium", "TestNG", "Enablement"],
    metrics: [
      { n: "7", l: "engineers led offshore" },
      { n: "5", l: "modules delivered across" },
    ],
    problem:
      "A large offshore engagement needed capacity planning, consistent knowledge transfer and a push from manual toward automation — all while keeping delivery reliable across multiple modules.",
    approach: [
      "Led a 7-member offshore test team for Voya Financial — capacity planning, cross-module KT and status reporting across five modules.",
      "Kick-started automation with a Selenium/TestNG POC and Excel-macro tooling.",
      "Delivered functional and regression testing for Travelers and Lincoln Financial.",
    ],
    impact: [
      "Kept multi-module delivery reliable across a distributed team.",
      "Seeded automation and best-practice standards that outlasted the engagement.",
      "Grew testers' capability through hands-on enablement.",
    ],
  },
};

export const caseStudyOrder: string[] = [
  "perf-detector",
  "ai-test-automation",
  "ci-acceleration",
  "native-e2e",
  "quality-maturity-model",
  "sonarcloud-quality-gates",
  "testability",
  "qa-env-smoke",
  "test-infra",
  "accessibility-automation",
  "api-framework",
  "test-leadership",
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAdjacentCaseStudies(slug: string): { prev: CaseStudy; next: CaseStudy } {
  const idx = caseStudyOrder.indexOf(slug);
  const prevSlug = caseStudyOrder[(idx - 1 + caseStudyOrder.length) % caseStudyOrder.length];
  const nextSlug = caseStudyOrder[(idx + 1) % caseStudyOrder.length];
  return { prev: caseStudies[prevSlug], next: caseStudies[nextSlug] };
}
