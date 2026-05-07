"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] text-white overflow-hidden pt-20 pb-10 px-6">

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid md:grid-cols-3 gap-12">

          <div className="space-y-4">

            <h2 className="text-3xl font-extrabold">
              Sabbir <span className="text-blue-500">Hossain</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about building modern,
              interactive and high-performance web experiences.
            </p>

            <span className="inline-block px-4 py-2 text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full">
               Available for Freelance
            </span>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Quick Navigation
            </h3>

            <div className="grid gap-3">

              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 opacity-50 group-hover:opacity-100"></span>
                  <span className="capitalize">{item}</span>
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <a
                href="https://github.com/sabbirhossainlkj"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:bg-blue-500/10 transition"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sabbirhossain24"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:bg-blue-500/10 transition"
              >
                <FaLinkedin className="text-xl text-blue-400" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/sabbir.hossain.101851"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:bg-blue-500/10 transition"
              >
                <FaFacebook className="text-xl text-blue-500" />
                <span className="text-sm">Facebook</span>
              </a>

              <a
                href="https://x.com/SabbirH59155"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:bg-blue-500/10 transition"
              >
                <FaTwitter className="text-xl text-cyan-400" />
                <span className="text-sm">Twitter</span>
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Sabbir Hossain</span>.
            All rights reserved.
          </p>

          <p className="text-xs text-gray-600 mt-2">
            Built with Next.js & Tailwind CSS ⚡
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;