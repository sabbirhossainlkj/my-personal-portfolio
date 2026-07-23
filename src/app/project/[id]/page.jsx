"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react"; 

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectDetailsPage = ({ params }) => {
  const { id } = use(params);
  const singleProject = projects.find((project) => project.id === id);

  if (!singleProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white text-3xl font-bold">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[160px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[160px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          className="rounded-[35px] p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl hover:border-white/20 transition-colors duration-300"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold uppercase tracking-wider">
            {singleProject.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {singleProject.projectName}
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl">
            {singleProject.briefDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <ActionLink href={singleProject.liveProjectLink} variant="primary">
              Live Project
            </ActionLink>

            {singleProject.githubRepositoryLink && (
              <ActionLink
                href={singleProject.githubRepositoryLink}
                variant="secondary"
              >
                💻 GitHub Repository
              </ActionLink>
            )}

            {singleProject.githubClientLink && (
              <ActionLink
                href={singleProject.githubClientLink}
                variant="secondary"
              >
                💻 Client Repository
              </ActionLink>
            )}

            {singleProject.githubServerLink && (
              <ActionLink
                href={singleProject.githubServerLink}
                variant="secondary"
              >
                ⚙️ Server Repository
              </ActionLink>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <InfoCard
            title="⚙️ Tech Stack"
            titleColor="text-blue-400"
            hoverBorder="hover:border-blue-500/30"
          >
            <div className="flex flex-wrap gap-2.5">
              {singleProject.mainTechnologyStack.map((tech, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={i}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </InfoCard>

          <InfoCard
            title="⚡ Challenges Faced"
            titleColor="text-red-400"
            hoverBorder="hover:border-red-500/30"
          >
            <ListItems
              items={singleProject.challengesFaced}
              bulletColor="text-red-500"
            />
          </InfoCard>

          <InfoCard
            title="🌱 Future Roadmap"
            titleColor="text-green-400"
            hoverBorder="hover:border-green-500/30"
          >
            <ListItems
              items={singleProject.futurePlans || []}
              bulletColor="text-green-500"
            />
          </InfoCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 md:p-10 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            Key Project Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {singleProject.features.map((feature, i) => (
              <motion.div
                whileHover={{ x: 5 }}
                key={i}
                className="flex gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-2xl items-center"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow"></div>
                <p className="text-gray-300 text-sm font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <span className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 tracking-wide inline-block">
            ✨ Built with Architecture & Modern Performance Standards
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const ActionLink = ({ href, children, variant }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    <Link
      href={href}
      target="_blank"
      className={`px-7 py-3.5 rounded-2xl font-semibold transition block text-center ${
        variant === "primary"
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20"
          : "bg-white/5 border border-white/10 hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  </motion.div>
);

const InfoCard = ({ title, titleColor, hoverBorder, children }) => (
  <motion.div
    variants={cardItemVariants}
    className={`p-6 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] transition duration-300 ${hoverBorder}`}
  >
    <h2
      className={`text-xl font-bold mb-5 flex items-center gap-2 ${titleColor}`}
    >
      {title}
    </h2>
    {children}
  </motion.div>
);

const ListItems = ({ items, bulletColor }) => {
  if (!items) return null;
  return (
    <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 items-start">
          <span className={`${bulletColor} mt-0.5`}>▹</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export const projects = [
  {
    id: "1",
    slug: "online-book-delivery-system",
    projectName: "BiblioDrop Platform",
    category: "Full-Stack Web Application",
    mainTechnologyStack: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth.js",
      "JSON Web Tokens (JWT)",
      "Node.js",
      "Express.js",
    ],
    briefDescription:
      "BiblioDrop is a modern full-stack book delivery management ecosystem. It streamlines how users discover books and track deliveries in real-time, while offering administrators unified control through secure role-based analytics dashboards.",
    liveProjectLink: "https://a10-bibliodrop-client.vercel.app",
    githubClientLink: "https://github.com/sabbirhossainlkj/bibliodrop_client",
    githubServerLink: "https://github.com/sabbirhossainlkj/bibliodrop_servar",
    features: [
      "Secure hybrid authentication using NextAuth.js (Google & Credentials) powered by JWT session strategy.",
      "Advanced product discovery featuring instant searching, dynamic filtering, and live availability tracking.",
      "Automated end-to-end checkout system with granular order placement and live delivery lifecycle status updates.",
      "Role-Based Access Control (RBAC) ensuring dedicated, secure dashboards for customers and store managers.",
      "High-performance RESTful API integrated with MongoDB indexing for ultra-fast query execution.",
    ],
    challengesFaced: [
      "Architecting seamless token synchronization and session persistence between NextAuth.js client and an external Express.js backend.",
      "Designing a scalable, denormalized MongoDB schema to handle complex relations between books, users, and delivery logs.",
      "Enforcing strict server-side middleware validation to protect sensitive administrative routes and prevent unauthorized API calls.",
      "Optimizing database aggregation pipelines and image rendering to significantly improve page loading speeds and Core Web Vitals.",
    ],
    futurePlans: [
      "Integrate automated SMS notifications (via Twilio) for instant real-time order and delivery milestones.",
      "Implement a comprehensive online payment infrastructure supporting SSLCommerz, Stripe, and bKash.",
      "Develop an AI-driven smart recommendation engine to suggest books based on user browsing history.",
      "Incorporate a built-in map tracking system using Mapbox or Google Maps API for interactive delivery tracking.",
    ],
    projectImage: "/projects/bibliodrop-platform.png",
  },
  {
    id: "2",
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
      "Express.js",
    ],
    briefDescription:
      "A premium full-stack ecosystem designed for developers, students, and entrepreneurs to pitch, vault, and collaboratively brainstorm creative concepts while systematically tracking them from raw ideas to production-ready projects.",
    liveProjectLink: "https://n-ten-sigma.vercel.app",
    githubClientLink:
      "https://github.com/sabbirhossainlkj/ideavault-client-",
      githubServerLink: "https://github.com/sabbirhossainlkj/ideavault-server",
    features: [
      "Secure User Authentication via NextAuth integrating JWT session strategy (Google & Credentials)",
      "Interactive & Responsive Ideation Dashboard with Analytics",
      "Comprehensive Idea Management (Create, Edit, Category Tagging, & Archive)",
      "Dynamic Concept Video Integration for Guided Project Pitching",
      "Robust Server-Side Protected Routes & Role-Based Access Control in Express API using JWT verification",
    ],
    challengesFaced: [
      "Architecting bulletproof session persistence using JWT strategy across Next.js hybrid Server/Client components and syncing tokens with an external Express.js backend.",
      "Designing a flexible MongoDB schema to efficiently query nested data structures for dynamic user dashboards.",
      "Eliminating UI layout shifts (CLS) on data-heavy analytics screens while maintaining deep mobile responsiveness.",
      "Optimizing API endpoints and image loading inside Next.js to hit high scores on core web vitals.",
    ],
    futurePlans: [
      "Integrate a secure payment gateway (Stripe/SSLCommerz) for premium premium consultation features.",
      "Deploy a real-time collaborative workspace using Socket.io or WebRTC for live mentoring sessions.",
      "Implement an automated Project Documentation & Roadmap generator using AI.",
      "Introduce a dedicated Peer-Review and Investor Matchmaking dashboard.",
    ],
    projectImage: "/projects/ideavault-platform.png",
  },
  {
    id: "3",
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
    liveProjectLink: "https://online-learning-platform-two-vert.vercel.app",
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
    id: "4",
    slug: "EcoSphere Marketplace",
    projectName: "EcoSphere Marketplace",
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
      "EcoSphere Marketplace is a next-generation eco-commerce platform designed to deliver a clean, responsive, and user-friendly shopping experience while showcasing modern full-stack web development practices.",
    liveProjectLink: "https://ecosphere-marketplace.vercel.app",
    githubRepositoryLink:
      "https://github.com/sabbirhossainlkj/ecosphere-marketplace",
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
    projectImage: "/projects/EcoSphere Marketplace.png",
  },
  {
    id: "5",
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
    liveProjectLink: "https://keen-keper.netlify.app",
    githubRepositoryLink: "https://github.com/sabbirhossainlkj/keen-keeper",
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
    id: "6",
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
    liveProjectLink: "https://a6-digitools-platfrom.netlify.app",
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

export default ProjectDetailsPage;
