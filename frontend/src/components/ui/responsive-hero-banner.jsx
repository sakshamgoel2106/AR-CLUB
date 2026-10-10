"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";






const ResponsiveHeroBanner = ({
  navLinks = [
    { label: "Home", href: "#", isActive: true },
    { label: "Missions", href: "#" },
    { label: "Destinations", href: "#" },
    { label: "Technology", href: "#" }],

  ctaButtonText = "Reserve Seat",
  ctaButtonHref = "#",
  badgeLabel,
  badgeText,
  title = "We Don’t Just Give Opportunities.",
  titleLine2 = "We Create Them.",
  description = "The official AR Club at JMIT — bridging campus talent with industry leaders through hands-on technology, entrepreneurship, and global communities.",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText = "Watch Launch",
  secondaryButtonHref = "#",
  partnersTitle = "Partnering with leading space agencies worldwide"
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e, href) => {
    if (!href) return;
    const targetId = href.startsWith('/#') ? href.slice(1) : href.startsWith('#') ? href : null;
    if (targetId) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <section className="w-full isolate min-h-[85vh] md:min-h-screen overflow-hidden relative flex flex-col justify-center">
      {/* AR/Bio-tech themed background */}
      <div className="absolute inset-0 bg-[var(--bg-0)] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />

      <header className="absolute top-0 w-full z-50 xl:top-4">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-white text-xl font-serif tracking-tight">

              <img src="/dist/logo.png" alt="AR CLUB Logo" className="h-14 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                {navLinks.map((link, index) =>
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${link.isActive ? "text-white/90" : "text-white/80"}`}>

                    {link.label}
                  </a>
                )}
                <a
                  href={ctaButtonHref}
                  onClick={(e) => handleScroll(e, ctaButtonHref)}
                  className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors">

                  {ctaButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4">

                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white/90">

                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-2xl font-serif tracking-wide ${link.isActive ? "text-white" : "text-white/70"}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                href={ctaButtonHref}
                onClick={(e) => handleScroll(e, ctaButtonHref)}
                className="mt-4 rounded-full bg-white px-8 py-3 text-lg font-medium text-black"
              >
                {ctaButtonText}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            {(badgeLabel || badgeText) &&
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                {badgeLabel &&
                  <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                    {badgeLabel}
                  </span>
                }
                {badgeText &&
                  <span className="text-sm font-medium text-white/90 font-sans">{badgeText}</span>
                }
              </div>
            }

            <h1 className={`sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight animate-fade-slide-in-2 flex flex-col items-center ${
              titleLine2 === "We make reality more editable" ? "font-sans font-semibold" : "font-instrument-serif font-normal"
            }`}>
              <span>{title}</span>
              {titleLine2 === "We make reality more editable" ? (
                <>
                  <span className="mt-2 flex items-center justify-center flex-wrap gap-x-3">
                    <span>We</span>
                    <motion.span
                      initial="idle"
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(34, 197, 94, 0.2)",
                          "0 0 24px rgba(34, 197, 94, 0.45)",
                          "0 0 10px rgba(34, 197, 94, 0.2)"
                        ]
                      }}
                      transition={{
                        boxShadow: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      whileHover="hover"
                      className="relative inline-flex items-center border border-[#22c55e] bg-[#22c55e]/[0.06] hover:bg-[#22c55e]/[0.1] px-3.5 sm:px-4 py-0.5 sm:py-1 text-white select-none cursor-default group transition-colors duration-300"
                    >
                      {/* 4 Corner control anchor handles - AR Viewfinder Focus Effect on hover */}
                      <motion.span
                        variants={{
                          idle: { x: 0, y: 0 },
                          hover: { x: -2.5, y: -2.5 }
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] bg-white border border-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.7)] pointer-events-none z-10"
                      />
                      <motion.span
                        variants={{
                          idle: { x: 0, y: 0 },
                          hover: { x: 2.5, y: -2.5 }
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] bg-white border border-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.7)] pointer-events-none z-10"
                      />
                      <motion.span
                        variants={{
                          idle: { x: 0, y: 0 },
                          hover: { x: -2.5, y: 2.5 }
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] bg-white border border-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.7)] pointer-events-none z-10"
                      />
                      <motion.span
                        variants={{
                          idle: { x: 0, y: 0 },
                          hover: { x: 2.5, y: 2.5 }
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] bg-white border border-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.7)] pointer-events-none z-10"
                      />

                      <span className="relative z-10 tracking-tight">make reality more</span>
                    </motion.span>
                  </span>
                  <span className="mt-1">editable</span>
                </>
              ) : (
                <>
                  <br className="hidden sm:block" />
                  {titleLine2}
                </>
              )}
            </h1>

            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4 w-full max-w-sm sm:max-w-none mx-auto">
              {primaryButtonText && (
                <a
                  href={primaryButtonHref}
                  onClick={(e) => handleScroll(e, primaryButtonHref)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-900 bg-white hover:bg-white/95 rounded-full py-3.5 px-8 font-sans transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {primaryButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
              {secondaryButtonText && (
                <a
                  href={secondaryButtonHref}
                  onClick={(e) => handleScroll(e, secondaryButtonHref)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white font-sans transition-all cursor-pointer"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          <div className="mx-auto mt-10 md:mt-20 max-w-5xl">
            <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center">{partnersTitle}</p>
            <div className="flex flex-wrap justify-center animate-fade-slide-in-2 text-white/50 mt-6 md:mt-8 gap-4 md:gap-12 font-mono text-xs md:text-sm uppercase tracking-widest">
              <span>Unity</span>
              <span>Unreal</span>
              <span>Apple Vision</span>
              <span>Meta Quest</span>
              <span>Magic Leap</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ResponsiveHeroBanner;