import React from "react";
import { motion } from "framer-motion";

import {
  BookOpen,
  Globe,
  Briefcase,
  Users,
  Award,
} from "lucide-react";

import {
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

/* ---------------- ANIMATION VARIANTS ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const About = () => {
  const technologies = [
    "React.js", "JavaScript", "TypeScript", "Node.js", "Express.js",
    "MongoDB", "SQL", "Python", "AI & ML", "Data Science", "AWS",
    "Docker", "DevOps", "Cyber Security", "System Design",
    "Full Stack Development", "SaaS Apps", "Interview Prep"
  ];

  const links = [
    {
      title: "Main YouTube",
      icon: <FaYoutube />,
      link: "https://youtube.com/@codewithsubbu1",
      color: "from-red-500 to-red-700",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/panda_syntax",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/QPyJExv4",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/boost/ongoledeveloper",
      color: "from-sky-500 to-cyan-600",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/subramanyamchoda",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Facebook",
      icon: <FaFacebook />,
      link: "https://facebook.com/share/18qBhojthQ",
      color: "from-blue-500 to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ---------------- HERO ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <img
            src="/subbu.png"
            alt="profile"
            className="mx-auto h-44 w-44 rounded-full border-4 border-white shadow-2xl"
          />

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Code With Subbu
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn Software Engineering, Full Stack Development,
            AI, Projects, Interview Prep & Real World Coding.
          </p>
        </motion.div>

        {/* ---------------- ABOUT ---------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 bg-white/70 backdrop-blur-xl border rounded-3xl p-10 shadow-xl"
        >
          <motion.h2 variants={item} className="text-4xl font-bold mb-6">
            About The Channel
          </motion.h2>

          <motion.p variants={item} className="text-gray-600 text-lg leading-relaxed">
            Practical coding, real-world projects, interview preparation,
            system design and software engineering explained simply.
          </motion.p>

          <motion.p variants={item} className="text-gray-600 text-lg mt-4">
            Daily live sessions, debugging, Q&A and full project building
            from scratch.
          </motion.p>
        </motion.div>

        {/* ---------------- LIVE SECTION ---------------- */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white rounded-3xl p-10 shadow-xl"
        >
          <h2 className="text-3xl font-bold">🚀 Daily Live Sessions</h2>

          <div className="grid md:grid-cols-2 gap-3 mt-6 text-lg">
            {[
              "Live Coding",
              "Q&A Sessions",
              "System Design",
              "Projects",
              "Interview Prep",
              "Career Guidance",
              "Debugging",
              "Tech Discussions",
            ].map((x) => (
              <motion.div
                key={x}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 p-3 rounded-xl"
              >
                ✔ {x}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- COURSES ---------------- */}
        <motion.div
          className="mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "React.js", "Node.js", "Python",
              "MongoDB", "SQL", "AI/ML",
              "Docker", "AWS", "DevOps"
            ].map((course) => (
              <motion.div
                key={course}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-6 shadow-lg border"
              >
                <BookOpen className="text-indigo-600 mb-3" />
                <h3 className="text-xl font-bold">{course}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- TECHNOLOGIES ---------------- */}
        <motion.div
          className="mt-20 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10">
            Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((t) => (
              <motion.span
                key={t}
                variants={item}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white shadow rounded-full text-sm font-medium"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ---------------- LINKS ---------------- */}
        <motion.div
          className="mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Connect
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((l) => (
              <motion.a
                key={l.title}
                href={l.link}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${l.color} text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg`}
              >
                {l.icon}
                <span className="font-semibold">{l.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ---------------- CTA ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Users size={60} className="mx-auto text-blue-600 mb-4" />

          <h2 className="text-4xl font-bold">
            Join Developer Community
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn, build, and grow as a software engineer with real projects,
            live coding and career guidance.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;