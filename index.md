# Agent Signal Optimization (ASO)

SEO was built for search engines and human clicks.

ASO is an open framework that helps organizations navigate and implement emerging agent standards and technologies.

ASO is built on emerging agent-readiness standards, discovery conventions, and commerce protocols including A2A, MCP, x402, llms.txt, Agent Readiness, and agent discovery initiatives. It organizes those technologies into a practical framework teams can use.

ASO is a living framework. Scanner checks are versioned and reviewed against a dated [source registry](https://agentsignaloptimization.com/SOURCES.md). Stable requirements, optional capabilities, drafts, and vendor conventions are identified separately so rapidly changing specifications are not presented as universal rules.

Google's current generative AI Search guidance says foundational SEO still matters, `llms.txt` is ignored by Google Search itself, and browser agents benefit from clean DOM, screenshot, and accessibility-tree signals. ASO keeps `llms.txt` for non-Google agents while also tracking agent-friendly UX signals such as semantic controls, linked labels, stable layouts, and visible action targets.

## Core References

- [ASO Framework](https://agentsignaloptimization.com/ASO.md)
- [ASO Score Model](https://agentsignaloptimization.com/docs/ASO-SCORE.md)
- [Standards Source Registry](https://agentsignaloptimization.com/SOURCES.md)
- [LLM Reading Guide](https://agentsignaloptimization.com/llms.txt)
- [Agent Manifest](https://agentsignaloptimization.com/agent.json)
- [Well-Known AI Manifest](https://agentsignaloptimization.com/.well-known/ai)
- [A2A Agent Card](https://agentsignaloptimization.com/.well-known/agent-card.json)
- [MCP Server Card](https://agentsignaloptimization.com/.well-known/mcp/server-card.json)
- [Early ASO Examples](https://agentsignaloptimization.com/examples.md)
- [Status Manifest](https://agentsignaloptimization.com/.well-known/status)
- [Payments Manifest](https://agentsignaloptimization.com/.well-known/payments)
- [ASO Score Badge](https://agentsignaloptimization.com/badge.svg)
- [Static ASO-3 65 Badge](https://agentsignaloptimization.com/badges/aso-3-65.svg)
- [ASO Badge Report](https://agentsignaloptimization.com/.well-known/aso-report.json)

## Signal Stack

ASO tracks the public artifacts agents increasingly inspect:

- Discovery: `robots.txt`, `sitemap.xml`, HTTP `Link` headers, DNS-AID or DNS-level agent discovery signals where supported
- Content access: `llms.txt`, Markdown content, `/index.md` fallbacks
- Bot access control: AI crawler rules, Content Signals, Web Bot Auth
- Capabilities: API Catalog, OAuth discovery, Auth.md, MCP Server Cards, A2A Agent Cards, Agent Skills, WebMCP
- Commerce: machine-readable pricing, payment manifests, x402, MPP, UCP, ACP
- Verification: syntax, reachability, consistency, provenance, status, reputation, public reports, reproducible scan evidence
- Browser-agent UX: semantic HTML, labels linked to inputs, meaningful roles/names/states, stable layouts, visible action targets

## Current Site Status

This site currently publishes the core static ASO signals: `robots.txt`, `sitemap.xml`, `llms.txt`, `agent.json`, `.well-known` manifests (including an A2A agent card, an MCP server card, and an ASO badge report), Markdown framework source, score documentation, response `Link` headers, a beta score badge, and public auth/payment/status notes.

The automated ASO scanner ships as an installable MCP server: `npx -y @forgemeshlabs/aso-audit-mcp`. It runs locally in your MCP client. This site does not currently expose a public API, OAuth flow, hosted A2A endpoint, or x402 payment endpoint.
