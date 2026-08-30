import { useEffect, useState } from "react";
import { getBlogs } from "@/services/api";

export function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs().
    then((b) => setBlogs(b.slice(0, 3))).
    catch((err) => setError(err.message));
  }, []);

  return (
    <section id="articles" className="px-6 py-16 md:py-20 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">— Articles</div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mt-3">
            Notes from <em className="italic text-white/80">the lab.</em>
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl">
            Tutorials, essays, and field reports. One essay a month, no spam.
          </p>
        </div>

        {error ?
        <p className="font-mono text-sm text-red-300">Could not load: {error}</p> :
        blogs.length === 0 ?
        <p className="font-mono text-sm text-white/60">Loading…</p> :

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.map((b) =>
          <article
            key={b.slug}
            className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8 hover:bg-white/[0.05] transition-colors">
            
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                  {b.category}
                </div>
                <h3 className="font-serif text-2xl text-white tracking-tight mt-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-white/70 mt-3 leading-relaxed">{b.excerpt}</p>
                <div className="font-mono text-[0.7rem] text-white/50 mt-4">
                  {b.author} · {b.read_time} · {b.issue}
                </div>
              </article>
          )}
          </div>
        }
      </div>
    </section>);

}