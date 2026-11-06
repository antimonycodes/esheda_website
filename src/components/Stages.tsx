import { motion } from "framer-motion";
import editor from "../assets/editor.png";

const Stages = () => {
  const stages = [
    {
      id: 1,
      title: "Story",
      description: "Idea to structure",
      active: true,
    },
    {
      id: 2,
      title: "Script",
      description: "Scenes & dialoge",
      active: false,
    },
    {
      id: 3,
      title: "Character",
      description: "Character consistency",
      active: false,
    },
    {
      id: 4,
      title: "Map",
      description: "Connect character",
      active: false,
    },
    {
      id: 5,
      title: "Animate",
      description: "Generate shots",
      active: false,
    },
    {
      id: 6,
      title: "Edit",
      description: "Assemble & export",
      active: true,
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full md:max-w-95 md:shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            From story to <br />
            <span className="text-gradient">video editor</span>
          </h2>
          <p className="text-[#A3A6A0] mt-6 text-sm font-semibold">
            Six connected stages, one project. The cast you build in Cast is
            the cast that shows up in every shot — this is the deepest
            workflow on the platform.
          </p>

          <div className="flex flex-col gap-1 relative mt-10">
            <div className="absolute left-6.75 top-14 bottom-14 border-l border-dashed border-[#2A2A2A]" />

            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-center gap-3 rounded-2xl px-5 py-3 ${
                  stage.active ? "btn-gradient" : ""
                }`}
              >
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                    stage.active
                      ? "bg-black text-white"
                      : "border border-[#2A2A2A] text-white"
                  }`}
                >
                  {stage.id}
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm ${
                      stage.active ? "text-black" : "text-white"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold ${
                      stage.active ? "text-black/70" : "text-[#A3A6A0]"
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full border border-[#2A2A2A] rounded-xl overflow-hidden"
        >
          <img
            src={editor}
            alt="Esheda video editor"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Stages;
