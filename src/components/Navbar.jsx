"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <motion.h1 
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Portfolio
          </span>
        </motion.h1>

        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                href={item.path}
                className={`transition duration-300 hover:text-white ${
                  pathname === item.path ? "text-white" : ""
                }`}
              >
                {item.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                  pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-600/20 block"
          >
            Hire Me
          </Link>
        </motion.div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none z-50 relative p-1"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? "✕" : "☰"}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5 overflow-hidden"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-lg transition-colors font-medium ${
                    pathname === item.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-lg shadow-blue-600/10"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;