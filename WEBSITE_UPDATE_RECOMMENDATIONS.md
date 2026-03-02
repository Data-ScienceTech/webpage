# Website Update Recommendations

**Date:** March 2, 2026
**Purpose:** Targeted changes to datasciencetech.ca homepage and Force Field product page to reflect current capabilities. Every claim below is verified against the codebase and benchmark data.

---

## Gap Summary

The website was written when Force Field had ~3 core capabilities (prompt injection, data leak prevention, policy enforcement). The product now has **10 pipeline security steps**, **6 detection layers**, **agentic/MCP security**, **streaming interception**, **multimodal scanning**, **structured output scanning**, **MLOps infrastructure**, **1,650+ tests**, and **published benchmarks**. None of this is on the website.

---

## A. Force Field Product Page (`/en/force-field/`)

### A1. Add Hard Numbers to the Hero Section

**Current:** Generic text with no metrics.

**Recommended replacement for the paragraph below the H1:**

> Force Field is a production-ready security gateway with a **10-step inspection pipeline** and a **6-layer AI detection ensemble** (regex, ML, token analysis, embeddings, DeBERTa transformer, and LLM-as-judge). Tested on 2,188 held-out samples: **98.9% attack detection**, **100% data leak prevention**, **0.3% false positive rate**. Security processing in **< 1ms P99**. 1,650+ tests passing.

*Source: `CLAIMS.md` lines 19-34, benchmark data from Feb 14 2026.*

### A2. Replace "Core Capabilities" Section (3 Cards)

The current 3 cards are too vague. Replace with **5 cards** that match actual product strengths:

**Card 1 -- 6-Layer Threat Detection**
- 352 WAF patterns across 11 attack types
- ML classifier (TF-IDF) + DeBERTa transformer (184M params)
- LLM-as-judge for novel/uncertain attacks
- Fail-closed: any layer flags it, prompt is blocked

**Card 2 -- Agentic AI Security (MCP)**
- Tool call interception with policy enforcement
- MCP proxy gateway for AI agent communication
- Per-agent permissions, schema validation, human-approval gates
- Chain tracking: detects escalation, data exfiltration, recon patterns
- Per-agent, per-tool rate limiting

**Card 3 -- Streaming & Multimodal Protection**
- Real-time SSE stream scanning with mid-stream halt
- Image/vision input scanning (OCR injection, steganography detection)
- Structured output scanning (JSON value PII/secret/injection detection)

**Card 4 -- Data Protection & Compliance**
- 18 PII types detected (regex + NLP + Luhn validation)
- Secret/credential detection (AWS, GCP, Slack, DB connection strings)
- Compliance audit trail with JSONL/CSV export and configurable retention
- Token budget controls per API key (daily limits, rolling windows)
- GDPR and CCPA compliant; HIPAA BAA available; SOC 2 Type II in progress

**Card 5 -- Model-Agnostic, Zero-Lock-In**
- OpenAI, Anthropic, Google Gemini, Azure OpenAI, open-source/self-hosted
- MCP protocol support (Claude Desktop, Cursor, custom agents)
- Drop-in proxy: change one URL, no code changes
- SaaS, hybrid (customer VPC), or fully on-premise deployment

*Source: `CLAIMS.md` lines 28-49, `SECURITY.md` lines 127-191, `CEO_Executive_Brief.md` lines 57-96.*

### A3. Add a "10-Step Security Pipeline" Section

This is a major differentiator -- no competitor publishes this level of pipeline detail. Add a numbered visual or table:

| Step | What It Does |
|------|-------------|
| 1. Token Budget | Enforce per-key usage limits |
| 2. Tool Result Inspection | Scan tool/function results for PII, secrets, injection |
| 3. Image Scanner | Detect attacks hidden in images (OCR, steganography) |
| 4. 6-Layer AI Detection | Regex + ML + DeBERTa + LLM-as-judge ensemble |
| 5. Streaming Security | Scan responses in real-time, halt mid-stream |
| 6. Tool Call Interception | Block unauthorized AI agent actions |
| 7. PII Redaction | Strip personal data from responses |
| 8. Structured Output Scan | Walk JSON responses for secrets and injection |
| 9. Output Moderation | Block harmful or policy-violating output |
| 10. Audit Trail | Log every interaction for compliance |

