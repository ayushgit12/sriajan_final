import React from "react";
import {
  Scroll,
  ScrollText,
  Mail,
  MapPin,
  Sword,
  Shield,
  Scroll as ScrollIcon,
} from "lucide-react";

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
        { name: "SRIJAN@iitism.ac.in", icon: <Mail className="w-4 h-4" /> },
        { name: "Dhanbad, India", icon: <MapPin className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <div>
      <footer className="bg-gradient-to-b from-stone-900 to-amber-950 text-amber-200 top-0">
        <div className="footer-container bg-gradient-to-b from-stone-900 to-amber-950 text-amber-200 relative overflow-hidden w-screen">
          <div className="camel absolute top-[-102px] left-0 animate-walk">
            <img
              src="https://media.tenor.com/PBC-LtbDN9IAAAAi/chariot-ride.gif"
              alt="Walking Camel"
              className="h-[120px] object-contain filter brightness-120 sepia-[0.4] contrast-125"
            />
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center group">
                <Scroll className="h-10 w-10 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="ml-2 text-2xl font-serif font-bold text-amber-400">
                  SRIJAN
                </span>
              </div>
              <p className="text-amber-300/80 font-serif italic">
                "Gloria virtutis umbra"
                <span className="block text-sm mt-1 text-amber-300/60">
                  (Glory is the shadow of virtue)
                </span>
              </p>
            </div>

            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-serif text-amber-400 border-b border-amber-400/20 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href="#"
                        className="group flex items-center space-x-2 text-amber-300/80 hover:text-amber-400 transition-colors duration-300"
                      >
                        <span className="transform group-hover:rotate-12 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-amber-400/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-amber-300/60 text-sm font-serif">
                © {currentYear} SRIJAN FESTIVAL ·
              </p>
              <div className="flex space-x-6 text-amber-300/60">
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
