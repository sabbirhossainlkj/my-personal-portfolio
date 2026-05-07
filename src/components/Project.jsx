"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "1",
    name: "online-learning-platform",
    image: "/image1.png",
    slug: "online-learning-platform",
  },
  {
    id: "2",
    name: "keen-keeper",
    image: "/image2.png",
    slug: "keen-keeper",
  },
  {
    id: "3",
    name: "digitools-platform",
    image: "/image3.png",
    slug: "digitools-platform",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          My <span className="text-blue-500">Projects</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-[1.03] transition duration-300"
            >

              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>

                <Link
                  href={`/project/${project.id}`}
                  className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;