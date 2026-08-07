# ASO Source Registry

Last reviewed: 2026-08-07

ASO is a living framework. Agent discovery, invocation, identity, and payment
standards are changing quickly, so scanner checks and scoring guidance are
reviewed against the upstream sources below. A signal can move from advisory to
recommended—or change shape entirely—without waiting for a major ASO rewrite.

The registry distinguishes standards from drafts and conventions. Presence in
this list does not make a signal universally required. Applicability depends on
what the service actually offers: content, an API, an MCP server, an A2A agent,
delegated access, or autonomous commerce.

## Stable standards and normative references

| Source | What ASO uses it for | Status |
| --- | --- | --- |
| [RFC 9727: API Catalog](https://www.rfc-editor.org/rfc/rfc9727.html) | `/.well-known/api-catalog`, API discovery links, and catalog structure | IETF Proposed Standard |
| [RFC 8414: OAuth Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html) | OAuth authorization-server discovery | IETF Standards Track |
| [RFC 9728: OAuth Protected Resource Metadata](https://www.rfc-editor.org/rfc/rfc9728.html) | Protected-resource discovery for delegated access and remote MCP authorization | IETF Standards Track |
| [RFC 9116: security.txt](https://www.rfc-editor.org/rfc/rfc9116.html) | Security contact and disclosure metadata | IETF Standards Track |
| [A2A specification](https://a2a-protocol.org/latest/specification/) | Agent Cards, `supportedInterfaces`, capabilities, skills, and discovery | Current A2A standard |
| [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | Machine-readable API invocation contracts | Published specification |

## Current agent and payment protocols

| Source | What ASO uses it for | Status |
| --- | --- | --- |
| [x402 documentation](https://docs.x402.org/) | HTTP 402 payment flow, v2 headers, CAIP-2 networks, schemes, and extensions | Open protocol; rapidly evolving |
| [x402 specification repository](https://github.com/x402-foundation/x402/tree/main/specs) | Normative x402 schemas and scheme-specific requirements | Canonical protocol source |
| [MCP specification](https://modelcontextprotocol.io/specification/) | MCP transports, tools, authorization, and protocol behavior | Published specification with active revisions |
| [MCP 2026-07-28 release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) | Stateless MCP and `server/discover` tracking | Release candidate; not scored as universally required |
| [Cloudflare Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) | `Accept: text/markdown`, token headers, and `Content-Signal` response headers | Vendor capability and operational guidance |
| [Google generative AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | Crawlability, technical SEO, semantic structure, and the explicit boundary that Google Search ignores `llms.txt` | Official Google Search guidance |

## Emerging drafts and community conventions

| Source | What ASO uses it for | Status |
| --- | --- | --- |
| [llms.txt](https://llmstxt.org/) | Optional LLM-readable site overview for systems that consume it | Community convention; not used by Google Search |
| [DNS-AID Internet-Draft](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) | DNS-level agent discovery | Internet-Draft; advisory |
| [Payment HTTP Authentication Scheme](https://datatracker.ietf.org/doc/draft-ryan-httpauth-payment/) | Tracking a general HTTP payment challenge outside x402 | Internet-Draft; work in progress |
| [Agent Skills](https://agentskills.io/) | Portable task instructions for compatible agents | Emerging ecosystem convention |
| [WebMCP](https://webmcp.org/) | Browser-exposed tool discovery | Emerging; advisory |
| MCP Server Card proposals ([SEP-1649](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1649), [SEP-2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127)) | Out-of-band MCP server metadata | Proposal-stage; `server/discover` may supersede parts of this model |

## Maintenance policy

- Scanner output records the scanner version and observation time.
- Stable requirements and optional capabilities are reported separately.
- Drafts and vendor conventions remain advisory unless the target explicitly
  claims the corresponding role.
- Breaking upstream schema changes receive a scanner version change and a
  changelog entry.
- Source status is reviewed before each scanner release and at least monthly
  while the ecosystem remains volatile.
- Corrections should be opened against the public
  [ASO Scanner repository](https://github.com/forgemeshlabs/aso-audit-mcp).
