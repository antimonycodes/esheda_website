import { motion } from "framer-motion";
import movieprod from "../assets/mp.png";
import visualprod from "../assets/imgvid.png";
import web3 from "../assets/web3.png";

const Four = () => {
  const cards = [
    {
      id: 1,
      title: "AI Movie Production",
      image: movieprod,
      description: "Idea to finished film",
    },
    {
      id: 2,
      title: "Web3 Generation",
      description: "Idea to finished film",
      image: web3,
    },
    {
      id: 3,
      title: "Social Ads",
      description: "One brief many ads",
      image: web3,
    },
    {
      id: 4,
      title: "Image/video generation",
      description: "Idea to finished film",
      image: visualprod,
    },
  ];
  return (
    <div className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          One platform. <br />
          Four ways to <span className="text-gradient">create.</span>
        </h1>
        <p className="text-[#A3A6A0] text-center mt-6 md:mt-8 text-sm md:text-base font-semibold">
          Films, visuals, ads and web3 worlds share one cast, one library and{" "}
          <br className="hidden sm:block" />
          one production system. Pick a mode and watch the pipeline.
        </p>
      </motion.div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-[#191919] rounded-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-[#A3A6A0] mt-2 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Four;
