/**
 * Lightweight, privacy-conscious analytics utility for AR CLUB.
 * Strictly respects the visitor's cookie consent preference.
 */

export function isAnalyticsAllowed() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("arclub_cookie_consent") === "accepted";
}

export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Listen for consent updates
  window.addEventListener("cookie-consent-changed", (e) => {
    if (e.detail?.preference === "accepted") {
      trackEvent("consent_granted", { timestamp: Date.now() });
    }
  });

  // Log initial session start if allowed
  if (isAnalyticsAllowed()) {
    trackPageView(window.location.pathname, document.title);
  }
}

export function trackPageView(path, title) {
  if (!isAnalyticsAllowed()) return;

  try {
    // If Google Analytics / gtag is integrated on window
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: path,
        page_title: title || document.title,
      });
    }

    // Custom non-invasive telemetry event
    window.dispatchEvent(
      new CustomEvent("arclub-pageview", {
        detail: { path, title: title || document.title, time: Date.now() },
      })
    );
  } catch (err) {
    // Fail silently in production
  }
}

export function trackEvent(name, params = {}) {
  if (!isAnalyticsAllowed()) return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }

    window.dispatchEvent(
      new CustomEvent("arclub-event", {
        detail: { name, params, time: Date.now() },
      })
    );
  } catch (err) {
    // Fail silently
  }
}
