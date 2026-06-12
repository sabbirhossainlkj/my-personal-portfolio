"use client";

import { motion } from "framer-motion"; 

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative text-white py-24 px-6 overflow-hidden bg-[#050816]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-500/20 blur-[140px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div
              variants={cardVariants}
              className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-cyan-400/40 hover:scale-[1.03] transition duration-300"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-[#0b1220] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-blue-400 font-bold mb-2 text-lg">
                   My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I started my journey with curiosity about how websites work.
                  From HTML, CSS to JavaScript and now React & Next.js, I have
                  grown into a modern frontend developer.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-pink-500/40 hover:scale-[1.03] transition duration-300"
            >
              <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-[#0b1220] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-pink-400 font-bold mb-2 text-lg">
                   What I Love
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I love building clean, interactive and user-friendly
                  interfaces. Smooth UI/UX design and performance optimization
                  excites me the most.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-emerald-500/40 to-teal-400/40 hover:scale-[1.03] transition duration-300"
            >
              <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-[#0b1220] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-emerald-400 font-bold mb-2 text-lg">
                   Outside Coding
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Outside programming, I enjoy playing cricket, listening to
                  music, and exploring new technologies and design trends.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="sticky top-24">
            <motion.div
              variants={profileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative group p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:scale-[1.03] transition duration-300"
            >
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition rounded-3xl"></div>
              <div className="relative bg-[#0b1220] rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
                  Developer Profile
                </h3>

                <div className="space-y-5 text-gray-300">
                  {[
                    ["Role", "Frontend Developer"],
                    ["Stack", "React / Next.js"],
                    ["Goal", "Full Stack Dev"],
                    ["Mindset", "Problem Solver"],
                    ["Hobby", "Cricket & Music"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 pb-2"
                    >
                      <span>{label}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <span className="inline-block px-4 py-2 text-sm bg-white/10 border border-white/10 text-blue-300 rounded-full">
                    Always Learning
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;