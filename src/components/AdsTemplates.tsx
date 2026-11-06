import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    title: "Proof → Offer",
    description: "Pattern break, one hard proof. The workhorse for cold.",
    tags: ["Proof", "Offer"],
    gradient: "from-teal-500 to-emerald-700",
    uses: "1.4k uses",
    category: "Cold outreach",
  },
  {
    id: 2,
    title: "Founder to camera",
    description:
      "Unpolished, talking-head energy. Reads as organic in feed, which is exactly why it converts.",
    tags: ["Confession", "The Why", "Ask"],
    gradient: "from-brand-start to-emerald-800",
    uses: "1.2k uses",
    category: "Product launch",
  },
  {
    id: 3,
    title: "Founder to camera",
    description:
      "Unpolished, talking-head energy. Reads as organic in feed, which is exactly why it converts.",
    tags: ["Confession", "The Why", "Ask"],
    gradient: "from-brand-start to-emerald-800",
    uses: "1.2k uses",
    category: "Product launch",
  },
  {
    id: 4,
    title: "Before / After split",
    description:
      "Side-by-side reveal with a wipe on the beat. Best for anything with a visible result.",
    tags: ["Confession", "The Why", "Ask"],
    gradient: "from-brand-start to-emerald-800",
    uses: "1.2k uses",
    category: "Product launch",
  },
  {
    id: 5,
    title: "Before / After split",
    description:
      "Side-by-side reveal with a wipe on the beat. Best for anything with a visible result.",
    tags: ["Confession", "The Why", "Ask"],
    gradient: "from-brand-start to-emerald-800",
    uses: "1.2k uses",
    category: "Product launch",
  },
];

const stats = [
  { value: "4", label: "workflows, one shared library" },
  { value: "1", label: "cast, reused across everything" },
  { value: "1", label: "editor to finish any of it" },
  { value: "4K", label: "export, MP4 or ProRes" },
];

const AdsTemplates = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Start ads generation as a template,{" "}
          <span className="text-gradient">not a blank page.</span>
        </h1>
        <p className="text-[#A3A6A0] mt-6 md:mt-8 text-sm md:text-base font-semibold max-w-[680px] mx-auto">
          Every workflow comes with a set of ready-made templates — built by
          us, or reused from something another builder already made. Pick
          one, drop in your product or idea, and generate.
        </p>
      </motion.div>

      {/* cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pl-6 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-32 mt-12 md:mt-16 pb-4">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ y: -4 }}
            className="shrink-0 w-64 sm:w-72 bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden"
          >
            <div
              className={`relative h-48 bg-gradient-to-br ${template.gradient}`}
            >
              <div className="absolute inset-4 bg-white/10 rounded-md" />
              <span className="absolute top-2 right-2 bg-black/70 rounded-md px-2 py-1 text-xs font-bold">
                9:16
              </span>
              <div className="absolute bottom-2 left-2 flex gap-1">
                <span className="bg-black/70 rounded-md px-2 py-1 text-xs font-bold">
                  Reels
                </span>
                <span className="bg-black/70 rounded-md px-2 py-1 text-xs font-bold">
                  Tiktok
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold">{template.title}</h3>
              <p className="text-[#A3A6A0] text-xs mt-1 font-semibold">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-3">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#2A2A2A] text-[#A3A6A0] rounded-md px-2 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button className="btn-gradient text-black text-xs font-bold px-4 py-2 rounded-lg">
                  Use template
                </button>
                <button className="border border-[#2A2A2A] text-xs font-bold px-4 py-2 rounded-lg">
                  Preview
                </button>
              </div>

              <p className="text-[#535353] text-xs font-semibold mt-3">
                {template.uses} · {template.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
            <p className="text-[#A3A6A0] text-sm font-semibold mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdsTemplates;