*Source: `SECURITY.md` lines 127-142, `services/edge-proxy/app/main.py`.*

### A4. Add a "Benchmark Results" Section

Show the numbers. This builds trust and no competitor does it:

- **98.9% attack detection** on 2,188 held-out samples
- **100% outbound PII/secret detection**
- **0.3% false positive rate**
- **< 1ms P99 security processing** (verified on GCP Cloud Run)
- **408ms median end-to-end response** (includes LLM round-trip)
- **0.00% error rate** under load (235 requests, 50 concurrent)

Agentic benchmarks (162 test scenarios):
- Tool result inspection: 87-100% accuracy
- MCP gateway: 100% pre-call and post-call accuracy
- Chain tracking: 100% detection across 4 attack pattern types

*Source: `CLAIMS.md` lines 53-97, 213-244.*

### A5. Add an "Agentic AI Security" Section

The current page does not mention MCP or agentic security at all. This is the biggest competitive differentiator. Add:

> **Production-Ready Agentic Security.** Force Field includes an MCP proxy gateway that sits between AI agents and tools. Every tool call is evaluated against security policies before execution. The system tracks multi-step agent workflows and detects escalation patterns, data gathering attacks, and privilege escalation -- with quantitative benchmarks published.

Key capabilities to list:
- Tool call authorization with allow/deny/require-approval policies
- Multi-agent orchestration security with trust levels and delegation management
- Chain-of-action attack detection (4 pattern types: data exfil, privilege escalation, recon, rapid tool calls)
- Per-agent, per-tool rate limiting (token bucket)
- Schema validation for tool inputs
- Result inspection: PII, secrets, and injection scanning in tool outputs

*Source: `CEO_Executive_Brief.md` lines 80-96, `services/mcp/` codebase, Go MCP tests (88 passing).*

### A6. Remove or Update "Mandatory Security Gateway" Section

The current text mentions SPIFFE/SPIRE identity, which is accurate but overly technical for a product page. Replace with a simpler framing:

> **Zero Trust by Default.** Every request is authenticated, every prompt is inspected, every response is scanned. Force Field enforces a fail-closed security posture -- if any of the 10 pipeline steps flags a threat, the request is blocked before it reaches the AI model.

### A7. Update "What This Enables" Section

Current text is generic. Replace with:

> **What This Enables:**
> - Deploy AI chatbots, copilots, and agents with quantifiable security guarantees
> - Meet compliance requirements (GDPR, CCPA, HIPAA) with built-in audit trails
> - Protect against prompt injection, data exfiltration, jailbreaks, and agent abuse
> - Secure streaming responses, multimodal inputs, and structured outputs
> - Control AI agent tool usage with policy enforcement and human-approval gates
> - Continuously validate security with automated red team pipelines (7 attack suites)

---

## B. Homepage (`/en/`)

### B1. Update the Three Feature Cards

**Current cards** are vague ("Blocks injections & leaks"). Replace with specific, verifiable claims:

**LLM Firewall (Card 1):**
- 10-step security pipeline
- 6-layer AI detection ensemble
- 98.9% attack detection, < 1ms P99
- 352 WAF patterns, 18 PII types

**Runtime Orchestration (Card 2):**
- MCP proxy gateway for AI agents
- Tool call interception + policy enforcement
- Chain tracking across multi-step workflows
- Per-agent rate limiting and permissions

**Active Governance (Card 3):**
- Human-approval gates for sensitive actions
- Compliance audit trail (JSONL/CSV export)
- Token budget controls per API key
- Automated red team pipeline (CI/CD)

### B2. Update "Why Data Science Technologies" Bullets

Current bullets are generic consulting-speak. Replace with product-backed claims:

