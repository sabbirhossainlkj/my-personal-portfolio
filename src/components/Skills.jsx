"use client";

import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

// MERN Stack-এর জন্য ডাটা অবজেক্ট রি-ডিজাইন করা হলো
const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-400",
    glowBg: "bg-blue-500/10",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3 Architecture",
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaServer />,
    color: "from-purple-500 to-pink-500",
    glowBg: "bg-pink-500/10",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB / Mongoose",
      "RESTful API Design",
      "JWT & OAuth Authentication",
      "Database Schema Design",],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools />,
    color: "from-emerald-500 to-teal-400",
    glowBg: "bg-emerald-500/10",
    skills: [
      "Git & GitHub Workflow",
      "netlify / Vercel Deployment",
      "Vercel / Render Deployment",
      "Figma UI/UX Translation",
    ],
  },
];

// Framer Motion Variants Optimizer
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full -top-40 -left-40 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full -bottom-40 -right-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:scale-[1.01] transition-all duration-300"
            >
              {/* Outer Glow on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl bg-gradient-to-r ${category.color} transition duration-500`}
              />

              <div className="relative bg-[#0b1220]/90 rounded-2xl p-6 border border-white/5 backdrop-blur-xl h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`text-xl p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-wide">{category.title}</h3>
                </div>

                {/* Skills Container (Chips/Badges Component style) */}
                <div className="flex flex-wrap gap-2.5 mt-2 flex-grow">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 text-xs md:text-sm bg-white/[0.03] border border-white/5 text-gray-300 rounded-lg group-hover:border-white/10 transition-colors duration-200 font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;