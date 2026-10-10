import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/sections/footer";
import { ArrowLeft, BookOpen, CheckCircle, Scale, ShieldAlert, Award, Mail } from "lucide-react";

export default function TermsConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions — AR CLUB";
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
              <Scale className="w-3.5 h-3.5" /> Club Guidelines & Terms
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-3">
              Last updated: October 2026 · Governing use of our digital platforms, events, and memberships.
            </p>
          </div>

          <div className="space-y-10 text-white/90 leading-relaxed text-sm md:text-base font-sans">
            {/* Section 1 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-[var(--leaf-500)]" />
                1. Agreement to Terms
              </h2>
              <p className="text-white/80">
                By browsing the AR CLUB platform (arclub.jmit.ac.in), participating in our workshops, hackathons, or applying for membership, you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of the site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-[var(--leaf-500)]" />
                2. Community Code of Conduct
              </h2>
              <p className="text-white/80 mb-3">
                AR CLUB is dedicated to providing a collaborative, inclusive, and harassment-free environment for all students and developers regardless of gender, experience level, or background:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li><strong className="text-white">Mutual Respect:</strong> Harassment, discriminatory language, or abusive behavior in physical lab sessions or digital spaces will result in immediate termination of membership and event disqualification.</li>
                <li><strong className="text-white">Academic & Technical Integrity:</strong> Submissions in hackathons, game jams, and open-source initiatives must reflect original work or properly attributed open-source libraries.</li>
                <li><strong className="text-white">Equipment Care:</strong> Members using lab hardware (Meta Quest headsets, sensors, dev kits) must exercise diligent care and adhere to lab guidelines.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-[var(--leaf-500)]" />
                3. Hackathons & Event Participation
              </h2>
              <p className="text-white/80 mb-3">
                When registering for events (Ideathon, Tech Hunt, Feel AR, Unity Workshops):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Registration details must be accurate and truthful.</li>
                <li>Decisions of the event judges and organizing committee are final and binding.</li>
                <li>Participants retain ownership of their creations, but grant AR CLUB permission to feature project highlights, demo videos, and photographs on our portfolio and social channels.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <ShieldAlert className="w-5 h-5 text-[var(--leaf-500)]" />
                4. Intellectual Property & Branding
              </h2>
              <p className="text-white/80 mb-3">
                All AR CLUB branding, logos, website designs, custom animations, and authored materials are the intellectual property of AR CLUB at JMIT Radaur. You may not reproduce, modify, or distribute our club assets for commercial use without prior written authorization.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-[var(--leaf-500)]" />
                5. Disclaimers & Limitation of Liability
              </h2>
              <p className="text-white/80 mb-3">
                AR CLUB operates as a student-led educational initiative. The materials and information provided on this platform are provided "as is" for informational and educational purposes. While we strive for accuracy and uptime, AR CLUB makes no warranties regarding uninterrupted availability or total error-free operation.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-serif text-white flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[var(--leaf-500)]" />
                6. Contact & Questions
              </h2>
              <p className="text-white/80 mb-3">
                For questions regarding these Terms or our community guidelines, please contact us:
              </p>
              <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/10">
                <p className="text-white font-medium">AR CLUB Administration</p>
                <p className="text-white/80 mt-1">
                  Email:{" "}
                  <a
                    href="mailto:arclub@jmit.ac.in"
                    className="text-[var(--leaf-500)] hover:underline"
                  >
                    arclub@jmit.ac.in
                  </a>
                </p>
                <p className="text-white/80">Location: IT-117, JMIT Radaur, Haryana, India</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
