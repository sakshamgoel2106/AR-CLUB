import { useState } from "react";
import { postContact } from "@/services/api";

const initialForm = {
  name: "",
  email: "",
  message: "",
  interest: "general"
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    kind: "idle",
    text: ""
  });

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ kind: "sending", text: "Sending…" });
    try {
      const result = await postContact(form);
      setStatus({ kind: "ok", text: `Message sent · id ${result.id}` });
      setForm(initialForm);
    } catch (err) {
      setStatus({ kind: "err", text: err instanceof Error ? err.message : "Could not send." });
    }
  };

  return (
    <section id="contact" className="px-6 pt-16 pb-10 md:pt-20 md:pb-12 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">— Join us</div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mt-3">
            Apply, <em className="italic text-white/80">say hi,</em> or just visit.
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl">
            New members every semester. No experience required — just curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <form onSubmit={onSubmit} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8 space-y-4">
            <label className="block">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-1 w-full rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-white/30"
                type="text" />
              
            </label>
            <label className="block">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60">Email</span>
              <input
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-1 w-full rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-white/30"
                type="email" />
              
            </label>
            <label className="block">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60">Interest</span>
              <select
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="mt-1 w-full rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-white focus:outline-none focus:ring-white/30">
                
                <option value="general">General</option>
                <option value="join">Joining the club</option>
                <option value="collaborate">Collaborating on a project</option>
                <option value="press">Press / media</option>
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60">Message</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className="mt-1 w-full rounded-md bg-white/[0.04] ring-1 ring-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-white/30 resize-none" />
              
            </label>
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                disabled={status.kind === "sending"}
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 disabled:opacity-60 transition-colors">
                
                {status.kind === "sending" ? "Sending…" : "Send"}
              </button>
              <p
                aria-live="polite"
                className={`font-mono text-xs ${status.kind === "err" ? "text-red-300" : "text-white/70"}`}>
                
                {status.text}
              </p>
            </div>
          </form>

          <aside className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8 space-y-5">
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/50">Email</div>
              <div className="font-serif text-lg text-white mt-1">arclub@jmit.ac.in</div>
            </div>
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/50">Lab</div>
              <div className="font-serif text-lg text-white mt-1">IT-117 JMIT Radaur</div>
            </div>
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/50">Office hours</div>
              <div className="font-serif text-lg text-white mt-1">Wed · 4–6pm</div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}