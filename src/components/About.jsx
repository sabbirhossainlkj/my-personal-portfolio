"use client";

import { motion } from "framer-motion";

// ডাটা অবজেক্ট তৈরি করা হলো কোডকে ক্লিন এবং মেইনটেনেবল রাখার জন্য
const JOURNEY_CARDS = [
  {
    title: "My Journey",
    textColor: "text-blue-400",
    gradientFrom: "from-blue-500/40",
    gradientTo: "to-cyan-400/40",
    glowBg: "bg-blue-500/20",
    description: "Started with pure curiosity about the web, which evolved into a passion for full-stack engineering. Over the years, I've mastered the MERN ecosystem to build robust, scalable web applications.",
  },
  {
    title: "Full-Stack Expertise",
    textColor: "text-purple-400",
    gradientFrom: "from-purple-500/40",
    gradientTo: "to-pink-500/40",
    glowBg: "bg-pink-500/20",
    description: "I specialize in architecting complete web solutions—from designing intuitive, interactive frontends with React & Next.js to building secure, high-performance RESTful APIs using Node.js, Express, and MongoDB.",
  },
  {
    title: "Engineering Mindset",
    textColor: "text-emerald-400",
    gradientFrom: "from-emerald-500/40",
    gradientTo: "to-teal-400/40",
    glowBg: "bg-emerald-500/20",
    description: "Beyond writing syntax, I focus on system performance optimization, state management, secure authentication (JWT/OAuth), and writing clean, reusable code that scales effortlessly.",
  },
];

const PROFILE_DETAILS = [
  ["Primary Role", "Full Stack Developer"],
  ["Core Stack", "MERN / Next.js"],
  ["Database", "MongoDB / PostgreSQL"],
  ["Architecture", "RESTful APIs / MVC"],
  ["DevOps/Tools", "Git, Docker, Postman"],
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const profileVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative text-white py-24 px-6 overflow-hidden bg-[#050816]"
    >
      {/* Background Ambient Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left Side: Journey & Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 space-y-6"
          >
            {JOURNEY_CARDS.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative p-[1px] rounded-2xl bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} hover:scale-[1.01] transition-all duration-300`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${card.glowBg} blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300`} />
                
                <div className="relative bg-[#0b1220]/90 p-6 rounded-2xl border border-white/5 backdrop-blur-xl">
                  <h3 className={`${card.textColor} font-bold mb-3 text-xl tracking-wide`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Sticky Profile Specs */}
          <div className="md:col-span-2 sticky top-28">
            <motion.div
              variants={profileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative group p-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition rounded-3xl" />
              
              <div className="relative bg-[#0b1220]/90 rounded-3xl p-8 border border-white/5 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8 tracking-wide">
                  Technical Profile
                </h3>

                <div className="space-y-4 text-gray-300">
                  {PROFILE_DETAILS.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center border-b border-white/5 pb-3 text-sm md:text-base"
                    >
                      <span className="text-gray-400 font-medium">{label}</span>
                      <span className="text-white font-semibold tracking-wide">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <span className="inline-block px-4 py-2 text-xs md:text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full shadow-inner animate-pulse">
                    Available for Projects
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