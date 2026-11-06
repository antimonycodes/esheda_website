import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import village from "../assets/templates/village.png";
import library from "../assets/templates/library.png";
import forestCabin from "../assets/templates/forest-cabin.png";
import girl from "../assets/templates/girl.png";
import mickey from "../assets/templates/mickey.png";
import robot from "../assets/templates/robot.png";
import car from "../assets/templates/car.png";
import penguin from "../assets/templates/penguin.png";

const tabs = ["Featured", "Image", "Video", "Newest", "Yours"];

const tags = [
  "#Cyberpunk",
  "#generative",
  "#3d",
  "#anime",
  "#abstract",
  "#film",
  "#pixels",
  "#collectible",
];

const templates = [
  {
    id: 1,
    title: "Penguin",
    image: penguin,
    likes: 82,
    video: false,
    cell: "md:col-start-1 md:row-start-1",
  },
  {
    id: 2,
    title: "BMW",
    image: car,
    likes: 82,
    video: false,
    cell: "md:col-start-2 md:row-start-1",
  },
  {
    id: 3,
    title: "Robot",
    image: robot,
    likes: 82,
    video: false,
    cell: "md:col-start-3 md:row-start-1",
  },
  {
    id: 4,
    title: "Mickey house",
    image: mickey,
    likes: 82,
    video: false,
    cell: "md:col-start-4 md:row-start-1",
  },
  {
    id: 5,
    title: "Spring girl",
    image: girl,
    likes: 82,
    video: true,
    cell: "md:col-start-1 md:row-start-2 md:row-span-2",
    tall: true,
  },
  {
    id: 6,
    title: "Mystery shack",
    image: forestCabin,
    likes: 82,
    video: true,
    cell: "md:col-start-2 md:row-start-2",
  },
  {
    id: 7,
    title: "Library",
    image: library,
    likes: 82,
    video: true,
    cell: "md:col-start-3 md:row-start-2",
  },
  {
    id: 8,
    title: "Snowy village",
    image: village,
    likes: 82,
    video: true,
    selected: true,
    cell: "md:col-start-4 md:row-start-2",
    stats: { generated: "271.34", remaining: "262.14" },
    statsCell: "md:col-start-4 md:row-start-3",
  },
];

const Template = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const visibleTemplates = templates.filter((template) => {
    if (activeTab === "Video") return template.video;
    if (activeTab === "Image") return !template.video;
    return true;
  });

  return (
    <div className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          Select a template to get <br /> started with web3 generation
        </h1>
        <p className="text-[#A3A6A0] text-center mt-6 md:mt-8 text-sm md:text-base font-semibold max-w-[680px] mx-auto">
          Select an image or a video template, tweak, or rewrite, and export
          your web three project
        </p>

        {/* search */}
        <div className="flex items-center gap-2 max-w-4xl mx-auto mt-10 bg-[#131313] border border-[#2A2A2A] rounded-full px-5 py-3">
          <svg
            className="w-4 h-4 text-[#6B6E68] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full placeholder:text-[#6B6E68]"
          />
        </div>

        {/* tabs */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-[#A3A6A0] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* tags */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full border text-xs font-semibold transition-colors ${
                activeTag === tag
                  ? "border-white text-white"
                  : "border-[#2A2A2A] text-[#A3A6A0] hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {visibleTemplates.map((template, index) => (
          <Fragment key={template.id}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-xl overflow-hidden border aspect-square ${
                template.tall ? "md:aspect-auto" : ""
              } ${template.cell} ${
                template.selected
                  ? "border-2 border-blue-500"
                  : "border-[#2A2A2A]"
              }`}
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-full object-cover"
              />

              {/* likes badge */}
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1 text-xs font-bold">
                <span>🔥</span>
                {template.likes}
              </div>

              {/* chain badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1 text-xs font-bold">
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="hidden sm:inline">BNB Chain</span>
              </div>

              {/* video badge */}
              {template.video && (
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1 text-xs font-bold">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Video
                </div>
              )}
            </motion.div>

            {/* stats pill occupies its own bento cell, beside the selected template */}
            {template.stats && (
              <div
                className={`hidden md:flex items-end justify-end min-h-24 ${template.statsCell}`}
              >
                <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 rounded-md px-3 py-1 text-xs font-bold">
                  {template.stats.generated}
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V10h-2v7zm4 0h2V4h-2v13z" />
                  </svg>
                  {template.stats.remaining}
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Template;
