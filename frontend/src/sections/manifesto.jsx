import { useEffect, useState } from "react";
import { getManifesto } from "@/services/api";

export function Manifesto() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getManifesto().
    then(setItems).
    catch((err) => setError(err.message));
  }, []);

  return (
    <section id="manifesto" className="px-6 py-16 md:py-20 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">— Manifesto</div>
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-normal mt-3">
            We believe reality is a <em className="italic text-[var(--leaf-500)] font-serif">canvas.</em>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl font-sans text-lg leading-relaxed">
            AR CLUB is a student-driven initiative connecting campus talent directly with industry leaders in AR, AI, and emerging tech. From grassroots hackathons to global communities and founder networks. We merge physical space with digital potential.
          </p>
        </div>

        {error ?
        <p className="font-mono text-sm text-red-300">Could not load: {error}</p> :

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) =>
          <article
            key={item.id}
            className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-6 md:p-8">
            
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                  Chapter {item.chapter}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mt-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 mt-3 leading-relaxed">{item.body}</p>
              </article>
          )}
          </div>
        }
      </div>
    </section>);

}