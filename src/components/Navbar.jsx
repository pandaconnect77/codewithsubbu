import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Menu,
  X,
  Hand,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Social", path: "/social" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"></div>

              <img
                src="/subbu.png"
                alt="Code With Subbu"
                className="relative h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-white object-cover shadow-xl transition duration-500 group-hover:scale-110"
              />
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Code With Subbu
              </h1>

              <div className="hidden sm:flex items-center gap-2">
                <Sparkles size={12} className="text-yellow-500" />
                <p className="text-xs md:text-sm text-gray-500">
                  Learn • Build • Grow
                </p>
              </div>
            </div>

          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-lg font-semibold text-gray-700 hover:text-blue-600 transition-all after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Live */}
            <a
              href="https://www.youtube.com/watch?v=mTCT7CfVIQQ&list=PLczW4R8qkCop_Ijg8aTJt9TieJnFc8Mkt"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 border-2 border-red-500 bg-red-50 px-5 py-2 rounded-full hover:scale-105 transition"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute h-full w-full rounded-full bg-red-400 animate-ping"></span>
                <span className="relative h-3 w-3 rounded-full bg-red-500"></span>
              </span>

              <span className="font-bold text-red-600">
                LIVE
              </span>

              <Hand
                size={22}
                className="absolute top-5 left-[75%] -translate-x-1/2 animate-click"
              />
            </a>

            {/* CTA */}
            <Link
              to="/courses"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-white font-bold shadow-xl hover:scale-105 transition-all"
            >
              <span className="relative flex items-center gap-2">
                Explore Courses
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-6">

            <nav className="flex flex-col gap-5 pt-4">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-gray-700"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/courses"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-center"
              >
                Explore Courses
              </Link>

            </nav>

          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;