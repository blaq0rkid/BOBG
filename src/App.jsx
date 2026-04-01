
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Building2, TrendingUp, Shield, Sun, Moon, CheckCircle } from 'lucide-react';
import { articles } from './data/articles';

// Formspree Form IDs - REPLACE THESE WITH YOUR ACTUAL FORMSPREE FORM IDs
const FORMSPREE_IDS = {
  contact: 'YOUR_CONTACT_FORM_ID',
  preBidding: 'YOUR_PREBIDDING_FORM_ID',
  agencyAlignment: 'YOUR_AGENCY_ALIGNMENT_FORM_ID',
  subToPrime: 'YOUR_SUB_TO_PRIME_FORM_ID',
  federalDiagnostic: 'YOUR_FEDERAL_DIAGNOSTIC_FORM_ID'
};

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

const PrivacyPolicy = ({ onClose, isDark }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onClose}
            className={`flex items-center gap-2 mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:opacity-70 transition-colors`}
          >
            <ChevronLeft size={20} />
            Back to Home
          </button>
          
          <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} style={{ borderColor: '#D4AF37' }}>
            <h1 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Privacy Policy</h1>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-8`}>Black Orchid Business Group - Effective Date: April 1, 2026</p>
            
            <div className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed space-y-6`}>
              <p>
                Black Orchid Business Group ("the Company," "we," "us," or "our") is committed to protecting the privacy and security of the information provided by our clients and website visitors. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information through our website, bobgllc.com, and our business consulting services.
              </p>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>1. Information We Collect</h2>
                <p>We collect information that identifies, relates to, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information").</p>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>A. Information Provided Voluntarily:</h3>
                <p>When you engage with our website or contact us regarding our government contracting services (including market research, proposal writing, and bid management), we may collect:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Contact information (e.g., first name and last name, email address, phone number).</li>
                  <li>Business information (e.g., business name, industry details).</li>
                  <li>Project-specific details relevant to federal, state, county, or city government bidding opportunities.</li>
                </ul>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>B. Information Collected Automatically:</h3>
                <p>When you access or use our website, we may collect certain information automatically, including through cookies and similar tracking technologies ("Usage Data").</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>C. Information Collected via Third-Party Services:</h3>
                <p><strong>Formspree:</strong> We utilize Formspree to process our website contact forms. When you submit an inquiry, your data is transmitted to Formspree's servers for processing and delivery to our team. Formspree may use this data for anti-spam and security purposes. By using our forms, you acknowledge that the information you provide will be transferred to Formspree for processing in accordance with their Privacy Policy.</p>
                <p className="mt-2"><strong>GitHub Pages:</strong> Our website is hosted using GitHub Pages. GitHub may collect certain log data from visitors, including IP addresses, to maintain the security and integrity of their hosting services. This processing is subject to the GitHub Privacy Statement.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>2. How We Use Your Information</h2>
                <p>We use the collected information for the following professional purposes:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Service Delivery:</strong> To provide and maintain our services, including specialized guidance through the complexities of government contracting and to manage bid submissions.</li>
                  <li><strong>Communication:</strong> To respond to inquiries submitted via our forms and to notify you about changes to our services.</li>
                  <li><strong>Customer Support:</strong> To provide customer support.</li>
                  <li><strong>Analysis and Improvement:</strong> To gather analysis or valuable information so that we can improve our services, including improving our personalized approach to client consulting.</li>
                  <li><strong>Compliance:</strong> To ensure all bid management services meet specific government regulatory and compliance requirements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>3. Disclosure of Information</h2>
                <p>We do not sell your Personal Information. We may share information with third parties only in the following circumstances:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Service Providers:</strong> We share information with trusted third-party providers, such as Formspree (for form processing) and GitHub (for hosting), strictly to the extent necessary for them to provide their services to us.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations related to government contracting regulations.</li>
                  <li><strong>Professional Necessity:</strong> With your explicit consent, information may be shared with government agencies as part of the bid submission and management process.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>4. Data Security</h2>
                <p>We implement industry-standard security measures to protect the confidentiality and integrity of your data. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your Personal Information, we cannot guarantee its absolute security.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>5. Data Retention</h2>
                <p>We retain Personal Information only for as long as is necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements associated with government bidding cycles.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>6. Your Rights and Choices</h2>
                <p>Depending on your location and applicable law (including the GDPR, CCPA, or other data protection laws), you may have rights regarding your Personal Information, including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>The right to access the Personal Information we hold about you.</li>
                  <li>The right to request the correction of inaccurate information.</li>
                  <li>The right to request the deletion of your data, subject to legal and contractual obligations related to ongoing government contract bids.</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at the details provided below.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>7. Third-Party Links</h2>
                <p>Our website may contain links to government portals or third-party sites. This Privacy Policy does not apply to those external sites, and we encourage you to review the privacy policies of any third-party service you visit.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>8. Changes to This Privacy Policy</h2>
                <p>We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the new Privacy Policy on bobgllc.com and updating the "Effective Date."</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact:</p>
                <p className="mt-4">
                  <strong>Black Orchid Business Group</strong><br />
                  Website: bobgllc.com<br />
                  Via our website: bobgllc.com/contact<br />
                  Attn: Legal Department / Privacy Officer
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TermsOfService = ({ onClose, isDark }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onClose}
            className={`flex items-center gap-2 mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:opacity-70 transition-colors`}
          >
            <ChevronLeft size={20} />
            Back to Home
          </button>
          
          <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} style={{ borderColor: '#D4AF37' }}>
            <h1 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Terms of Service</h1>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-8`}>Black Orchid Business Group - Effective Date: January 26, 2024</p>
            
            <div className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed space-y-6`}>
              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>1. Agreement to Terms</h2>
                <p>Welcome to Black Orchid Business Group ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website located at bobgllc.com (the "Website") and any services, content, or information provided through the Website or directly by the Company (collectively, the "Services").</p>
                <p className="mt-4">By accessing or using the Website or Services, you ("User," "Client," or "you") acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must discontinue use of the Website and Services immediately.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>2. Description of Services</h2>
                <p>Black Orchid Business Group provides business consulting services specializing in government contracting assistance for small to mid-sized businesses. Our Services include, but are not limited to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Consulting Services (Government Contracting Advisory):</strong> Strategic guidance related to government contracting readiness, compliance considerations, process navigation, and competitive positioning for federal, state, county, and city opportunities.</li>
                  <li><strong>Market Research and Analysis:</strong> Identification and evaluation of relevant government contracting opportunities at federal, state, county, and city levels.</li>
                  <li><strong>Proposal Writing Assistance:</strong> Expert support drafting, editing, and organizing proposal content to help meet solicitation requirements with a focus on clarity and compliance.</li>
                  <li><strong>Bid Management Services:</strong> Comprehensive support throughout the bidding process, from preparation to submission, including timeline planning, document coordination, deadline management, and compliance verification.</li>
                </ul>
                <p className="mt-4">The scope of any specific engagement shall be governed by a separate written agreement or statement of work executed between the Company and Client.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>3. Eligibility</h2>
                <p>By using the Website or Services, you represent and warrant that:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>You are at least eighteen (18) years of age;</li>
                  <li>You have the legal authority to enter into these Terms;</li>
                  <li>If you are acting on behalf of a business entity, you have the authority to bind such entity to these Terms;</li>
                  <li>You will comply with all applicable local, state, national, and international laws and regulations in connection with your use of the Website and Services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>4. User Accounts</h2>
                <p>Certain features of our Website or Services may require you to create an account. You agree to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Provide accurate, current, and complete information during registration;</li>
                  <li>Maintain and promptly update your account information;</li>
                  <li>Maintain the security and confidentiality of your login credentials;</li>
                  <li>Accept responsibility for all activities that occur under your account;</li>
                  <li>Notify us immediately of any unauthorized use of your account.</li>
                </ul>
                <p className="mt-4">You further agree to provide accurate, current, and complete information and documentation reasonably requested by the Company in connection with the Services, including without limitation information required for market research, proposal development, bid submissions, and communications with government agencies. You are solely responsible for the completeness and accuracy of all information you provide, and you acknowledge that inaccurate, incomplete, or late information may impact the quality, compliance, or timeliness of deliverables.</p>
                <p className="mt-4">We reserve the right to suspend or terminate your account at our sole discretion if we suspect any breach of these Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>5. Intellectual Property Rights</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>5.1 Company Intellectual Property</h3>
                <p>All content, materials, features, and functionality on the Website, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof, are the exclusive property of Black Orchid Business Group or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>5.2 Limited License</h3>
                <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Website for your personal or internal business purposes. This license does not include the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Modify, copy, or distribute any content from the Website;</li>
                  <li>Use any data mining, robots, or similar data gathering methods;</li>
                  <li>Reverse engineer any portion of the Website;</li>
                  <li>Remove any copyright or proprietary notices from any content.</li>
                </ul>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>5.3 Client Materials</h3>
                <p>You retain ownership of any materials, data, or information you provide to us in connection with the Services ("Client Materials"). By providing Client Materials, you grant us a non-exclusive license to use such materials solely for the purpose of performing the Services.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>5.4 Work Product and Deliverables</h3>
                <p>Unless otherwise agreed in a separate written agreement, the Company retains all right, title, and interest in and to any templates, frameworks, methodologies, processes, know-how, tools, and pre-existing materials used to perform the Services, and any generalized learnings (collectively, "Company Materials").</p>
                <p className="mt-4">Subject to your payment of all applicable fees, you are granted a non-exclusive, non-transferable license to use the specific deliverables created for you as part of the Services (such as written proposal drafts, compliance matrices, schedules, or bid tracking artifacts) for your internal business purposes in connection with pursuing the applicable opportunities (the "Work Product"). This license does not permit resale, public distribution, or use to provide services to third parties.</p>
                <p className="mt-4">To the extent any Work Product incorporates Company Materials, the Company Materials remain the Company's property and are licensed (not sold) to you solely as part of the Work Product.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>6. Acceptable Use Policy</h2>
                <p>You agree not to use the Website or Services to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Violate any applicable law, regulation, or third-party rights;</li>
                  <li>Transmit any unlawful, threatening, defamatory, obscene, or otherwise objectionable material;</li>
                  <li>Distribute viruses, malware, or other harmful computer code;</li>
                  <li>Interfere with or disrupt the integrity or performance of the Website;</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website or its related systems;</li>
                  <li>Engage in any fraudulent activity or misrepresent your identity or affiliation;</li>
                  <li>Collect or harvest any information from the Website without authorization;</li>
                  <li>Use the Website for any purpose that is competitive with the Company's business interests.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>7. Payment Terms</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>7.1 Fees</h3>
                <p>Fees for Services shall be set forth in a separate written agreement, proposal, or statement of work. All fees are quoted in United States Dollars (USD) unless otherwise specified.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>7.2 Payment</h3>
                <p>Payment terms, including due dates, accepted payment methods, and billing cycles, shall be specified in the applicable service agreement. Unless otherwise agreed, invoices are due within thirty (30) days of the invoice date.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>7.3 Late Payments</h3>
                <p>Overdue payments may be subject to late fees of one and one-half percent (1.5%) per month or the maximum rate permitted by law, whichever is less. The Company reserves the right to suspend Services until all outstanding balances are paid in full.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>7.4 Taxes</h3>
                <p>Fees do not include applicable taxes. You are responsible for paying all taxes associated with your use of the Services, excluding taxes based on the Company's net income.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>8. Confidentiality</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>8.1 Confidential Information</h3>
                <p>Both parties acknowledge that they may receive confidential information from the other party during the course of the business relationship. "Confidential Information" includes, but is not limited to, business strategies, financial information, client lists, proprietary methodologies, and any information designated as confidential.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>8.2 Obligations</h3>
                <p>Each party agrees to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Hold the other party's Confidential Information in strict confidence;</li>
                  <li>Not disclose Confidential Information to third parties without prior written consent;</li>
                  <li>Use Confidential Information only for purposes related to the Services;</li>
                  <li>Return or destroy Confidential Information upon termination of the business relationship.</li>
                </ul>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>8.3 Exceptions</h3>
                <p>Confidentiality obligations do not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was rightfully in the receiving party's possession prior to disclosure; (c) is independently developed by the receiving party; or (d) is required to be disclosed by law or court order.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>9. Disclaimers</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>9.1 No Guarantee of Results</h3>
                <p>While Black Orchid Business Group strives to provide high-quality consulting services, we do not guarantee that any particular government contract, subcontract, set-aside determination, bid, or proposal will be awarded to you. The outcome of government contracting processes depends on numerous factors beyond our control, including but not limited to government agency decisions, evaluation criteria, competition, responsibility determinations, protests, and funding availability. You acknowledge that the Company is not responsible for decisions made by any government entity or prime contractor.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>9.2 "As Is" Basis</h3>
                <p>THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>9.3 No Legal, Financial, or Professional Advice</h3>
                <p>The information provided through the Website or Services is for general informational purposes only and does not constitute legal, financial, accounting, or other professional advice. You should consult with qualified professionals for advice specific to your situation.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>10. Limitation of Liability</h2>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>IN NO EVENT SHALL BLACK ORCHID BUSINESS GROUP, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR THE USE OF THE WEBSITE OR SERVICES.</li>
                  <li>THE COMPANY'S TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO THE COMPANY DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</li>
                  <li>THESE LIMITATIONS SHALL APPLY REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>11. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Black Orchid Business Group and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Your use of the Website or Services;</li>
                  <li>Your violation of these Terms;</li>
                  <li>Your violation of any applicable law or third-party rights;</li>
                  <li>Any Client Materials you provide to us;</li>
                  <li>Any misrepresentation made by you.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>12. Term and Termination</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>12.1 Term</h3>
                <p>These Terms are effective upon your first access to the Website or use of the Services and remain in effect until terminated.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>12.2 Termination by You</h3>
                <p>You may terminate these Terms at any time by discontinuing use of the Website and Services and providing written notice to the Company.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>12.3 Termination by Company</h3>
                <p>We may terminate or suspend your access to the Website or Services at any time, with or without cause, and with or without notice, at our sole discretion.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>12.4 Effect of Termination</h3>
                <p>Upon termination: (a) all rights and licenses granted to you under these Terms will immediately cease; (b) you must promptly pay any outstanding fees owed to the Company; and (c) provisions that by their nature should survive termination shall survive, including but not limited to Sections 5, 8, 9, 10, 11, and 14.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>13. Modifications to Terms</h2>
                <p>We reserve the right to modify these Terms at any time at our sole discretion. Any changes will be effective immediately upon posting the revised Terms on the Website with an updated "Effective Date." Your continued use of the Website or Services following the posting of changes constitutes your acceptance of such changes. We encourage you to review these Terms periodically.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>14. Governing Law and Dispute Resolution</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>14.1 Governing Law</h3>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>14.2 Dispute Resolution</h3>
                <p>Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue resolution through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall take place in California, and the arbitrator's decision shall be final and binding.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>14.3 Class Action Waiver</h3>
                <p>You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>15. General Provisions</h2>
                
                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>15.1 Entire Agreement</h3>
                <p>These Terms, together with any separate service agreements, constitute the entire agreement between you and Black Orchid Business Group regarding the subject matter hereof and supersede all prior agreements and understandings.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>15.2 Severability</h3>
                <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>15.3 Waiver</h3>
                <p>The failure of the Company to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>15.4 Assignment</h3>
                <p>You may not assign or transfer these Terms or any rights hereunder without our prior written consent. We may assign these Terms without restriction.</p>

                <h3 className="text-xl mb-2 mt-4" style={{ color: '#D4AF37' }}>15.5 Force Majeure</h3>
                <p>Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions.</p>
              </section>

              <section>
                <h2 className="text-2xl mb-3" style={{ color: '#D4AF37' }}>16. Contact Information</h2>
                <p>If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:</p>
                <p className="mt-4">
                  <strong>Black Orchid Business Group</strong><br />
                  Website: bobgllc.com
                </p>
                <p className="mt-4">By using the Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntakeForm = ({ segment, onClose, onSubmit, isDark, scrollToSection, toggleTheme }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formConfigs = {
    prebidding: {
      title: "Pre-Bidding / New to Federal",
      description: "Assess basic readiness for companies that haven't started yet",
      formspreeId: FORMSPREE_IDS.preBidding,
      blurb: "This assessment helps us understand where you are in your federal contracting journey. By mapping your current capabilities, compliance status, and readiness factors, we can provide targeted recommendations for building the foundation you need to compete successfully. Understanding your starting point is critical—it prevents costly missteps and ensures you're investing time and resources in the right infrastructure from day one.",
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
      formspreeId: FORMSPREE_IDS.agencyAlignment,
      blurb: "The Agency Alignment Map is our proprietary methodology for identifying where your capabilities create genuine competitive advantage in the federal marketplace. This assessment helps us reverse-engineer the specific agencies, contract vehicles, and decision-makers where you're most likely to win. Understanding your alignment isn't about casting a wide net—it's about precision targeting that converts your past performance into pipeline leverage.",
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
      formspreeId: FORMSPREE_IDS.subToPrime,
      blurb: "Transitioning from subcontractor to prime isn't just about capability—it's about infrastructure. This assessment evaluates whether you have the financial resilience, operational maturity, and relationship capital to successfully own the customer relationship. Understanding your readiness prevents the common trap of winning a prime contract you can't deliver, which destroys your reputation faster than staying a sub ever could.",
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
    },
    federalDiagnostic: {
      title: "Federal Diagnostic",
      description: "Comprehensive readiness assessment",
      formspreeId: FORMSPREE_IDS.federalDiagnostic,
      blurb: "The Federal Diagnostic is our most comprehensive evaluation—a deep-dive analysis of your governance structure, financial resilience, operational maturity, and competitive positioning. This delivers a written report identifying critical vulnerabilities and high-leverage opportunities most consultants miss. Understanding your diagnostic results gives you a roadmap for building genuine competitive advantage, not just compliance checkboxes.",
      steps: [
        {
          title: "Company Profile",
          fields: [
            { 
              name: "companyName", 
              label: "Company Name", 
              type: "text", 
              required: true 
            },
            { 
              name: "yearsInBusiness", 
              label: "Years in Business", 
              type: "number", 
              required: true 
            },
            { 
              name: "annualRevenue", 
              label: "Annual Revenue", 
              type: "select", 
              required: true, 
              options: ["Under $1M", "$1M - $5M", "$5M - $10M", "$10M - $25M", "$25M+"] 
            }
          ]
        },
        {
          title: "Federal Experience",
          fields: [
            { 
              name: "federalExperience", 
              label: "Federal Contracting Experience", 
              type: "select", 
              required: true, 
              options: ["None", "Subcontractor Only", "Prime Contractor", "Both"] 
            },
            { 
              name: "contractValue", 
              label: "Largest Contract Value Managed", 
              type: "select", 
              required: true, 
              options: ["Under $100K", "$100K - $500K", "$500K - $2M", "$2M - $5M", "Over $5M"] 
            },
            { 
              name: "targetAgencies", 
              label: "Target Federal Agencies", 
              type: "textarea", 
              required: true 
            }
          ]
        },
        {
          title: "Infrastructure & Compliance",
          fields: [
            { 
              name: "accountingSystem", 
              label: "Accounting System Status", 
              type: "select", 
              required: true, 
              options: ["DCAA Approved", "Compliant—not approved", "Needs Work", "Not Compliant"] 
            },
            { 
              name: "cybersecurity", 
              label: "Cybersecurity Compliance", 
              type: "select", 
              required: true, 
              options: ["CMMC Certified", "NIST 800-171 Compliant", "FISMA Compliant", "None"] 
            },
            { 
              name: "qualitySystem", 
              label: "Quality Management System", 
              type: "select", 
              required: true, 
              options: ["ISO 9001 Certified", "Documented System", "Informal Process", "None"] 
            }
          ]
        },
        {
          title: "Contact & Goals",
          fields: [
            { 
              name: "email", 
              label: "Email Address", 
              type: "email", 
              required: true 
            },
            { 
              name: "phone", 
              label: "Phone Number", 
              type: "tel", 
              required: true 
            },
            { 
              name: "goals", 
              label: "What are your primary federal contracting goals?", 
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        onSubmit();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
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
              <button onClick={() => { onClose(); scrollToSection('home'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Home</button>
              <button onClick={() => { onClose(); scrollToSection('about'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>About</button>
              <button onClick={() => { onClose(); scrollToSection('services'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Services</button>
              <button onClick={() => { onClose(); scrollToSection('intelligence'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Intelligence</button>
              <button 
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors hover:opacity-80`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => { onClose(); scrollToSection('contact'); }} className="px-6 py-2 font-semibold rounded transition-colors hover:opacity-90" style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}>
                Contact
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={toggleTheme}
                className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} style={{ borderColor: '#D4AF37' }}>
            <div className="mb-8">
              <h1 className="text-3xl mb-2" style={{ color: '#D4AF37' }}>{config.title}</h1>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-6`}>{config.description}</p>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}>{config.blurb}</p>
            </div>

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
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          rows={4}
                          className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
                          style={{ focusBorderColor: '#D4AF37' }}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
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
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          required={field.required}
                          className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`}
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
                    disabled={isSubmitting}
                    className="px-8 py-3 font-semibold rounded transition-colors hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

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
    </div>
  );
};

const ArticleView = ({ article, onClose, isDark, fromLibrary }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-24 pb-20 px-6 min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onClose}
          className={`flex items-center gap-2 mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:opacity-70 transition-colors`}
        >
          <ChevronLeft size={20} />
          {fromLibrary ? 'Back to Intelligence Library' : 'Back to Home'}
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

const IntelligenceLibrary = ({ onArticleSelect, onClose, isDark, toggleTheme, scrollToSection }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
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
              <button onClick={() => { onClose(); scrollToSection('home'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Home</button>
              <button onClick={() => { onClose(); scrollToSection('about'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>About</button>
              <button onClick={() => { onClose(); scrollToSection('services'); }} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Services</button>
              <button onClick={onClose} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`} style={{ color: '#D4AF37' }}>Intelligence</button>
              <button 
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors hover:opacity-80`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => { onClose(); scrollToSection('contact'); }} className="px-6 py-2 font-semibold rounded transition-colors hover:opacity-90" style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}>
                Contact
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={toggleTheme}
                className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-4" style={{ color: '#D4AF37' }}>Federal Intelligence Library</h1>
            <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Strategic updates, thought leadership, and tactical insights for the federal marketplace</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article.id}
                onClick={() => onArticleSelect(article)}
                className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105`}
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
      </div>

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
    </div>
  );
};

export default function BlackOrchidWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIntake, setActiveIntake] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [articleSource, setArticleSource] = useState('home');

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
    setSelectedArticle(null);
    setActiveIntake(null);
    setShowLibrary(false);
    setShowPrivacyPolicy(false);
    setShowTermsOfService(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }, 100);
  };

  const handleFormSubmit = () => {
    setActiveIntake(null);
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    scrollToSection('home');
  };

  const handleIntelligenceClick = () => {
    setShowLibrary(true);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  const handleArticleSelectFromLibrary = (article) => {
    setArticleSource('library');
    setSelectedArticle(article);
    setShowLibrary(false);
  };

  const handleArticleSelectFromHome = (article) => {
    setArticleSource('home');
    setSelectedArticle(article);
  };

  const handleArticleClose = () => {
    if (articleSource === 'library') {
      setSelectedArticle(null);
      setShowLibrary(true);
    } else {
      setSelectedArticle(null);
    }
  };

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} isDark={isDark} />;
  }

  if (showTermsOfService) {
    return <TermsOfService onClose={() => setShowTermsOfService(false)} isDark={isDark} />;
  }

  if (activeIntake) {
    return (
      <IntakeForm 
        segment={activeIntake} 
        onClose={() => setActiveIntake(null)} 
        onSubmit={handleFormSubmit}
        isDark={isDark}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
      />
    );
  }

  if (selectedArticle) {
    return (
      <ArticleView 
        article={selectedArticle} 
        onClose={handleArticleClose} 
        isDark={isDark}
        fromLibrary={articleSource === 'library'}
      />
    );
  }

  if (showLibrary) {
    return (
      <IntelligenceLibrary 
        onArticleSelect={handleArticleSelectFromLibrary}
        onClose={() => setShowLibrary(false)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      {showThankYou && (
        <ThankYouPage onClose={handleThankYouClose} isDark={isDark} />
      )}

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
              <button onClick={handleIntelligenceClick} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`}>Intelligence</button>
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
              <button onClick={handleIntelligenceClick} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors text-left hover:opacity-80`}>Intelligence</button>
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

      <section 
        id="home" 
        className="pt-32 pb-20 px-6 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-patriotic.png)',
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

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-8 text-center" style={{ color: '#D4AF37' }}>Our Services</h2>
          
          <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 mb-12 max-w-3xl mx-auto text-center`} style={{ borderColor: '#D4AF37' }}>
            <p className={`text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              <strong style={{ color: '#D4AF37' }}>Note:</strong> Detailed results and written reports from any of the Diagnostic Assessments are available starting at $2,500 as a paid service. Consultancy services include the price, and results, of the diagnostic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              onClick={() => setActiveIntake('agencyAlignment')}
              className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105 cursor-pointer`} 
              style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
            >
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
              <div className="font-semibold" style={{ color: '#D4AF37' }}>
                Start Assessment →
              </div>
            </div>

            <div 
              onClick={() => setActiveIntake('federalDiagnostic')}
              className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105 cursor-pointer`} 
              style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
            >
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
              <div className="font-semibold" style={{ color: '#D4AF37' }}>
                Start Assessment →
              </div>
            </div>

            <div 
              onClick={() => setActiveIntake('subToPrime')}
              className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105 cursor-pointer`} 
              style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
            >
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
              <div className="font-semibold" style={{ color: '#D4AF37' }}>
                Start Assessment →
              </div>
            </div>

            <div 
              onClick={handleIntelligenceClick}
              className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105 cursor-pointer`} 
              style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
            >
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
              <div className="font-semibold" style={{ color: '#D4AF37' }}>
                View Intelligence Library →
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-intelligence" className={`py-20 px-6 ${isDark ? 'bg-[#262626]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Featured Intelligence</h2>
            <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Latest strategic insights from the federal marketplace</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                onClick={() => handleArticleSelectFromHome(article)}
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

          <div className="text-center mt-12">
            <button 
              onClick={handleIntelligenceClick}
              className="px-8 py-4 font-semibold text-lg rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
            >
              View Full Intelligence Library
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>Ready to Dominate Your Market?</h2>
            <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Connect with a Black Orchid strategist for a discovery consultation</p>
          </div>

          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              
              try {
                const response = await fetch(`https://formspree.io/f/${FORMSPREE_IDS.contact}`, {
                  method: "POST",
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });

                if (response.ok) {
                  setShowThankYou(true);
                  e.target.reset();
                } else {
                  throw new Error('Form submission failed');
                }
              } catch (error) {
                console.error("Form submission error:", error);
                alert("There was an error submitting the form. Please try again.");
              }
            }}
            className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} 
            style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Company Name *</label>
                <input name="companyName" type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Industry *</label>
                <input name="industry" type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Email Address *</label>
                <input name="email" type="email" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Phone Number</label>
                <input name="phone" type="tel" className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Current Revenue Tier</label>
              <select name="revenueTier" className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }}>
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
              <textarea name="challenges" required rows={5} className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none focus:border-2`} style={{ focusBorderColor: '#D4AF37' }}></textarea>
            </div>

            <button type="submit" className="w-full px-8 py-4 font-semibold text-lg rounded transition-colors hover:opacity-90" style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}>
              Request Discovery Consultation
            </button>
          </form>
        </div>
      </section>

      <footer className={`${isDark ? 'bg-[#020B13] border-[#262626]' : 'bg-white border-zinc-200'} border-t py-12 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Black Orchid Business Group" 
                className="h-10"
                style={{ filter: isDark ? 'invert(1)' : 'invert(0)' }}
              />
              <div className="text-xl" style={{ color: '#D4AF37' }}>Black Orchid Business Group</div>
            </div>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4 text-center`}>Intelligence. Strategy. Access. Boutique Scale. Sovereign Results.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <button 
              onClick={() => setShowPrivacyPolicy(true)}
              className={`${isDark ? 'text-zinc-400 hover:text-zinc-300' : 'text-zinc-600 hover:text-zinc-700'} transition-colors underline`}
            >
              Privacy Policy
            </button>
            <span className={`hidden md:inline ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>|</span>
            <button 
              onClick={() => setShowTermsOfService(true)}
              className={`${isDark ? 'text-zinc-400 hover:text-zinc-300' : 'text-zinc-600 hover:text-zinc-700'} transition-colors underline`}
            >
              Terms of Service
            </button>
          </div>
          
          <p className={`${isDark ? 'text-zinc-500' : 'text-zinc-400'} text-sm text-center`}>© 2026 Black Orchid Business Group LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
