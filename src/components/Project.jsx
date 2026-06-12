"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 

const projects = [
  {
    id: "1",
    name: "IdeaVault",
    image: "/image.png",
    slug: "online-learning-platform",
  },
  {
    id: "2",
    name: "Online Learning Platform",
    image: "/image1.png",
    slug: "online-learning-platform",
  },
  {
    id: "3",
    name: "Keen Keeper",
    image: "/image2.png",
    slug: "keen-keeper",
  },
  {
    id: "4",
    name: "Digitools Platform",
    image: "/image3.png",
    slug: "digitools-platform",
  },
];

const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-[1.03] hover:border-blue-500/30 transition duration-300 shadow-xl relative"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition duration-300">
                  {project.name}
                </h3>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/project/${project.id}`}
                    className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-600/20"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;