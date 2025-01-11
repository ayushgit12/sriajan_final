import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Menu,
  X,
  Scroll,
  Sword,
  Shield,
  Flame,
  Users,
  Crown,
} from "lucide-react";
import logo from "/logo.png"; // Adjust the path if the file is not in the public folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoverEffect, setHoverEffect] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      name: "Home",
      icon: <Crown className="w-5 h-5" />,
      description: "Return to glory",
      route: "/",
    },
    {
      name: "Events",
      icon: <Sword className="w-5 h-5" />,
      description: "Epic battles await",
      route: "/events",
    },
    {
      name: "Legion",
      icon: <Users className="w-5 h-5" />,
      description: "Join the ranks",
      route: "/legion",
    },
    {
      name: "Patrons",
      icon: <Flame className="w-5 h-5" />,
      description: "Pillars of the festival",
      route: "/patrons",
    },
    {
      name: "Registrum",
      icon: <Shield className="w-5 h-5" />,
      description: "Enter the colosseum",
      route: "/register", // Add the correct route for registration
    },
  ];

  const generateRandomGlowColor = () => {
    const colors = ["amber", "red", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-500 z-50 ${
        !isVisible ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-gradient-to-r from-amber-950 to-red-950 shadow-lg shadow-amber-900/20"
          : "bg-gradient-to-r from-amber-800 to-red-900"
      }`}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="  flex-shrink-0  flex items-center group cursor-pointer"
              onMouseEnter={() => setHoverEffect(generateRandomGlowColor())}
              onMouseLeave={() => setHoverEffect("")}
            >
              <img
              onClick={()=>window.location.href="/"}
                src={logo} // Adjust the path if the file is not in the public folder
                alt="Srijan Logo"
                className={`h-36 w-40  object-contain transition-all duration-500 ${
                  hoverEffect
                    ? `shadow-[0_0_10px_theme(colors.${hoverEffect}.400)]`
                    : "shadow-amber-300"
                }`}
              />
              {/* <div className="ml-3 font-serif">
                <span
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    hoverEffect ? `text-${hoverEffect}-400` : "text-amber-300"
                  } group-hover:text-amber-400`}
                >
                  SRIJAN
                </span>
                <span className="block text-xs text-amber-400/80 group-hover:text-amber-300">
                  GLORIA · VIRTUS · HONOR
                </span>
              </div> */}
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map(({ name, icon, description, route }) => (
                  <div key={name} className="group relative">
                    <Link
                      to={route} // Use Link instead of anchor <a> for routing
                      onClick={() => setActiveSection(name.toLowerCase())}
                      className={`flex items-center space-x-2 px-4 py-2 text-lg font-serif tracking-wider transition-all duration-300 relative
                        ${activeSection === name.toLowerCase() ? "text-amber-400" : "text-amber-200 hover:text-amber-400"}`}
                    >
                      <span className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        {icon}
                      </span>
                      <span>{name}</span>

                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-red-400 transition-all duration-300
                        ${activeSection === name.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </Link>

                    <div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-amber-900/90 text-amber-200 
                      text-sm rounded opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap
                      group-hover:opacity-100 before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 
                      before:border-4 before:border-transparent before:border-b-amber-900/90"
                    >
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-md text-amber-300 
                  hover:text-amber-400 focus:outline-none transform transition-all duration-300 
                  hover:scale-110 hover:rotate-180"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span
                  className="absolute -inset-0.5 bg-amber-400/20 rounded-lg blur opacity-0 
                  transition-opacity duration-300 group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ${
            isOpen
              ? "max-h-[32rem] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-amber-900 to-red-900 border-t border-amber-400/20">
            {navItems.map(({ name, icon, description, route }) => (
              <Link
                key={name}
                to={route} // Use Link here as well for routing
                onClick={() => {
                  setActiveSection(name.toLowerCase());
                  setIsOpen(false);
                }}
                className={`flex flex-col px-4 py-3 text-base font-serif tracking-wide transition-all duration-300
                  ${
                    activeSection === name.toLowerCase()
                      ? "text-amber-400 border-l-2 border-amber-400 bg-amber-900/20"
                      : "text-amber-200 hover:text-amber-400 border-l-2 border-transparent hover:border-amber-400"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="transform transition-transform duration-300 group-hover:rotate-12">
                    {icon}
                  </span>
                  <span>{name}</span>
                </div>
                <span className="text-xs text-amber-400/60 mt-1 ml-8">
                  {description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;