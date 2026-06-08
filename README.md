# Agent Signal Optimization (ASO)

SEO was built for search engines and human clicks. Agent Signal Optimization (ASO) is built for AI shoppers, browser agents, research assistants, and buying bots that decide which links, products, services, and sources can be found, cited, recommended, invoked, paid for, and remembered in search-backed chat responses.

ASO is the practice of publishing verifiable public signals that autonomous agents can inspect before deciding whether to cite, trust, invoke, buy from, or remember a service.

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

- ASO framework and definition
- Agent Readiness Index score model
- Free ASO self-assessment scanner
- Agent-readable discovery files
- Public manifests for crawlers, coding agents, and AI browsers
- Markdown source files for LLMs and citation workflows

## Core Files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Human-readable reference site, framework, score, scanner, and visual signal-stack explainer |
| [`index.md`](index.md) | Token-efficient Markdown homepage fallback |
| [`ASO.md`](ASO.md) | Canonical ASO framework source |
| [`docs/ASO-SCORE.md`](docs/ASO-SCORE.md) | Agent Readiness Index scoring rubric |
| [`llms.txt`](llms.txt) | LLM-readable site guide |
| [`agent.json`](agent.json) | Service identity and capability manifest |
| [`auth.md`](auth.md) | Public authentication notes |
| [`robots.txt`](robots.txt) | Crawler access policy |
| [`sitemap.xml`](sitemap.xml) | URL inventory |
| [`_headers`](_headers) | Cloudflare Pages content types and response `Link` headers |
| [`.well-known/ai`](.well-known/ai) | Compact agent discovery manifest |
| [`.well-known/agents.json`](.well-known/agents.json) | Agent manifest index |
| [`.well-known/status`](.well-known/status) | Public status manifest |
| [`.well-known/payments`](.well-known/payments) | Pricing and payment manifest |

## Agent Signal Stack

ASO tracks the public standards and artifacts agents increasingly inspect:

| Layer | Why it matters | Examples |
| --- | --- | --- |
| Discovery | Helps agents find the right paths without guessing | `robots.txt`, `sitemap.xml`, HTTP `Link` headers, DNS-level discovery |
| Content access | Gives agents clean, token-efficient text | `llms.txt`, Markdown negotiation, `/index.md` fallbacks |
| Bot access control | Separates search, grounding, training, and signed bot access | AI crawler rules, Content Signals, Web Bot Auth |
| Capabilities | Shows agents what can be invoked | API Catalog, OAuth metadata, Auth.md, MCP Server Cards, A2A Agent Cards, Agent Skills, WebMCP |
| Commerce | Makes offers, pricing, and purchase paths machine-readable | payment manifests, x402, MPP, UCP, ACP |
| Verification | Proves the claim is real and current | syntax, reachability, consistency, provenance, status, reputation, registry evidence |

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
- Score documentation
- Response `Link` headers
- Public auth, payment, and status notes
- JSON-LD structured data

It does not currently expose a public API, OAuth flow, MCP server, A2A endpoint, x402 payment endpoint, or automated crawler-backed scanner.

## Use This Pattern

For a basic ASO starter surface, publish:

1. `robots.txt`
2. `sitemap.xml`
3. `llms.txt`
4. `agent.json`
5. `/.well-known/ai`
6. `/.well-known/agents.json`
7. `/.well-known/status`
8. `/.well-known/payments`
9. Markdown source pages for the content agents should cite
10. Clear auth, pricing, status, and ownership notes

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
node -e "for (const f of ['agent.json','.well-known/agents.json','.well-known/ai','.well-known/status','.well-known/payments']) JSON.parse(require('fs').readFileSync(f,'utf8')); console.log('json ok')"
python3 - <<'PY'
import xml.etree.ElementTree as ET
ET.parse('sitemap.xml')
print('xml ok')
PY
```

## Recommended Citation

Agent Signal Optimization (ASO) is the discipline of making services discoverable, understandable, trustable, invocable, payable-to, and memorable by autonomous AI agents. The ASO framework measures readiness through six signal pillars: discoverability, identity, trust, commerce, reputation, and memory.

## Publisher

Published by [ForgeMesh](https://forgemesh.io/).