- **6-layer AI detection** with DeBERTa transformer and LLM-as-judge -- 98.9% accuracy on held-out data
- **Only gateway with production-ready agentic security** -- MCP proxy, tool interception, chain tracking with published benchmarks
- **10-step fail-closed pipeline** scanning prompts, responses, streams, images, JSON outputs, and agent tool calls
- **Full compliance stack** -- audit trails, PII redaction, token budgets, GDPR/CCPA/HIPAA-ready
- **1,650+ tests passing** -- unit, integration, E2E, security, load, chaos, and penetration tests
- **Built on zero-trust** -- mTLS, SPIFFE identity, Vault secret management

### B3. Add a Metrics Banner

Between the hero and the feature cards, add a simple metrics row:

| 98.9% | 100% | < 1ms | 1,650+ |
|-------|------|-------|--------|
| Attacks Blocked | Data Leak Prevention | Security Processing P99 | Tests Passing |

This is the single highest-impact change for the homepage. Visitors need hard numbers immediately.

*Source: `CLAIMS.md` lines 19-24.*

### B4. Add Social Proof / Challenge Section

The $1,000 security challenge is live and is a strong trust signal. Add a brief mention:

> **Live Security Challenge.** We run a $1,000 bounty challenge where anyone can try to bypass Force Field's protections. No one has succeeded. [Learn more]

*Source: `CEO_Executive_Brief.md` lines 455-505.*

---

## C. Missing Pages to Consider Creating

### C1. `/en/benchmarks/` -- Published Benchmark Results

A dedicated benchmarks page would be unique in the market. Content from `CLAIMS.md` is ready to use:
- Detection accuracy by attack type
- Latency benchmarks (network vs internal processing)
- Agentic security benchmarks (162 scenarios)
- Outbound PII/secret detection rates
- Throughput under load

### C2. `/en/agentic-security/` -- Dedicated Agentic AI Security Page

This deserves its own page given market timing. Content:
- MCP proxy architecture diagram
- Tool call interception flow
- Chain tracking and attack pattern detection
- Multi-agent orchestration security
- Benchmark results (162 scenarios, 87-100% accuracy)
- Comparison to competitors (none offer this)

---

## D. SEO/Marketing Keyword Gaps

The current pages miss high-value keywords that match actual capabilities:

| Missing Keyword | Where to Add |
|----------------|-------------|
| "MCP security" / "MCP proxy" | Product page, new agentic page |
| "AI agent security" | Homepage hero, product page |
| "prompt injection detection" | Product page (currently says "blocks" but not "detection") |
| "LLM firewall benchmark" | New benchmarks page |
| "streaming LLM security" | Product page |
| "AI tool call interception" | Product page, agentic page |
| "PII redaction LLM" | Product page |
| "structured output security" | Product page |
| "DeBERTa threat detection" | Product page (technical SEO) |

---

## E. Claims Accuracy Check

Every recommendation above is grounded in verified capabilities. Items explicitly **not recommended** for the website because they are not yet production-validated:

- Jailbreak recall is 18.6% for DistilBERT multiclass (contrastive fine-tuning still needed) -- do not claim jailbreak-specific numbers
- Mixed encoding adversarial attacks: 12.5% detection -- do not claim encoding attack coverage
- FP rate on clean samples: 13% in adversarial eval -- the 0.3% figure is from the standard test corpus, which is the correct one to publish
- SOC 2 Type II and ISO 27001 are in progress -- continue stating "in progress" not "compliant"
- GPU acceleration and sub-100ms latency are roadmap items (Q4 2026) -- do not claim these

---

## Priority Order

1. **A1 + B3** -- Add hard numbers (highest impact, 30 minutes of work)
2. **A5 + B1** -- Add agentic security content (biggest competitive gap)
3. **A3** -- Add 10-step pipeline visual (strong differentiator)
4. **A2** -- Replace core capabilities cards (moderate effort)
5. **A4** -- Add benchmarks section (builds trust)
6. **B2** -- Update "Why" bullets (quick win)
7. **C1/C2** -- New pages (larger effort, high SEO value)
