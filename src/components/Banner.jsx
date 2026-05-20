"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "../../public/porfile.png";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex items-center px-6 py-28"
    >
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium backdrop-blur-md">
             Available for MERN Stack Projects
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sabbir Hossain
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              MERN Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I build modern full-stack web applications using{" "}
            <span className="text-cyan-400 font-medium">
              MongoDB, Express.js, React & Next.js, Node.js
            </span>
            . I focus on responsive UI, scalable backend architecture,
            authentication systems and high-performance web experiences.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-3">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>

            <Link
              href="#projects"
              className="px-8 py-3 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-semibold"
            >
              View Projects
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 pt-6">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/sabbirhossainlkj/",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/sabbirhossain24",
              },
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/sabbir.hossain.101851",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/SabbirH59155",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-xl hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-gray-500 text-sm mb-4">
              Tech Stack I Work With
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>

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

            <div className="absolute bottom-5 -left-10 bg-white/10 border border-white/10 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-300">Experience</p>
              <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
            </div>

            <div className="absolute top-8 -right-10 bg-white/10 border border-white/10 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-300">Projects</p>
              <h3 className="text-2xl font-bold text-blue-400">20+</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;