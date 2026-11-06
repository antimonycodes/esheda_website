import { motion } from "framer-motion";
import vid from "../assets/vidd.gif";

const VidCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 w-full"
    >
      <div className="w-full border border-[#2A2A2A] rounded-[12px]">
        {/* video content */}
        <div className="w-full h-64 sm:h-96 md:h-125">
          <img
            src={vid}
            alt="video"
            className="w-full h-full rounded-xl object-center object-cover"
          />
        </div>
        {/* controls */}
        <div className="py-6 px-6 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
          {/* left */}
          <div className="flex flex-col gap-2 w-full max-w-55">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-white font-bold text-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-[#34D058]" />
              PREPARING
            </button>
            <div className="w-full h-1 rounded-full bg-white overflow-hidden">
              <div className="h-full w-[15%] btn-gradient rounded-full" />
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-2 flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => {
              const isActive = index === 3;
              const isDone = index < 3;
              const isPending = index > 3;

              return (
                <button
                  key={index}
                  disabled={isPending}
                  className={`px-3 py-1.5 rounded-md border text-xs font-bold ${
                    isActive
                      ? "bg-green-500 border-green-500 text-black"
                      : isDone
                        ? "border-green-500 text-green-500"
                        : "border-[#2A2A2A] text-[#5A5A5A]"
                  }`}
                >
                  SHOT {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VidCard;
