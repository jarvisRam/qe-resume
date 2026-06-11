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
    "Lead QE with 16 years in test automation, performance engineering, and CI/CD — building the testing platform behind FanDuel Sportsbook.",
  summary:
    "Lead Quality Engineer with 16 years across automation, performance, and CI/CD — the last five building the testing platform the whole FanDuel Sportsbook org depends on. I design the systems other engineers test through: AI-driven test automation, statistical performance-regression detection, cross-platform native E2E, and CI I made ~70% faster — and I act as a force multiplier, bridging capability-building and feature teams to raise quality maturity. Earlier I built UI and API automation frameworks from scratch and led offshore test teams across insurance and financial-services clients.",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/SriramVenkataramanlkd" }],
};

export const skills: SkillGroup[] = [
  {
    group: "Test Strategy & Architecture",
    items: [
      "Quality Maturity Model (testing pillars & layers)",
      "Test pyramid & strategy",
      "Gray-box / screen-object patterns",
      "BDD / Gherkin standards",
      "Accessibility testing",
      "Mentoring & enablement",
    ],
  },
  {
    group: "Mobile & E2E Automation",
    items: [
      "Detox (React Native)",
      "Appium / WebdriverIO",
      "wix-pilot (AI / NLP tests)",
      "Percy visual regression",
      "Cypress",
      "Jest / RTL",
      "BrowserStack",
    ],
  },
  {
    group: "Performance & Reliability",
    items: [
      "Perf regression detection (E-Divisive)",
      "Baseline validation & anomaly detection",
      "iOS / Android perf instrumentation",
      "Datadog metrics & events",
      "SLOs & error budgets",
    ],
  },
  {
    group: "CI/CD & Infrastructure",
    items: [
      "Buildkite",
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
      "Own the test strategy and Quality Maturity Model (pillars, layers, maturity levels) for the Sportsbook RN/web monorepo across iOS, Android, and web.",
      "Built a Python E-Divisive + Datadog performance-regression detector that gates CI with under 2% false-positive noise and Slack alerting.",
      "Pioneered AI-driven E2E testing by integrating wix-pilot — tests authored in natural language over a reusable prompt library, not imperative code.",
      "Cut native test runs ~70% (4-way Buildkite/Jest sharding) and test-build time ~80% (180m→30m) via build sharing + a hybrid git-aware cache, backed by Terraform S3 + Bedrock infra.",
      "Built cross-platform native E2E (Appium/WebdriverIO + Detox, Percy visual) and launch-argument testability — runtime env switching, mock injection, testIDs in prod.",
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
      "Delivered an accessibility-regression framework that cut accessibility regression effort ~40%, plus a UI error-handling/mocking framework.",
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
    tagline: "A unified iOS + Android E2E suite covering core betting flows, with visual regression.",
    tags: ["Appium", "WebdriverIO", "Detox", "Percy"],
    metrics: [
      { label: "Appium specs", value: "58" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Visual baselines", value: "Percy" },
    ],
    problem:
      "Betting flows (straight, parlay, SGP, teaser, round-robin) needed reliable automated coverage across both platforms, and UI regressions were slipping through with no automated visual check.",
    approach: [
      "Built an Appium/WebdriverIO acceptance suite (58 specs, ~4k LOC) with page objects, gesture helpers, and BrowserStack configs for iOS and Android.",
      "Authored cross-platform label matchers so a single test body runs on both platforms, and tagged tests for selective PR execution.",
      "Introduced Percy visual-regression baselines for the home-screen sport tabs (MLB, NFL, Basketball, Soccer, Tennis) on both platforms.",
    ],
    impact: [
      "Gave the org dependable automated coverage of revenue-critical bet-placement flows on iOS and Android.",
      "Caught unintended UI changes automatically via Percy baselines on every PR.",
      "Cut manual regression effort through reusable page objects and cross-platform single-source tests.",
    ],
    pdfSummary:
      "Built a 58-spec Appium/WebdriverIO + Detox E2E suite (iOS & Android) with Percy visual regression for core betting flows.",
    stack: ["Appium", "WebdriverIO", "Detox", "Percy", "BrowserStack", "TypeScript"],
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
      "Became foundational plumbing that the Detox and Appium suites rely on.",
    ],
    pdfSummary:
      "Built launch-argument testability (runtime env switching, mock injection, testIDs-in-prod) via a native Swift/Kotlin + RN module — reused by Casino.",
    stack: ["React Native", "Swift", "Kotlin", "Detox", "Native storage"],
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
    title: "Quality Maturity Model & Docs",
    tagline: "Defined the testing pillars, layers, and maturity levels the Sportsbook org tests by.",
    tags: ["Strategy", "Docusaurus", "Mentoring"],
    metrics: [
      { label: "Engineering docs authored", value: "40+" },
      { label: "Scope", value: "Org-wide" },
      { label: "Surfaces", value: "iOS / Android / Web" },
    ],
    problem:
      "Squads tested inconsistently with no shared definition of what 'good' looked like — quality engineering sat as one central capability-building team, distant from the feature teams that needed to adopt it, leaving duplicated effort and uneven coverage.",
    approach: [
      "Defined the testing layers (unit & component → acceptance → E2E) and the per-channel testing pillars (web acceptance, native automation, web E2E, CMS, SB API), published across 40+ Docusaurus pages.",
      "Acted as a force multiplier — bridging the Wolverines capability team and feature squads, and partnering with the Staff QAs operating at pillar level toward a unified quality strategy (automation + manual, not separate).",
      "Paired with squads to adopt the model, balance test-automation utilisation, and migrate brittle high-level tests to faster, more reliable layers.",
    ],
    impact: [
      "Gave the org a single, documented language and target for quality maturity across iOS, Android, and web.",
      "Drove adoption by embedding closer to feature teams, so each owns its quality outcome.",
      "Turned one-off automation work into a repeatable, teachable system across the Sportsbook channels.",
    ],
    pdfSummary:
      "Defined the org's testing layers, pillars & maturity model (40+ docs) and acted as a force multiplier driving quality-engineering adoption across feature teams.",
    stack: ["Docusaurus", "Test strategy", "Quality maturity", "Mentoring"],
  },

  // ── Earlier career (Cognizant, 2010–2021) ──
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
      "A serious personal project to validate the claims of big AI tech CEOs around million-dollar single-person startups — built end to end with AI assistance. A full-stack monorepo: a React Native / Expo mobile app and a Node.js + Express REST backend, with Maestro mobile flows for automated testing. The whole build process was documented to honestly evaluate what AI-assisted solo development actually enables.",
    pdfSummary:
      "React Native / Expo + Node.js/Express monorepo built solo with AI assistance — a documented experiment to validate AI-first single-person startup claims.",
    stack: ["React Native", "Expo", "Node.js", "Express", "Maestro", "Zustand", "React Query"],
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

export const resume = {
  profile,
  skills,
  experiences,
  education,
  certifications,
  aiExpertise,
  accomplishments,
  personalProjects,
};
