"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(""); // track active link

  const links = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick=()=>{
    window.location.assign('/')
    // window.location.replace('/')
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer py-2 px-3 rounded-md hover:bg-indigo-100" onClick={handleClick}>MyBrand</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-md transition ${
                  active === link.name
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-100 hover:text-indigo-600"
                }`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-700"
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block px-4 py-3 rounded-lg transition ${
                  active === link.name
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-100 hover:text-indigo-600"
                }`}
                onClick={() => {
                  setActive(link.name);
                  setOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
