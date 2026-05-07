"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "../../public/porfile.png";

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] text-white px-6 py-30"
    >
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left space-y-7">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-blue-300">
            Available for Freelance Work
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Sabbir <span className="text-blue-500">Hossain</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I craft modern, responsive and high-performance web applications
            using React, Next.js and Tailwind CSS. I focus on clean UI, smooth
            UX and scalable frontend architecture.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition shadow-lg"
            >
              Download Resume
            </a>

            <Link
              href="#contact"
              className="px-7 py-3 rounded-2xl font-semibold border border-white/20 hover:bg-white hover:text-black transition hover:scale-105"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 text-3xl pt-4">
            <a
              href="https://github.com/sabbirhossainlkj/"
              className="hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sabbirhossain24"
              className="hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/sabbir.hossain.101851"
              className="hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://x.com/SabbirH59155"
              className="hover:text-blue-500 hover:-translate-y-1 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-3xl opacity-40 animate-pulse"></div>

            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full p-[5px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-700">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050816]">
                <Image
                  src={profile}
                  alt="Sabbir Hossain"
                  fill
                  priority
                  className="object-cover object-[60%_30%] hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
