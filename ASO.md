# Agent Signal Optimization (ASO)
## The Definitive Framework for Making Services Discoverable, Understandable, and Invocable by AI Agents

**Version:** 1.0  
**Date:** July 2025  
**Status:** Category-defining document  
**Read time:** 15 minutes

---

> *"If SEO was about ranking for humans, ASO is about signaling for agents."*

---

## Who This Document Is For

This file is intentionally readable by both humans and agents.

For humans, it explains the category in plain language: what Agent Signal
Optimization is, why it matters, how it compares to SEO, and what a team should
publish first.

For agents, it is structured as clean Markdown with stable headings, tables,
checklists, and signal names that can be parsed, quoted, summarized, and used as
implementation guidance.

If you are reading this in a browser at `/ASO.md`, you are seeing the source
document directly. That is expected. The public homepage turns this same
framework into a more visual guide, while this file stays lightweight,
citable, and easy for machines to read.

## Quick Navigation

- [What Is Agent Signal Optimization?](#1-what-is-agent-signal-optimization)
- [Why ASO Matters Now](#2-why-aso-matters-now)
- [How ASO Is Measured](#3-how-aso-is-measured-the-agent-readiness-index)
- [The 6 Pillars of ASO](#4-the-6-pillars-of-aso)
- [SEO to ASO Translation Map](#seo-to-aso-translation-map)

## Plain-English Summary

SEO helped websites become understandable to search engines so humans could
find them.

ASO helps services become understandable to autonomous agents so agents can use
them.

The practical difference is this: SEO asks, "Can a search engine rank this
page?" ASO asks, "Can an agent find this service, understand what it does, trust
it, call it, pay for it, and remember it later?"

---

## 1. What Is Agent Signal Optimization?

**Agent Signal Optimization (ASO)** is an open framework that helps organizations navigate and implement emerging agent standards and technologies.

ASO is built on emerging agent-readiness standards, discovery conventions, and commerce protocols including A2A, MCP, x402, llms.txt, Agent Readiness, and agent discovery initiatives. It does not claim to invent those technologies; it organizes them into a practical framework teams can use.

It is the successor discipline to Search Engine Optimization (SEO). Where SEO optimized for human searchers clicking through blue links, ASO optimizes for autonomous agents that discover, evaluate, invoke, and pay for services without human intervention.

### The Translation Frame

Every major technology shift requires a new optimization discipline:

| Era | Optimizer | Target | Discipline | Key Signal |
|-----|-----------|--------|------------|------------|
| 1998-2010 | Webmasters | Crawlers | SEO | Keywords, backlinks, PageRank |
| 2010-2020 | Content teams | Searchers | SEO 2.0 | Intent matching, UX, mobile |
| 2020-2024 | Marketers | Answer engines | AEO/GEO | Featured snippets, citations |
| 2025+ | **Engineers & Product** | **Autonomous Agents** | **ASO** | **Signals, protocols, manifests** |

**SEO was about persuading a search engine to rank you.** ASO is about persuading an autonomous agent to *choose you* - to find you among millions of alternatives, understand what you do, trust you enough to try you, invoke your capabilities, pay you for the privilege, and remember you for next time.

### SEO to ASO Translation Map

The table below is a practical bridge for marketers, founders, and technical
teams who already understand SEO.

| SEO concept | What it optimized | ASO equivalent | What changes |
|-------------|-------------------|----------------|--------------|
| `robots.txt` | Crawler permissions | `robots.txt` with AI crawler policy | Teams distinguish indexing, retrieval, training, and agent access. |
| `sitemap.xml` | URL discovery | `sitemap.xml` plus `llms.txt` | Agents need both URL inventory and a curated reading path. |
| Meta title and description | Search result snippets | `agent.json` and schema.org | Agents need service identity, owner, type, and capabilities. |
| Structured data | Entity context | OpenAPI, MCP, and well-known manifests | Agents need callable interfaces, auth, parameters, and errors. |
| Backlinks | Authority | Registry listings and reputation signals | Agents compare services using evidence, not only popularity. |
| Conversion funnel | Human action | Agent-safe invocation and payment path | Agents need documented auth, pricing, policy, and payment constraints. |
| Brand recall | Human memory | Persistent service memory | Agents return through stable IDs, URLs, versions, and manifests. |

### What ASO Is Not

ASO is **not** Generative Engine Optimization (GEO). GEO is about getting cited in AI-generated responses - a content-marketing discipline. ASO is deeper: it's about making your *service* agent-discoverable and agent-invocable. GEO is about being mentioned. ASO is about being **used**.

ASO is **not** about gaming algorithms. It's about honest signaling - emitting clear, verifiable, machine-readable signals that describe what your service does, how well it does it, and why an agent should choose it.

---

## 2. Why ASO Matters Now

### The Interface Shift

AI agents are becoming the primary interface between users and services. Not a search box. Not an app store. An agent that reasons, plans, selects tools, executes, and pays - all autonomously.

When a user says *"Find me the best transcription API for medical audio, run a test, and set up a subscription if it passes"* - they are not Googling. They are delegating to an agent. That agent will:

1. **Discover** transcription APIs by crawling directories and manifests
2. **Evaluate** them by reading llms.txt, OpenAPI specs, and schema markup
3. **Test** the most promising one by invoking its endpoints
4. **Verify** its reputation through citation signals and usage metrics
5. **Pay** for it - if the service supports agent-readable payment protocols
6. **Remember** it for future medical-audio tasks

If your service doesn't emit the right signals at each step, you are invisible. Not ranked poorly. **Invisible.**

### The Economic Argument

Services that are agent-optimized will capture disproportionate value. The data is already clear:

| Signal | Data Point | Source |
|--------|-----------|--------|
| AI-referred traffic converts **42% better** than non-AI traffic | Adobe, March 2026 | Adobe Analytics |
| AI-referred traffic grew **393% YoY** in Q1 2026 | Adobe, March 2026 | Adobe Analytics |
| **86%** of 6.8M AI citations come from brand-controlled sources | Yext | Yext Research |
| GEO tactics lift source visibility by up to **40%** in AI responses | Princeton/Georgia Tech | Research paper |
| Only **1 in 10** developer tools pass agent-readiness scans | Petter Strale | Developer survey |

The services that invest in ASO today are building the equivalent of a PageRank advantage in 1999. They will be the defaults agents reach for - not because they're the best, but because they're the *discoverable*.

### The Competitive Moat

Being discoverable by agents is becoming as essential as being discoverable by Google. Consider:

- **844,000+ websites** have implemented `llms.txt` (BuiltWith, October 2025)
- **26,000+ MCP servers** are listed across discovery directories
- Chrome Lighthouse now audits for `llms.txt` presence
- Yet only **1 in 10 developer tools** pass a basic agent-readiness scan

The window is open. The agents are coming. Most services are not ready.

### The Invisible Catastrophe

Here is the single most important fact about ASO: **Most services are invisible to agents right now.**

Not underperforming. Invisible.

An agent cannot invoke what it cannot find. It cannot find what doesn't emit signals. And right now, the vast majority of APIs, SaaS products, and online services emit no signals at all. No `llms.txt`. No `/.well-known/ai`. No schema markup. No MCP manifest. No `openapi.json`. They exist in a world built for human browsers, not agent crawlers.

This is the invisible catastrophe: billions of dollars in API value, locked behind human-only interfaces, completely opaque to the agents that are about to become the primary consumers.

The businesses that fix this first will be the ones agents recommend, invoke, and remember.

---

## 3. How ASO Is Measured: The Agent Readiness Index

### The ASO Score

We propose the **Agent Readiness Index (ARI)** - a concrete, auditable scoring framework for measuring how well a service is optimized for agent discovery and invocation.

The ARI is scored from **0 to 100**, mapped to six maturity levels:

| Level | Name | Score | Description |
|-------|------|-------|-------------|
| **ASO-0** | Invisible | 0-9 | No agent signals. Agents cannot find or understand you. |
| **ASO-1** | Discoverable | 10-29 | Basic crawl signals present. Agents can find you, but not understand what you do. |
| **ASO-2** | Understandable | 30-49 | Agents can read what you do. Clear identity, structured data, readable docs. |
| **ASO-3** | Invocable | 50-69 | Agents can call your APIs. OpenAPI specs, auth clarity, MCP endpoints. |
| **ASO-4** | Trustable | 70-89 | Agents can verify and trust you. Reputation signals, governance, provenance. |
| **ASO-5** | Autonomous-Commerce-Ready | 90-100 | Full agent commerce loop. Payable, memorable, self-reinforcing reputation. |

### Scoring Rubric (100 Points)

| Category | Signals | Max Points |
|----------|---------|------------|
| **Discoverability** (Pillar 1) | robots.txt AI rules, sitemap.xml, llms.txt, well-known endpoints, directory listings | 20 |
| **Identity** (Pillar 2) | Schema.org markup, OpenAPI spec, agent.json, semantic documentation | 20 |
| **Trust** (Pillar 3) | SSL/TLS, domain authority, verifiable credentials, auth standards, governance | 15 |
| **Commerce** (Pillar 4) | x402 endpoints, payment manifests, pricing signals, facilitator registration | 15 |
| **Reputation** (Pillar 5, emerging) | Citation signals, usage metrics, success rates, directory reviews, endorsements | 15 |
| **Memory** (Pillar 6) | llms.txt quality, persistent identity, consistent signals, brand recall | 15 |

### Agent Signal Stack

ASO is not one file. It is the full public signal stack an agent can inspect before deciding whether to cite, invoke, trust, buy from, or remember a service.

| Layer | Why Agents Care | Files, Headers, or Endpoints |
|-------|-----------------|------------------------------|
| Discovery | Find the right paths without guessing or crawling blindly | `robots.txt`, `sitemap.xml`, HTTP `Link` headers, DNS-AID or DNS-level agent discovery signals where supported |
| Content Access | Read high-signal content cheaply and reliably | `llms.txt`, Markdown negotiation with `Accept: text/markdown`, `/index.md` fallbacks |
| Bot Access Control | Know what AI systems may crawl, search, train on, or use as input | AI crawler rules, `Content-Signal` directives, Web Bot Auth, `/.well-known/http-message-signatures-directory` |
| Capabilities | Discover callable APIs, tools, auth flows, and task instructions | `/.well-known/api-catalog`, OAuth metadata, `auth.md`, MCP Server Cards, A2A Agent Cards, Agent Skills, WebMCP |
| Commerce | Understand price, payment terms, purchase rules, and agent-safe checkout | Machine-readable pricing, `/.well-known/payments`, x402, MPP, UCP, ACP |
| Verification | Check whether the claim is real, current, consistent, and auditable | Syntax validation, reachable URLs, status pages, provenance, reputation, public reports, reproducible scan evidence |

The phase-1 ASO scanner is a self-assessment of visible basics. A full ASO crawler should automate this stack, map failures to the Agent Readiness Index, and generate a remediation plan.

### How ASO Differs From Agent Readiness

Agent readiness is technical compliance: can agents find, read, authenticate, and discover what is available?

Agent Signal Optimization is broader: will agents choose the service, trust it, cite it, invoke it, pay for it, and return to it?

The distinction mirrors the difference between Lighthouse and SEO. Technical readiness matters, but technical readiness alone does not prove visibility, authority, reputation, conversion, or long-term selection.

| Topic | Agent Readiness | ASO |
|-------|-----------------|-----|
| `robots.txt` | Yes | Yes |
| `sitemap.xml` | Yes | Yes |
| `llms.txt` and Markdown access | Yes | Yes |
| MCP, API, and auth discovery | Yes | Yes |
| Trust and provenance | Partial | Yes |
| Reputation and third-party evidence | No | Yes |
| Commerce readiness and purchase rules | Partial | Yes |
| Memory and return paths | No | Yes |
| Agent traffic, citations, and conversions | No | Yes |

Layer model:

1. Agent Readiness: technical compliance.
2. Agent Signal Optimization: discovery, identity, trust, commerce, reputation, and memory.
3. Agent Performance: actual agent traffic, citations, invocations, conversions, and returns.

### Applicability: Which Signals Matter When?

Not every service needs every ASO signal on day one. The right signal stack depends on what an agent can actually do with the service.

| Service Type | Relevant Signals | Not Required Until |
|--------------|------------------|--------------------|
| Static reference site or content site | `robots.txt`, `sitemap.xml`, `llms.txt`, Markdown pages, schema, manifests, status, citations, canonical links | API Catalog, OAuth, MCP, A2A, x402, and checkout protocols are not required until the site exposes callable tools, protected resources, or autonomous purchase flows |
| API or SaaS product | OpenAPI, API Catalog, auth docs, OAuth metadata, status, rate limits, pricing, support and escalation paths | MCP, A2A, or commerce protocols are not required unless agents can invoke tools or buy directly |
| MCP server or agent tool | MCP Server Card, Agent Skills, tool schemas, transport details, auth rules, examples, versioning | x402 and commerce protocols are not required unless paid usage or purchasing is available |
| Commerce, marketplace, booking, or paid endpoint | Machine-readable pricing, payment manifest, purchase limits, refund rules, x402 or other commerce discovery standards | OAuth and MCP are optional unless the agent needs user-delegated access or callable tools |

### Advanced Signal Implementation Map

| Signal | What It Is | How to Get It |
|--------|------------|---------------|
| Markdown negotiation | Returning clean Markdown when an agent sends `Accept: text/markdown` | Add server middleware, edge rules, or static `/index.md` fallbacks for important pages. AgentSignalOptimization.com implements this for the homepage with `_worker.js`. |
| DNS-AID or DNS-level discovery signals | DNS-level hints for AI-facing resources, where supported | Add supported DNS records when the convention and DNS host support them; treat as emerging |
| Content Signals | Robots directives for search, grounding/input, and AI training preferences | Add `Content-Signal` rules to `robots.txt` once the content policy is clear |
| Web Bot Auth | Signed bot requests and public-key discovery for identifying legitimate agents | Publish the well-known key directory and verify request signatures at the edge or app layer |
| API Catalog | A well-known index of APIs, specs, docs, status pages, and auth requirements | Create `/.well-known/api-catalog` once the service has callable public APIs |
| OAuth metadata | Machine-readable auth-server and protected-resource discovery | Expose OAuth well-known metadata when agents need delegated access on behalf of users |
| MCP Server Card | Metadata that lets agents discover an MCP server, tools, transport, and auth | Publish the server card when the service has an MCP endpoint |
| A2A Agent Card | Metadata for agent-to-agent capabilities and interaction | Publish at the current recommended well-known path when another agent can delegate tasks to this service |
| Agent Skills | Skill documents that explain tasks an agent can perform with the service | Publish an index and skill docs when agent workflows need step-by-step operating instructions |
| WebMCP | Browser-exposed tool discovery for web pages | Add when page-level tools can be safely exposed to compatible agent browsers |
| x402, MPP, UCP, ACP | Agentic commerce protocols for price discovery, payment, purchase, and checkout | Implement when an agent can buy, book, unlock, or pay without a human checkout flow |

AgentSignalOptimization.com currently publishes core static ASO signals, response `Link` headers, `Content-Signal` headers, Markdown fallback files, and homepage Markdown negotiation. DNS-AID or DNS-level agent discovery signals and signed bot/auth/tool/payment protocols still require DNS or service-specific implementation.

### Key Performance Indicators (KPIs)

| KPI | Definition | How to Measure |
|-----|-----------|----------------|
| **Agent Crawl Rate** | % of agent bot requests that successfully reach your service | Log analysis for GPTBot, ClaudeBot, ChatGPT-User, etc. |
| **Agent Citation Rate** | How often your service is referenced in agent-generated outputs | Brand mention tracking in AI search (Perplexity, ChatGPT Search) |
| **Agent Invocation Rate** | API calls initiated by identified agent user-agents | API gateway analytics by User-Agent header |
| **Agent Conversion Rate** | % of agent-initiated sessions that complete a business goal | Funnel tracking for agent-originated traffic |
| **Agent Return Rate** | % of agent sessions that return within 30 days | Cohort analysis of agent User-Agent patterns |

---

## 4. The 6 Pillars of ASO

### Pillar 1: Discoverability - Can Agents Find Me?

If agents can't find you, nothing else matters. Discoverability is the foundation of ASO.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| `robots.txt` with AI bot rules | **Required** | Low | Established |
| `sitemap.xml` | **Required** | Low | Established |
| `llms.txt` | **High** | Low | Emerging (844K+ sites) |
| `/.well-known/ai` (IETF draft) | **High** | Low | Standardizing |
| A2A Agent Card paths and related agent discovery manifests | Medium | Low | Emerging |
| MCP directory submission | **High** | Medium | Emerging (26K+ servers) |
| GitHub discoverability | Medium | Medium | Emerging |

**Key Signals:**

- **`robots.txt`**: Must include explicit rules for AI crawlers - both training crawlers (GPTBot, ClaudeBot, Google-Extended) and retrieval crawlers (ChatGPT-User, PerplexityBot, OAI-SearchBot). Differentiate between "allow indexing" and "allow training." 2.5M+ websites already use Cloudflare's managed AI crawler rules.
- **`sitemap.xml`**: The classic content map. Still essential. List all indexable URLs with `lastmod`, `priority`, and `changefreq`.
- **`llms.txt`**: An emerging convention and proposal. A Markdown file at `/llms.txt` with a curated reading list for LLMs. H1 title, blockquote summary, H2 sections with links. Takes <10 minutes to implement. 844K+ sites already have it.
- **`/.well-known/ai`**: The IETF Internet-Draft (March 2026). A JSON manifest describing service identity, capabilities, auth, and operational hints. Token-optimized: 200-800 tokens for 5 capabilities vs. 5,000-20,000 for equivalent OpenAPI. Implementation time: <30 minutes.
- **MCP Directories**: Submit your MCP server to the major directories (MCPWorld, MCP.so, Glama, Smithery, PulseMCP, Anthropic's official collection). 26,000+ servers are listed - but that's a fraction of the APIs that exist.
- **GitHub**: For code-based tools, ensure your repo has a clear README, relevant topics/tags, and optionally `/.well-known/mcp.json`, `llms.txt`, or `skill.md` files.

**Quick-Start Checklist:**

- [ ] Add AI bot rules to `robots.txt` (GPTBot, ClaudeBot, ChatGPT-User, PerplexityBot)
- [ ] Ensure `sitemap.xml` is complete and current
- [ ] Create `llms.txt` with a curated summary of your service
- [ ] Submit MCP server to 3+ directories if applicable
- [ ] Monitor `/.well-known/ai` IETF draft for finalization

---

### Pillar 2: Identity - Can Agents Understand Who I Am?

Being found is useless if agents don't understand what you do. Identity is about emitting clear, structured, machine-readable descriptions of your service.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| `schema.org` / JSON-LD | **High** | Medium | Established |
| `openapi.json` | **High** | Medium | Established |
| `agent.json` | **High** | Low | Emerging |
| `llms.txt` (quality) | **High** | Low | Emerging |
| LLM-readable documentation | **High** | Medium | Best practice |
| Semantic markup | Medium | Low | Established |

**Key Signals:**

- **`schema.org` / JSON-LD**: Use `WebAPI`, `SoftwareApplication`, `SoftwareSourceCode`, `Organization`, and `Dataset` types. This is the semantic web layer - it tells agents *what* your service is, not just *how* to call it.
- **`openapi.json`**: The technical contract layer. Host at a predictable URL. Include complete endpoint descriptions, parameter docs, response schemas, and error codes. Reference it in your `llms.txt` so crawlers find it immediately. Note: a 10-endpoint spec consumes 5,000-20,000 tokens - consider pairing with `/.well-known/ai` for lightweight discovery.
- **`agent.json`**: The emerging universal agent manifest. Includes service type, version, base URL, compatibility, auth requirements, and capabilities. Example: `skillboss.co/agent.json`.
- **LLM-readable documentation**: Write documentation that LLMs parse well - clear headings, structured sections, code examples with context, no reliance on visual layout or JavaScript interactivity.

**Quick-Start Checklist:**

- [ ] Add JSON-LD schema markup (`WebAPI`, `SoftwareApplication`, `Organization`)
- [ ] Ensure `openapi.json` is complete and hosted at a predictable URL
- [ ] Create `agent.json` with service identity and capabilities
- [ ] Write or optimize `llms.txt` with clear, structured service description
- [ ] Reference `openapi.json` in `llms.txt`

---

### Pillar 3: Trust - Can Agents Verify Me?

Agents will not invoke services they cannot verify. Trust signals reduce risk for autonomous systems making decisions without human oversight.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| SSL/TLS (HTTPS) | **Required** | Low | Established |
| Domain authority | **High** | High | Established |
| Verifiable credentials | Medium | High | Emerging |
| Provenance tracking | Medium | Medium | Emerging |
| Auth standards (OAuth 2.0, API keys) | **High** | Medium | Established |
| `/.well-known/governance.json` | Low | Low | Early draft |

**Key Signals:**

- **SSL/TLS**: Table stakes. No HTTPS = no agent trust.
- **Domain authority**: Established domains with clean histories, valid DNS records, and consistent uptime. Agents will weigh domain age and reputation.
- **Auth clarity**: Document your authentication method clearly in `openapi.json` and `/.well-known/ai`. Agents need to know *how* to authenticate before they can invoke.
- **Verifiable credentials**: Emerging. DID-based credentials that prove service identity cryptographically.
- **Governance disclosures**: `/.well-known/governance.json` for AI governance services - publish your algorithms, data handling practices, and compliance status.

**Quick-Start Checklist:**

- [ ] Ensure HTTPS is enforced everywhere
- [ ] Document auth methods clearly in `openapi.json`
- [ ] Add auth requirements to `/.well-known/ai` or `agent.json`
- [ ] Monitor verifiable credentials standards for maturity

---

### Pillar 4: Commerce - Can Agents Pay Me?

This is the frontier. Without a payment protocol, agents are limited to free APIs or pre-registered accounts. Commerce signals unlock true machine-to-machine economics.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| x402 endpoints | Medium | Medium | Emerging (May 2025) |
| Payment manifests | Medium | Medium | Emerging |
| Pricing signals in `/.well-known/ai` | Medium | Low | Emerging |
| USDC/stablecoin support | Medium | Medium | Early |
| Facilitator registration | Low | High | Early |

**Key Signals:**

- **x402 protocol**: Coinbase's open payment standard (May 2025). Leverages HTTP 402 "Payment Required." If a request lacks payment, the server responds with 402, the agent pays via USDC, and retries. Backed by Coinbase, Cloudflare, AWS, Anthropic, Circle. Live implementations at Neynar, Hyperbolic, Token Metrics, QuickNode.
- **Payment manifests**: Machine-readable pricing and payment method declarations. Include in `/.well-known/ai` or a dedicated payment manifest.
- **USDC/stablecoin support**: The dominant payment rail for agent commerce. Agents don't have credit cards. They have wallets.

**Quick-Start Checklist:**

- [ ] Evaluate x402 for your API endpoints
- [ ] Add pricing signals to your service manifest
- [ ] Consider USDC/stablecoin payment acceptance
- [ ] Document payment requirements in `/.well-known/ai`

---

### Pillar 5: Reputation - Will Agents Recommend Me?

Reputation is the most visibly evolving ASO pillar. Agents, like humans, rely on social proof, but the artifacts for agent-facing reputation are still maturing. Treat reputation as an evolving evidence layer: uptime, completion rates, citations, directories, reviews, and third-party verification.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| Citation in AI responses | **High** | High | Emerging |
| Usage metrics | **High** | Low | Best practice |
| Success rates | **High** | Low | Best practice |
| Endorsements / reviews | Medium | Medium | Emerging |
| Directory presence | **High** | Low | Emerging |
| Completion rates | **High** | Low | Best practice |

**Key Signals:**

- **Citation signals**: Being cited in AI-generated responses (Perplexity, ChatGPT Search, Claude). Citations, direct quotes, and statistics lift visibility by up to 40%.
- **Usage metrics**: API uptime, response times, error rates. Agents will track these programmatically.
- **Success rates**: What percentage of agent invocations complete successfully? This is your most important reputation metric.
- **Directory presence**: Being listed and reviewed in MCP directories, llms.txt directories, and agent marketplaces.
- **Completion rates**: Do agents that start using your service complete their tasks? High completion = high recommendation.

**Quick-Start Checklist:**

- [ ] Track API uptime and error rates obsessively
- [ ] Aim for >99.9% availability
- [ ] Submit to MCP and llms.txt directories
- [ ] Monitor brand mentions in AI search engines
- [ ] Publish success metrics if possible

---

### Pillar 6: Memory - Will Agents Remember Me?

The most valuable service is the one an agent reaches for without thinking. Memory signals ensure your service stays in an agent's "consideration set" across sessions.

| Signal | Priority | Complexity | Status |
|--------|----------|------------|--------|
| `llms.txt` quality | **High** | Low | Emerging |
| Persistent identity | **High** | Low | Best practice |
| Consistent signals across platforms | **High** | Low | Best practice |
| Returnability | **High** | Low | Best practice |
| Brand recall in training data | Medium | High | Indirect |

**Key Signals:**

- **`llms.txt` quality**: A well-crafted `llms.txt` is your permanent ambassador to LLMs. It should be clear, comprehensive, and regularly updated. Think of it as your elevator pitch to every AI agent that visits.
- **Persistent identity**: Same domain, same endpoints, same schema. Agents rely on consistency. Changing your API surface breaks agent memory.
- **Consistent signals**: Your schema.org markup, OpenAPI spec, `llms.txt`, and `agent.json` should tell the same story. Inconsistency erodes trust.
- **Returnability**: Can an agent return to your service and pick up where it left off? Session continuity, clear versioning, and stable endpoints matter.

**Quick-Start Checklist:**

- [ ] Write a high-quality `llms.txt` - clear, complete, compelling
- [ ] Keep API versions stable; deprecate gracefully
- [ ] Ensure all signals (schema, OpenAPI, llms.txt, agent.json) are consistent
- [ ] Don't break endpoints without migration paths

---

## 5. The ASO Toolkit: What Exists, What's Missing

### Audit Tools (What Exists)

| Tool | Function | Maturity |
|------|----------|----------|
| Chrome Lighthouse 13.3+ | Audits for `llms.txt` presence | Production |
| Petter Strale's Agent Readiness Scan | 5-layer agent-readiness framework | Community |
| Manual `/.well-known/ai` validator | JSON schema validation against IETF draft | Emerging |
| Schema.org validator | Google Rich Results Test | Production |

### Implementation Tools (What Exists)

| Tool | Function | Maturity |
|------|----------|----------|
| Mintlify | Auto-generates `llms.txt` for hosted docs | Production |
| Swagger/OpenAPI generators | Auto-generate `openapi.json` from code | Production |
| Schema markup generators | JSON-LD generators for schema.org | Production |
| Cloudflare managed robots.txt | AI crawler rule management | Production |

### Monitoring Tools (Mostly Missing)

| Tool | Function | Maturity |
|------|----------|----------|
| Server log analysis | Track GPTBot, ClaudeBot, PerplexityBot hits | Manual |
| AI citation tracking | Monitor brand mentions in AI search | Emerging (Yext) |
| Agent conversion analytics | Funnel tracking for agent-originated traffic | **Gap** |
| MCP directory monitoring | Track listing status across directories | **Gap** |

### Registry & Directory Tools

| Tool | Function | Maturity |
|------|----------|----------|
| MCP directories (13+) | Submit and discover MCP servers | Fragmented |
| llms.txt directories (3+) | Discover sites with `llms.txt` | Emerging |
| Anthropic MCP Registry | Centralized MCP server discovery | Preview |
| IETF agent discovery drafts | Standardized registry protocols | Standardizing |

### The ASO Tooling Gap

The following tools **do not exist yet** but are desperately needed:

1. **Unified ASO Scanner** - A single tool that audits a service across all 6 pillars and outputs an ASO Score (0-100) with specific remediation steps.
2. **Agent Crawl Analytics Dashboard** - Real-time visibility into which agents are visiting, what they're reading, and what they're invoking.
3. **Cross-Directory MCP Manager** - Submit, update, and monitor your MCP server listing across all 13+ directories from one interface.
4. **Agent Conversion Tracking** - Attribution and funnel analytics specifically for agent-originated traffic.
5. **ASO CI/CD Integration** - Automated ASO checks in your deployment pipeline: validate `llms.txt`, check schema markup, verify OpenAPI completeness.
6. **Agent Reputation Monitor** - Track citation rates, directory reviews, and success metrics across the agent ecosystem.

---

## 6. The ASO Playbook: Getting Started

### Week 1: Foundation (ASO-0 -> ASO-1)

- [ ] Audit current `robots.txt` - add AI bot rules
- [ ] Verify `sitemap.xml` is complete
- [ ] Create `llms.txt` with service summary
- [ ] Submit to 2-3 MCP directories (if applicable)

### Week 2: Identity (ASO-1 -> ASO-2)

- [ ] Add JSON-LD schema markup (`WebAPI`, `Organization`)
- [ ] Verify `openapi.json` completeness
- [ ] Create `agent.json` manifest
- [ ] Optimize documentation for LLM readability

### Week 3: Trust & Reputation (ASO-2 -> ASO-3)

- [ ] Document auth methods clearly
- [ ] Add `/.well-known/ai` (IETF draft)
- [ ] Submit to all relevant directories
- [ ] Set up monitoring for agent crawls

### Month 2: Commerce & Memory (ASO-3 -> ASO-4)

- [ ] Evaluate x402 for payment endpoints
- [ ] Ensure consistent signals across all files
- [ ] Monitor agent citation rates
- [ ] Track API success rates and optimize

### Ongoing: Optimization (ASO-4 -> ASO-5)

- [ ] Monitor ASO Score monthly
- [ ] Track agent KPIs: crawl rate, citation rate, invocation rate, conversion rate, return rate
- [ ] Keep `llms.txt` updated with new features
- [ ] Stay current on IETF drafts and emerging standards

---

## 7. The Future of ASO

### Predictions

1. **ASO will be a $10B+ industry by 2030.** Just as SEO created an entire ecosystem of agencies, tools, and specialists, ASO will spawn a new economy of agent-optimization services.

2. **The IETF will finalize a discovery standard within 18 months.** The race between `/.well-known/ai`, `llms.txt`, and competing formats will converge into a unified standard - or a small set of complementary standards.

3. **Agent directories will consolidate.** The current fragmentation (13+ MCP directories, multiple llms.txt indexes) will consolidate into 2-3 dominant registries, likely including an Anthropic/OpenAI-backed canonical directory.

4. **ASO will become a DevOps concern.** Agent readiness checks will be part of CI/CD pipelines, just like security scans and accessibility audits today.

5. **The first "agent-native" businesses will emerge.** Services designed from the ground up for agent consumption - no human UI, just signals, protocols, and APIs. These will be the most valuable companies in the agent economy.

---

## 8. Key Principles

1. **Signals, not keywords.** ASO is about emitting machine-readable capabilities, not stuffing keywords.
2. **Protocols, not pages.** Agents invoke APIs, not click links. Optimize for invocation, not navigation.
3. **Honesty beats gaming.** Clear, accurate signals win. Agents will penalize misleading manifests.
4. **Consistency compounds.** Persistent identity, stable endpoints, and regular updates build agent trust over time.
5. **Commerce completes the loop.** A service that can be discovered, understood, and invoked - but not paid - is incomplete.

---

## Appendix A: The Complete ASO Signal Stack

| Layer | File/Protocol | Purpose | Priority | Implementation |
|-------|--------------|---------|----------|----------------|
| Access Control | `robots.txt` | Allow/block AI crawlers | Required | 10 min |
| Content Map | `sitemap.xml` | URL inventory for crawlers | Required | 10 min |
| AI Context | `llms.txt` | Curated LLM reading list | High | 10 min |
| Service Manifest | `/.well-known/ai` | IETF agent discovery | High | 30 min |
| API Contract | `openapi.json` | Machine-readable API spec | High | 1-4 hrs |
| Semantic Layer | `schema.org` / JSON-LD | What the service *is* | High | 1-2 hrs |
| Agent Manifest | `agent.json` | Universal service identity | High | 30 min |
| Protocol Discovery | `/.well-known/mcp.json` | MCP server capabilities | High | 30 min |
| Payment | x402 middleware | Agent payment protocol | Medium | 2-4 hrs |
| Governance | `/.well-known/governance.json` | AI governance signals | Low | 30 min |
| Code Discovery | README + topics + `llms.txt` | GitHub agent discovery | Medium | Ongoing |
| Directories | MCP dirs + llms.txt dirs | Discovery hub presence | High | 1-2 hrs |

---

## Appendix B: Glossary

| Term | Definition |
|------|-----------|
| **ASO** | Agent Signal Optimization - an open framework that helps organizations navigate and implement emerging agent standards and technologies |
| **Agent** | An autonomous AI system that perceives, plans, and acts to achieve goals without human intervention |
| **llms.txt** | A Markdown file at `/llms.txt` providing a curated, AI-friendly summary of a site's content |
| **MCP** | Model Context Protocol - Anthropic's open protocol for AI model tool connection |
| **x402** | An open payment standard using HTTP 402 for machine-to-machine payments |
| **OpenAPI** | Machine-readable REST API specification standard (OpenAPI 3.1) |
| **Schema.org** | Collaborative vocabulary for structured data markup on the web |
| **JSON-LD** | JavaScript Object Notation for Linked Data - recommended format for schema.org |
| **GEO** | Generative Engine Optimization - optimizing for citation in AI-generated responses |
| **AEO** | Answer Engine Optimization - optimizing for featured snippets and direct answers |
| **ASO Score** | A 0-100 score measuring agent readiness across 6 pillars |
| **Agent Readiness Index** | The formal name for the ASO scoring framework |

---

## Appendix C: Further Reading

- IETF Internet-Draft: `draft-aiendpoint-ai-discovery-00` - `/.well-known/ai`
- IETF Draft: `draft-narvaneni-agent-uri` - `agent://` protocol
- IETF Draft: `draft-cui-ai-agent-discovery-invocation-01` - agent discovery & invocation
- Coinbase x402 Documentation - x402.org
- Anthropic MCP Specification - modelcontextprotocol.io
- llms.txt Proposal - llmstxt.org
- Schema.org WebAPI Type - schema.org/WebAPI
- OpenAPI 3.1 Specification - spec.openapis.org

---

> **The agents are already crawling. The directories are already indexing. The protocols are already standardizing.**
>
> **The only question is: will they find you?**

---

*Agent Signal Optimization (ASO) is an open framework for organizing emerging agent standards into practical implementation guidance. Contribute, extend, and build upon it.*
