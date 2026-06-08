# Agent Signal Optimization (ASO)

SEO was built for search engines and human clicks. Agent Signal Optimization (ASO) is built for AI shoppers, browser agents, research assistants, and buying bots that decide which links, products, and sources can be found, cited, recommended, invoked, paid for, and remembered in search-backed chat responses.

ASO is the practice of publishing verifiable public signals that autonomous agents can inspect before deciding whether to cite, trust, invoke, buy from, or remember a service.

## Core References

- [ASO Framework](https://agentsignaloptimization.com/ASO.md)
- [ASO Score Model](https://agentsignaloptimization.com/docs/ASO-SCORE.md)
- [LLM Reading Guide](https://agentsignaloptimization.com/llms.txt)
- [Agent Manifest](https://agentsignaloptimization.com/agent.json)
- [Well-Known AI Manifest](https://agentsignaloptimization.com/.well-known/ai)
- [Status Manifest](https://agentsignaloptimization.com/.well-known/status)
- [Payments Manifest](https://agentsignaloptimization.com/.well-known/payments)

## Signal Stack

ASO tracks the public artifacts agents increasingly inspect:

- Discovery: `robots.txt`, `sitemap.xml`, HTTP `Link` headers, DNS-level discovery
- Content access: `llms.txt`, Markdown content, `/index.md` fallbacks
- Bot access control: AI crawler rules, Content Signals, Web Bot Auth
- Capabilities: API Catalog, OAuth discovery, Auth.md, MCP Server Cards, A2A Agent Cards, Agent Skills, WebMCP
- Commerce: machine-readable pricing, payment manifests, x402, MPP, UCP, ACP
- Verification: syntax, reachability, consistency, provenance, status, reputation, registry evidence

## Current Site Status

This site currently publishes the core static ASO signals: `robots.txt`, `sitemap.xml`, `llms.txt`, `agent.json`, `.well-known` manifests, Markdown framework source, score documentation, response `Link` headers, and public auth/payment/status notes.

It does not currently expose a public API, OAuth flow, MCP server, A2A endpoint, x402 payment endpoint, or automated crawler-backed scanner.
