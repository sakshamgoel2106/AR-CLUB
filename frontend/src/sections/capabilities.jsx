const caps = [
{
  title: "Real Responsibility",
  body: "Lead initiatives, manage tech events, and coordinate directly with industry partners."
},
{
  title: "Practical Skill Development",
  body: "Hands-on work in emerging tech, development, design, and community operations."
},
{
  title: "Professional Exposure",
  body: "Direct networking with industry experts, engineers, and startup founders."
}];


export function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-8 md:py-12 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">— What We Offer</div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mt-3">
            Ready to learn, build, <em className="italic text-white/80">connect,</em> and contribute?
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl">A platform that empowers you to grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caps.map((c) =>
          <article
            key={c.title}
            className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8">
            
              <h3 className="font-serif text-2xl text-white tracking-tight">{c.title}</h3>
              <p className="text-white/70 mt-3 leading-relaxed">{c.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}