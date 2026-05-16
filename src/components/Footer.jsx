"use client";
import { motion } from "framer-motion";
// import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
          <p className="text-gray-400">
            Empowering learners and professionals with modern resources and community support.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#features" className="hover:text-white transition">Features</a></li>
          <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </motion.ul>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex space-x-6"
        >
          <a href="https://www.facebook.com" className="hover:text-white">  <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-500" /></a>
          <a href="https://www.twitter.com" className="hover:text-white"> <FaTwitter className="w-6 h-6 cursor-pointer hover:text-sky-400" /></a>
          <a href="https://www.linkedin.com" className="hover:text-white"><FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-700" /></a>
          <a href="https://www.instagram.com" className="hover:text-white"> <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" /></a>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
