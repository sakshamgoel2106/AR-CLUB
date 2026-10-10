import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("arclub_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }

    // Listener for manual triggers (e.g. from footer "Cookie Settings")
    const handleOpen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  const handleChoice = (preference) => {
    localStorage.setItem("arclub_cookie_consent", preference);
    localStorage.setItem("arclub_cookie_consent_date", new Date().toISOString());
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: { preference } })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-md w-full animate-fade-slide-in-1">
      <div className="rounded-2xl bg-neutral-950/90 border border-white/15 p-5 md:p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 text-white">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--leaf-500)]/15 text-[var(--leaf-500)] border border-[var(--leaf-500)]/30">
              <Cookie className="h-4 w-4" />
            </div>
            <h4 className="font-serif text-base md:text-lg font-medium tracking-tight">
              Cookie & Privacy Choices
            </h4>
          </div>
          <button
            onClick={() => handleChoice("essential")}
            className="text-white/60 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-md"
            aria-label="Dismiss cookie banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4">
          We use essential local storage to keep the site operational and anonymous metrics to understand student engagement. No personal tracking or cross-site ad profiles. Read our{" "}
          <Link
            to="/privacy-policy"
            className="text-[var(--leaf-500)] hover:underline font-medium"
            onClick={() => setVisible(false)}
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={() => handleChoice("accepted")}
            className="w-full sm:flex-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-white/90 transition-colors shadow-sm"
          >
            Accept All
          </button>
          <button
            onClick={() => handleChoice("essential")}
            className="w-full sm:flex-1 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-xs font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("open-cookie-settings"));
}
