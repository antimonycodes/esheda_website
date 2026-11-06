const audiences = [
  { label: "Creators", color: "text-brand-start" },
  { label: "Filmmakers & Storytellers", color: "text-sky-400" },
  { label: "Web3 Builders", color: "text-fuchsia-400" },
  { label: "Marketers", color: "text-brand-start" },
  { label: "Musicians", color: "text-sky-400" },
  { label: "Educators", color: "text-fuchsia-400" },
];

const Marquee = () => {
  return (
    <div className="border-y border-[#2A2A2A] py-4 md:py-6 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[audiences, audiences].map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-center shrink-0">
            {group.map((audience, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="flex items-center gap-3 px-4 md:px-6"
              >
                <svg
                  className={`w-4 h-4 shrink-0 ${audience.color}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-base sm:text-lg md:text-xl font-bold whitespace-nowrap">
                  {audience.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
