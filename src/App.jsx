
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Building2, TrendingUp, Shield, Sun, Moon, CheckCircle } from 'lucide-react';

// Article data
const articles = [
  {
"id": "tier-2-federal-diagnostic-p-win-reality",
"title": "The Agency Alignment Map: Tier 2 – The Federal Diagnostic & Your P-Win Reality",
"excerpt": "Stop bidding on hope. Learn how the Federal Diagnostic quantifies your P-Win and identifies the infrastructure gaps holding you back from prime contracts.",
"date": "March 30, 2026",
"readTime": "8 min read",
"thumbnail": "https://cdn.marblism.com/f9RzhqhaIIB.webp",
"content": "Federal contracting is not a game of volume. It is a game of precision. Many mid-market firms approach the federal marketplace with a shotgun strategy, firing off proposals at every solicitation that matches their North American Industry Classification System (NAICS) codes. This approach is not only expensive; it is professionally reckless. At Black Orchid Business Group, we move our clients away from the ‘spray and pray’ methodology and into the structured environment of the Agency Alignment Map.Moving Beyond Alignment to Diagnostic CertaintyIn Tier 1 of the Agency Alignment Map, we identified where your services intersect with agency needs. Tier 2, The Federal Diagnostic, is where we pressure-test that alignment against the hard reality of your operational infrastructure. This phase is designed to determine your Probability of Win (P-Win) before you spend a single dollar on a proposal team. If Tier 1 is about finding the right battlefield, Tier 2 is about ensuring your armor is thick enough to survive the engagement.The Federal Diagnostic is an exhaustive audit. We do not look at your marketing materials; we look at your balance sheets, your past performance evaluations (CPARS), your cyber compliance status, and your administrative maturity. The goal is simple: to stop you from bidding on contracts you are mathematically disqualified from winning.Defining the P-Win RealityProbability of Win is often treated as a subjective feeling by inexperienced contractors. They feel they have a ‘good relationship’ with the Program Manager or they ‘really understand’ the Statement of Work. In the Black Orchid ecosystem, P-Win is a data-driven metric. It is the cold calculation of your technical score, your past performance relevancy, and your price competitiveness, weighted against the incumbent’s advantage and the agency’s specific risk tolerance.A P-Win of 20% is a losing proposition. A P-Win of 60% is a gamble. We look for the ‘Reality Gap’: the space between where a firm thinks they are and where the federal procurement data says they are. The Diagnostic identifies exactly what is missing to move a P-Win from 40% to 80%.The Infrastructure Audit: The Silent P-Win KillerThe most common reason for a low P-Win isn't a lack of technical skill; it is a lack of federal infrastructure. Government agencies, particularly within the Department of Defense (DoD) and high-security civilian agencies, prioritize risk mitigation above all else. If your firm cannot demonstrate a robust backend, you are a high-risk entity.Financial Readiness and DCAA ComplianceIf you are pursuing cost-plus contracts, your accounting system must be compliant with the Defense Contract Audit Agency (DCAA) standards. The Federal Diagnostic evaluates your ability to track indirect costs, fringe benefits, and overhead. Without a DCAA-compliant system, your P-Win for major defense contracts is zero. We evaluate your current financial reporting to determine if you can withstand the scrutiny of a pre-award audit.The Cyber Security MandateWith the full implementation of CMMC (Cybersecurity Maturity Model Certification) and existing NIST SP 800-171 requirements, cyber compliance is no longer optional. The Diagnostic audits your current SSP (System Security Plan) and POAM (Plan of Action and Milestones). If you cannot protect Controlled Unclassified Information (CUI), you cannot win. Period. We treat cyber readiness as a primary pillar of your P-Win score.Past Performance Parity: The Relevancy TestThe government buys what it has already bought from people who have already done it. This catch-22 is where many firms stall. In Tier 2, we perform a Past Performance Parity check. We compare your existing commercial or subcontracting experience against the specific ‘Evaluation Factors’ found in previous awards from your target agency.We don’t just ask if you’ve done the work. We ask if you’ve done the work at the same magnitude, complexity, and scale as the target solicitation. If you are a $5M company bidding on a $50M task order, your P-Win is compromised unless the Diagnostic reveals a pathway through strategic teaming or Joint Ventures.The 'Ghost RFP' TrapA critical component of the Federal Diagnostic is identifying 'Ghost RFPs.' These are solicitations that appear open and competitive on SAM.gov but are actually written for a specific incumbent or a preferred vendor. By analyzing the language of the SOW (Statement of Work) and the specific requirements for key personnel, the Diagnostic can flag solicitations where your P-Win is artificially capped. Identifying these early saves our clients hundreds of thousands of dollars in wasted proposal costs.Actionable Intelligence: Validating Your Market StandingTo execute a micro-diagnostic today, log into SAM.gov and navigate to the ‘Contract Data’ section under the Data Bank. Run an Ad Hoc report for your primary NAICS code over the last 24 months. Filter the results by your specific target agency and ‘Total Small Business Set-Aside.’ Compare the average award value to your own internal bonding capacity and highest-valued past performance. If the average award is more than 3x your largest previous project, your P-Win diagnostic indicates you must either seek a Mentor-Protégé agreement or focus on smaller sub-prime opportunities to build the necessary bridge.The Black Orchid Stance: Infrastructure Precedes AwardsOur definitive stance is this: Infrastructure precedes awards. If your backend compliance, cyber posture, and financial systems are not audit-ready, your technical solution is irrelevant. The federal government does not award contracts to the 'best' company; it awards contracts to the best company that presents the lowest administrative risk. The Federal Diagnostic is the only way to ensure you aren't fighting a battle you've already lost.Supporting data confirms that firms with high administrative maturity win 4x more prime contracts than firms that rely solely on technical expertise. In the federal stage, being a 'good business' isn't enough; you must be a 'compliant federal entity.'Next Steps: Mapping Your RealityThe Federal Diagnostic is not a one-time event; it is a continuous assessment that informs every move on your Roadmap. Once we have quantified your P-Win and identified the infrastructure gaps, we move to Tier 3, where we begin the actual tactical engagement. If you are tired of guessing why your proposals are being rejected or if you want a clear-eyed assessment of your actual standing in the federal market, it is time to look at the Map.Stop guessing and start winning with a data-driven strategy. Explore how our methodology moves you from a subcontractor mindset to a prime contractor reality by reviewing the full Roadmap.Build your legacy on a foundation of intelligence. Reach out to Black Orchid Business Group today to begin your Tier 2 Diagnostic.Explore the full strategy here: https://bobgllc.com/roadmap"
},
  {
"id": "tier-2-federal-diagnostic-p-win-reality",
"title": "The Agency Alignment Map: Tier 2 – The Federal Diagnostic & Your P-Win Reality",
"excerpt": "Stop bidding on hope. Learn how the Federal Diagnostic quantifies your P-Win and identifies the infrastructure gaps holding you back from prime contracts.",
"date": "March 30, 2026",
"readTime": "8 min read",
"thumbnail": "https://cdn.marblism.com/f9RzhqhaIIB.webp",
"content": "Federal contracting is not a game of volume. It is a game of precision. Many mid-market firms approach the federal marketplace with a shotgun strategy, firing off proposals at every solicitation that matches their North American Industry Classification System (NAICS) codes. This approach is not only expensive; it is professionally reckless. At Black Orchid Business Group, we move our clients away from the ‘spray and pray’ methodology and into the structured environment of the Agency Alignment Map.Moving Beyond Alignment to Diagnostic CertaintyIn Tier 1 of the Agency Alignment Map, we identified where your services intersect with agency needs. Tier 2, The Federal Diagnostic, is where we pressure-test that alignment against the hard reality of your operational infrastructure. This phase is designed to determine your Probability of Win (P-Win) before you spend a single dollar on a proposal team. If Tier 1 is about finding the right battlefield, Tier 2 is about ensuring your armor is thick enough to survive the engagement.The Federal Diagnostic is an exhaustive audit. We do not look at your marketing materials; we look at your balance sheets, your past performance evaluations (CPARS), your cyber compliance status, and your administrative maturity. The goal is simple: to stop you from bidding on contracts you are mathematically disqualified from winning.Defining the P-Win RealityProbability of Win is often treated as a subjective feeling by inexperienced contractors. They feel they have a ‘good relationship’ with the Program Manager or they ‘really understand’ the Statement of Work. In the Black Orchid ecosystem, P-Win is a data-driven metric. It is the cold calculation of your technical score, your past performance relevancy, and your price competitiveness, weighted against the incumbent’s advantage and the agency’s specific risk tolerance.A P-Win of 20% is a losing proposition. A P-Win of 60% is a gamble. We look for the ‘Reality Gap’: the space between where a firm thinks they are and where the federal procurement data says they are. The Diagnostic identifies exactly what is missing to move a P-Win from 40% to 80%.The Infrastructure Audit: The Silent P-Win KillerThe most common reason for a low P-Win isn't a lack of technical skill; it is a lack of federal infrastructure. Government agencies, particularly within the Department of Defense (DoD) and high-security civilian agencies, prioritize risk mitigation above all else. If your firm cannot demonstrate a robust backend, you are a high-risk entity.Financial Readiness and DCAA ComplianceIf you are pursuing cost-plus contracts, your accounting system must be compliant with the Defense Contract Audit Agency (DCAA) standards. The Federal Diagnostic evaluates your ability to track indirect costs, fringe benefits, and overhead. Without a DCAA-compliant system, your P-Win for major defense contracts is zero. We evaluate your current financial reporting to determine if you can withstand the scrutiny of a pre-award audit.The Cyber Security MandateWith the full implementation of CMMC (Cybersecurity Maturity Model Certification) and existing NIST SP 800-171 requirements, cyber compliance is no longer optional. The Diagnostic audits your current SSP (System Security Plan) and POAM (Plan of Action and Milestones). If you cannot protect Controlled Unclassified Information (CUI), you cannot win. Period. We treat cyber readiness as a primary pillar of your P-Win score.Past Performance Parity: The Relevancy TestThe government buys what it has already bought from people who have already done it. This catch-22 is where many firms stall. In Tier 2, we perform a Past Performance Parity check. We compare your existing commercial or subcontracting experience against the specific ‘Evaluation Factors’ found in previous awards from your target agency.We don’t just ask if you’ve done the work. We ask if you’ve done the work at the same magnitude, complexity, and scale as the target solicitation. If you are a $5M company bidding on a $50M task order, your P-Win is compromised unless the Diagnostic reveals a pathway through strategic teaming or Joint Ventures.The 'Ghost RFP' TrapA critical component of the Federal Diagnostic is identifying 'Ghost RFPs.' These are solicitations that appear open and competitive on SAM.gov but are actually written for a specific incumbent or a preferred vendor. By analyzing the language of the SOW (Statement of Work) and the specific requirements for key personnel, the Diagnostic can flag solicitations where your P-Win is artificially capped. Identifying these early saves our clients hundreds of thousands of dollars in wasted proposal costs.Actionable Intelligence: Validating Your Market StandingTo execute a micro-diagnostic today, log into SAM.gov and navigate to the ‘Contract Data’ section under the Data Bank. Run an Ad Hoc report for your primary NAICS code over the last 24 months. Filter the results by your specific target agency and ‘Total Small Business Set-Aside.’ Compare the average award value to your own internal bonding capacity and highest-valued past performance. If the average award is more than 3x your largest previous project, your P-Win diagnostic indicates you must either seek a Mentor-Protégé agreement or focus on smaller sub-prime opportunities to build the necessary bridge.The Black Orchid Stance: Infrastructure Precedes AwardsOur definitive stance is this: Infrastructure precedes awards. If your backend compliance, cyber posture, and financial systems are not audit-ready, your technical solution is irrelevant. The federal government does not award contracts to the 'best' company; it awards contracts to the best company that presents the lowest administrative risk. The Federal Diagnostic is the only way to ensure you aren't fighting a battle you've already lost.Supporting data confirms that firms with high administrative maturity win 4x more prime contracts than firms that rely solely on technical expertise. In the federal stage, being a 'good business' isn't enough; you must be a 'compliant federal entity.'Next Steps: Mapping Your RealityThe Federal Diagnostic is not a one-time event; it is a continuous assessment that informs every move on your Roadmap. Once we have quantified your P-Win and identified the infrastructure gaps, we move to Tier 3, where we begin the actual tactical engagement. If you are tired of guessing why your proposals are being rejected or if you want a clear-eyed assessment of your actual standing in the federal market, it is time to look at the Map.Stop guessing and start winning with a data-driven strategy. Explore how our methodology moves you from a subcontractor mindset to a prime contractor reality by reviewing the full Roadmap.Build your legacy on a foundation of intelligence. Reach out to Black Orchid Business Group today to begin your Tier 2 Diagnostic.Explore the full strategy here: https://bobgllc.com/roadmap"
},
  {
  "id": "intel-2026-03-30-agency-alignment-map-tier-2-dha-pwin",
  "title": "The Agency Alignment Map Tier 2: Federal Diagnostic & The DHA P-Win Strategy",
  "excerpt": "A Tier 2 DHA diagnostic that exposes misalignment, cuts Middleman Tax, and builds a real P-Win path from sub to prime.",
  "date": "2026-03-30",
  "readTime": "6 min",
  "thumbnail": "{{ site.baseurl }}/assets/images/federal-market-research-desk.jpg",
  "content": "<p class=\"lead-paragraph\"><strong>Definitive stance:</strong> If you’re pursuing the Defense Health Agency (DHA) without a Tier 2 Federal Diagnostic inside <strong>The Agency Alignment Map</strong>, you’re not “business developing.” You’re donating bid budget. DHA is execution-heavy, compliance-driven, and relationship-gated. Your win rate won’t improve until your targeting, capture math, and procurement mechanics align to how DHA actually buys.</p>\n\n<p><img src=\"{{ site.baseurl }}/assets/images/two-professionals-government-office-us-capitol-flag-roadmap.jpg\" alt=\"Two professionals in a federal office discussing a 5-year roadmap and sub-to-prime strategy\" style=\"display:block; max-width:100%; height:auto; margin:30px auto; border-radius:12px;\" loading=\"lazy\" decoding=\"async\" /></p>\n\n<h2>Where This Fits in the 10-Tier Hierarchy</h2>\n<p>This article sits in <strong>Tier 2</strong> of our 10-tier hierarchy: the <strong>Federal Diagnostic</strong>. Tier 1 is your orientation: what you sell, who you are, and the constraints you bring. Tier 2 is where we stop guessing and start scoring. We validate agency-fit with procurement evidence, not vibes.</p>\n<p><strong>Tier 2 outcome:</strong> a DHA-specific “go/no-go” posture, plus a P-Win plan that maps to real contracting pathways, not generic pipeline slides.</p>\n\n<h2>The Agency Alignment Map (Formerly APEX Roadmap): What Tier 2 Actually Does</h2>\n<p><strong>The Agency Alignment Map</strong> is our proprietary alignment system (previously referred to as the APEX Roadmap). Tier 2 is the diagnostic engine inside it. It answers one uncomfortable question: <strong>Are you structurally aligned to win at DHA, or just hoping to get lucky?</strong></p>\n<p>Tier 2 forces hard decisions. It converts “we can do it” into “we can win it.” Then it builds a path to prime: or a deliberate subcontract strategy that doesn’t trap you in <strong>Middleman Tax</strong>.</p>\n\n<h3>The Middleman Tax (And Why DHA Exposes It Faster)</h3>\n<p><strong>Middleman Tax</strong> is the margin, control, and learning you lose when your only access to DHA is through a chain of primes, subs, and pass-throughs. The tax isn’t just financial. It’s strategic.</p>\n<p>At DHA, the penalty compounds because the work is operationally sensitive, compliance bound, and continuity-driven. If you’re always “the subcontractor behind the subcontractor,” you won’t own performance narratives, CPARS leverage, or customer access. You’ll rent them. Expensively.</p>\n\n<h2>Tier 2 Federal Diagnostic for DHA: The Four Checks That Matter</h2>\n<p>A real DHA diagnostic is not a capability statement review. It’s a procurement intelligence audit. We run four checks that determine whether your P-Win plan is viable.</p>\n\n<h3>1) Contracting Pathway Check: How DHA Will Actually Buy This</h3>\n<p>DHA buying routes are not uniform. Your first diagnostic task is to identify the <strong>most probable contracting pathway</strong> for your offer: existing IDIQs, task orders, BPA calls, small business set-asides, or direct competed contracts.</p>\n<p>Execution detail matters here. If your target work is typically ordered as a task under an existing vehicle and you’re preparing for a standalone full-and-open competition, you’re misaligned on day one.</p>\n<p><strong>Concrete example:</strong> When firms chase “health IT support” at DHA, many aim at the wrong level: writing to enterprise modernization language while the buy is scoped as an operations task under a vehicle with pre-positioned primes. That gap is where P-Win plans die quietly.</p>\n\n<h3>2) Requirement Reality Check: What DHA Re-buys Versus What It Experiments With</h3>\n<p>DHA is not the place to test an unproven delivery model. Tier 2 separates <strong>re-buy requirements</strong> (repeatable, budgeted, operational) from <strong>experimental requirements</strong> (pilot-like, innovation-labeled, unstable).</p>\n<p>Your P-Win strategy should overweight re-buys. That’s where continuity, incumbency, and evaluation factors favor disciplined operators.</p>\n<p><strong>Supporting data point (practical):</strong> In DHA pursuits, evaluation language consistently rewards documented past performance in similar clinical/health operations environments. If your past performance is adjacent: commercial healthcare without federal compliance artifacts: your proposal needs a bridge strategy, not a hope strategy.</p>\n\n<h3>3) Compliance & Evidence Check: DHA Doesn’t Buy Promises</h3>\n<p>DHA evaluations heavily favor evidence: process maturity, auditable security posture, clinical workflow awareness (when relevant), and delivery controls. Tier 2 requires you to map which compliance artifacts you can prove today versus which you’re planning to build later.</p>\n<p>Procurement mechanics punish “we will” language. DHA rewards “we have” language.</p>\n<p><strong>Translation:</strong> If you cannot evidence your controls, you will lose to a less charismatic competitor with a boring but provable operating system.</p>\n\n<h3>4) Competitive Position Check: Your Differentiator Must Survive Source Selection</h3>\n<p>Tier 2 forces differentiation into source-selection reality. “Best value” does not mean “best story.” It means the government can defend the award decision.</p>\n<p>Your differentiator must be expressed as something evaluators can score: faster deployment timelines with proof, measurable outcomes with citations, reduced risk with controls, or better staffing with named labor categories and retention tactics.</p>\n\n<p><img src=\"{{ site.baseurl }}/assets/images/federal-pipeline-strategy-laptop-american-flag-capitol.jpg\" alt=\"Federal pipeline flowchart displayed on a laptop with documents and American flag\" style=\"display:block; max-width:100%; height:auto; margin:30px auto; border-radius:12px;\" loading=\"lazy\" decoding=\"async\" /></p>\n\n<h2>The DHA P-Win Strategy: A Tier 2 Playbook You Can Execute</h2>\n<p>P-Win is not a motivational metric. It’s a controllable probability model. At DHA, your P-Win rises when your actions reduce evaluator doubt and increase procurement predictability.</p>\n\n<h3>Step 1: Build a DHA “Target Stack” (Vehicles, NAICS, PSC, Set-Aside Posture)</h3>\n<p>Your target stack is the spine of your capture plan. It defines where you will and won’t play.</p>\n<p><strong>Non-negotiables for the stack:</strong> the NAICS codes you can credibly defend, the PSCs your targets consistently use, and the set-aside posture you can leverage without contortions.</p>\n<p>This is how you stop chasing shiny objects and start creating repeatable pipeline.</p>\n\n<h3>Step 2: Convert Middleman Tax into a Controlled Sub-to-Prime Sequence</h3>\n<p>We don’t demonize subcontracting. We control it. Tier 2 turns random teaming into a deliberate ladder: sub roles selected for learning value, CPARS adjacency, and customer proximity.</p>\n<p><strong>Rule:</strong> If a subcontract does not move you closer to being evaluated as a prime on the next cycle, it’s a distraction. At DHA, distractions become multi-year detours.</p>\n\n<h3>Step 3: Create a “Proof Pack” for DHA Evaluators</h3>\n<p>Your proof pack is a tight, reusable set of evidence that supports technical claims across multiple DHA pursuits.</p>\n<p><strong>What belongs in the proof pack:</strong> past performance write-ups mapped to DHA-like outcomes, security/compliance artifacts you can share appropriately, staffing model evidence, and delivery metrics that show reliability.</p>\n\n<h3>Step 4: Align Capture to the Government’s Calendar, Not Yours</h3>\n<p>DHA work often follows funding rhythms and recompete timing. Tier 2 requires you to track when work is forecasted, when recompetes historically release, and when market research signals start appearing.</p>\n<p>That timing discipline is a quiet advantage. Most firms show up at solicitation release. Winners show up at market shaping.</p>\n\n<div class=\"blog-quote\"><p><strong>Intelligence position:</strong> At DHA, “early” isn’t a feeling. It’s a documented sequence: forecast signal → buyer history → vehicle pathway → pre-RFP engagement → compliant proof pack.</p></div>\n\n<h2>Actionable Intelligence (Do This on SAM.gov Today)</h2>\n<p><strong>One action. Ten minutes. Immediate signal.</strong></p>\n<p>On <strong>SAM.gov</strong>, create (or update) a saved search that isolates DHA opportunity flow by structure, not keywords.</p>\n<p><strong>How to run it:</strong></p>\n<p><strong>1)</strong> Go to Contract Opportunities and use advanced filters.</p>\n<p><strong>2)</strong> Set <strong>Department/Ind. Agency</strong> to <strong>Department of Defense</strong> and add keywords: <strong>“Defense Health Agency”</strong> and <strong>“DHA”</strong>.</p>\n<p><strong>3)</strong> Add filters for <strong>Notice Type</strong> (Sources Sought, RFI, Presolicitation, Solicitation). This separates shaping activity from live bids.</p>\n<p><strong>4)</strong> Save the search and turn on email notifications.</p>\n<p><strong>Why this matters:</strong> Tier 2 diagnostics live and die on early signals. Sources Sought and RFIs show you the buying direction before the evaluation factors harden.</p>\n\n<h2>Key Takeaways (Tier 2 Summary)</h2>\n<div class=\"key-takeaways\"><p><strong>1)</strong> DHA rewards evidence over narrative. If you can’t prove it, you can’t win it.</p><p><strong>2)</strong> Tier 2 Federal Diagnostic is about contracting pathway reality, not capability statement optimism.</p><p><strong>3)</strong> Middleman Tax at DHA is strategic loss: margin, CPARS leverage, and customer access.</p><p><strong>4)</strong> A real P-Win strategy is a probability model tied to vehicles, timing, and evaluator scoreability.</p></div>\n\n<h2>Related Intelligence (Strategy Category)</h2>\n<p><strong>The Agency Alignment Map (Background):</strong> If you need the full framework context, start here: <strong>https://bobgllc.com/apex-roadmap</strong>.</p>\n<p><strong>Tiered growth path:</strong> If you’re actively moving from subcontracting into prime positioning, review our Sub-to-Prime pathway: <strong>https://bobgllc.com/subtoprime</strong>.</p>\n\n<p><img src=\"{{ site.baseurl }}/assets/images/agency-matching-matrix-business-desk.jpg\" alt=\"Agency matching matrix on a desk with a laptop and documents\" style=\"display:block; max-width:100%; height:auto; margin:30px auto; border-radius:12px;\" loading=\"lazy\" decoding=\"async\" /></p>\n\n<h2>Lead Magnet / CTA: Get Your Tier 2 Federal Diagnostic</h2>\n<p>If DHA is on your target list, stop guessing. Get the diagnostic that forces procurement reality into your plan.</p>\n<p>Our Tier 2 Federal Diagnostic is designed to identify misalignment early, reduce wasted bid spend, and produce a defensible DHA P-Win approach grounded in contracting mechanics.</p>\n<p><strong>Request the Federal Diagnostic:</strong> https://bobgllc.com/federal-diagnostic</p>\n\n<p class=\"blog-cta\"><strong>Next step:</strong> If you want the end-to-end implementation path, align it to our core offer: the <strong>Roadmap</strong>: https://bobgllc.com/roadmap</p>"
},
  {
"id": "e436bc8d-891d-4cc2-be2f-53ed70967399",
"title": "Looking For GovCon Market Intelligence? Here Are 10 Things You Should Know About the 2026 FAR Rewrite",
"excerpt": "The 2026 FAR Rewrite is a strategic realignment of how the government buys. Learn how to exploit regulatory streamlining and threshold optimization to secure your first Prime win.",
"date": "March 23, 2026",
"readTime": "8 min read",
"thumbnail": "{{ site.baseurl }}/assets/images/far-rewrite-2026.jpg",
"content": "Definitive stance: The 2026 FAR Rewrite is not “cleanup.” It is a buyer-behavior reset. Firms that align to CO business judgment and threshold optimization will take Prime share from compliance-only competitors.Where this sits in our 10-Tier hierarchy: Tier 1 (Market Intelligence) and Tier 3 (Capture Management). We evaluate the Rewrite through The Agency Alignment Map to convert regulatory change into pipeline advantage.1) CO business judgment is now the center of gravityThe Rewrite shifts authority down to the Contracting Officer (CO). The intent is speed, discretion, and outcome-driven awards.Operational implication: Your capture posture must move from “rule recitation” to “decision enablement.” The CO needs a clean rationale to select you. Build that rationale early—before the RFP—using capability proof, past performance relevance, and a risk narrative the CO can defend.Concrete example: When COs have “wide latitude” to exercise business judgment, weakly substantiated differentiators get ignored. A single quantified performance metric (cycle time reduction, uptime, cost avoidance) becomes more persuasive than three pages of generic capability language.2) Regulatory streamlining is a competitive weapon—not a convenienceStreamlining reduces the legal overhead that used to justify excessive prime markups. That “Middleman Tax” gets harder to defend when the buying process is simpler and faster.Action for challengers: Re-price your go-to-market model for Prime. If you can perform, you can Prime—especially in buys designed to move quickly under simplified procedures.3) Sunsetting provisions will change what “required” meansThe Rewrite’s sunsetting approach removes or retires large volumes of legacy language. That matters because many teams still build proposals around “what we’ve always included.”Intelligence takeaway: Expect solicitations to shed boilerplate requirements and shift toward fewer, higher-impact evaluation factors. That creates an opening for concise, compliance-clean proposals that focus on outcomes, risk control, and schedule.What to do nowBuild a de-scoped compliance checklist for your top NAICS/PSC combinations. Strip legacy FAR “comfort language” from your internal templates. Replace it with decision-grade proof: performance metrics, staffing realism, and deliverable-level clarity.4) June 30, 2026 is a hard capture deadline—treat it like oneJune 30 is the inflection point for the next phase of implementation. If your pipeline assumes static thresholds and static procedures through FY26, your forecast is wrong.Prime strategy: Identify requirements likely to be procured using streamlined procedures after June 30. Then shape those buys now, while agencies are still translating new authorities into their local playbooks.5) Threshold optimization is your fastest path to a first Prime winAs commercial and simplified acquisition usage expands, the smart play is to hunt “threshold-shaped” opportunities: awards structured to stay inside faster, less adversarial lanes.What we see working: Package your offer into clean modules that map to simplified buys: fixed deliverables, short POPs, and tight SLAs. This reduces evaluation friction and strengthens the CO’s award rationale.6) Oral planning and faster cycles reward executive presenceWith planning increasingly allowed to be oral in more situations, sellers that can brief crisply win time—and time wins awards.Your standard: If your leadership cannot explain your technical approach in 3 minutes, you will lose to a firm that can. This is not “presentation polish.” It is CO enablement.Key point: A tight oral narrative becomes a written proposal advantage because it forces clarity, reduces contradictions, and eliminates filler.7) Bid protest tightening changes risk calculus for challengersProtest deterrence lowers the effectiveness of “delay tactics.” That matters for new entrants because time is often the incumbent’s last real advantage.Capture implication: Spend less energy fear-planning for nuisance protests and more energy building a protest-resistant file: traceable claims, clean pricing logic, and documented past performance relevance.8) Strategic Acquisition Guidance (SAG) will steer buying behavior alongside the FARBuying guides outside the FAR carry increasing weight. If the agency’s guide says “this is how we buy,” that becomes reality in evaluation—even when teams pretend it doesn’t.Intelligence discipline: Treat OFPP-endorsed guides and agency playbooks as pre-solicitation evaluation previews. Map them in The Black Orchid Agency Matching Matrix and bake the language into your win themes.9) Escaping the Middleman Tax requires proof, not opinionsSubcontracting can be smart. Staying a sub because “the FAR is complicated” is no longer defensible in a streamlined regime.Decision rule: If you can own the customer outcome, control the risk, and manage the deliverables, you should pursue Prime—especially in buys shaped for speed.10) The 2026 rulemaking window is the Goldilocks periodRules are changing. CO discretion is rising. Incumbents are still running old scripts.Exploit the window: Move now. Firms that shape requirements in transition periods win disproportionate share because they become the “safe new option” when buyers are rewriting their own processes.Actionable Intelligence (SAM.gov): build a June 30 “Rewrite Watchlist” saved searchDo this on SAM.gov today: Create a saved search that surfaces Rewrite-driven buying behavior before June 30.Steps:1) Go to SAM.gov → Contract Opportunities.2) Search: your primary NAICS OR PSC + the phrase "class deviation" + "simplified" (or "commercial").3) Filter Updated Date = last 90 days. Add your target agencies.4) Click Save Search and set email alerts.Why it works: Class deviations are where new authorities show up first. This is how you see threshold and process changes before they’re normalized across every solicitation.Key takeawaysCO empowerment: Win by making the award decision easier to justify—outcomes, risk, and relevance.Sunsetting provisions: Stop writing to legacy boilerplate. Write to decision factors and measurable proof.June 30 deadline: Re-forecast and shape opportunities now. Post-June 30 buys will reward speed and clarity.Threshold optimization: Build “threshold-shaped” offers that fit streamlined lanes and reduce evaluation friction.Next moveBlack Orchid Business Group uses The Agency Alignment Map, The Black Orchid Agency Matching Matrix, and The BOBG Scoring System to turn regulatory change into Prime wins.CTA: If you want a pipeline built for the post-June 30 environment, get the Roadmap: https://bobgllc.com/roadmap"
},
  {
  "id": "d0aa9696-17a1-4502-883d-b8e91e4a138c",
  "title": "Federal AI Disclosure Secrets Revealed: What Experts Don't Want You to Know About Your Prime Contractor Strategy",
  "excerpt": "OMB Memorandum M-24-18 rewrites capture. Stop being AI labor—own the Prime position with disclosure governance and transition intelligence.",
  "date": "March 26, 2026",
  "readTime": "8 min read",
  "thumbnail": "{{ site.baseurl }}/assets/images/federal-ai-disclosure.jpg",
  "content": "<p><strong>Tier 1: Proprietary Frameworks | Tier 2: Deep Data & Policy Analysis</strong></p><p class=\"lead-paragraph\">OMB Memorandum M-24-18 is a fundamental rewriting of the Federal Capture Management playbook. It turns “AI” from a feature into a compliance regime—and it quietly transfers leverage to whoever controls disclosure.</p><p>Most SMBs will treat this as a paperwork problem. That mindset locks you into subcontractor economics. In the AI era, the entity that signs the disclosure controls the technical narrative with the Contracting Officer.</p><p><strong>Definitive stance:</strong> If your Prime owns the M-24-18 disclosure package, you are paying a Middleman Tax in margin, past performance, and authority.</p><h2>The M-24-18 Trap: Why Your Prime Wants You Quiet</h2><p>M-24-18 forces agencies to demand transparency and risk management around AI use. In procurement terms, it creates a new evaluation surface area: governance artifacts become “deliverables,” not “nice-to-haves.”</p><p>Here’s the trap. As a subcontractor, you deliver the model, the tuning, the data engineering, and the performance improvements. The Prime consolidates your inputs into the disclosure narrative and becomes the party of record for compliance.</p><p><strong>Result:</strong> The government remembers the Prime as the risk owner. You become an interchangeable labor line.</p><p>In many subcontract structures, that’s a 15–30% markup for “prime overhead” plus a long-term cost: the Prime harvests your innovation as their past performance story.</p><h3>What the trap looks like in acquisition mechanics</h3><p><strong>CO/CS view:</strong> “Who can certify governance?” They default to the entity managing representations, certifications, and deliverable acceptance.</p><p><strong>Prime behavior:</strong> They centralize disclosure templates, limit your direct access to the CO/COR, and reduce you to technical “support.”</p><p><strong>Your exposure:</strong> If an agency flags model risk, bias, data provenance, or monitoring gaps, the Prime pushes blame down. If the solution performs, they keep the credit up.</p><h2>Market Intelligence: Agencies Aren’t Buying Tools—They’re Buying Governance</h2><p>Federal buyers are shifting from “capability shopping” to “risk-adjusted value.” That means your win theme cannot be performance alone. It must be performance plus disclosure governance.</p><p>When you lead with governance, you change the competitive frame. You stop competing on labor rates and start competing on auditability, control, and delivery assurance—exactly what M-24-18 pressures agencies to prove internally.</p><h3>Concrete example you can use in capture</h3><p>In your next Sources Sought response, include a one-page “Disclosure Governance Plan” that defines: model purpose, training and test data lineage, evaluation methods, monitoring cadence, incident response, and human-in-the-loop controls.</p><p><strong>Translation:</strong> You pre-sell the evaluation criteria before the solicitation drops.</p><h2>The Agency Alignment Map: Your AI Transition Targeting System</h2><p>Not every agency will enforce M-24-18 the same way. The fastest path to Prime position is not “bid more.” It’s aligning to the agencies where governance urgency is highest and acquisition pathways support agile awards.</p><p>This is where <strong>The Agency Alignment Map</strong> comes in. It is your targeting layer for AI transition—built to identify which agencies are (1) under internal pressure to document AI risk and (2) structurally capable of awarding to an SMB Prime.</p><h3>How to use The Agency Alignment Map in practice</h3><p><strong>Step 1:</strong> Match your AI capability to the agency’s operational mission (not their innovation language). Mission buys. Buzzwords don’t.</p><p><strong>Step 2:</strong> Align to the agency’s procurement channels: NAICS fit, PSC alignment (IT/AI-related PSCs), existing IDIQ vehicles, and small business set-aside patterns.</p><p><strong>Step 3:</strong> Enter with a governance-forward offer: disclosure-ready documentation, monitoring, and audit support as part of the technical baseline.</p><p><strong>Outcome:</strong> You become the “safe choice” with the fastest compliance path—without being the cheapest.</p><h2>Stop Being AI Labor: Become the Disclosure Owner</h2><p>“AI labor” is the old model: you build; the Prime sells; the Prime signs. Under M-24-18, that structure is fatal to your long-term growth.</p><p>To move sub-to-prime, you must control at least one of these three assets:</p><p><strong>1) The disclosure artifact:</strong> a standardized, reusable governance package tied to your solution.</p><p><strong>2) The monitoring layer:</strong> operational controls, drift detection, and reporting cadence.</p><p><strong>3) The contracting lane:</strong> direct eligibility to bid as Prime via set-asides, vehicle access, and past performance narrative.</p><h3>The non-negotiable capture shift</h3><p>Lead your proposals with governance. Treat performance claims as secondary proof, not the headline. Your competitors will pitch features. You will pitch risk closure.</p><h2>Executing the Sub-to-Prime Transition (12–24 Month Reality)</h2><p>Prime transition is not paperwork. It’s controlled repositioning.</p><p><strong>Audit:</strong> Identify where you are providing AI components while the Prime owns disclosure and acceptance.</p><p><strong>Target:</strong> Use The Agency Alignment Map to prioritize agencies that are actively signaling AI risk urgency in pre-solicitation communications.</p><p><strong>Build:</strong> Start a past performance narrative now by structuring your deliverables as governance outcomes—documentation, monitoring, and measurable risk controls.</p><h2>Actionable Intelligence: Your 5-Minute SAM.gov Task</h2><p>Today, set up a search that surfaces M-24-18-driven demand before it becomes a formal RFP.</p><p><strong>Do this now in SAM.gov:</strong></p><p><strong>1)</strong> Go to SAM.gov and open <strong>Contract Opportunities</strong>.</p><p><strong>2)</strong> Use keywords: <strong>\"M-24-18\"</strong>, <strong>\"AI governance\"</strong>, <strong>\"model risk\"</strong>, <strong>\"algorithmic impact\"</strong>, <strong>\"AI disclosure\"</strong>.</p><p><strong>3)</strong> Filter by your relevant <strong>PSC</strong> (IT/AI-aligned) and set <strong>Notice Type</strong> to include <strong>Sources Sought</strong> and <strong>RFI</strong>.</p><p><strong>4)</strong> Click <strong>Save Search</strong> and turn on email notifications.</p><p><strong>What you’re looking for:</strong> Any pre-solicitation notice asking about transparency, risk management, monitoring, or responsible AI. Those are the agencies where governance-first SMBs can displace slow primes.</p><h2>Key Takeaways</h2><p><strong>1)</strong> M-24-18 is not compliance noise. It’s leverage—owned by whoever controls disclosure.</p><p><strong>2)</strong> If the Prime signs and you don’t, you are funding their past performance with your innovation.</p><p><strong>3)</strong> The Agency Alignment Map is the targeting system for AI transition: pick the agencies where governance urgency and SMB awardability overlap.</p><h2>Your Next Move</h2><p>Black Orchid Business Group builds disclosure-forward capture strategies for small to mid-sized firms that want to own the Prime position—without guessing, and without paying the Middleman Tax.</p><p><strong>CTA:</strong> Download our Roadmap and pressure-test your AI transition plan against real acquisition mechanics.</p><p><strong>Roadmap:</strong> https://bobgllc.com/roadmap</p><p><strong>Federal Diagnostic:</strong> https://bobgllc.com/federal-diagnostic</p>"
}

];

