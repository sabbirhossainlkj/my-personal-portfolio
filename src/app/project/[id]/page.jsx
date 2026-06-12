
import Link from "next/link";

export const projects = [
{
  id: "1",
  slug: "ideavault-platform",
  projectName: "IdeaVault Platform",
  category: "Full-Stack Web Application",
  mainTechnologyStack: [
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "NextAuth.js",
    "JSON Web Tokens (JWT)",
    "Node.js",
    "Express.js"
  ],
  briefDescription:
    "A premium full-stack ecosystem designed for developers, students, and entrepreneurs to pitch, vault, and collaboratively brainstorm creative concepts while systematically tracking them from raw ideas to production-ready projects.",
  liveProjectLink: "https://n-ten-sigma.vercel.app",
  githubRepositoryLink: "https://github.com/sabbirhossainlkj/ideavault-client-",
  
  features: [
    "Secure User Authentication via NextAuth integrating JWT session strategy (Google & Credentials)",
    "Interactive & Responsive Ideation Dashboard with Analytics",
    "Comprehensive Idea Management (Create, Edit, Category Tagging, & Archive)",
    "Dynamic Concept Video Integration for Guided Project Pitching",
    "Robust Server-Side Protected Routes & Role-Based Access Control in Express API using JWT verification"
  ],
  
  challengesFaced: [
    "Architecting bulletproof session persistence using JWT strategy across Next.js hybrid Server/Client components and syncing tokens with an external Express.js backend.",
    "Designing a flexible MongoDB schema to efficiently query nested data structures for dynamic user dashboards.",
    "Eliminating UI layout shifts (CLS) on data-heavy analytics screens while maintaining deep mobile responsiveness.",
    "Optimizing API endpoints and image loading inside Next.js to hit high scores on core web vitals."
  ],
  
  futurePlans: [
    "Integrate a secure payment gateway (Stripe/SSLCommerz) for premium premium consultation features.",
    "Deploy a real-time collaborative workspace using Socket.io or WebRTC for live mentoring sessions.",
    "Implement an automated Project Documentation & Roadmap generator using AI.",
    "Introduce a dedicated Peer-Review and Investor Matchmaking dashboard."
  ],
  
  projectImage: "/projects/ideavault-platform.png"
},
  {
    id: "2",

    slug: "online-learning-platform",

    projectName: "Online Learning Platform",

    category: "Full Stack Web Application",

    mainTechnologyStack: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Node.js",
      "Express.js",
    ],

    briefDescription:
      "An online learning platform where students can explore courses, watch lessons, and track their learning progress with a modern responsive UI.",

    liveProjectLink:
      "https://online-learning-platform-two-vert.vercel.app",

    githubRepositoryLink:
      "https://github.com/sabbirhossainlkj/Online-Learning-Platform",

    features: [
      "User Authentication System",
      "Responsive Dashboard",
      "Course Management",
      "Video Lesson Integration",
      "Protected Routes",
    ],

    challengesFaced: [
      "Implementing secure authentication",
      "Managing dynamic course data",
      "Building responsive dashboard UI",
      "Optimizing performance in Next.js",
    ],

    futurePlans: [
      "Add payment gateway integration",
      "Implement live classes",
      "Add student certificates",
      "Introduce instructor dashboard",
    ],

    projectImage: "/projects/online-learning-platform.png",
  },

  {
    id: "3",

    slug: "keen-keeper",

    projectName: "Keen Keeper",

    category: "Productivity Web App",

    mainTechnologyStack: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "React Router",
    ],

    briefDescription:
      "A productivity and task management application that helps users organize daily tasks and improve workflow efficiency.",

    liveProjectLink:
      "https://keen-keper.netlify.app",

    githubRepositoryLink:
      "https://github.com/sabbirhossainlkj/keen-keeper",

    features: [
      "Task Management",
      "Authentication System",
      "Realtime Data Update",
      "Responsive Design",
    ],

    challengesFaced: [
      "Handling realtime updates",
      "Managing Firebase authentication",
      "Creating clean responsive layouts",
    ],

    futurePlans: [
      "Add drag and drop functionality",
      "Implement team collaboration",
      "Add task reminders and notifications",
    ],

    projectImage: "/projects/keen-keeper.png",
  },

  {
    id: "4",

    slug: "digitools-platform",

    projectName: "DigiTools Platform",

    category: "Digital Tools Marketplace",

    mainTechnologyStack: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "React Router",
    ],

    briefDescription:
      "A platform that provides various digital tools and services with a clean user experience and responsive design.",

    liveProjectLink:
      "https://a6-digitools-platfrom.netlify.app",

    githubRepositoryLink:
      "https://github.com/sabbirhossainlkj/A6-DigiTools-Platform",

    features: [
      "Modern UI Design",
      "Responsive Layout",
      "Authentication System",
      "Dynamic Navigation",
    ],

    challengesFaced: [
      "Designing reusable components",
      "Maintaining responsive layouts",
      "Managing routing structure",
    ],

    futurePlans: [
      "Add premium digital tools",
      "Implement subscription system",
      "Improve dashboard analytics",
    ],

    projectImage: "/projects/digitools-platform.png",
  },
];
const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;

  const singleProject = projects.find(
    (project) => project.id === id
  );

  if (!singleProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white text-3xl font-bold">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-16 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        <div className="rounded-[35px] p-10 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl hover:scale-[1.01] transition">

          <h1 className="text-5xl font-black tracking-tight">
            {singleProject.projectName}
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            {singleProject.category}
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            {singleProject.briefDescription}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href={singleProject.liveProjectLink}
              target="_blank"
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold shadow-lg hover:scale-105 transition"
            >
               Live Project
            </Link>

            <Link
              href={singleProject.githubRepositoryLink}
              target="_blank"
              className="px-7 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              💻 GitHub
            </Link>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="group p-6 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition">

            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              ⚙️ Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {singleProject.mainTechnologyStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          <div className="group p-6 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition">

            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              ⚡ Challenges
            </h2>

            <ul className="space-y-3 text-gray-300">
              {singleProject.challengesFaced.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400">▹</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="group p-6 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition">

            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              🌱 Future Plans
            </h2>

            <ul className="space-y-3 text-gray-300">
              {singleProject.futurePlans.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-400">▹</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

        <div className="text-center mt-14">
          <span className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            ✨ Built with Modern Web Technologies
          </span>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetailsPage;