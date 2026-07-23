"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "../../public/porfile.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

// সোশ্যাল মিডিয়া ডাটা
const SOCIAL_LINKS = [
  { icon: <FaGithub />, link: "https://github.com/sabbirhossainlkj/" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sabbirhossain24" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/sabbir.hossain.101851" },
  { icon: <FaTwitter />, link: "https://x.com/SabbirH59155" },
];

// টেক স্ট্যাক ডাটা
const TECH_STACK = ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Node.js", "MongoDB", "Express.js"];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex items-center px-6 py-28"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Column: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-7 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="space-y-3">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sabbir Hossain
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-3xl font-bold text-gray-300 tracking-wide"
            >
              MERN Stack Developer
            </motion.h2>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            I build modern full-stack web applications using{" "}
            <span className="text-cyan-400 font-medium">
              MongoDB, Express.js, React & Next.js, Node.js
            </span>
            . I focus on responsive UI, scalable backend architecture, robust authentication systems, and high-performance web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <a
              href="https://drive.google.com/file/d/1cfnGw0ytnJ73VkuNsjCqLysHdHD_rem4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/10 block cursor-pointer"
            >
              Download Resume
            </a>

            <Link
              href="#projects"
              className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black active:scale-95 transition-all duration-200 font-semibold"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-lg text-gray-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div variants={fadeInUp} className="pt-6">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
              Tech Stack I Work With
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {TECH_STACK.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-gray-300 text-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Soft Ambient Pulse Glow behind Image */}
            <motion.div 
              animate={{ opacity: [0.15, 0.25, 0.15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl pointer-events-none" 
            />

            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full p-[4px] bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050816]">
                <Image
                  src={profile}
                  alt="Sabbir Hossain"
                  fill
                  priority
                  sizes="(max-w-7xl) 100vw, 440px"
                  className="object-cover object-[60%_30%] hover:scale-[1.03] transition duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;