import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Reality Node Not Found | AR CLUB";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-0)] text-[var(--text-100)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Matrix & Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-[var(--leaf-500)]/[0.08] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* AR CLUB Logo */}
        <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
          <img src="/dist/logo.png" alt="AR CLUB Logo" className="h-12 w-auto" />
          <span className="font-serif text-2xl text-white tracking-tight">AR CLUB</span>
        </Link>

        {/* 404 Visual Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Spatial Coordinate Error
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-white tracking-tight leading-none mb-4">
          404
        </h1>

        <h2 className="font-tech text-xl md:text-2xl text-white/90 uppercase tracking-wider mb-4">
          Reality Node Not Found
        </h2>

        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The spatial coordinates you navigated to do not exist or have been shifted into another dimension. Let's get you back to reality.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Events</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/60 font-mono uppercase tracking-wider">
          <Link to="/#manifesto" className="hover:text-white transition-colors">Manifesto</Link>
          <Link to="/#capabilities" className="hover:text-white transition-colors">Capabilities</Link>
          <Link to="/#team" className="hover:text-white transition-colors">Team</Link>
          <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </div>
  );
}
