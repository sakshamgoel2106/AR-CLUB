import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    url: "/dist/gallery/p1.jpg",
    title: "Azure-Dev-Day",
    tag: "Microsoft Event"
  },
  {
    id: 2,
    url: "/dist/gallery/image3.jpg",
    title: "FeelAR event",
    tag: "Workshop"
  },
  {
    id: 3,
    url: "/dist/gallery/image4.jpg",
    title: "Club Gathering",
    tag: "Community"
  },
  {
    id: 4,
    url: "/dist/gallery/image1.jpg",
    title: "Team Session",
    tag: "Gathering"
  },
  {
    id: 5,
    url: "/dist/gallery/ideathon.jpg",
    title: "Ideathon 2.0",
    tag: "Competition"
  },
  {
    id: 6,
    url: "/dist/gallery/p2.jpg",
    title: "LearnX event",
    tag: "Orientation"
  }
];


const Card = ({ img, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col w-full max-w-5xl h-[60vh] md:h-[80vh] rounded-[2rem] origin-top overflow-hidden bg-[#111] ring-1 ring-white/10 shadow-2xl">

        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.img
            style={{ scale: imageScale }}
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover opacity-80" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full font-mono text-[0.6rem] md:text-[0.7rem] uppercase tracking-widest text-white/90 mb-3 md:mb-4 border border-white/20">
            {img.tag}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white tracking-normal leading-tight">{img.title}</h3>
        </div>
      </motion.div>
    </div>);
};

export function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="gallery" className="w-full py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">— Gallery</div>
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight mt-3">
            Glimpses of <em className="italic text-[var(--leaf-500)]">creation.</em>
          </h2>
          <p className="text-white/70 mt-6 max-w-2xl text-lg">
            Hackathons, workshops, and late-night building sessions. See what it looks like inside the AR CLUB.
          </p>
        </div>
      </div>

      <div ref={container} className="relative w-full mx-auto mt-10 pb-[10vh]">
        {galleryImages.map((img, i) => {
          const targetScale = 1 - (galleryImages.length - i) * 0.05;
          return (
            <Card
              key={img.id}
              i={i}
              img={img}
              progress={scrollYProgress}
              range={[i * (1 / galleryImages.length), 1]}
              targetScale={targetScale} />);


        })}
      </div>
    </section>);

}