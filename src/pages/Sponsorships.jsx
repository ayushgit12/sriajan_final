import { Building2 } from "lucide-react";
import bg44 from "/bg2.jpg";
import { motion } from "framer-motion";
import bg from "../assets/parch3.jpeg";
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
    name: "Central Coalfields",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/central_coalfields_dji3gq.jpg",
    tier: "Gold",
  },
  {
    name: "Adani",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/adani_fkjiw1.jpg",
    tier: "Gold",
  },
  {
    name: "BCCL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995308/bccl_w30lbh.jpg",
    tier: "Silver",
  },
  {
    name: "Jharkhand Tourism",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/jh_tourism_kshayx.jpg",
    tier: "Silver",
  },
  {
    name: "SBI",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/sbi_ord5zl.png",
    tier: "Silver",
  },
  {
    name: "SECL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/secl_r1vmoe.png",
    tier: "Bronze",
  },
  {
    name: "Essar Oil",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/essar_oil_xok7pz.png",
    tier: "Bronze",
  },
  {
    name: "Tata Steel",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/tata_steel_s8nw20.png",
    tier: "Gold",
  },
  {
    name: "ONGC",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/ongc_lcwi8k.png",
    tier: "Gold",
  },
  {
    name: "Coal India",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/coal_india_eucoix.png",
    tier: "Silver",
  },
  {
    name: "Skoda",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/skoda_p0wqmu.png",
    tier: "Silver",
  },
  {
    name: "Canara Bank",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/canara_sye86r.png",
    tier: "Bronze",
  },
  {
    name: "SAIL",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/sail_rzbrgs.png",
    tier: "Bronze",
  },
  {
    name: "Power Grid",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/powergrid_ysetpi.png",
    tier: "Silver",
  },
  {
    name: "MG Motors",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/mg_xuoimg.png",
    tier: "Bronze",
  },
  {
    name: "DeHaat",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/dehaat_io8otn.png",
    tier: "Bronze",
  },
  {
    name: "Park Lane",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/parklane_n7rljx.jpg",
    tier: "Silver",
  },
  {
    name: "Lazzy Frog",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/lazzy_frog_wjwudq.jpg",
    tier: "Silver",
  },
  {
    name: "Coal Capital",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/coal_capital_jf6juf.png",
    tier: "Bronze",
  },
  {
    name: "Eng Parcel",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/eng_parcel_zdfb7v.png",
    tier: "Silver",
  },
  {
    name: "Realme",
    image:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/realme_cgy4n5.png",
    tier: "Silver",
  },
];
export default function Sponsorships() {
  return (
    <div
      className="min-h-screen pt-16 bg-[#f5e6d3]"
      style={{
        backgroundImage: `url(https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg)`,
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
            className="text-3xl font-bold text-[#5C3317] sm:text-6xl mb-2"
            style={{ fontFamily: "'MedievalSharp', serif", color: "#8B4513" }}
          >
            PAST SPONSORS
          </h1>
          <p className="mt-4 text-xl text-[#8B4513] italic">
            Honoring Our Distinguished Supporters
          </p>
          <div className="mt-4 w-24 h-1 bg-[#8B4513] mx-auto rounded"></div>
        </div>

        {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => (
          <motion.div
            key={tier}
            className={`grid ${
              tier === "Platinum"
                ? "gap-8"
                : tier === "Gold"
                  ? "grid-cols-1 sm:grid-cols-2 gap-8"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            } mb-12`}
            variants={sponsorContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {sponsors
              .filter((sponsor) => sponsor.tier === tier)
              .map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  className={`group relative overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105 border-4 ${
                    tier === "Platinum"
                      ? "border-yellow-400"
                      : tier === "Gold"
                        ? "border-gold-400"
                        : tier === "Silver"
                          ? "border-gray-400"
                          : "border-bronze-400"
                  }`}
                  variants={sponsorCardVariants}
                >
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-64 object-cover transition-transform duration-500"
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
        ))}
      </div>
    </div>
  );
}
