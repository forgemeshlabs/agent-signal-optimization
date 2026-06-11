# ASO Score: Agent Readiness Index

## Summary

The ASO Score, formally the Agent Readiness Index, is a 0-100 score for measuring how ready a service is for autonomous agent discovery, evaluation, invocation, payment, recommendation, and reuse.

## Maturity Levels

| Level | Name | Score | Meaning |
| --- | --- | ---: | --- |
| ASO-0 | Invisible | 0-9 | Agents cannot reliably find or understand the service. |
| ASO-1 | Discoverable | 10-29 | Basic crawl and discovery signals exist. |
| ASO-2 | Understandable | 30-49 | Agents can understand the service identity and documentation. |
| ASO-3 | Invocable | 50-69 | Agents can understand how to call the service. |
| ASO-4 | Trustable | 70-89 | Agents can verify trust, reputation, and operational signals. |
| ASO-5 | Autonomous-Commerce-Ready | 90-100 | Agents can discover, evaluate, invoke, pay, and return. |

## Scoring Rubric

| Pillar | Max Points | Signals |
| --- | ---: | --- |
| Discoverability | 20 | robots.txt, sitemap.xml, llms.txt, well-known endpoints, directory listings |
| Identity | 20 | schema.org, JSON-LD, OpenAPI, agent.json, semantic documentation |
| Trust | 15 | HTTPS, auth clarity, governance, provenance, operational status |
| Commerce | 15 | pricing signals, payment manifest, x402, agent-safe purchase path |
| Reputation (emerging) | 15 | uptime, latency, success rates, citations, endorsements, directory presence |
| Memory | 15 | persistent identity, stable URLs, consistent signals, versioning, return paths |

## Scanner Interpretation

The current scanner is a self-assessment calculator. It maps published signals to the Agent Readiness Index. Scores are directional until verified by an automated crawler or manual ASO audit.

## Score Badge Beta

The current public display model is a score badge, not certification:

- **ASO Score:** 0-100.
- **ASO Level:** ASO-0 through ASO-5.
- **Scanner:** ASO Audit v0.1 or later, including scanner version in the report.
- **Report:** Public report URL or `/.well-known/aso-report.json` when available.

Example display:

```html
<a href="https://agentsignaloptimization.com/.well-known/aso-report.json">
  <img src="https://agentsignaloptimization.com/badge.svg" alt="ASO Score: 65/100, ASO-3 Invocable">
</a>
```

## Verification Roadmap

ASO uses a staged authority model:

- **Self-scored:** anyone can run the scanner and publish an ASO Score.
- **Verified:** scan passes, the report is public, and the result is reproducible.
- **Human-reviewed:** future paid review tier with re-scan, claim verification, and renewal.

## Evidence Requirements

Verified reports and future human review should require public evidence:

- Accessible signal files.
- Valid syntax for machine-readable manifests.
- Consistent service identity across files.
- Verifiable auth and pricing documentation.
- Public or submitted uptime and success metrics.
- Timestamped report with scanner version, methodology, score, level, and checked artifacts.
