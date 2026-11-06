import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import gem from "../assets/gem.svg";
import slideone from "../assets/slider1.png";
// import slidetwo from "../assets/slider2.png";

gsap.registerPlugin(ScrollTrigger);

const Token = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: 12669,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = Math.floor(counter.value).toLocaleString();
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          Earn a token for every web3 <br /> image/video
          <span className="text-gradient">generated</span>
        </h1>
        <p className="text-[#A3A6A0] text-center mt-6 md:mt-8 text-sm md:text-base font-semibold max-w-[680px] mx-auto">
          Every image or video you generate earns you a token — automatically,
          in the same one-click flow you already use. What it becomes is
          revealed in Season 3. Don't want to start from a blank prompt? Pick
          a template another builder has already used and generate your own
          version from it.
        </p>
      </motion.div>
      {/* slider */}
      <div className="relative py-16 md:py-24">
        {/* token  */}
        <div className="static lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 w-fit flex flex-col items-center mx-auto lg:mx-0 mb-10 lg:mb-0">
          {/* shadow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[420px] h-[420px] sm:w-[600px] sm:h-[580px] lg:w-[722px] lg:h-[696px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-[150px]" />
          <div className="btn-gradient size-[180px] sm:size-[220px] lg:size-[300px] rounded-full flex items-center justify-center">
            <img src={gem} alt="Gem" className="w-1/2 h-1/2" />
          </div>
          {/* sub */}
          <div className="w-fit mx-auto -mt-8 lg:-mt-12 bg-linear-[94.52deg] from-[#1E4426] from-[20.62%] via-[#142114] via-[60.66%] to-[#202B1E] to-[96.34%] border-[1.5px] border-[#3D5B23] py-2 rounded-xl px-6 sm:px-8 flex items-center">
            <div className="btn-gradient size-[40px] rounded-full flex items-center justify-center shrink-0">
              <img src={gem} alt="Gem" className="size-[20px]" />
            </div>
            <div className="ml-2">
              <h3 ref={counterRef} className="text-xl font-bold">
                0
              </h3>
              <p className="text-xs text-gradient">Frames. +529 today</p>
            </div>
          </div>
        </div>
        {/* slides */}
        <div className="flex gap-4 overflow-hidden pl-6 sm:pl-10 md:pl-16 lg:pl-32">
          {[slideone, slideone].map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`Slide ${i + 1}`}
              className="h-56 sm:h-72 lg:h-85 w-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Token;
