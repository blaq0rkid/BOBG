
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Building2, TrendingUp, Shield, Sun, Moon } from 'lucide-react';

// Article data - easily add new articles here
const articles = [
  {
    id: 1,
    title: "Navigating the Federal Marketplace: A Strategic Primer",
    excerpt: "Understanding the complexities of federal contracting requires more than surface-level knowledge. Discover the strategic frameworks that separate winners from participants.",
    date: "March 28, 2026",
    readTime: "8 min read",
    thumbnail: "/api/placeholder/800/600",
    content: `
      <h2>The Federal Contracting Landscape Has Changed</h2>
      <p>The federal marketplace is no longer a level playing field where technical competence alone determines success. Today's winners understand that federal contracting is fundamentally about three things: intelligence, positioning, and execution.</p>
      
      <h3>Intelligence: Knowing Before Others Know</h3>
      <p>Market intelligence in the federal space isn't about reading SAM.gov notifications. It's about understanding agency priorities before RFPs are published, recognizing spending patterns that signal upcoming opportunities, and identifying the decision-makers who shape requirements.</p>
      
      <h3>Positioning: Being Seen as the Only Choice</h3>
      <p>Prime contractors don't win because they're the cheapest or even the most capable. They win because they've positioned themselves as the obvious choice—through past performance narratives, strategic partnerships, and technical authority that makes evaluators confident in their selection.</p>
      
      <h3>Execution: Flawless Delivery on What Matters</h3>
      <p>Federal contracts are won in the proposal but retained through execution. Understanding compliance requirements, managing subcontractor relationships, and maintaining the infrastructure to scale are non-negotiable elements of sustainable growth.</p>
      
      <p><strong>The Bottom Line:</strong> Success in the federal marketplace requires operating at a level of sophistication that most consultants can't deliver. It requires boutique attention to your specific situation, combined with enterprise-grade strategic thinking.</p>
    `
  },
  {
    id: 2,
    title: "From Subcontractor to Prime: The Infrastructure Gap",
    excerpt: "Why most subcontractors fail their first prime contract—and how to build the foundation for sustainable prime contractor status.",
    date: "March 25, 2026",
    readTime: "10 min read",
    thumbnail: "/api/placeholder/800/600",
    content: `
      <h2>The Hidden Barriers to Prime Status</h2>
      <p>Winning your first prime contract is an achievement. Delivering on it successfully is what determines whether you'll win a second. The gap between subcontracting and prime contracting isn't just about capability—it's about infrastructure.</p>
      
      <h3>Financial Infrastructure</h3>
      <p>Prime contractors need robust accounting systems, line of credit arrangements, and cash flow management capabilities that most subcontractors have never developed. The government pays slowly, and your subcontractors won't wait.</p>
      
      <h3>Operational Maturity</h3>
      <p>As a prime, you're responsible for compliance across your entire team. That means subcontractor management systems, quality control processes, and risk mitigation frameworks that can withstand DCAA audits and customer scrutiny.</p>
      
      <h3>Governance Structure</h3>
      <p>Your corporate structure, insurance coverage, and internal controls must reflect prime contractor responsibilities. This isn't paperwork—it's the foundation of your ability to perform.</p>
      
      <p><strong>Our Approach:</strong> The Sub-to-Prime Transition process systematically evaluates your readiness across all these dimensions and creates a tailored roadmap for building the infrastructure you need before you pursue prime status.</p>
    `
  },
  {
    id: 3,
    title: "The Agency Alignment Map: Beyond Traditional Consulting",
    excerpt: "Why generic business development strategies fail in the federal marketplace, and what actually works.",
    date: "March 20, 2026",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/800/600",
    content: `
      <h2>The Problem with Traditional Consulting</h2>
      <p>Most government contracting consultants offer the same generic advice: register in SAM.gov, get your NAICS codes right, respond to RFPs, and hope for the best. This approach produces random results because it treats all agencies and opportunities as fundamentally the same.</p>
      
      <h3>The Reality of Federal Buying</h3>
      <p>Each agency has distinct buying patterns, preferred contract vehicles, incumbent relationships, and cultural expectations. The strategy that works for DoD will fail at DHS. The approach that succeeds with USAID won't translate to VA.</p>
      
      <h3>The Agency Alignment Map Difference</h3>
      <p>Our proprietary methodology starts with your past performance, technical capabilities, and growth objectives, then reverse-engineers the specific agencies, offices, and decision-makers where you have genuine competitive advantage.</p>
      
      <p>We don't create generic business development plans. We create 12-month tactical execution roadmaps that tell you exactly which opportunities to pursue, which to avoid, and what positioning moves to make each quarter to maximize your probability of success.</p>
      
      <h3>This Is Strategic, Not Generic</h3>
      <p>The Agency Alignment Map is high-touch consulting designed for firms that understand the difference between activity and progress. If you're looking for someone to tell you what you already know, we're not the right fit. If you're ready for the strategic partner who can architect your path to federal contract success, let's talk.</p>
    `
  }
];

