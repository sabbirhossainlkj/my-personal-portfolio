"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion"; 
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-[#050816] text-white overflow-hidden pt-20 pb-10 px-6">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-12">
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-extrabold">
              Sabbir <span className="text-blue-500">Hossain</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about building modern,
              interactive and high-performance web experiences.
            </p>
            <motion.span 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block px-4 py-2 text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full"
            >
               Available for Freelance
            </motion.span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Quick Navigation
            </h3>
            <div className="grid gap-3">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition w-fit"
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-blue-500 opacity-50 group-hover:opacity-100"
                    whileHover={{ scale: 1.3 }}
                  ></motion.span>
                  <span className="capitalize transition-transform group-hover:translate-x-1 duration-200">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-blue-400 mb-5">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/sabbirhossainlkj"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl transition duration-200"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sabbirhossain24"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl transition duration-200"
              >
                <FaLinkedin className="text-xl text-blue-400" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/sabbir.hossain.101851"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl transition duration-200"
              >
                <FaFacebook className="text-xl text-blue-500" />
                <span className="text-sm">Facebook</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/SabbirH59155"
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl transition duration-200"
              >
                <FaTwitter className="text-xl text-cyan-400" />
                <span className="text-sm">Twitter</span>
              </motion.a>

            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 border-t border-white/10 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Sabbir Hossain</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with Next.js & Tailwind CSS ⚡
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;