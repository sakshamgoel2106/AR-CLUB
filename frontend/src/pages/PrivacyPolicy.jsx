import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/sections/footer";
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy — AR CLUB";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-0)] text-[var(--text-100)] flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.1),transparent_80%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <header className="border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/dist/logo.png" alt="AR CLUB Logo" className="h-9 w-auto" />
              <span className="font-serif text-lg text-white group-hover:text-white/80 transition-colors">
                AR CLUB
              </span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--leaf-500)]/10 border border-[var(--leaf-500)]/30 text-[var(--leaf-500)] text-xs font-mono tracking-widest uppercase mb-4">
              <Shield className="w-3.5 h-3.5" /> Legal & Transparency
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-3">
              Last updated: October 2026 · Effective immediately for all visitors and members.
            </p>
          </div>

          <div className="space-y-10 text-white/90 leading-relaxed text-sm md:text-base font-sans">
            {/* Section 1 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-[var(--leaf-500)]" />
                1. Information We Collect
              </h2>
              <p className="text-white/80 mb-3">
                AR CLUB ("we", "our", or "us"), located at JMIT Radaur, values your privacy and is committed to protecting any personal information you share with us. We collect minimal personal data necessary to provide our community services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>
                  <strong className="text-white">Contact & Application Forms:</strong> When you message us or apply to join, we collect your name, email address, area of interest, and message content.
                </li>
                <li>
                  <strong className="text-white">Newsletter Subscription:</strong> When you subscribe for hackathon and event updates, we collect your verified email address.
                </li>
                <li>
                  <strong className="text-white">Technical & Log Data:</strong> Standard server logs including anonymized IP address, browser type, referral headers, and access timestamps for diagnostic and security purposes.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-[var(--leaf-500)]" />
                2. How We Use Your Data
              </h2>
              <p className="text-white/80 mb-3">
                We strictly use your information for legitimate club, educational, and communication purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Responding to inquiries, project collaborations, and membership applications.</li>
                <li>Dispatching notifications regarding upcoming hackathons, tech workshops, and campus meetups.</li>
                <li>Preventing malicious bot submissions, spam, abuse, and verifying platform integrity.</li>
                <li>Analyzing aggregate engagement metrics to optimize event planning.</li>
              </ul>
              <p className="text-white/80 mt-3">
                We <strong className="text-white">never sell, rent, or trade</strong> your personal information to third-party advertisers or commercial brokers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-[var(--leaf-500)]" />
                3. Cookies & Tracking Preferences
              </h2>
              <p className="text-white/80 mb-3">
                Our website uses cookies and browser local storage to maintain session states and respect your preferences:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>
                  <strong className="text-white">Essential Storage:</strong> Used to save your cookie consent choice and preserve functional states.
                </li>
                <li>
                  <strong className="text-white">Analytics:</strong> Privacy-friendly, anonymous performance metrics to understand which workshops and capabilities resonate most with students.
                </li>
              </ul>
              <p className="text-white/80 mt-3">
                You can customize or reset your cookie preferences at any time using the "Cookie Settings" link located in the website footer.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[var(--leaf-500)]" />
                4. Data Security & Storage
              </h2>
              <p className="text-white/80 mb-3">
                We enforce multi-tier security best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>
                  <strong className="text-white">Strict HTTPS & TLS:</strong> All network traffic between your client and our servers is encrypted in transit.
                </li>
                <li>
                  <strong className="text-white">Access Control:</strong> Backend databases are isolated behind encrypted credentials and restricted IP allowances.
                </li>
                <li>
                  <strong className="text-white">Input Sanitization:</strong> Form inputs are strictly validated, sanitised against injection attacks, and rate-limited.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[var(--leaf-500)]" />
                5. Your Rights & Contact Details
              </h2>
              <p className="text-white/80 mb-3">
                You hold full control over your submitted data. You may at any time request an export of your information or ask for immediate deletion from our records.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/10">
                <p className="text-white font-medium">AR CLUB · Data & Privacy Contact</p>
                <p className="text-white/80 mt-1">
                  Email:{" "}
                  <a
                    href="mailto:arclub@jmit.ac.in"
                    className="text-[var(--leaf-500)] hover:underline"
                  >
                    arclub@jmit.ac.in
                  </a>
                </p>
                <p className="text-white/80">Campus Lab: IT-117, JMIT Radaur, Haryana, India</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
