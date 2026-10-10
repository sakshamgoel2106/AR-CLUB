import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { initAnalytics, trackPageView } from "@/utils/analytics";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  useEffect(() => {
    initAnalytics();

    // Prevent text copying, cutting, and drag-selecting across the site
    const blockCopy = (e) => {
      const tag = e.target?.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("selectstart", blockCopy);

    return () => {
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("selectstart", blockCopy);
    };
  }, []);

  return (
    <Router>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dist" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}