import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  ShoppingBag,
  Calendar,
  Info,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../public/logo.png";
import camel from "../../public/random.gif";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "NAVIGATION",
      links: [
        { name: "Home", icon: <Home className="w-4 h-4" />, to: "/" },
        { name: "Legion", icon: <Users className="w-4 h-4" />, to: "/legion" },
        {
          name: "Merchandise",
          icon: <ShoppingBag className="w-4 h-4" />,
          to: "/merchandise",
        },
        {
          name: "Events",
          icon: <Calendar className="w-4 h-4" />,
          to: "/events",
        },
        { name: "About", icon: <Info className="w-4 h-4" />, to: "/about" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        {
          name: "srijan@iitism.ac.in",
          icon: <Mail className="w-4 h-4" />,
          to: "mailto:srijan@iitism.ac.in",
        },
        {
          name: "+91 90241 24738",
          icon: <Phone className="w-4 h-4" />,
        },
        {
          name: "Indian Institute of Technology (ISM) Dhanbad",
          icon: <MapPin className="w-4 h-4" />,
          to: "https://www.iitism.ac.in/",
          external: true,
        },
      ],
    },
  ];

  return (
    <div>
      <footer className="bg-gradient-to-b from-stone-900 to-amber-950 text-amber-200 z-10 relative">
        {/* <div className="relative w-full">
          <div className="camel absolute top-[-102px] left-0 animate-walk z-50">
            <img
              src={camel}
              alt="Walking Camel"
              className="h-[120px] object-contain filter brightness-120 sepia-[0.4] contrast-125 z-50 relative"
            />
          </div>
        </div> */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="Srijan Logo"
                  className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] object-contain transition-transform duration-300 hover:rotate-12"
                />
              </Link>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3 sm:space-y-4">
                <h3 className="text-base md:text-lg font-serif text-amber-400 border-b border-amber-400/20 pb-2 text-center sm:text-left">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="flex justify-center sm:justify-start"
                    >
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center space-x-2 text-amber-300/80 hover:text-amber-400 transition-colors duration-300"
                        >
                          <span className="transform group-hover:rotate-12 transition-transform duration-300">
                            {link.icon}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                            {link.name}
                          </span>
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="group flex items-center space-x-2 text-amber-300/80 hover:text-amber-400 transition-colors duration-300"
                        >
                          <span className="transform group-hover:rotate-12 transition-transform duration-300">
                            {link.icon}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                            {link.name}
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 pt-6 border-t border-amber-400/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-amber-300/60 text-xs sm:text-sm font-serif text-center">
                © {currentYear} SRIJAN FESTIVAL
              </p>
              <div className="flex justify-center space-x-4 sm:space-x-6 text-amber-300/60 text-xs sm:text-sm">
                <Link
                  to="/terms"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
