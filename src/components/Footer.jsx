import React from "react";
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
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      icon: <FaYoutube />,
      name: "YouTube",
      url: "https://youtube.com/@codewithsubbu1",
      color: "text-red-500 border-red-200 hover:bg-red-50",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/panda_syntax",
      color: "text-pink-500 border-pink-200 hover:bg-pink-50",
    },
    {
      icon: <FaDiscord />,
      name: "Discord",
      url: "https://discord.gg/QPyJExv4",
      color: "text-indigo-500 border-indigo-200 hover:bg-indigo-50",
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      url: "https://t.me/boost/ongoledeveloper",
      color: "text-sky-500 border-sky-200 hover:bg-sky-50",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/subramanyamchoda",
      color: "text-blue-600 border-blue-200 hover:bg-blue-50",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "https://facebook.com/share/18qBhojthQ",
      color: "text-blue-700 border-blue-200 hover:bg-blue-50",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/",
      color: "text-gray-800 border-gray-300 hover:bg-gray-100",
    },
    {
      icon: <FaGlobe />,
      name: "Portfolio",
      url: "https://subramanyamchoda.vercel.app",
      color: "text-green-600 border-green-200 hover:bg-green-50",
    },
    {
      icon: <FaRocket />,
      name: "Panda Files",
      url: "https://pandafiles.vercel.app",
      color: "text-purple-600 border-purple-200 hover:bg-purple-50",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-indigo-50e border-t">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Creator Hub 🚀
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Learn coding, build projects, and grow your developer career.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full
              border transition-all duration-300 hover:scale-110
              shadow-sm ${item.color}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-14 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Creator Hub. Built with ❤️ for developers.
        </div>

      </div>
    </footer>
  );
};

export default Footer;