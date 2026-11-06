import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Is this only for movies?",
    answer:
      "No. The same six stages power short films, social ads, image/video generation and web3 collections — pick a mode and the pipeline adapts.",
  },
  {
    question: "Do I need editing skills?",
    answer:
      "No. Esheda writes the story, casts the characters, maps every shot and animates the scenes. You approve and adjust — the assembly is automatic.",
  },
  {
    question: "How do characters stay consistent?",
    answer:
      "Every character you build in Cast is saved to your library and reused automatically in every shot, scene and workflow across your project.",
  },
  {
    question: "Can I move an asset between workflows?",
    answer:
      "Yes. Cast, locations and props are shared across all four modes, so anything you build once shows up wherever you need it.",
  },
  {
    question: "Can I redo a single shot?",
    answer:
      "Yes. Regenerate or tweak any individual shot without touching the rest of the timeline — nothing else needs to re-render.",
  },
  {
    question: "What can I export?",
    answer:
      "Export up to 4K in MP4 or ProRes. Your project autosaves as you go, so you can come back and re-export anytime.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            What you should know <br className="hidden sm:block" /> before you
            create.
          </h2>
          <p className="text-[#A3A6A0] mt-4 text-sm md:text-base font-semibold">
            Quick answers about the platform every user wants to know.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-[#2A2A2A] py-4"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm md:text-base font-semibold">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-brand-start text-xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#A3A6A0] text-sm font-semibold pt-3 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
