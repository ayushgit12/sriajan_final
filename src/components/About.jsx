import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scroll, Crown, Star } from "lucide-react";

const AboutPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const cardHover = {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.2)",
    },
    transition: { duration: 0.3 },
  };

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.div
        className="relative h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/80 to-slate-900" />

        <motion.div
          className="relative z-10 text-center px-4 transform -translate-y-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -64, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-8xl font-serif font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            SRIJAN
          </motion.h1>
          <motion.div
            className="w-40 h-1 mx-auto bg-amber-500/50 mb-8"
            whileHover={{
              width: "12rem",
              backgroundColor: "rgb(245, 158, 11)",
            }}
          />
          <motion.p
            className="text-2xl text-amber-200/80 italic"
            whileHover={{ scale: 1.1 }}
          >
            The Legacy of Excellence
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Institute Section */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              {...fadeInUp}
              {...cardHover}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-12 h-12 text-amber-400" />
              </motion.div>

              <motion.h2
                className="text-4xl font-serif font-bold text-center mb-12 text-amber-200"
                whileHover={{ scale: 1.05, color: "#fcd34d" }}
              >
                Institute Legacy
              </motion.h2>

              <motion.div
                className="prose prose-lg prose-invert max-w-none"
                whileHover={{ scale: 1.01 }}
              >
                {/* Content remains the same */}
                <p className="text-amber-100/80 leading-relaxed mb-6">
                  Established in 1926, the Indian Institute of Technology
                  (Indian School of Mines) Dhanbad stands as a prestigious
                  engineering and research institution in the heart of the Coal
                  Capital of India, Dhanbad. Approaching its centenary, IIT
                  (ISM) holds the esteemed Institute of National Importance and
                  has evolved from its initial focus on Earth Sciences and
                  Engineering to encompass 18 academic departments across
                  various technical disciplines.
                </p>
                <p className="text-amber-100/80 leading-relaxed">
                  Standing as the third oldest among IITs, IIT (ISM) has
                  experienced significant growth beyond its roots in Earth
                  Sciences. Notably, it achieved the 26th position in the QS
                  World University Rankings for Mining and Mineral Engineering
                  in 2022.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Festival Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-amber-900/10" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              {...fadeInUp}
              {...cardHover}
              className="group relative bg-black/30 backdrop-blur-xl rounded-2xl p-12 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-12 h-12 text-amber-400" />
              </motion.div>

              <motion.h2
                className="text-4xl font-serif font-bold text-center mb-12 text-amber-200"
                whileHover={{ scale: 1.05, color: "#fcd34d" }}
              >
                The Festival
              </motion.h2>

              <motion.div
                className="prose prose-lg prose-invert max-w-none"
                whileHover={{ scale: 1.01 }}
              >
                {/* Content remains the same */}
                <p className="text-amber-100/80 leading-relaxed mb-6">
                  SRIJAN, a Socio-Cultural Festival that has been captivating
                  audiences in Eastern India since 1977, serves as a dynamic
                  platform for budding talents. With over 30,000 annual
                  attendees from 200 colleges nationwide, it has become a
                  cornerstone of cultural excellence.
                </p>
                <p className="text-amber-100/80 leading-relaxed">
                  The festival, boasting a prize pool exceeding INR 7.5 lakhs,
                  provides participants with a unique opportunity to showcase
                  their creativity, personality, and talents, fostering
                  interaction and skill enhancement on a national scale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Convenor Section */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              {...fadeInUp}
              {...cardHover}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden"
            >
              <div className="relative z-10 p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <motion.div
                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/30"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src="/api/placeholder/400/400"
                      alt="Prof. Sanjoy Mandal"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="flex-1 text-center md:text-left"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.h3
                      className="text-3xl font-serif font-bold text-amber-200 mb-4"
                      whileHover={{ scale: 1.05, color: "#fcd34d" }}
                    >
                      Prof. Sanjoy Mandal
                    </motion.h3>
                    <p className="text-amber-300 mb-2">
                      Department of Electrical Engineering
                    </p>
                    <p className="text-lg text-amber-400 font-semibold mb-8">
                      Festival Convenor
                    </p>

                    <p className="text-amber-100/80 leading-relaxed">
                      "Identification of a country's civilization has always
                      been through the culture its people follow and promote. It
                      generates a sense of unity via common values, beliefs, and
                      customs and standards..."
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </div>
  );
};

export default AboutPage;
