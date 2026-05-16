"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join us today and take the first step towards building your future.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Sign Up Now
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
