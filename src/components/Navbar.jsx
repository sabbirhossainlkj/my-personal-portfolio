"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Portfolio
          </span>
        </h1>

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

        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Hire Me
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5">

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`block text-lg transition ${
                pathname === item.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition"
          >
            Hire Me
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;