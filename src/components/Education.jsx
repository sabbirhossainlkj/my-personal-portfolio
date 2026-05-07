"use client";

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
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Educational <span className="text-blue-500">Qualification</span>
        </h2>

        <div className="relative border-l-2 border-blue-500/40 ml-4 space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.02] transition duration-300 shadow-lg">
                <span className="text-sm text-blue-400 font-medium">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-2">{item.title}</h3>

                <p className="text-gray-400 mt-1">{item.institute}</p>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
