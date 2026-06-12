"use client";

import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion"; 

const skills = [
  {
    title: "Frontend",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    color: "from-emerald-500 to-teal-400",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full -top-40 -left-40"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -bottom-40 -right-40"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:scale-[1.03] transition duration-300"
            >
              {/* Card Outer Glow effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl bg-gradient-to-r ${group.color} transition duration-500`}></div>

              <div className="relative bg-[#0b1220] rounded-2xl p-6 border border-white/10 backdrop-blur-xl h-full">
                
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${group.color} text-white shadow-lg`}>
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{group.title}</h3>
                </div>

                <div className="space-y-5">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${group.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                        ></motion.div>
                      </div>

                    </div>
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