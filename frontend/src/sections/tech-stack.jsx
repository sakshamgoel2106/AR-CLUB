import { Marquee } from "@/components/ui/marquee";
import { CommitsGrid } from "@/components/ui/commits-grid";

export function TechStack() {
  const tools = [
  { name: "Supabase", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#3ECF8E">
        <path d="M12.012 2L2.52 11.53h7.106L9.626 22l9.49-9.53h-7.105L12.012 2z" />
      </svg>
  },
  { name: "Vercel", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
  },
  { name: "Figma", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" />
        <path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z" fill="#1ABCFE" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#0ACF83" />
        <path d="M8.5 16A3.5 3.5 0 1 0 12 19.5V16H8.5z" fill="#A259FF" />
      </svg>
  },
  { name: "Next.js", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.12-5.46l-4.2-6.52V9h1.5v4.5l3.8 5.8 4.2-5.8V9h1.5v6.2h-1.5l-5.3 7.34z" />
      </svg>
  },
  { name: "React", icon:
    <svg width="28" height="28" viewBox="-11.5 -10.23 23 20.46" fill="#61DAFB">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
  },
  { name: "Microsoft", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
      </svg>
  },
  { name: "AWS", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 15C7.22 15 3.5 13.9 0 11.83l.84-1.22c3.1 1.8 6.55 2.76 10 2.76 4.3 0 8.04-1.4 10.87-4.04l.97 1.13C19.5 13.5 15.4 15 11 15zm12.22-3.8c-.8.67-2.34 1.05-3.87 1.13l.2-.95c1.1-.06 2.1-.34 2.6-.72-.82-.6-2.45-.88-4.3-.77l-.14-1c2.16-.13 4.14.2 5.2.98.2.14.3.3.3.47 0 .3-.3.65-1 1.1zm-3.23-5.22c-1.3-1.63-3.66-2.58-6.07-2.58-2.6 0-4.8 1-6.15 2.64-1.2 1.48-1.74 3.46-1.5 5.56H4.2c-.22-1.7.3-3.25 1.28-4.47 1.1-1.34 2.87-2.14 5.04-2.14 1.95 0 3.84.77 4.9 2.1 1 1.25 1.5 2.94 1.34 4.8l1.9-.1c.22-2.12-.4-4.1-1.65-5.63z" />
      </svg>
  },
  { name: "Azure", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.483 21.3H24L14.025 4.013l-3.3 5.7L17.7 21.3H5.483zM13.8 2.7L6.5 14.8l-1.3 2.1-5.2 4.4L13.8 2.7z" fill="#0078D4" />
      </svg>
  },
  { name: "Unity", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5L2.3 7.1v11.2L12 24l9.7-5.7V7.1L12 1.5zm0 2.3l7.7 4.5v9l-7.7 4.5-7.7-4.5v-9L12 3.8zm-1 5.3v2.5H7.7v2.5h3.3v2.5h2.5v-2.5h3.3v-2.5h-3.3V9.1H11z" />
      </svg>
  },
  { name: "Unreal", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 7v6c0 2 1.5 3 4 3s4-1 4-3V7h-2v6c0 1-1 1.5-2 1.5s-2-.5-2-1.5V7H8z" />
      </svg>
  },
  { name: "SoarX", icon:
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15z" /><path d="M9 7l.01 0" /><path d="M10 11l.01 0" />
      </svg>
  }];


  return (
    <section className="relative w-full py-16 md:py-20">
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[var(--bg-0)] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[var(--bg-0)] to-transparent" />
        
        <Marquee className="[--gap:5rem]" pauseOnHover>
          {tools.map((tool) =>
          <div key={tool.name} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>
            </div>
          )}
          {/* Duplicated for smooth infinite loop on wide screens */}
          {tools.map((tool) =>
          <div key={tool.name + "-dup"} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>
            </div>
          )}
          {tools.map((tool) =>
          <div key={tool.name + "-dup2"} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
              {tool.icon}
              <span className="font-sans font-bold text-2xl tracking-tight">{tool.name}</span>
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