import React from "react";
import { ScrollText, Mail, MapPin, Sword, Shield } from "lucide-react";
import logo from "../../public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "EXPLORE",
      links: [
        { name: "Gladiator Arena", icon: <Sword className="w-4 h-4" /> },
        { name: "Legion Training", icon: <Shield className="w-4 h-4" /> },
        { name: "Ancient Scrolls", icon: <ScrollText className="w-4 h-4" /> },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { name: "srijan@iitism.ac.in", icon: <Mail className="w-4 h-4" /> },
        {
          name: "Indian Institute of Technology (ISM) Dhanbad",
          icon: <MapPin className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div>
      <footer className="bg-gradient-to-b from-stone-900 to-amber-950 text-amber-200">
        <div className="relative overflow-hidden w-full">
          <div className="camel absolute top-[-102px] left-0 animate-walk">
            <img
              src="https://media.tenor.com/PBC-LtbDN9IAAAAi/chariot-ride.gif"
              alt="Walking Camel"
              className="h-[120px] object-contain filter brightness-120 sepia-[0.4] contrast-125"
            />
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
              <img
                src={logo}
                alt="Srijan Logo"
                className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] object-contain transition-transform duration-300 group-hover:rotate-12"
              />
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
                      <a
                        href="#"
                        className="group flex items-center space-x-2 text-amber-300/80 hover:text-amber-400 transition-colors duration-300"
                      >
                        <span className="transform group-hover:rotate-12 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                          {link.name}
                        </span>
                      </a>
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
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
