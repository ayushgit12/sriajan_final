import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import bgev from "/bg2.png";

const cardValues = [
  "music",
  "dance",
  "cinema",
  "comedy",
  "finearts",
  "culinary",
  "fashion",
  "drama",
  "literary",
  "quiz",
];

export default function Deck() {
  const [cards, setCards] = useState([]);
  const [isDealt, setIsDealt] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    columns: 3,
  });

  // Initialize cards
  useEffect(() => {
    setCards(cardValues.sort(() => Math.random() - 0.5));
  }, []);

  // Calculate columns based on screen width
  const calculateColumns = useCallback((width) => {
    if (width < 640) return 1; // sm
    if (width < 1024) return 2; // md
    if (width < 1536) return 3; // lg
    return 4; // xl
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDimensions({
        width,
        columns: calculateColumns(width),
      });
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateColumns]);

  const getGridPosition = useCallback(
    (index) => {
      const CARD_WIDTH = 300;
      const CARD_HEIGHT = 420;
      const HORIZONTAL_GAP = CARD_WIDTH * 0.2;
      const VERTICAL_GAP = CARD_HEIGHT * 0.2;

      const col = index % dimensions.columns;
      const row = Math.floor(index / dimensions.columns);

      const totalWidth =
        dimensions.columns * (CARD_WIDTH + HORIZONTAL_GAP) - HORIZONTAL_GAP;
      const leftOffset = (dimensions.width - totalWidth) / 2;

      return {
        x: leftOffset + col * (CARD_WIDTH + HORIZONTAL_GAP),
        y: row * (CARD_HEIGHT + VERTICAL_GAP),
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      };
    },
    [dimensions]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDealt(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const totalRows = Math.ceil(cardValues.length / dimensions.columns);
  const totalHeight = totalRows * (420 + 420 * 0.2) - 420 * 0.2 + 200; //check this

  return (
    <div
      style={{
        height: `${totalHeight}px`,
        backgroundImage: `url(${bgev})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
      }}
      className="bg-orange-300 flex items-start justify-center overflow-hidden select-none pt-24"
    >
      
      <div className="w-full relative">
        {cards.map((value, index) => {
          const { x, y, width, height } = getGridPosition(index);

          return (
            <motion.div
              key={index}
              style={{
                width: width,
                height: height,
                position: "absolute",
                top: 0,
                left: 0,
              }}
              initial={{
                x: dimensions.width / 2 - width / 2,
                y: 50,
                scale: 1,
                rotateY: 180,
                zIndex: cards.length - index,
              }}
              animate={
                isDealt
                  ? {
                      x,
                      y,
                      scale: 1,
                      rotateY: 0,
                      zIndex: 1,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15,
              }}
            >
              <Card value={value} index={index} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
