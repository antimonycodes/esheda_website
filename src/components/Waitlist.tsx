import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Waitlist = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[400px] bg-brand-start/30 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Your idea is <br /> enough to start
        </h2>
        <p className="text-[#A3A6A0] mt-4 text-sm md:text-base font-semibold">
          Create it, shape it, edit it, and make it real.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-8"
        >
          <Link
            to="/"
            className="btn-gradient inline-block text-black font-bold px-6 py-3 rounded-full"
          >
            Join the Waitlist
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
