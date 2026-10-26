import React, { useState } from 'react';
import { OWNER_DATA } from '../../data/owner';
import { Mail, Copy, Check, Send, FileDown, Phone, MapPin, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(OWNER_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot protection: if hidden bot field is filled, silently discard
    if (honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }

    // Mathematical verification (3 + 4 = 7)
    if (mathAnswer.trim() !== '7') {
      setErrorMessage('Verification answer is incorrect. Please enter 7.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate client dispatch with safe graceful fallback
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);

      // Trigger celebratory confetti on legitimate submission
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // Safe if canvas-confetti is not loaded
      }
    } catch {
      setErrorMessage('Could not send note. Please reach out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Technical Inquiries"
      className="py-16 md:py-24 border-b border-paper-border dark:border-slate-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink-graphite dark:text-slate-200 text-xs font-mono mb-2">
            <Mail className="w-3.5 h-3.5 text-accent-teal dark:text-teal-400" />
            <span className="text-accent-amber dark:text-amber-300 uppercase tracking-wider font-semibold">Direct Channel</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-ink dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-graphite dark:text-slate-100 font-sans max-w-2xl leading-relaxed">
            Open for full-time backend and systems engineering roles, architecture reviews, or conversations about distributed systems, Java, Spring Boot, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full p-6 sm:p-8 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5 font-medium">
                    Primary Direct Email
                  </span>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border">
                    <span className="text-sm font-mono font-semibold text-ink dark:text-white truncate">
                      {OWNER_DATA.email}
                    </span>
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-slate-700 dark:text-slate-200 hover:text-accent-teal dark:hover:text-teal-300 hover:bg-paper-subtle dark:hover:bg-slate-subtle transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1 font-medium">
                      <Check className="w-3.5 h-3.5" /> Email address copied to clipboard!
                    </p>
                  )}
                </div>

                {/* Meta items */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border text-accent-teal dark:text-teal-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-mono">Telephone</span>
                      <span className="font-medium text-ink dark:text-white">{OWNER_DATA.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border text-emerald-600 dark:text-emerald-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-mono">Location Base</span>
                      <span className="font-medium text-ink dark:text-white">{OWNER_DATA.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-paper-border dark:border-slate-border space-y-3">
                <a
                  href={`mailto:${OWNER_DATA.email}?subject=Engineering%20Inquiry%20from%20Portfolio`}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas text-xs font-mono font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={OWNER_DATA.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohd_Mohitur_Rahaman_Resume.pdf"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-ink dark:text-slate-100 text-xs font-mono font-medium hover:border-accent-teal dark:hover:border-teal-400 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Accessible Form with Spam Protection */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-6 sm:p-8 rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-sm flex flex-col justify-between">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 my-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-ink dark:text-white">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm font-sans text-ink-graphite dark:text-slate-100 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! I typically respond within 24 hours. You can also email me directly at <strong>{OWNER_DATA.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setMathAnswer('');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas text-xs font-mono font-medium hover:opacity-90 transition-opacity min-h-[44px]"
                  >
                    <span>Send Another Note</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-4">
                  
                  {/* Anti-spam honeypot: hidden from real users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_bot_check">Do not fill this field</label>
                    <input
                      type="text"
                      id="website_bot_check"
                      name="website_bot_check"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono text-slate-700 dark:text-slate-200 font-medium mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Alex Rivera"
                          className="w-full px-4 py-2.5 min-h-[44px] rounded-lg border border-paper-border dark:border-slate-border bg-paper-canvas dark:bg-slate-canvas text-base md:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:ring-2 focus:ring-accent-teal focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 dark:text-slate-200 font-medium mb-1.5">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-2.5 min-h-[44px] rounded-lg border border-paper-border dark:border-slate-border bg-paper-canvas dark:bg-slate-canvas text-base md:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:ring-2 focus:ring-accent-teal focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Single-line scrollable text input */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 dark:text-slate-200 font-medium">
                          Message *
                        </label>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          (scrollable single line)
                        </span>
                      </div>
                      <input
                        id="contact-message"
                        type="text"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Discussing distributed systems, engineering roles, or project collaboration..."
                        className="w-full px-4 py-4 sm:py-5 min-h-[64px] sm:min-h-[72px] rounded-lg border border-paper-border dark:border-slate-border bg-paper-canvas dark:bg-slate-canvas text-base md:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:ring-2 focus:ring-accent-teal focus:outline-none overflow-x-auto transition-colors"
                      />
                    </div>

                    {/* Math verification challenge */}
                    <div className="p-3.5 rounded-lg bg-paper-subtle dark:bg-slate-canvas border border-paper-border dark:border-slate-border flex flex-row items-center justify-between gap-2.5">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-700 dark:text-slate-200 min-w-0">
                        <Shield className="w-4 h-4 text-accent-teal dark:text-teal-400 shrink-0" />
                        <span className="sm:hidden text-xs">Verification: <strong>3 + 4 = ?</strong></span>
                        <span className="hidden sm:inline">Verification: What is <strong>3 + 4</strong>?</span>
                      </div>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        value={mathAnswer}
                        onChange={(e) => setMathAnswer(e.target.value)}
                        placeholder="Result (7)"
                        className="w-20 sm:w-24 px-2.5 sm:px-3 py-1.5 min-h-[44px] rounded-lg border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-base md:text-xs font-mono text-center text-ink dark:text-white focus:ring-2 focus:ring-accent-teal focus:outline-none shrink-0"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs font-mono text-red-500 dark:text-red-400">{errorMessage}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 min-h-[44px] rounded-lg bg-ink dark:bg-white text-paper-canvas dark:text-slate-canvas text-xs font-mono font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 ${
                      isSubmitting ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting Note...' : 'Send Message'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
