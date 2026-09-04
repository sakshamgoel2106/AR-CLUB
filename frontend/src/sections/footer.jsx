import { useState } from "react";
import { Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import { postSubscribe } from "@/services/api";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    kind: "idle",
    text: ""
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ kind: "sending", text: "" });
    try {
      const result = await postSubscribe({ email });
      setStatus({ kind: "ok", text: `Subscribed · id ${result.id}` });
      setEmail("");
    } catch (err) {
      setStatus({ kind: "err", text: err instanceof Error ? err.message : "Could not subscribe." });
    }
  };

  const sectionsLinks = [
    { label: "Manifesto", href: "#manifesto" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Team", href: "#team", pulse: true },
    { label: "Events", href: "#events" }];


  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[var(--leaf-500)]" />,
      text: "arclub@jmit.ac.in",
      href: "mailto:arclub@jmit.ac.in"
    },
    {
      icon: <MapPin size={18} className="text-[var(--leaf-500)]" />,
      text: "IT-117 JMIT Radaur"
    }];


  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/arclub_tech/" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/arclub_tech21" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/ar-club-jmit/posts/?feedView=all" }];

  return (
    <footer className="bg-black/30 relative h-fit rounded-[2.5rem] overflow-hidden m-4 md:m-8 border border-white/5">
      <div className="max-w-7xl mx-auto p-6 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/dist/logo.png?v=1" alt="AR CLUB Logo" className="h-14 w-auto drop-shadow-md bg-white/10 p-2 rounded-xl" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A student-driven initiative connecting campus talent directly with industry leaders in AR, AI, and emerging tech. From grassroots hackathons to global communities and founder networks.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Sections</h4>
            <ul className="space-y-3">
              {sectionsLinks.map((link) =>
                <li key={link.label} className="relative w-max">
                  <a href={link.href} className="text-white/70 hover:text-[var(--leaf-500)] transition-colors">
                    {link.label}
                  </a>
                  {link.pulse &&
                    <span className="absolute top-0 -right-4 w-2 h-2 rounded-full bg-[var(--leaf-500)] animate-pulse"></span>
                  }
                </li>
              )}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) =>
                <li key={i} className="flex items-center space-x-3 text-white/70">
                  {item.icon}
                  {item.href ?
                    <a href={item.href} className="hover:text-[var(--leaf-500)] transition-colors">
                      {item.text}
                    </a> :

                    <span className="hover:text-[var(--leaf-500)] transition-colors">
                      {item.text}
                    </span>
                  }
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-3">One essay a month. Pressed in our own studio.</p>
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-white/30" />

              <button
                disabled={status.kind === "sending"}
                type="submit"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 disabled:opacity-60 transition-colors">

                {status.kind === "sending" ? "…" : "Join"}
              </button>
            </form>
            <p
              aria-live="polite"
              className={`font-mono text-xs mt-2 ${status.kind === "err" ? "text-red-300" : "text-white/60"}`}>

              {status.text}
            </p>
          </div>
        </div>



        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-white/50">
            {socialLinks.map(({ icon, label, href }) =>
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-[var(--leaf-500)] transition-colors">
                {icon}
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-white/50 font-mono text-xs">
            &copy; {new Date().getFullYear()} AR CLUB. All rights reserved. v4.1.0
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 z-0 relative pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <TextHoverEffect text="AR CLUB" />
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>);

}