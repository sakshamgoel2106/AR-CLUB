import { Marquee } from "@/components/ui/marquee";
import { getImageKitUrl, getFallbackHandler } from "@/utils/imagekit";

const teamMembers = [
  {
    image: "team/raghav",
    name: "Raghav",
    role: "Head of Operations of AR CLUB"
  },
  {
    image: "team/alok yadav.jpeg",
    name: "Alok Yadav",
    role: "Technical Lead of AR CLUB"
  },
  {
    image: "team/dhruv.jpg",
    name: "Dhruv",
    role: "Technical Lead of AR CLUB"
  },
  {
    image: "team/bhawna.jpg",
    name: "Bhawna",
    role: "Convener of AR CLUB"
  },
  {
    image: "team/toshak.jpg",
    name: "Toshak",
    role: "Convener of AR CLUB"
  },
  {
    image: "team/chaitanya.jpg",
    name: "Chaitanya",
    role: "Co-Convener of AR CLUB"
  },
  {
    image: "team/Nikhil.heic",
    name: "Nikhil",
    role: "Co-Convener of AR CLUB"
  },
  {
    image: "team/sam.jpeg",
    name: "Samarth",
    role: "Co-Convener of AR CLUB"
  },
  {
    image: "team/ishani.jpg",
    name: "Ishani",
    role: "Co-Convener of AR CLUB"
  },
  {
    image: "team/saksham.png",
    name: "Saksham Goel",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/ruhani.png",
    name: "Ruhani",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/vandana.jpg",
    name: "Vandana",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/tushar.jpg",
    name: "Tushar",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/kashmi.jpg",
    name: "Kashmi",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/vansh_goel.jpg",
    name: "Vansh Goel",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/daksh.jpg",
    name: "Daksh",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/Vedansh.PNG",
    name: "Vedansh",
    role: "Coordinator of AR CLUB"
  },
  {
    image: "team/Bhavresh.jpg",
    name: "Bhavresh Saini",
    role: "Volunteer of AR CLUB"
  },
  {
    image: "team/anubhuti.jpg",
    name: "Anubhuti",
    role: "Volunteer of AR CLUB"
  },
  {
    image: "team/anshul.jpg",
    name: "Anshul Yadav",
    role: "Volunteer of AR CLUB"
  },
  {
    image: "team/Mannat.png",
    name: "Mannat",
    role: "Volunteer of AR CLUB"
  },
  {
    image: "team/Moksh Sharma.PNG",
    name: "Moksh Sharma",
    role: "Volunteer of AR CLUB"
  },
  {
    image: "team/Ashutam Prajapati.jpg",
    name: "Ashutam Prajapati",
    role: "Volunteer of AR CLUB"
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
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    src={getImageKitUrl(member.image, { width: 400, height: 600, quality: 85 })}
                    onError={getFallbackHandler("")}
                  />

                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-black/60 backdrop-blur-sm p-4">
                    <h3 className="font-display font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="font-tech text-white/80 text-xs uppercase tracking-wider mt-1">
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
                alt="Mayank Arora — AR CLUB Member"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                src={getImageKitUrl("team/mayank.png", { width: 140, height: 140, quality: 90 })}
                onError={getFallbackHandler("")}
              />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-white">
                Mayank Arora
              </p>
              <p className="font-sans text-white/80 text-sm">
                Founder of AR CLUB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}