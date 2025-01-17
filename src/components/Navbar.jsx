import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Menu,
  X,
  Sword,
  Flame,
  Users,
  Crown,
  HandCoinsIcon,
  BookOpenText,
} from "lucide-react";
import logo from "/logo.png"; // Adjust the path if the file is not in the public folder
import sound from "/sound1.mp3";
import camel from "../../public/random.gif";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoverEffect, setHoverEffect] = useState("");

  const audioRef = useRef(null);

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
      name: "Sponsorships",
      icon: <HandCoinsIcon className="w-6 h-6" />,
      description: "Empowered and amplified by the brands",
      route: "/sponsorships",
    },
    {
      name: "Legion",
      icon: <Users className="w-5 h-5" />,
      description: "Community behind this",
      route: "/legion",
    },
    {
      name: "Merchandise",
      icon: <Flame className="w-5 h-5" />,
      description: "Pillars of the festival",
      route: "/merchandise",
    },
    {
      name: "About",
      icon: <BookOpenText className="w-5 h-5" />,
      description: "De Novis",
      route: "/about",
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
      <div className="absolute  w-36">
        <div className="camel relative   left-0 animate-walk z-0">
          <img
            src={camel}
            alt="Walking Camel"
            className="h-[100px]  w-fit object-contain filter brightness-120 sepia-[0.4] contrast-125 z-50 relative "
            draggable="false"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 w-fit flex items-center group cursor-pointer"
              onMouseEnter={() => setHoverEffect(generateRandomGlowColor())}
              onMouseLeave={() => setHoverEffect("")}
            >
              <img
                onClick={() => (window.location.href = "/")}
                src={logo}
                alt="Srijan Logo"
                className={`h-24 w-32 object-contain transition-all duration-500 ${
                  hoverEffect
                    ? `shadow-[0_0_10px_theme(colors.${hoverEffect}.400)]`
                    : "shadow-amber-300"
                }`}
              />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(({ name, icon, description, route }) => (
                <Link
                  key={name}
                  to={route}
                  onClick={() => setActiveSection(name.toLowerCase())}
                  className={`flex items-center space-x-2 px-4 py-2 text-lg font-serif tracking-wider transition-all duration-300 ${
                    activeSection === name.toLowerCase()
                      ? "text-amber-400"
                      : "text-amber-200 hover:text-amber-400"
                  }`}
                >
                  <span className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {icon}
                  </span>
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-md text-amber-300 hover:text-amber-400 focus:outline-none transform transition-all duration-300 hover:scale-110 hover:rotate-180"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6 z-50" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-amber-900 to-red-900 border-t border-amber-400/20">
            {navItems.map(({ name, route }) => (
              <Link
                key={name}
                to={route}
                onClick={() => {
                  setActiveSection(name.toLowerCase());
                  setIsOpen(false);
                }}
                className="block px-4 py-3 text-base font-serif text-amber-200 hover:text-amber-400"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <audio ref={audioRef} src={sound} loop />
    </nav>
  );
};

export default Navbar;
