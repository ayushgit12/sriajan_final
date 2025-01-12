import { Building2 } from "lucide-react";
import img from "/bg4.avif";
import { motion } from "framer-motion";

const sponsorContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sponsorCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sponsors = [
  {
    name: "Central Coalfields Limited",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703859538/ccl_civw5b.jpg",
    tier: "Platinum",
  },
  {
    name: "Adani",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703859374/adani_wmvuqc.png",
    tier: "Gold",
  },
  {
    name: "Coal India",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995308/bccl_w30lbh.jpg",
    tier: "Gold",
  },
  {
    name: "Digital Dynamics",
    image:
      "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&w=600&q=80",
    tier: "Silver",
  },
  {
    name: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=600&q=80",
    tier: "Silver",
  },
  {
    name: "Next Ventures",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=80",
    tier: "Silver",
  },
];

export default function Sponsorships() {
  return (
    <div
      className="min-h-screen pt-16 bg-[#f5e6d3]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 text-[#8B4513]" />
          </div>
          <h1
            className="text-3xl font-bold text-[#5C3317] font-serif sm:text-6xl mb-2"
            style={{
              fontFamily: "'MedievalSharp', serif",
              color: "#8B4513",
            }}
          >
            SPONSORSHIPS
          </h1>
          <p className="mt-4 text-xl text-[#8B4513] font-serif italic">
            Honoring Our Distinguished Supporters
          </p>
          <div className="mt-4 w-24 h-1 bg-[#8B4513] mx-auto rounded"></div>
        </div>

        {/* Platinum Tier */}
        <motion.div
          className="grid gap-8"
          variants={sponsorContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {sponsors
            .filter((sponsor) => sponsor.tier === "Platinum")
            .map((sponsor) => (
              <motion.div
                key={sponsor.name}
                className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 col-span-1 my-4 border-4 border-transparent animate-rotating-border platinum-border"
                variants={sponsorCardVariants}
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-serif text-white group-hover:text-[#f5e6d3]">
                    {sponsor.name}
                  </h3>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-medium border border-gray-400 group-hover:border-indigo-400 group-hover:bg-indigo-900/50 text-white group-hover:text-[#f5e6d3]">
                    {sponsor.tier}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Gold Tier */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={sponsorContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {sponsors
            .filter((sponsor) => sponsor.tier === "Gold")
            .map((sponsor) => (
              <motion.div
                key={sponsor.name}
                className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 border-4 border-transparent animate-rotating-border gold-border my-1"
                variants={sponsorCardVariants}
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-serif text-white group-hover:text-[#f5e6d3]">
                    {sponsor.name}
                  </h3>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-medium border border-yellow-400 group-hover:border-yellow-400 group-hover:bg-yellow-900/50 text-white group-hover:text-[#f5e6d3]">
                    {sponsor.tier}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Silver Tier */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sponsorContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {sponsors
            .filter((sponsor) => sponsor.tier === "Silver")
            .map((sponsor) => (
              <motion.div
                key={sponsor.name}
                className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 border-4 border-transparent animate-rotating-border silver-border my-1"
                variants={sponsorCardVariants}
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-serif text-white group-hover:text-[#f5e6d3]">
                    {sponsor.name}
                  </h3>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-medium border border-gray-400 group-hover:border-gray-400 group-hover:bg-gray-900/50 text-white group-hover:text-[#f5e6d3]">
                    {sponsor.tier}
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
