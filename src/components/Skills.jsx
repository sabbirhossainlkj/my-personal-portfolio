"use client";

import { FaCode, FaServer, FaTools } from "react-icons/fa";

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
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {skills.map((group) => (
            <div
              key={group.title}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:scale-[1.05] transition duration-300"
            >

              <div className={`absolute inset-0 rounded-2xl opacity-30 blur-xl bg-gradient-to-r ${group.color}`}></div>

              <div className="relative bg-[#0b1220] rounded-2xl p-6 border border-white/10 backdrop-blur-xl">

                <div className="flex items-center gap-3 mb-6">

                  <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${group.color} text-white shadow-lg`}>
                    {group.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {group.title}
                  </h3>

                </div>

                <div className="space-y-5">

                  {group.items.map((skill) => (
                    <div key={skill.name}>

                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                        <div
                          className={`h-full bg-gradient-to-r ${group.color} rounded-full transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        ></div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;