import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { TechStack } from "@/sections/tech-stack";
import { Manifesto } from "@/sections/manifesto";
import { Capabilities } from "@/sections/capabilities";
import { Team } from "@/sections/team";
import { Events } from "@/sections/events";
import { Gallery } from "@/sections/gallery";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <ResponsiveHeroBanner
        title="AR CLUB"
        titleLine2="We make reality more editable"
        description="A student-driven initiative connecting campus talent directly with industry leaders in AR, AI, and emerging tech. From grassroots hackathons to global communities and founder networks."
        secondaryButtonText="Join AR Club"
        secondaryButtonHref="#contact"
        ctaButtonText="Contact Us"
        ctaButtonHref="#contact"
        navLinks={[
        { label: "Manifesto", href: "#manifesto", isActive: true },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Team", href: "#team" },
        { label: "Events", href: "#events" },
        { label: "Gallery", href: "#gallery" }]
        }
        partnersTitle="Powered by student engineers and designers" />
      
      <main className="bg-[var(--bg-0)] text-[var(--text-100)] relative">
        <TechStack />
        
        {/* Global Background Effects for all subsequent sections */}
        <div className="pointer-events-none absolute inset-0 z-0 flex flex-col pt-[30vh] overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"></div>
          
          {/* Glowing Orbs (Hidden on mobile for performance) */}
          <div className="hidden md:block absolute top-[5%] left-[-10%] h-[80vw] w-[80vw] max-h-[800px] max-w-[800px] rounded-full bg-[#3ca2fa]/[0.04] blur-[120px]"></div>
          <div className="hidden md:block absolute top-[35%] right-[-10%] h-[80vw] w-[80vw] max-h-[800px] max-w-[800px] rounded-full bg-[var(--leaf-500)]/[0.04] blur-[120px]"></div>
          <div className="hidden md:block absolute top-[65%] left-[10%] h-[80vw] w-[80vw] max-h-[800px] max-w-[800px] rounded-full bg-purple-500/[0.04] blur-[120px]"></div>
          <div className="hidden md:block absolute bottom-[5%] right-[-10%] h-[80vw] w-[80vw] max-h-[800px] max-w-[800px] rounded-full bg-[#3ca2fa]/[0.04] blur-[120px]"></div>
        </div>

        <div className="relative z-10">
          <Manifesto />
          <Capabilities />
          <Team />
          <ErrorBoundary>
            <Events />
          </ErrorBoundary>
          <Gallery />
          <Contact />
        </div>
      </main>
      <Footer />
    </>);

}