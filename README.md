# Agent Signal Optimization (ASO)

SEO was built for search engines and human clicks.

ASO is an open framework that helps organizations navigate and implement emerging agent standards and technologies.

ASO is built on emerging agent-readiness standards, discovery conventions, and commerce protocols including A2A, MCP, x402, llms.txt, Agent Readiness, and agent discovery initiatives. It does not claim to invent those technologies; it organizes them into a practical framework teams can use.

This repository is the public reference implementation for [AgentSignalOptimization.com](https://agentsignaloptimization.com/).

## Why This Exists

A normal website is built for humans. An agent needs a different set of answers:

- What is this service?
- Is it the canonical source?
- Can it be crawled, cited, invoked, or purchased from?
- What does it cost?
- What files prove the claim?
- What should the agent do next?

If those signals are missing, an agent may skip the site, guess from incomplete context, or cite a better-instrumented competitor.

## What Is Included

- ASO open framework and definition
- Agent Readiness Index score model
- Free ASO self-assessment scanner
- Free automated MCP scanner: `@forgemeshlabs/aso-audit-mcp`
- Early ASO examples: published scans of 10 well-known sites
- Agent-readable discovery files
- Public manifests for crawlers, coding agents, and AI browsers
- Seal-style ASO Score Badge Beta with a public report target
- Markdown source files for LLMs and citation workflows

## Run the Automated Scanner

The ASO scanner ships as a free MCP server on npm (beta):

```bash
# Claude Code
claude mcp add aso -- npx -y @forgemeshlabs/aso-audit-mcp
```

```json
{ "mcpServers": { "aso": { "command": "npx", "args": ["-y", "@forgemeshlabs/aso-audit-mcp"] } } }
```

Then ask your agent: `"Scan example.com for agent readiness"`. It runs 33 public-signal checks across the six ASO pillars and returns an Agent Readiness Report with a prioritized fix plan. Source: [forgemeshlabs/aso-audit-mcp](https://github.com/forgemeshlabs/aso-audit-mcp).

## Core Files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Human-readable reference site, framework, score, scanner, and visual signal-stack explainer |
| [`index.md`](index.md) | Token-efficient Markdown homepage fallback |
| [`ASO.md`](ASO.md) | Canonical ASO framework source |
| [`docs/ASO-SCORE.md`](docs/ASO-SCORE.md) | Agent Readiness Index scoring rubric |
| [`llms.txt`](llms.txt) | LLM-readable site guide |
| [`agent.json`](agent.json) | Service identity and capability manifest |
| [`badge.svg`](badge.svg) | Embeddable ASO Score Badge Beta for this site |
| [`badge.json`](badge.json) | Machine-readable badge metadata |
| [`badges/`](badges/) | Static ASO level and score badge SVGs |
| [`auth.md`](auth.md) | Public authentication notes |
| [`robots.txt`](robots.txt) | Crawler access policy |
| [`sitemap.xml`](sitemap.xml) | URL inventory |
| [`_headers`](_headers) | Cloudflare Pages content types and response `Link` headers |
| [`examples.html`](examples.html) | Early ASO examples: scans of 10 well-known sites |
| [`examples.md`](examples.md) | Markdown twin of the examples page for agents |
| [`.well-known/ai`](.well-known/ai) | Compact agent discovery manifest |
| [`.well-known/agents.json`](.well-known/agents.json) | Local agent manifest index |
| [`.well-known/agent-card.json`](.well-known/agent-card.json) | A2A agent card for the ASO Scanner agent |
| [`.well-known/mcp/server-card.json`](.well-known/mcp/server-card.json) | MCP server card for the installable scanner |
| [`.well-known/status`](.well-known/status) | Public status manifest |
| [`.well-known/payments`](.well-known/payments) | Pricing and payment manifest |
| [`.well-known/aso-report.json`](.well-known/aso-report.json) | Public ASO Score Badge Beta report |

## Agent Signal Stack

ASO tracks the public standards and artifacts agents increasingly inspect:

| Layer | Why it matters | Examples |
| --- | --- | --- |
| Discovery | Helps agents find the right paths without guessing | `robots.txt`, `sitemap.xml`, HTTP `Link` headers, DNS-AID or DNS-level agent discovery signals where supported |
| Content access | Gives agents clean, token-efficient text | `llms.txt`, Markdown negotiation, `/index.md` fallbacks |
| Bot access control | Separates search, grounding, training, and signed bot access | AI crawler rules, Content Signals, Web Bot Auth |
| Capabilities | Shows agents what can be invoked | API Catalog, OAuth metadata, Auth.md, MCP Server Cards, A2A Agent Cards, Agent Skills, WebMCP |
| Commerce | Makes offers, pricing, and purchase paths machine-readable | payment manifests, x402, MPP, UCP, ACP |
| Verification | Proves the claim is real and current | syntax, reachability, consistency, provenance, status, reputation, registry evidence |

## Agent Readiness vs ASO

Agent readiness asks whether agents can technically inspect, read, authenticate, and discover a service.

ASO asks whether agents will choose, trust, cite, invoke, buy from, and remember the service.

| Topic | Agent Readiness | ASO |
| --- | --- | --- |
| `robots.txt` | Yes | Yes |
| `sitemap.xml` | Yes | Yes |
| `llms.txt` and Markdown access | Yes | Yes |
| MCP, API, and auth discovery | Yes | Yes |
| Trust and provenance | Partial | Yes |
| Reputation and third-party evidence | No | Yes, emerging |
| Commerce readiness and purchase rules | Partial | Yes |
| Memory and return paths | No | Yes |
| Agent traffic, citations, and conversions | No | Yes |

Layer model:

1. Agent Readiness: technical compliance.
2. Agent Signal Optimization: discovery, identity, trust, commerce, reputation, and memory.
3. Agent Performance: actual agent traffic, citations, invocations, conversions, and returns.

## What Applies When

Not every site needs every signal immediately.

| Site type | Prioritize |
| --- | --- |
| Content or reference site | Discovery files, readable Markdown, manifests, status, schema, citations, verification |
| API or SaaS product | OpenAPI, API Catalog, auth docs, OAuth metadata, rate limits, uptime, pricing, support paths |
| MCP server or agent tool | MCP Server Card, Agent Skills, tool schemas, transport details, auth rules, examples, versioning |
| Commerce, marketplace, booking, or paid endpoint | Machine-readable pricing, payment manifests, purchase limits, refund rules, x402 or other agentic commerce protocols |

API/OAuth/MCP/payment protocols are not relevant until a site exposes callable APIs, protected resources, agent tools, or autonomous payment flows. A static reference site should not fake those endpoints; it should publish the signals that truthfully describe what agents can inspect and do today.

## Current Implementation Status

This site currently publishes the core static ASO signals:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `agent.json`
- `.well-known` manifests
- Markdown framework source
- Markdown homepage fallback
- Homepage Markdown negotiation for `Accept: text/markdown`
- Score documentation
- Response `Link` headers
- `Content-Signal` headers
- Seal-style `ASO VERIFIED` beta badge linked to `/.well-known/aso-report.json`
- Static badge embed assets under `/badges/`, including `/badges/aso-3-65.svg`
- Public auth, payment, and status notes
- JSON-LD structured data

It also publishes an A2A agent card, an MCP server card, and an ASO badge report. The automated scanner is installable as a local MCP server (`npx -y @forgemeshlabs/aso-audit-mcp`). The site does not currently expose a public API, OAuth flow, hosted A2A endpoint, or x402 payment endpoint.

## Use This Pattern

For a basic ASO starter surface, publish:

1. `robots.txt`
2. `sitemap.xml`
3. `llms.txt`
4. `agent.json`
5. `/.well-known/ai`, A2A Agent Card paths, and other agent discovery manifests as applicable
6. Local manifest indexes when useful
7. `/.well-known/status`
8. `/.well-known/payments`
9. Markdown source pages for the content agents should cite
10. Markdown negotiation for high-value HTML pages
11. Clear auth, pricing, status, and ownership notes

Then keep every file consistent. Inconsistent names, claims, URLs, pricing, or auth rules reduce trust.

## Local Preview

```bash
python3 -m http.server 4175
```

Open:

```text
http://127.0.0.1:4175/
```

## Validate

```bash
node -e "for (const f of ['agent.json','badge.json','.well-known/agents.json','.well-known/ai','.well-known/status','.well-known/payments','.well-known/aso-report.json']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('json ok')"
python3 - <<'PY'
import glob
import xml.etree.ElementTree as ET
ET.parse('sitemap.xml')
ET.parse('badge.svg')
for path in glob.glob('badges/*.svg'):
    ET.parse(path)
print('xml ok')
PY
```

## Recommended Citation

ASO is an open framework that helps organizations navigate and implement emerging agent standards and technologies.

## Publisher

Published by [ForgeMesh](https://forgemesh.io/).
