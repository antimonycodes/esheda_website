import { useEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "./Nav";
import idea from "../assets/idea.svg";
import casting from "../assets/cast.svg";
import changes from "../assets/change.svg";

const Hero = () => {
  const scope = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: 1,
      title: "What do i start with?",
      description: "One idea- or your own script",
      icon: idea,
    },
    {
      id: 2,
      title: "What do i start with?",
      description: "One idea- or your own script",
      icon: casting,
    },
    {
      id: 3,
      title: "What do i start with?",
      description: "One idea- or your own script",
      icon: changes,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.7 } })
        .from("[data-hero-headline]", { y: 40, opacity: 0 })
        .from("[data-hero-sub]", { y: 20, opacity: 0 }, "-=0.4")
        .from(
          "[data-hero-cta]",
          { y: 20, opacity: 0, stagger: 0.1 },
          "-=0.4",
        )
        .from("[data-hero-note]", { opacity: 0 }, "-=0.3")
        .from(
          "[data-hero-card]",
          { y: 24, opacity: 0, stagger: 0.12 },
          "-=0.3",
        );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={scope}
      className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 w-full"
    >
      <Nav />
      {/* hero section */}
      <div className="w-full flex justify-center items-center mt-16 md:mt-20">
        <div className="flex flex-col items-center">
          <h1
            data-hero-headline
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
          >
            The AI Film Studio Built <br /> for{" "}
            <span className="text-gradient">Creators</span>
          </h1>
          <p
            data-hero-sub
            className="text-[#A3A6A0] text-center mt-6 md:mt-8 text-sm md:text-base font-semibold max-w-2xl"
          >
            Type your idea. Esheda writes the story, casts the characters, maps
            every shot, animates the scenes and cuts your film. You stay in
            the director's chair.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button
              data-hero-cta
              className="px-4 py-2 rounded-3xl btn-gradient text-black font-bold w-full sm:w-auto"
            >
              Start creating
            </button>
            <button
              data-hero-cta
              className="px-4 py-2 rounded-3xl border border-[#A3A6A0] text-[#A3A6A0] font-bold w-full sm:w-auto"
            >
              See how a film is made
            </button>
          </div>
          <p
            data-hero-note
            className="text-[#535353] text-center mt-4 text-sm font-semibold"
          >
            Autosaves as you go. Export up to 4K. MP4 or ProRes.
          </p>

          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                data-hero-card
                className="flex space-x-2 p-6 border border-[#2A2A2A] rounded-[12px]"
              >
                <img src={card.icon} alt={card.title} />
                <div>
                  <h2 className="text-lg font-bold">{card.title}</h2>
                  <p className="text-[#A3A6A0] text-sm font-semibold">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
