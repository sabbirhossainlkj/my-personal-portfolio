"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "1",
    name: "BiblioDrop",
    image: "/image5.png",
    slug: "Online Book Delivery Management System",
  },
  {
    id: "2",
    name: "IdeaVault",
    image: "/image.png",
    slug: "online-learning-platform",
  },
  {
    id: "3",
    name: "Online Learning Platform",
    image: "/image1.png",
    slug: "online-learning-platform",
  },
  {
    id: "4",
    name: "EcoSphere Marketplace",
    image: "/image8.png",
    slug: "ecosphere-marketplace",
  },
  {
    id: "5",
    name: "Keen Keeper",
    image: "/image2.png",
    slug: "keen-keeper",
  },
  {
    id: "6",
    name: "Digitools Platform",
    image: "/image3.png",
    slug: "digitools-platform",
  },
];

const ProjectsSection = () => {
  // প্রজেক্ট শো করার স্টেট ম্যানেজমেন্ট
  const [showAll, setShowAll] = useState(false);

  // শুরুতে ৩টি প্রজেক্ট দেখাবে, ক্লিক করলে সবগুলো দেখাবে
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        {/* Project Grid Layout */}
        <motion.div
          layout // গ্রিডের সাইজ বা পজিশন চেঞ্জ হলে স্মুথ ট্রানজিশন হবে
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-[1.02] hover:border-blue-500/30 transition duration-300 shadow-xl relative flex flex-col h-full"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition duration-300">
                    {project.name}
                  </h3>

                  <div className="pt-2">
                    <Link
                      href={`/project/${project.id}`}
                      className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-600/20"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic See More / See Less Button */}
        {projects.length > 3 && (
          <motion.div 
            layout 
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full font-semibold text-sm tracking-wide shadow-xl shadow-blue-500/10 active:scale-95 transition duration-200"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;