const IntakeForm = ({ segment, onClose, isDark }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const formConfigs = {
    prebidding: {
      title: "Pre-Bidding Assessment",
      description: "For companies preparing to enter the federal marketplace",
      steps: [
        {
          fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "industry", label: "Primary Industry", type: "text", required: true },
            { name: "yearsInBusiness", label: "Years in Business", type: "number", required: true }
          ]
        },
        {
          fields: [
            { name: "annualRevenue", label: "Annual Revenue Range", type: "select", required: true, options: ["Under $1M", "$1M-$5M", "$5M-$10M", "$10M-$25M", "Over $25M"] },
            { name: "employeeCount", label: "Number of Employees", type: "number", required: true },
            { name: "hasGovExperience", label: "Previous Government Contracting Experience", type: "select", required: true, options: ["None", "Subcontractor Only", "Prime Contractor", "Both"] }
          ]
        },
        {
          fields: [
            { name: "targetAgencies", label: "Target Federal Agencies", type: "textarea", required: true },
            { name: "technicalCapabilities", label: "Core Technical Capabilities", type: "textarea", required: true },
            { name: "timeline", label: "Desired Timeline to First Contract", type: "select", required: true, options: ["3-6 months", "6-12 months", "12-18 months", "18+ months"] }
          ]
        },
        {
          fields: [
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone Number", type: "tel", required: true },
            { name: "additionalInfo", label: "Additional Information", type: "textarea", required: false }
          ]
        }
      ]
    },
    samRegistered: {
      title: "SAM.gov Registered - Strategic Assessment",
      description: "For companies registered in SAM.gov seeking their first or next contract win",
      steps: [
        {
          fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "uei", label: "UEI Number", type: "text", required: true },
            { name: "samRegistrationDate", label: "SAM.gov Registration Date", type: "date", required: true }
          ]
        },
        {
          fields: [
            { name: "contractsSubmitted", label: "Number of Bids Submitted", type: "number", required: true },
            { name: "contractsWon", label: "Contracts Won", type: "number", required: true },
            { name: "averageBidValue", label: "Average Bid Value Range", type: "select", required: true, options: ["Under $100K", "$100K-$500K", "$500K-$1M", "$1M-$5M", "Over $5M"] }
          ]
        },
        {
          fields: [
            { name: "primaryChallenge", label: "Primary Challenge in Winning Contracts", type: "textarea", required: true },
            { name: "pastPerformance", label: "Describe Your Past Performance Portfolio", type: "textarea", required: true },
            { name: "targetContractTypes", label: "Target Contract Types", type: "textarea", required: true }
          ]
        },
        {
          fields: [
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone Number", type: "tel", required: true },
            { name: "urgency", label: "How Soon Do You Need Strategic Support?", type: "select", required: true, options: ["Immediate (Active opportunity)", "1-3 months", "3-6 months", "Planning ahead"] }
          ]
        }
      ]
    },
    subToPrime: {
      title: "Subcontractor to Prime Transition",
      description: "For established subcontractors ready to pursue prime contractor status",
      steps: [
        {
          fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "yearsAsSubcontractor", label: "Years as Government Subcontractor", type: "number", required: true },
            { name: "currentAnnualRevenue", label: "Current Annual Revenue", type: "select", required: true, options: ["$1M-$5M", "$5M-$10M", "$10M-$25M", "$25M-$50M", "Over $50M"] }
          ]
        },
        {
          fields: [
            { name: "primeContractors", label: "List Your Current Prime Contractor Relationships", type: "textarea", required: true },
            { name: "agencyExperience", label: "Federal Agencies You've Worked With", type: "textarea", required: true },
            { name: "hasCreditLine", label: "Do You Have an Established Line of Credit?", type: "select", required: true, options: ["Yes, sufficient for prime work", "Yes, but may need expansion", "No", "Unsure"] }
          ]
        },
        {
          fields: [
            { name: "accountingSystems", label: "Current Accounting System", type: "text", required: true },
            { name: "dcaaReady", label: "DCAA Audit Readiness", type: "select", required: true, options: ["Fully compliant", "Mostly ready", "Needs significant work", "Not started"] },
            { name: "insuranceCoverage", label: "Current Insurance Coverage", type: "textarea", required: true }
          ]
        },
        {
          fields: [
            { name: "targetPrimeValue", label: "Target Prime Contract Value", type: "select", required: true, options: ["Under $500K", "$500K-$2M", "$2M-$5M", "$5M-$10M", "Over $10M"] },
            { name: "email", label: "Email Address", type: "email", required: true },
            { name: "phone", label: "Phone Number", type: "tel", required: true }
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
    alert("Thank you for your submission. A Black Orchid Business Group strategist will contact you within 24 hours.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className={`${isDark ? 'bg-[#020B13]' : 'bg-white'} border-2 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto`} style={{ borderColor: '#D4AF37' }}>
        <div className={`sticky top-0 ${isDark ? 'bg-[#020B13]' : 'bg-white'} border-b-2 p-6 flex items-center justify-between`} style={{ borderColor: '#D4AF37' }}>
          <div>
            <h3 className="text-2xl" style={{ color: '#D4AF37' }}>{config.title}</h3>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mt-1`}>{config.description}</p>
          </div>
          <button onClick={onClose} className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors`} style={{ hover: { color: '#D4AF37' } }}>
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all`}
                  style={{
                    width: idx === currentStep ? '3rem' : '2rem',
                    backgroundColor: idx <= currentStep ? '#D4AF37' : (isDark ? '#3f3f46' : '#d4d4d8')
                  }}
                />
              ))}
            </div>
            <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>

          <form onSubmit={handleSubmit}>
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
                      className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`}
                      style={{ focusBorderColor: '#D4AF37' }}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`}
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
                      className={`w-full ${isDark ? 'bg-[#262626] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`}
                      style={{ focusBorderColor: '#D4AF37' }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={`flex items-center justify-between mt-8 pt-6 border-t ${isDark ? 'border-[#262626]' : 'border-zinc-200'}`}>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:opacity-80`}
                style={{ color: currentStep > 0 ? '#D4AF37' : undefined }}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              {currentStep < totalSteps - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 font-semibold rounded transition-colors"
                  style={{ backgroundColor: '#D4AF37', color: isDark ? '#020B13' : '#ffffff' }}
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 font-semibold rounded transition-colors"
                  style={{ backgroundColor: '#D4AF37', color: isDark ? '#020B13' : '#ffffff' }}
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
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-y-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className={`${isDark ? 'bg-[#020B13]' : 'bg-white'} border-2 rounded-lg max-w-4xl w-full my-8`} style={{ borderColor: '#D4AF37' }}>
        <div className={`sticky top-0 ${isDark ? 'bg-[#020B13]' : 'bg-white'} border-b-2 p-6 flex items-center justify-between`} style={{ borderColor: '#D4AF37' }}>
          <div className="flex items-center gap-3">
            <BookOpen style={{ color: '#D4AF37' }} size={24} />
            <div>
              <div className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{article.date} · {article.readTime}</div>
            </div>
          </div>
          <button onClick={onClose} className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} transition-colors hover:opacity-80`}>
            <X size={24} />
          </button>
        </div>

        <img 
          src={article.thumbnail} 
          alt={article.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl mb-4" style={{ color: '#D4AF37' }}>{article.title}</h1>
          <p className={`text-xl ${isDark ? 'text-zinc-300' : 'text-zinc-700'} mb-8 italic`}>{article.excerpt}</p>
          <div 
            className={`prose ${isDark ? 'prose-invert' : 'prose-zinc'} max-w-none ${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default function BlackOrchidWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIntake, setActiveIntake] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      setIsDark(saved === 'dark');
    }
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

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 bg-opacity-95 border-b z-40 ${isDark ? 'bg-[#020B13] border-[#262626]' : 'bg-white border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Black Orchid Business Group" className="h-12" />
              <div>
                <div className="text-xl" style={{ color: '#D4AF37' }}>Black Orchid Business Group</div>
                <div className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Intelligence. Strategy. Access.</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} transition-colors hover:opacity-80`} style={{ hover: { color: '#D4AF37' } }}>Home</button>
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

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-32 pb-20 px-6 relative"
        style={{
          backgroundImage: 'url(/public/hero-patriotic.webp.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
            <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8 transition-all hover:scale-105`} style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7', hover: { borderColor: '#D4AF37' } }}>
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
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Pre-Bidding Phase</h4>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Preparing to enter the federal marketplace</p>
                <div className="font-semibold" style={{ color: '#D4AF37' }}>Start Assessment →</div>
              </div>

              <div 
                onClick={() => setActiveIntake('samRegistered')}
                className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 cursor-pointer transition-all hover:scale-105`}
                style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
              >
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>SAM.gov Registered</h4>
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
                <input type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Industry *</label>
                <input type="text" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Email Address *</label>
                <input type="email" required className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Phone Number</label>
                <input type="tel" className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }} />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ color: '#D4AF37' }}>Current Revenue Tier</label>
              <select className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }}>
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
              <textarea required rows={5} className={`w-full ${isDark ? 'bg-[#020B13] text-zinc-100' : 'bg-zinc-50 text-zinc-900'} border border-zinc-700 rounded px-4 py-3 focus:outline-none`} style={{ focusBorderColor: '#D4AF37' }}></textarea>
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
            <img src="/logo.png" alt="Black Orchid Business Group" className="h-10" />
            <div className="text-xl" style={{ color: '#D4AF37' }}>Black Orchid Business Group</div>
          </div>
          <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-4`}>Intelligence. Strategy. Access. Boutique Scale. Sovereign Results.</p>
          <p className={`${isDark ? 'text-zinc-500' : 'text-zinc-400'} text-sm`}>© 2026 Black Orchid Business Group LLC. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      {activeIntake && (
        <IntakeForm segment={activeIntake} onClose={() => setActiveIntake(null)} isDark={isDark} />
      )}

      {selectedArticle && (
        <ArticleView article={selectedArticle} onClose={() => setSelectedArticle(null)} isDark={isDark} />
      )}
    </div>
  );
}
