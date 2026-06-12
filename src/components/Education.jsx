"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    year: "2019 - 2022",
    title: "Diploma in Computer Science",
    institute: "Bogura Polytechnic Institute (BPI)",
    description:
      "Focused on core computer science fundamentals including programming, data structures, algorithms, database systems, and software development. Gained hands-on experience in building web applications and practical software projects.",
  },
  {
    year: "2018",
    title: "Secondary School Certificate (SSC)",
    institute: "Harbaid Darul Ulum Dakhil Madrasah",
    description:
      "Completed secondary education with a strong academic background in science and general studies, developing problem-solving skills and discipline for higher education.",
  },
];

const EducationSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.3,
      },
    }),
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: index * 0.3 + 0.1,
      },
    }),
  };

  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"
      ></motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20"
        >
          Educational <span className="text-blue-500">Qualification</span>
        </motion.h2>

        <div className="relative ml-4 space-y-12">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-0 top-2 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent origin-top"
          ></motion.div>

          {educationData.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dotVariants}
                className="absolute -left-[7px] top-2.5 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50 z-20"
              ></motion.div>

              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.02] hover:border-blue-500/30 transition duration-300 shadow-lg group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-2xl"></div>

                <span className="text-sm text-blue-400 font-medium">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-1">{item.institute}</p>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;