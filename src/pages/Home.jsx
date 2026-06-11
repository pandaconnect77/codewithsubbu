import React from "react";
import { motion } from "framer-motion";

import {
  MonitorSmartphone,
  Code2,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import {
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  const items = [
    "🚀 Daily Live Coding Sessions",
    "💻 React.js",
    "⚡ JavaScript",
    "🎯 TypeScript",
    "🟢 Node.js",
    "🚀 Express.js",
    "🍃 MongoDB",
    "🗄️ SQL",
    "🐍 Python",
    "🤖 AI & Machine Learning",
    "📊 Data Science",
    "☁️ AWS",
    "🐳 Docker",
    "⚙️ DevOps",
    "🔐 Cyber Security",
    "🏗️ System Design",
    "🌐 Full Stack Development",
    "🚀 SaaS Applications",
    "📱 Real World Projects",
    "🎤 Interview Preparation",
    "💼 Career Guidance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-6">

        {/* LIVE TICKER */}

        <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-pink-600 to-red-600 shadow-2xl">

          <div className="flex items-center">

            <div className="shrink-0 bg-black/20 px-5 py-4 border-r border-white/20 flex items-center gap-3">

              <span className="relative flex h-3 w-3">
                <span className="absolute h-full w-full animate-ping rounded-full bg-white"></span>
                <span className="relative h-3 w-3 rounded-full bg-white"></span>
              </span>

              <span className="font-bold text-white">
                LIVE NOW
              </span>

            </div>

            <div className="overflow-hidden flex-1">

              <div className="animate-ticker flex w-max py-3">

                {[...items, ...items].map((item, index) => (
                  <div
                    key={index}
                    className="mx-2 whitespace-nowrap rounded-full bg-white/10 px-5 py-2 text-white backdrop-blur"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* HERO */}

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* LEFT */}

          <div className="flex-1">

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="text-blue-700">
                Code With Subbu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl"
            >
              Learn modern technologies through daily live coding,
              real-world projects, interview preparation,
              AI development and complete full stack courses.
            </motion.p>

            {/* CARDS */}

            <div className="mt-8 space-y-5">

              <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">

                <div className="flex items-center gap-3 mb-3">
                  <MonitorSmartphone
                    className="text-green-600"
                    size={28}
                  />

                  <h2 className="text-xl md:text-2xl font-bold">
                    Courses & Live Coding
                  </h2>
                </div>

                <p className="text-gray-500">
                  React, Node.js, Python, AI, ML,
                  Data Science, DevOps, Cyber Security.
                </p>

              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">

                <div className="flex items-center gap-3 mb-3">
                  <Code2
                    className="text-blue-600"
                    size={28}
                  />

                  <h2 className="text-xl md:text-2xl font-bold">
                    Real World Projects
                  </h2>
                </div>

                <p className="text-gray-500">
                  SaaS Apps, AI Tools, Dashboards,
                  E-Commerce Platforms, APIs and Full Stack Apps.
                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/courses"
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <BookOpen size={22} />
                Explore Courses

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="https://youtube.com/@codewithsubbu1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <FaYoutube size={24} />
                YouTube
              </a>

              <a
                href="https://instagram.com/panda_syntax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <FaInstagram size={24} />
                Instagram
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="flex-1 flex justify-center">

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl bg-blue-400/20 rounded-full"></div>

              <img
                src="/subbu.png"
                alt="Code With Subbu"
                className="relative w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-[35px] shadow-2xl"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;