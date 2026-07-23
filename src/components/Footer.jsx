"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// সোশ্যাল মিডিয়া ডাটা অ্যারে (কোড ক্লিন রাখার জন্য)
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/sabbirhossainlkj",
    icon: <FaGithub />,
    iconColor: "text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sabbirhossain24",
    icon: <FaLinkedin />,
    iconColor: "text-blue-400",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sabbir.hossain.101851",
    icon: <FaFacebook />,
    iconColor: "text-blue-500",
  },
  {
    name: "Twitter",
    url: "https://x.com/SabbirH59155",
    icon: <FaTwitter />,
    iconColor: "text-cyan-400",
  },
];

const NAVIGATION_ITEMS = ["home", "about", "skills", "projects", "contact"];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] text-white overflow-hidden pt-20 pb-10 px-6 border-t border-white/5">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Column 1: Intro */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Sabbir <span className="text-blue-500">Hossain</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Full-Stack MERN Developer specializing in building high-performance 
              web applications, robust RESTful APIs, and responsive user experiences.
            </p>
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block px-4 py-1.5 text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full"
            >
              Open to Opportunities
            </motion.span>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-blue-400 mb-5 tracking-wide">
              Quick Navigation
            </h3>
            <div className="grid gap-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm md:text-base transition-colors duration-200 w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-40 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="capitalize transition-transform group-hover:translate-x-1 duration-200">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Socials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-blue-400 mb-5 tracking-wide">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <div className={`text-lg ${social.iconColor}`}>
                    {social.icon}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 border-t border-white/5 pt-6 text-center"
        >
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Sabbir Hossain</span>. 
            All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600 mt-1.5 tracking-wider uppercase">
            Designed & Engineered with MERN Stack Mindset ⚡
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;