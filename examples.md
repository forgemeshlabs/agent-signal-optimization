# Early ASO Examples: 10 Well-Known Sites Scanned for Agent Readiness

Scan date: 2026-06-11
Scanner: `@forgemeshlabs/aso-audit-mcp` v0.1.2 (beta)
Scope: public signals at the apex domain only
Scoring: Agent Readiness Index, 0-100 (see /docs/ASO-SCORE.md)

## Leaderboard

| # | Site | ASO Score | Level | Discoverability /20 | Identity /20 | Trust /15 | Commerce /15 | Reputation /15 | Memory /15 |
| - | --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | cloudflare.com | 66 | ASO-3 Invocable | 20 | 20 | 8 | 2.5 | 0 | 15 |
| 2 | vercel.com | 46 | ASO-2 Understandable | 12 | 5 | 15 | 2.5 | 4 | 7.5 |
| 3 | stripe.com | 39 | ASO-2 Understandable | 12 | 5 | 9.5 | 2.5 | 2 | 7.5 |
| 3 | shopify.com | 39 | ASO-2 Understandable | 16 | 5 | 8 | 2.5 | 0 | 7.5 |
| 5 | github.com | 33 | ASO-2 Understandable | 8 | 2.5 | 11 | 2.5 | 4 | 5 |
| 6 | huggingface.co | 29 | ASO-1 Discoverable | 8 | 2.5 | 13.5 | 0 | 2 | 2.5 |
| 7 | anthropic.com | 25 | ASO-1 Discoverable | 8 | 2.5 | 9.5 | 0 | 2 | 2.5 |
| 8 | nike.com | 20 | ASO-1 Discoverable | 8 | 5 | 4 | 0 | 0 | 2.5 |
| 9 | openai.com | 19 | ASO-1 Discoverable | 8 | 0 | 8 | 0 | 0 | 2.5 |
| 10 | amazon.com | 15 | ASO-1 Discoverable | 4 | 2.5 | 8 | 0 | 0 | 0 |

Average score: 33.1. Median: 31. Certification range starts at 50; one site out of ten reached it.

## Findings

1. **Everyone lets agents in; almost no one talks to them.** All ten sites allow AI crawlers in robots.txt. Only one publishes an agent identity manifest. None publish an A2A agent card (`/.well-known/agent-card.json`) or a payment manifest at the paths agents check.
2. **Cloudflare is the only site an agent could actually use.** 66 (ASO-3 Invocable): llms.txt + llms-full.txt, `/.well-known/agent.json` ("Cloudflare Site Agent"), markdown negotiation via `/index.md`, and an OpenAPI spec.
3. **llms.txt splits the field in half.** Cloudflare, Vercel, Stripe, Shopify, and GitHub publish it. Hugging Face, Anthropic, Nike, and Amazon return 404. OpenAI returns 403 on `/llms.txt`.
4. **Agent commerce is at zero.** No machine-readable pricing, payment manifest, or x402 support anywhere in the batch. Highest commerce pillar score: 2.5/15.
5. **The AI companies are not the leaders.** openai.com scored 19, anthropic.com 25 -- both ASO-1 Discoverable.

## Method and Limits

Point-in-time automated scans of public signals at each apex domain. Subdomains, docs sites, and API hosts were not scanned; a company with a strong developer subdomain can outscore its apex result. The reputation pillar is emerging and only partially auto-verifiable. A score is not an endorsement or a criticism -- it is a snapshot of what an autonomous agent can find, parse, and act on at that origin today. Any site here could change its score overnight by publishing the missing files.

## Reproduce

```bash
# Claude Code
claude mcp add aso -- npx -y @forgemeshlabs/aso-audit-mcp

# Then ask your agent
"Scan stripe.com for agent readiness"
"Scan my own site and give me a fix plan"
```

Package: https://www.npmjs.com/package/@forgemeshlabs/aso-audit-mcp
Source: https://github.com/forgemeshlabs/aso-audit-mcp
Framework: https://agentsignaloptimization.com/ASO.md
