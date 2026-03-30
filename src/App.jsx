
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Building2, TrendingUp, Shield, Sun, Moon, CheckCircle } from 'lucide-react';
import { articles } from './data/articles';

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

const IntakeForm = ({ segment, onClose, onSubmit, isDark, scrollToSection, toggleTheme }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formConfigs = {
    prebidding: {
      title: "Pre-Bidding / New to Federal",
      description: "Assess basic readiness for companies that haven't started yet",
      formName: "pre-bidding-assessment",
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
      formName: "agency-alignment-assessment",
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
      formName: "sub-to-prime-assessment",
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
      formName: "federal-diagnostic-assessment",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { segment, data: formData });
    onSubmit();
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020B13]' : 'bg-zinc-50'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
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

      {/* Form Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} style={{ borderColor: '#D4AF37' }}>
            <div className="mb-8">
              <h1 className="text-3xl mb-2" style={{ color: '#D4AF37' }}>{config.title}</h1>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-6`}>{config.description}</p>
              <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}>{config.blurb}</p>
            </div>

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

            {/* Form fields */}
            <form 
              name={config.formName}
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value={config.formName} />
              <input type="hidden" name="bot-field" />
              
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
                    className="px-8 py-3 font-semibold rounded transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
                  >
                    Submit Assessment
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

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
    </div>
  );
};

const ArticleView = ({ article, onClose, isDark }) => {
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
    setSelectedArticle(null);
    setActiveIntake(null);
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

      {/* Conditional rendering: show article view, intake form, or main content */}
      {activeIntake ? (
        <IntakeForm 
          segment={activeIntake} 
          onClose={() => setActiveIntake(null)} 
          onSubmit={handleFormSubmit}
          isDark={isDark}
          scrollToSection={scrollToSection}
          toggleTheme={toggleTheme}
        />
      ) : selectedArticle ? (
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
              <h2 className="text-4xl mb-8 text-center" style={{ color: '#D4AF37' }}>Our Services</h2>
              
              {/* Paid Service Notice */}
              <div className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-6 mb-12 max-w-3xl mx-auto text-center`} style={{ borderColor: '#D4AF37' }}>
                <p className={`text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <strong style={{ color: '#D4AF37' }}>Note:</strong> Detailed results and written reports from the Federal Diagnostic assessment are available as a <strong>$2,500 paid service</strong>.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Agency Alignment Map Card */}
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

                {/* Federal Diagnostic Card */}
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

                {/* Sub-to-Prime Card */}
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

                {/* Federal Intelligence Card */}
                <div 
                  onClick={() => scrollToSection('intelligence')}
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
                    Read Intelligence →
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

              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className={`${isDark ? 'bg-[#262626]' : 'bg-white'} border-2 rounded-lg p-8`} 
                style={{ borderColor: isDark ? '#3f3f46' : '#e4e4e7' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
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

      {/* Thank You Modal */}
      {showThankYou && (
        <ThankYouPage onClose={handleThankYouClose} isDark={isDark} />
      )}
    </div>
  );
}
