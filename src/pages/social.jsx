import React from "react";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaRocket,
  FaBoxOpen,
} from "react-icons/fa";

/* ---------------- ANIMATION ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

/* ---------------- MAIN COMPONENT ---------------- */

const Social = () => {
  const socials = [
    {
      name: "YouTube (Main Channel)",
      icon: <FaYoutube />,
      link: "https://youtube.com/@codewithsubbu1",
      desc: "Daily coding videos, full stack projects, interviews, AI & system design.",
      gradient: "from-red-500 to-red-700",
    },
    {
      name: "YouTube (Panda Syntax)",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@PandaSyntax",
      desc: "Short tutorials, coding tricks, dev tips & quick learning content.",
      gradient: "from-red-500 to-pink-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/panda_syntax",
      desc: "Reels, coding motivation & dev lifestyle.",
      gradient: "from-pink-500 via-purple-500 to-orange-500",
    },
    {
      name: "Discord Community",
      icon: <FaDiscord />,
      link: "https://discord.gg/QPyJExv4",
      desc: "Live discussions, doubt solving & coding help.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      name: "Telegram Channel",
      icon: <FaTelegram />,
      link: "https://t.me/boost/ongoledeveloper",
      desc: "Notes, PDFs, updates & resources.",
      gradient: "from-sky-500 to-cyan-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/subramanyamchoda",
      desc: "Career updates & networking.",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://facebook.com/share/18qBhojthQ",
      desc: "Community posts & updates.",
      gradient: "from-blue-500 to-indigo-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/",
      desc: "Projects & open-source code.",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      name: "Portfolio Website",
      icon: <FaGlobe />,
      link: "https://subramanyamchoda.vercel.app",
      desc: "My developer portfolio.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  /* ---------------- APPS ---------------- */

  const apps = [
    {
      name: "Panda Files App",
      icon: <FaRocket />,
      link: "https://pandafiles.vercel.app",
      desc: "File sharing platform for creators & developers.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  /* ---------------- PRODUCTS ---------------- */

  const products = [
    {
      name: "Coding Setup",
      icon: <FaBoxOpen />,
      link: "https://www.wishlink.com/chodasubramanyam/collection/1048993",
      desc: "My desk setup, gadgets & tools.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Learning Resources",
      icon: <FaBoxOpen />,
      link: "#",
      desc: "Notes, PDFs, templates (add link).",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-16">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Creator Hub 🚀
        </h1>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
          Social Media • Apps • Products
        </p>
      </motion.div>

      {/* SOCIAL */}
      <Section title="🌐 Social Media" data={socials} />

      {/* APPS */}
      <Section title="📱 My Apps" data={apps} />

      {/* PRODUCTS */}
      <Section title="🛠️ Products & Setup" data={products} />

    </div>
  );
};

/* ---------------- REUSABLE SECTION ---------------- */

const Section = ({ title, data }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mt-16"
  >
    <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
      {data.map((item, i) => (
        <motion.a
          key={i}
          variants={card}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
          }}
          className={`relative p-6 rounded-3xl text-white shadow-xl overflow-hidden bg-gradient-to-r ${item.gradient}`}
        >
          <div className="text-3xl mb-4">{item.icon}</div>

          <h2 className="text-xl font-bold">{item.name}</h2>

          <p className="mt-3 text-sm text-white/90">{item.desc}</p>

          <div className="mt-5 inline-block px-4 py-2 bg-white/20 rounded-xl text-sm backdrop-blur-md">
            Open →
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default Social;