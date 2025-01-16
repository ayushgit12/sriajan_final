import { Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

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

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const SponsorCard = ({ sponsor, index, tier }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleTouchStart = () => {
    setIsFlipped(true);
  };

  const handleTouchEnd = () => {
    setIsFlipped(false);
  };
  const getMetallicBackground = (tier) => {
    switch (tier) {
      case "Gold":
        return "data:image/jpeg;base64,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";
      case "Silver":
        return "data:image/jpeg;base64,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";
      case "Bronze":
        return "https://polishedmetals.com/wp-content/uploads/2020/09/Bronze-shutterstock_1681180837.jpg";
      default:
        return "linear-gradient(45deg, #C0C0C0, #E8E8E8)";
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      class="card"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="perspective-1000  transform-origin:center"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="relative w-full h-[400px] preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "center center" }}
      >
        {/* Front of card */}
        <div className="absolute w-[300px] h-[100px] backface-hidden ">
          <div
            className={`h-full rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 border-2 ${getBorderColor(tier)}`}
          >
            <div className="relative h-[300px] overflow-hidden rounded-xl">
              <motion.img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-[300px] h-[300px] object-fit"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  {sponsor.name}
                </h3>
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20">
                  {sponsor.tier}
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-[300px] h-[300px] backface-hidden rotate-y-180 rounded-xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${getMetallicBackground(tier)})`,
            // backgroundImage: `url('https://t3.ftcdn.net/jpg/08/88/59/26/360_F_888592671_ttZvsKBo90wvhHYfCDiUalxBoE40de5C.jpg')`,
            backgroundSize: "200% 200%",
            animation: "shine 2s linear infinite",
          }}
        >
          <div className="h-full w-full flex items-center justify-center p-6 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
                {sponsor.name}
              </h3>
              <p className="text-white/90 font-medium">{tier} Sponsor</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getBorderColor = (tier) => {
  switch (tier) {
    case "Gold":
      return "border-amber-400";
    case "Silver":
      return "border-gray-400";
    case "Bronze":
      return "border-orange-700";
    default:
      return "border-gray-400";
  }
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(https://i.pinimg.com/474x/f3/87/95/f38795c1ed801dfb3645858eadd44187.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.9)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 pb-32">
        <AnimatePresence>
          {mounted && (
            <motion.div
              className="text-center mb-16 transform-origin:center"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit={{ scale: 0 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Building2 className="h-12 w-12 text-[#8B4513]" />
              </motion.div>

              <motion.h1
                className="text-3xl font-bold text-[#8B4513] sm:text-6xl mb-2"
                style={{ fontFamily: "'MedievalSharp', serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                PAST SPONSORS
              </motion.h1>

              <motion.p
                className="mt-4 text-xl text-[#8B4513] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Honoring Our Distinguished Supporters
              </motion.p>

              <motion.div
                className="mt-4 w-24 h-1 bg-[#8B4513] mx-auto rounded"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {["Gold", "Silver", "Bronze"].map((tier) => (
          <div key={tier} className="mb-16">
            <motion.h2
              className="text-2xl font-medieval text-[#8B4513] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tier} Sponsors
            </motion.h2>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${tier == "Gold" ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-8`}
            >
              {sponsors
                .filter((sponsor) => sponsor.tier === tier)
                .map((sponsor, index) => (
                  <SponsorCard
                    key={sponsor.name}
                    sponsor={sponsor}
                    index={index}
                    tier={tier}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
