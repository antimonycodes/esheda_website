import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const PROJECT_OPTIONS = [
  "A short film",
  "A music video",
  "An ad or campaign",
  "Social content",
  "Visuals and stills",
  "Something else",
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const perks = [
  {
    title: "Skip the queue.",
    description: "Early members get priority access ahead of the public launch.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="7" width="7" height="10" rx="1.5" />
        <rect x="11" y="7" width="7" height="10" rx="1.5" />
        <path d="M20.5 9.75 23 12l-2.5 2.25Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Founding pricing.",
    description: "Lock in early-access rates before plans go live.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
  {
    title: "Shape the product.",
    description: "Early feedback goes straight to the team building it.",
    icon: (
      <svg {...iconProps}>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-[#2A2A2A] bg-[#0F0F0F] px-4 py-3 text-sm text-white placeholder:text-[#535353] outline-none transition focus:border-brand-start/70 focus:ring-2 focus:ring-brand-start/20";

const WaitlistPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const name = fullName.trim();
    const mail = email.trim();
    if (!name) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!project) {
      setError("Tell us what you'll make first.");
      return;
    }

    setStatus("submitting");
    try {
      const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT as
        | string
        | undefined;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName: name, email: mail, project }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        // No backend configured yet: keep a local record so the flow is testable.
        await new Promise((r) => setTimeout(r, 600));
        const existing = JSON.parse(
          localStorage.getItem("esheda-waitlist") ?? "[]",
        ) as unknown[];
        existing.push({
          fullName: name,
          email: mail,
          project,
          at: new Date().toISOString(),
        });
        localStorage.setItem("esheda-waitlist", JSON.stringify(existing));
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen">
      <div className="px-6 py-12 sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-20 xl:px-32">
        <Nav hideActions />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Be first into one AI studio for everything{" "}
              <span className="text-gradient">you create.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm font-semibold text-[#A3A6A0] md:text-base">
              Esheda turns a single idea into a finished film, a visual, or a
              campaign. We&apos;re letting people in gradually to keep
              generation fast &mdash; join the list and we&apos;ll email you the
              moment your spot opens up.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-px shrink-0 text-[#A3A6A0]">{perk.icon}</span>
                  <p className="text-[#A3A6A0]">
                    <span className="font-bold text-white">{perk.title}</span>{" "}
                    {perk.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative w-full lg:max-w-md lg:justify-self-end"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand-start/15 blur-[90px]" />

            <div className="rounded-2xl border border-[#2A2A2A] bg-[#161616] p-6 shadow-2xl shadow-black/40 sm:p-7">
              {status === "success" ? (
                <div className="py-6 text-center">
                  <div className="btn-gradient mx-auto flex h-12 w-12 items-center justify-center rounded-full text-black">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="m5 12 5 5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="mt-5 text-xl font-bold">
                    You&apos;re on the list
                  </h2>
                  <p className="mt-2 text-sm text-[#A3A6A0]">
                    We&apos;ll email <span className="text-white">{email}</span>{" "}
                    the moment your spot opens up.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="text-xl font-bold">Join the waitlist</h2>
                  <p className="mt-1 text-xs text-[#A3A6A0]">
                    Takes about 20 seconds.
                  </p>

                  <div className="mt-6 space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold text-[#D4D6D1]">
                        Full name
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        placeholder="Gbenga Ebun"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold text-[#D4D6D1]">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="ebun@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold text-[#D4D6D1]">
                        What will you make first?
                      </span>
                      <div className="relative">
                        <select
                          name="project"
                          value={project}
                          onChange={(e) => setProject(e.target.value)}
                          className={`${inputClass} appearance-none pr-10`}
                        >
                          <option value="" disabled>
                            Choose one
                          </option>
                          {PROJECT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white"
                        >
                          <path
                            d="m5 7.5 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="mt-4 text-xs font-semibold text-red-400"
                    >
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gradient mt-6 w-full rounded-lg py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting"
                      ? "Saving your spot…"
                      : "Get early access"}
                  </motion.button>

                  <p className="mt-4 text-center text-[11px] text-[#6B6E68]">
                    No spam. One email when it&apos;s your turn.{" "}
                    <Link
                      to="/privacy"
                      className="underline underline-offset-2 hover:text-white"
                    >
                      Privacy policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default WaitlistPage;
