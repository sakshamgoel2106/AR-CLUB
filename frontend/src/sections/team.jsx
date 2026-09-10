import { Marquee } from "@/components/ui/marquee";

const teamMembers = [
  {
    image: "/dist/team/saksham.png",
    name: "Saksham Goel",
    role: "Co-ordinator of AR CLUB"
  },
  {
    image: "/dist/team/bhawna.jpg?v=4",
    name: "Bhawna",
    role: "Convener of AR CLUB"
  },
  {
    image: "/dist/team/ishani.jpg",
    name: "Ishani",
    role: "Senior Coordinator of AR CLUB"
  },
  {
    image: "/dist/team/kashmi.jpg",
    name: "Kashmi",
    role: "Graphic Designer of AR CLUB"
  },
  {
    image: "/dist/team/daksh.jpg",
    name: "Daksh",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "/dist/team/ruhani.png",
    name: "Ruhani",
    role: "Content Writer of AR CLUB"
  },

  {
    image: "/dist/team/vandana.jpg",
    name: "Vandana",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "/dist/team/vansh goel.jpg",
    name: "Vansh Goel",
    role: "Graphic designer of AR CLUB"
  },
  {
    image: "/dist/team/sam.jpeg",
    name: "Samarth",
    role: "convener of AR CLUB"
  },
  {
    image: "/dist/team/chaitanya.jpg",
    name: "Chaitanya",
    role: "Scripter of AR CLUB"
  },
  {
    image: "/dist/team/tushar.jpg",
    name: "Tushar",
    role: "Multimedia Head of AR CLUB"
  },
  {
    image: "/dist/team/toshak.jpg",
    name: "Toshak",
    role: "co-Convener of AR CLUB"
  },
  {
    image: "/dist/team/Bhavresh.jpg",
    name: "Bhavresh Saini",
    role: "volunteer of AR CLUB"
  },
  {
    image: "/dist/team/anshul.jpg",
    name: "Anshul Yadav",
    role: "volunteer of AR CLUB"
  },
  {
    image: "/dist/team/anubhuti.jpg",
    name: "Anubhuti",
    role: "volunteer of AR CLUB"
  },
  {
    image: "/dist/team/shagun.jpg",
    name: "Shagun",
    role: "volunteer of AR CLUB"
  }
];


export function Team() {
  return (
    <section id="team" className="relative w-full overflow-hidden py-8 md:py-12">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--leaf-500)] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" /><path d="M8 15H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /></svg>
          </div>

          <h1 className="relative mb-4 font-display font-semibold text-4xl text-white tracking-normal sm:text-5xl">
            Creative AR CLUB Members
          </h1>
          <p className="max-w-2xl text-white/70 text-base md:text-lg">
            AR CLUB connects you with the most advanced tech solutions,
            empowering seamless communication and development.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[var(--bg-0)] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[var(--bg-0)] to-transparent" />

          <Marquee className="[--gap:1.5rem] [--duration:20s]" pauseOnHover>
            {teamMembers.map((member) =>
              <div
                className="group flex w-52 sm:w-64 shrink-0 flex-col"
                key={member.name}>

                <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl bg-white/[0.03]">
                  <img
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    src={member.image} />

                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-black/60 backdrop-blur-sm p-4">
                    <h3 className="font-display font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="font-tech text-white/70 text-xs uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Marquee>
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-8 font-medium text-lg text-white/90 leading-relaxed md:text-xl">
            The exceptional support from AR CLUB truly impressed us. We
            suggested an improvement, and their team implemented it with
            remarkable speed!
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <img
                alt="Mayank Arora"
                className="absolute inset-0 h-full w-full object-cover"
                src="/dist/team/mayank.png" />

            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-white">
                Mayank Arora
              </p>
              <p className="font-sans text-white/60 text-sm">
                Founder of AR CLUB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}