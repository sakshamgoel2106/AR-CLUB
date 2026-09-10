import { Marquee } from "@/components/ui/marquee";
import { CommitsGrid } from "@/components/ui/commits-grid";

export function TechStack() {
  const tools = [
    {
      name: "Microsoft", icon:
        <svg width="40" height="40" viewBox="0 0 21 21">
          <path fill="#f25022" d="M0 0h10v10H0z" />
          <path fill="#7fba00" d="M11 0h10v10H11z" />
          <path fill="#00a4ef" d="M0 11h10v10H0z" />
          <path fill="#ffb900" d="M11 11h10v10H11z" />
        </svg>
    },
    {
      name: "Azure", icon:
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.483 21.3H24L14.025 4.013l-3.3 5.7L17.7 21.3H5.483zM13.8 2.7L6.5 14.8l-1.3 2.1-5.2 4.4L13.8 2.7z" fill="#0078D4" />
        </svg>
    },
    {
      name: "Unity",
      hideName: true,
      icon: <img src="/dist/logos/unity.png" alt="Unity" className="h-[60px] md:h-[120px] w-auto object-contain invert" />
    },
    {
      name: "SoarX",
      hideName: true,
      icon: <img src="/dist/logos/soarx.png" alt="SoarX" className="h-[60px] md:h-[120px] w-auto object-contain invert" />
    },
    {
      name: "Blender",
      hideName: true,
      icon: <img src="/dist/logos/blender.png" alt="Blender" className="h-[32px] md:h-[64px] w-auto object-contain invert" />
    },
    {
      name: "Hack2Skill",
      hideName: true,
      icon: <img src="/dist/logos/hack2skill.png" alt="Hack2Skill" className="h-[60px] md:h-[120px] w-auto object-contain invert" />
    },
    {
      name: "Meta Quest",
      hideName: true,
      icon: <img src="/dist/logos/meta-quest.png" alt="Meta Quest" className="h-[65px] md:h-[130px] w-auto object-contain invert" />
    },
    {
      name: "Unreal Engine",
      hideName: true,
      icon: <img src="/dist/logos/unreal.png" alt="Unreal Engine" className="h-[60px] md:h-[120px] w-auto object-contain invert" />
    }
  ];


  return (
    <section className="relative w-full py-8 md:py-12">
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[var(--bg-0)] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[var(--bg-0)] to-transparent" />

        <Marquee className="[--gap:2.5rem] md:[--gap:5rem]" pauseOnHover>
          {tools.map((tool) =>
            <div key={tool.name} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              {!tool.hideName && <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>}
            </div>
          )}
          {/* Duplicated for smooth infinite loop on wide screens */}
          {tools.map((tool) =>
            <div key={tool.name + "-dup"} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              {!tool.hideName && <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>}
            </div>
          )}
          {tools.map((tool) =>
            <div key={tool.name + "-dup2"} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              {!tool.hideName && <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>}
            </div>
          )}
        </Marquee>

        {/* Commits Grid Section */}
        <div className="mt-24 md:mt-32 flex flex-col items-center w-full px-6">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60 mb-6">
            — Code & Contributions
          </div>
          <CommitsGrid text="AR CLUB" />
        </div>
      </div>
    </section>);

}