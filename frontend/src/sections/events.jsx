import React from "react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { MobileEventsList } from "@/components/ui/mobile-events-list";
import { getImageKitUrl } from "@/utils/imagekit";

export function Events() {

  const rawEventImages = [
    {
      src: "events/ms-visit.jpg",
      alt: "Microsoft Visit",
      title: "Microsoft Visit: From Campus to Cloud",
      date: "May 28, 2025",
      description: "An industrial visit to Microsoft Gurugram exploring live enterprise cloud systems."
    },
    {
      src: "events/ideathon.jpg",
      alt: "Ideathon Hustle",
      title: "Ideathon Hustle",
      date: "Oct 25, 2024",
      description: "An inter-college ideathon challenging student teams to pitch creative solutions and tech innovations."
    },
    {
      src: "events/unity-app-workshop.jpg",
      alt: "Unity App Workshop",
      title: "Hands-on Workshop on Unity AR Game Development",
      date: "Sep 29, 2025",
      description: "An offline workshop on building AR games using Unity, led by Dr. Shiraz Khurana."
    },
    {
      src: "events/techhunt.jpg",
      alt: "Tech Hunt",
      title: "Tech-Powered Hunt: The AR Quest",
      date: "Apr 23, 2025",
      description: "A campus-wide treasure hunt driven by AR scans, code clues, and team puzzles."
    },
    {
      src: "events/ideathon2.0.jpg",
      alt: "Ideathon 2.0",
      title: "Ideathon 2.0",
      date: "Apr 7, 2026",
      description: "The second edition of the inter-college ideathon focused on novel tech concepts and rapid prototyping."
    },
    {
      src: "events/feelar.jpg",
      alt: "Feel AR",
      title: "Feel AR",
      description: "An immersive hands-on showcase offering interactive VR and AR experiences for students."
    },
    {
      src: "events/az-day.jpg",
      alt: "Azure Developer Day",
      title: "Azure Developer Day: Innovating with AR",
      date: "Nov 22, 2024",
      description: "Sessions with Microsoft consultants covering Azure cloud scalability and AR integration."
    }
  ];

  const eventImages = rawEventImages.map(img => ({
    ...img,
    src: getImageKitUrl(img.src, { width: 1000, quality: 85 })
  }));

  return (
    <section id="events" className="relative w-full min-h-screen">
      <div className="relative flex flex-col items-center justify-center pt-12 pb-6 z-10">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/60 mb-4">— Events</div>
        <h2 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Explore Our <em className="italic text-white/80">Experiences.</em>
        </h2>
        <p className="text-white/70 mt-4 max-w-2xl text-center px-4 text-base md:text-lg">
          Scroll down to discover past and upcoming events in our interactive gallery.
        </p>
      </div>

      {/* Desktop Parallax View */}
      <div className="hidden md:block">
        <ZoomParallax images={eventImages} />
      </div>

      {/* Mobile Stack View */}
      <div className="block md:hidden">
        <MobileEventsList images={eventImages} />
      </div>
    </section>
  );
}
