import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";

const cardValues = ["music", "dance", "cinematography", "comedy", "fine arts", "culinary","music", "dance", "cinematography", "comedy", "fine arts", "culinary","music", "dance", "cinematography", "comedy"];

export default function Deck() {
  const [cards, setCards] = useState([]);
  const [isDealt, setIsDealt] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    columns: 3
  });

  // Initialize cards
  useEffect(() => {
    setCards(cardValues.sort(() => Math.random() - 0.5));
  }, []);

  // Calculate columns based on screen width
  const calculateColumns = useCallback((width) => {
    if (width < 640) return 1;      // sm
    if (width < 1024) return 2;     // md
    if (width < 1536) return 3;     // lg
    return 4;                       // xl
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDimensions({
        width,
        columns: calculateColumns(width)
      });
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateColumns]);

  const getGridPosition = useCallback((index) => {
    const CARD_WIDTH = Math.min(350, (dimensions.width * 0.8) / dimensions.columns);
    const CARD_HEIGHT = (CARD_WIDTH * 0.85); // Maintain aspect ratio
    const HORIZONTAL_GAP = CARD_WIDTH * 0.2;
    const VERTICAL_GAP = CARD_HEIGHT * 0.2;

    const col = index % dimensions.columns;
    const row = Math.floor(index / dimensions.columns);

    // Calculate total grid width
    const totalWidth = (dimensions.columns * (CARD_WIDTH + HORIZONTAL_GAP)) - HORIZONTAL_GAP;
    const leftOffset = (dimensions.width - totalWidth) / 2;

    return {
      x: leftOffset + (col * (CARD_WIDTH + HORIZONTAL_GAP)),
      y: 100 + (row * (CARD_HEIGHT + VERTICAL_GAP)),
      width: CARD_WIDTH,
      height: CARD_HEIGHT
    };
  }, [dimensions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDealt(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const height = (cardValues.length/dimensions.columns + 1)*300*1.05;
  console.log(height);

  return (
    <div 
  style={{ 
    height: `${dimensions.width < 640 ? height + 320 : height}px` 
  }} 
  className="bg-orange-300 flex items-center justify-center overflow-hidden"
>
      <div className="w-full">
        {cards.map((value, index) => {
          const { x, y, width, height } = getGridPosition(index);
          
          return (
            <motion.div
              key={index}
              style={{
                width: width,
                height: height,
                position: 'absolute',
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
              animate={isDealt ? {
                x,
                y,
                scale: 1,
                rotateY: 0,
                zIndex: 1,
              } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              <Card value={value} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}