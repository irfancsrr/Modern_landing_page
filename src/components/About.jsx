"use client";
import { motion } from "framer-motion";
import about_src from "../images/about.png";
// import about_src from "../../public/images/about.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1R8E7AfWhg0cFFYTHvDd9fbLMZV_Fn3Vnw&s"
          alt="About Us"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg shadow-lg"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are a modern platform dedicated to empowering learners and professionals.
            Our mission is to provide high-quality resources, mentorship, and opportunities
            to help you achieve your goals.
          </p>
          <a
            href="#features"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
