"use client";
import { motion } from "framer-motion";
import { Rocket, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-10 h-10 text-indigo-600" />,
    title: "Fast Growth",
    desc: "Accelerate your career with structured learning paths and real-world projects."
  },
  {
    icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
    title: "Rich Resources",
    desc: "Access curated study materials, cheat sheets, and expert guidance."
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Community Support",
    desc: "Join a vibrant community of learners, mentors, and professionals."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-12">Our Features</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-lg shadow hover:shadow-xl transition bg-gray-50"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
