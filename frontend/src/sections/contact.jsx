import { useState, useRef } from "react";
import { postContact } from "@/services/api";
import { CheckCircle2, AlertCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
  interest: "general",
  _hp_company: "" // Honeypot field for bot protection
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    kind: "idle",
    text: ""
  });

  const formLoadedAt = useRef(Date.now());

  const validate = () => {
    const errs = {};
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMsg = form.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!trimmedMsg || trimmedMsg.length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: null }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 1. Spam check: Bot filled the honeypot
    if (form._hp_company) {
      setStatus({ kind: "ok", text: "Message sent · id success" });
      setForm(initialForm);
      return;
    }

    // 2. Spam check: Submitting faster than 1.5 seconds from page render
    if (Date.now() - formLoadedAt.current < 1500) {
      setStatus({ kind: "err", text: "Form submission too rapid. Please try again." });
      return;
    }

    // 3. Client-side form validation
    if (!validate()) {
      return;
    }

    setStatus({ kind: "sending", text: "Sending…" });
    try {
      const result = await postContact({
        name: form.name.trim(),
        email: form.email.trim(),
        interest: form.interest,
        message: form.message.trim(),
        _hp_company: form._hp_company
      });
      setStatus({ kind: "ok", text: `Message sent · id ${result.id}` });
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      setStatus({ kind: "err", text: err instanceof Error ? err.message : "Could not send." });
    }
  };

  return (
    <section id="contact" className="px-6 pt-16 pb-10 md:pt-20 md:pb-12 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--leaf-500)]">— Join us</div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mt-3">
            Apply, <em className="italic text-white/80">say hi,</em> or just visit.
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl text-sm md:text-base">
            New members every semester. No experience required — just curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <form onSubmit={onSubmit} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8 space-y-4" noValidate>
            {/* Honeypot field (hidden from genuine users) */}
            <input
              type="text"
              name="_hp_company"
              value={form._hp_company}
              onChange={(e) => update("_hp_company", e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="block">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-white/80">
                Name <span className="text-red-400">*</span>
              </span>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className={`mt-1.5 w-full rounded-md bg-white/[0.04] ring-1 px-3.5 py-2.5 text-white placeholder-white/40 focus:outline-none transition-colors ${
                  errors.name ? "ring-red-400 focus:ring-red-400" : "ring-white/15 focus:ring-white/40"
                }`}
                type="text"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </label>

            <label className="block">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-white/80">
                Email <span className="text-red-400">*</span>
              </span>
              <input
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@domain.com"
                className={`mt-1.5 w-full rounded-md bg-white/[0.04] ring-1 px-3.5 py-2.5 text-white placeholder-white/40 focus:outline-none transition-colors ${
                  errors.email ? "ring-red-400 focus:ring-red-400" : "ring-white/15 focus:ring-white/40"
                }`}
                type="email"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </label>

            <label className="block">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-white/80">
                Interest
              </span>
              <select
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="mt-1.5 w-full rounded-md bg-neutral-900 ring-1 ring-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:ring-white/40 transition-colors"
              >
                <option value="general">General Inquiry</option>
                <option value="join">Joining the club</option>
                <option value="collaborate">Collaborating on a project</option>
                <option value="press">Press / Media</option>
              </select>
            </label>

            <label className="block">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-white/80">
                  Message <span className="text-red-400">*</span>
                </span>
                <span className="text-[10px] text-white/60 font-mono">
                  {form.message.length}/4000
                </span>
              </div>
              <textarea
                required
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                maxLength={4000}
                placeholder="Tell us what you want to build or ask..."
                rows={5}
                className={`mt-1.5 w-full rounded-md bg-white/[0.04] ring-1 px-3.5 py-2.5 text-white placeholder-white/40 focus:outline-none resize-none transition-colors ${
                  errors.message ? "ring-red-400 focus:ring-red-400" : "ring-white/15 focus:ring-white/40"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </p>
              )}
            </label>

            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                disabled={status.kind === "sending"}
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 disabled:opacity-60 transition-colors cursor-pointer shadow-sm"
              >
                {status.kind === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status.text && (
                <p
                  aria-live="polite"
                  className={`font-mono text-xs flex items-center gap-1.5 ${
                    status.kind === "err" ? "text-red-400" : "text-[var(--leaf-500)]"
                  }`}
                >
                  {status.kind === "ok" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {status.text}
                </p>
              )}
            </div>
          </form>

          <aside className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8 space-y-6">
            <div>
              <div className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--leaf-500)]">Email</div>
              <a
                href="mailto:arclub@jmit.ac.in"
                className="font-serif text-lg text-white mt-1 block hover:underline hover:text-white/90 transition-colors"
              >
                arclub@jmit.ac.in
              </a>
            </div>
            <div>
              <div className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--leaf-500)]">Lab</div>
              <div className="font-serif text-lg text-white mt-1">IT-117 JMIT Radaur</div>
            </div>
            <div>
              <div className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--leaf-500)]">Office hours</div>
              <div className="font-serif text-lg text-white mt-1">Wed · 4–6pm</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}