const ThankYouPage = ({ onClose, isDark }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className={`${isDark ? 'bg-[#020B13]' : 'bg-white'} border-2 rounded-lg max-w-2xl w-full p-12 text-center`} style={{ borderColor: '#D4AF37' }}>
        <CheckCircle size={64} style={{ color: '#D4AF37' }} className="mx-auto mb-6" />
        <h2 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Thank You!</h2>
        <p className={`text-xl ${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-6`}>
          Your submission has been received. A Black Orchid Business Group strategist will contact you within 24 hours.
        </p>
        <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-8`}>
          We look forward to architecting your path to federal contract success.
        </p>
        <button 
          onClick={onClose}
          className="px-8 py-3 font-semibold rounded transition-colors"
          style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

const IntakeForm = ({ segment, onClose, onSubmit, isDark }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const formConfigs = {
    prebidding: {
      title: "Pre-Bidding / New to Federal",
      description: "Assess basic readiness for companies that haven't started yet",
      steps: [
        {
          title: "Registration Status",
          fields: [
            { 
              name: "samStatus", 
              label: "SAM.gov Registration Status", 
              type: "select", 
              required: true, 
              options: ["Not Registered", "In Progress", "Active Registration"] 
            },
            { 
              name: "cageStatus", 
              label: "CAGE Code Status", 
              type: "select", 
              required: true, 
              options: ["Yes", "In Process", "No"] 
            }
          ]
        },
        {
          title: "Compliance & Systems",
          fields: [
            { 
              name: "cybersecurity", 
              label: "Cybersecurity Compliance", 
              type: "select", 
              required: true, 
              options: ["CMMC Certified", "NIST 800-171 Compliant", "FISMA Compliant", "None"] 
            },
            { 
              name: "accountingSystem", 
              label: "Accounting System Adequacy", 
              type: "select", 
              required: true, 
              options: ["DCAA Approved", "Compliant—not formally approved", "Needs Improvement", "Not Compliant"] 
            }
          ]
        },
        {
          title: "Capabilities",
          fields: [
            { 
              name: "bondingCapacity", 
              label: "Bonding Capacity", 
              type: "select", 
              required: true, 
              options: ["None", "Under $500K", "$500K - $2M", "$2M - $5M", "$5M+"] 
            },
            { 
              name: "pastPerformance", 
              label: "Documented Past Performance", 
              type: "select", 
              required: true, 
              options: ["Commercial Only", "Limited or No History"] 
            }
          ]
        },
        {
          title: "Business Profile",
          fields: [
            { 
              name: "industry", 
              label: "Primary Industry/Service (Briefly describe what you do)", 
              type: "textarea", 
              required: true 
            },
            { 
              name: "mainChallenge", 
              label: "Main Challenge: What is the biggest thing stopping you from starting?", 
              type: "textarea", 
              required: true 
            }
          ]
        }
      ]
    },
    agencyAlignment: {
      title: "The Agency Alignment Map",
      description: "Strategic mapping for companies that are registered but lack a focused capture plan",
      steps: [
        {
          title: "Core Capabilities",
          fields: [
            { 
              name: "naicsCodes", 
              label: "Core NAICS Codes (List your primary 3-5 codes)", 
              type: "textarea", 
              required: true 
            },
            { 
              name: "primaryCapabilities", 
              label: "Primary Capabilities (Key services/products you provide to the government)", 
              type: "textarea", 
              required: true 
            }
          ]
        },
        {
          title: "Federal Experience",
          fields: [
            { 
              name: "federalPastPerformance", 
              label: "Current Federal Past Performance (List agencies or departments you have subbed or worked with)", 
              type: "textarea", 
              required: true 
            },
            { 
              name: "targetAgencies", 
              label: "Target Agencies (Are there specific agencies you want to penetrate? e.g., VA, DHA, NAVY)", 
              type: "textarea", 
              required: true 
            }
          ]
        },
        {
          title: "Business Profile",
          fields: [
            { 
              name: "annualRevenue", 
              label: "Current Annual Revenue Tier", 
              type: "select", 
              required: true, 
              options: ["Under $1M", "$1M - $5M", "$5M - $10M", "$10M - $25M", "$25M+"] 
            },
            { 
              name: "geographicFocus", 
              label: "Geographic Focus (Is your mission local, regional, or national?)", 
              type: "select", 
              required: true, 
              options: ["Local", "Regional", "National"] 
            }
          ]
        },
        {
          title: "Strategic Goals",
          fields: [
            { 
              name: "bidHistory", 
              label: "Bid History: Have you bid on federal contracts before?", 
              type: "select", 
              required: true, 
              options: ["Yes—won", "Yes—no awards", "No—never bid"] 
            },
            { 
              name: "desiredResult", 
              label: "Desired Result: What does a 'win' look like for you in the next 12 months?", 
              type: "textarea", 
              required: true 
            }
          ]
        }
      ]
    },
    subToPrime: {
      title: "Sub-to-Prime Transition",
      description: "Readiness check for established subs ready to 'Stop Sharing Margin'",
      steps: [
        {
          title: "Subcontracting Experience",
          fields: [
            { 
              name: "yearsAsSubcontractor", 
              label: "Years as a Federal Subcontractor", 
              type: "select", 
              required: true, 
              options: ["1-2", "3-5", "5-10", "10+ years"] 
            },
            { 
              name: "subcontractingRevenue", 
              label: "Annual Subcontracting Revenue", 
              type: "select", 
              required: true, 
              options: ["Under $500K", "$500K - $1M", "$1M - $3M", "$3M - $5M", "$5M+"] 
            }
          ]
        },
        {
          title: "Relationships & Performance",
          fields: [
            { 
              name: "primeRelationships", 
              label: "Active Prime Relationships: How many primes do you currently support?", 
              type: "select", 
              required: true, 
              options: ["1-2", "3-5", "6-10", "10+"] 
            },
            { 
              name: "cparsHistory", 
              label: "CPARS History: Most recent rating", 
              type: "select", 
              required: true, 
              options: ["Exceptional", "Very Good", "Satisfactory", "Marginal", "No History"] 
            },
            { 
              name: "govRelationships", 
              label: "Direct Government Relationships: Do you have direct contact with Gov Program Managers?", 
              type: "select", 
              required: true, 
              options: ["Yes—Multiple", "Yes—A few", "Limited", "No"] 
            }
          ]
        },
        {
          title: "Financial & Operational Readiness",
          fields: [
            { 
              name: "workingCapital", 
              label: "Financial Resilience: Working Capital Availability", 
              type: "select", 
              required: true, 
              options: ["90+ days", "60-90 days", "30-60 days", "<30 days"] 
            },
            { 
              name: "proposalCapability", 
              label: "Proposal Capability: Do you have an internal team?", 
              type: "select", 
              required: true, 
              options: ["Dedicated Team", "Part-time Staff", "Limited Experience", "No Internal Capability"] 
            }
          ]
        },
        {
          title: "Strategic Intent",
          fields: [
            { 
              name: "strategicIntent", 
              label: "Strategic Intent: Why are you ready to transition to Prime status now?", 
              type: "textarea", 
              required: true 
            }
          ]
        }
      ]
    }
  };

  const config = formConfigs[segment];
  const totalSteps = config.steps.length;
  const currentStepData = config.steps[currentStep];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { segment, data: formData });
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className={`${isDark ? 'bg-[#020B13]' : 'bg-white'} border-2 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto`} style={{ borderColor: '#D4AF37' }}>
        <div className={`sticky top-0 ${isDark ? 'bg-[#020B13]' : 'bg-white'} border-b-2 p-6 flex items-center justify-between z-10`} style={{ borderColor: '#D4AF37' }}>
          <div>
            <h3 className="text-2xl mb-1" style={{ color: '#D4AF37' }}>{config.title}</h3>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>{config.description}</p>
          </div>
          <button onClick={onClose} className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors hover:opacity-70`}>
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold" style={{ color: '#D4AF37' }}>
                {currentStepData.title}
              </h4>
              <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>
                Step {currentStep + 1} of {totalSteps}
              </span>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: idx <= currentStep ? '#D4AF37' : (isDark ? '#3f3f46' : '#d4d4d8')
                  }}
                />
              ))}
            </div>
          </div>

          {/* Form fields with slide animation */}
          <form onSubmit={handleSubmit}>
            <div className="min-h-[300px]">
              <div className="flex flex-col gap-6">
                {currentStepData.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        rows={4}
                        className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
                        style={{ focusBorderColor: '#D4AF37' }}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
                        style={{ focusBorderColor: '#D4AF37' }}
                      >
                        <option value="">Select an option</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
                        style={{ focusBorderColor: '#D4AF37' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex items-center justify-between mt-8 pt-6 border-t ${isDark ? 'border-[#262626]' : 'border-zinc-200'}`}>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 ${currentStep === 0 ? (isDark ? 'text-zinc-600' : 'text-zinc-400') : ''} disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:opacity-80`}
                style={{ color: currentStep > 0 ? '#D4AF37' : undefined }}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              {currentStep < totalSteps - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 font-semibold rounded transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 font-semibold rounded transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ArticleView = ({ article, onClose, isDark }) => {
  return (
    <div className={`py-20 px-6 ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onClose}
          className={`flex items-center gap-2 mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:opacity-70 transition-colors`}
        >
          <ChevronLeft size={20} />
          Back to Intelligence
        </button>
        
        <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg overflow-hidden`} style={{ borderColor: '#D4AF37' }}>
          <img 
            src={article.thumbnail} 
            alt={article.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-4`}>
              <BookOpen size={16} style={{ color: '#D4AF37' }} />
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>{article.title}</h1>
            <p className={`text-xl ${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-8 italic`}>{article.excerpt}</p>
            
            <div 
              className={`prose ${isDark ? 'prose-invert' : 'prose-zinc'} max-w-none ${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlackOrchidWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIntake, setActiveIntake] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      setIsDark(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = () => {
    setActiveIntake(null);
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    scrollToSection('home');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 bg-opacity-95 border-b z-40 ${isDark ? 'bg-[#020B13] border-[#262626]' : 'bg-white border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Black Orchid Business Group" 
                className="h-12"
                style={{ filter: isDark ? 'invert(1)' : 'invert(0)' }}
              />
              <div>
                <div className="text-xl" style={{ color: '#D4AF37' }}>Black Orchid Business Group</div>
                <div className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Intelligence. Strategy. Access.</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Services</button>
              <button onClick={() => scrollToSection('intelligence')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Intelligence</button>
              <button 
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors hover:opacity-80`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2 font-semibold rounded transition-colors hover:opacity-90"
                style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
              >
                Contact
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors text-left hover:opacity-80`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors text-left hover:opacity-80`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors text-left hover:opacity-80`}>Services</button>
              <button onClick={() => scrollToSection('intelligence')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors text-left hover:opacity-80`}>Intelligence</button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2 font-semibold rounded transition-colors"
                style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Conditional rendering: show article view or main content */}
      {selectedArticle ? (
        <ArticleView article={selectedArticle} onClose={() => setSelectedArticle(null)} isDark={isDark} />
      ) : (
        <>
          {/* Hero Section with Parallax */}
          <section 
            id="home" 
            className="pt-32 pb-20 px-6 relative overflow-hidden"
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/hero-patriotic.webp.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `translateY(${scrollY * 0.5}px)`,
                willChange: 'transform'
              }}
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-60'}`}></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl mb-6" style={{ color: '#D4AF37' }}>
                  Intelligence. Strategy. Access.
                </h1>
                <p className={`text-2xl md:text-3xl ${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-4`}>
                  Boutique Scale. Sovereign Results.
                </p>
                <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-3xl mx-auto mb-12`}>
                  Empowering small to mid-sized firms to compete and win in the government sector with the precision of a global firm and the exclusive attention your mission requires.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="px-8 py-4 font-semibold text-lg rounded transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className={`py-20 px-6 ${isDark ? 'bg-[#262626]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl mb-8 text-center" style={{ color: '#D4AF37' }}>About Black Orchid Business Group</h2>
              <div className={`max-w-4xl mx-auto text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed flex flex-col gap-6`}>
                <p>
                  Black Orchid Business Group is the authority for firms that refuse to be "just another vendor." We offer the technical precision of a global firm with the exclusive, boutique attention your mission requires.
                </p>
                <p>
                  We operate at the intersection of intelligence, influence, and execution in the federal marketplace. Our clients don't need another consultant telling them what they already know. They need strategic partners who architect pathways to federal contract success.
                </p>
                <p>
                  Whether you're an established company with proven capabilities seeking to penetrate the public sector, or an emerging firm preparing for your first government contract, we bridge the gap between small business agility and large-scale government requirements.
                </p>
                <p className="font-semibold text-xl italic text-center mt-4" style={{ color: '#D4AF37' }}>
                  "We don't consult. We architect dominance."
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl mb-12 text-center" style={{ color: '#D4AF37' }}>Our Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.1)' }}>
                      <TrendingUp style={{ color: '#D4AF37' }} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2" style={{ color: '#D4AF37' }}>The Agency Alignment Map</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4`}>Our definitive blueprint for federal market dominance</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-6`}>
                    A high-touch, proprietary consulting engagement designed to move your firm from the sidelines to the center of the mission. We deliver a tactical, 12-month execution plan tailored to your specific past performance and growth goals.
                  </p>
                  <button onClick={() => scrollToSection('contact')} className="font-semibold hover:opacity-80" style={{ color: '#D4AF37' }}>
                    Learn More →
                  </button>
                </div>

                <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.1)' }}>
                      <Shield style={{ color: '#D4AF37' }} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2" style={{ color: '#D4AF37' }}>Federal Diagnostic</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4`}>Comprehensive readiness assessment</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-6`}>
                    Evaluate your governance structure, financial resilience, operational maturity, and technical architecture to identify vulnerabilities and opportunities others miss. Comprehensive readiness assessment for federal contracting infrastructure.
                  </p>
                  <button onClick={() => scrollToSection('contact')} className="font-semibold hover:opacity-80" style={{ color: '#D4AF37' }}>
                    Learn More →
                  </button>
                </div>

                <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.1)' }}>
                      <Building2 style={{ color: '#D4AF37' }} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2" style={{ color: '#D4AF37' }}>Sub-to-Prime Transition</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4`}>Structured pathway to prime contractor authority</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-6`}>
                    Evaluate your infrastructure, relationships, and financial capacity to determine your readiness for prime contractor status. We provide a structured pathway from subcontracting dependency to prime contractor authority.
                  </p>
                  <button onClick={() => scrollToSection('contact')} className="font-semibold hover:opacity-80" style={{ color: '#D4AF37' }}>
                    Learn More →
                  </button>
                </div>

                <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.1)' }}>
                      <BookOpen style={{ color: '#D4AF37' }} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2" style={{ color: '#D4AF37' }}>Federal Intelligence</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4`}>Continuous market intelligence and strategic insights</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-6`}>
                    Stay ahead of market shifts, policy changes, and emerging opportunities with strategic recommendations tailored to your federal objectives. Continuous market intelligence for the federal marketplace.
                  </p>
                  <button onClick={() => scrollToSection('intelligence')} className="font-semibold hover:opacity-80" style={{ color: '#D4AF37' }}>
                    Read Intelligence →
                  </button>
                </div>
              </div>

              {/* Intake Cards */}
              <div className="mt-16">
                <h3 className="text-3xl mb-8 text-center" style={{ color: '#D4AF37' }}>Where Are You in Your Journey?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div 
                    onClick={() => setActiveIntake('prebidding')}
                    className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 cursor-pointer transition-all hover:scale-105`}
                    style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
                  >
                    <h4 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Pre-Bidding / New to Federal</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Preparing to enter the federal marketplace</p>
                    <div className="font-semibold" style={{ color: '#D4AF37' }}>Start Assessment →</div>
                  </div>

                  <div 
                    onClick={() => setActiveIntake('agencyAlignment')}
                    className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 cursor-pointer transition-all hover:scale-105`}
                    style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
                  >
                    <h4 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Agency Alignment Map</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Registered but need strategic direction</p>
                    <div className="font-semibold" style={{ color: '#D4AF37' }}>Start Assessment →</div>
                  </div>

                  <div 
                    onClick={() => setActiveIntake('subToPrime')}
                    className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 cursor-pointer transition-all hover:scale-105`}
                    style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
                  >
                    <h4 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Sub to Prime</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Ready to transition to prime contractor</p>
                    <div className="font-semibold" style={{ color: '#D4AF37' }}>Start Assessment →</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligence (Blog) Section */}
          <section id="intelligence" className={`py-20 px-6 ${isDark ? 'bg-[#262626]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Federal Intelligence</h2>
                <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Strategic updates, thought leadership, and tactical insights for the federal marketplace</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className={`${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'} border-2 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105`}
                    style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
                  >
                    <img 
                      src={article.thumbnail} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-3`}>
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>{article.title}</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>{article.excerpt}</p>
                      <div className="font-semibold" style={{ color: '#D4AF37' }}>Read Article →</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Ready to Dominate Your Market?</h2>
                <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Connect with a Black Orchid strategist for a discovery consultation</p>
              </div>

              <form className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Company Name *</label>
                    <input type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Industry *</label>
                    <input type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Email Address *</label>
                    <input type="email" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Phone Number</label>
                    <input type="tel" className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Current Revenue Tier</label>
                  <select className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }}>
                    <option value="">Select a range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-25m">$10M - $25M</option>
                    <option value="over-25m">Over $25M</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Specific Contracting Challenges *</label>
                  <textarea required rows={5} className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }}></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 font-semibold text-lg rounded transition-colors hover:opacity-90" style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}>
                  Request Discovery Consultation
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className={`${isDark ? 'bg-[#020B13] border-[#262626]' : 'bg-white border-zinc-200'} border-t py-12 px-6`}>
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Black Orchid Business Group" 
                  className="h-10"
                  style={{ filter: isDark ? 'invert(1)' : 'invert(0)' }}
                />
                <div className="text-xl" style={{ color: '#D4AF37' }}>Black Orchid Business Group</div>
              </div>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Intelligence. Strategy. Access. Boutique Scale. Sovereign Results.</p>
              <p className={`${isDark ? 'text-zinc-500' : 'text-zinc-400'} text-sm`}>© 2026 Black Orchid Business Group LLC. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}

      {/* Modals */}
      {activeIntake && (
        <IntakeForm 
          segment={activeIntake} 
          onClose={() => setActiveIntake(null)} 
          onSubmit={handleFormSubmit}
          isDark={isDark} 
        />
      )}

      {showThankYou && (
        <ThankYouPage onClose={handleThankYouClose} isDark={isDark} />
      )}
    </div>
  );
}
