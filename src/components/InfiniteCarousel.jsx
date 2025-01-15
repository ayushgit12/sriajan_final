import * as React from "react";
import { motion } from "framer-motion";
import img1 from "/img1.jpeg";
import img2 from "/img2.jpeg";
import img3 from "/img3.jpeg";
import img4 from "/img4.jpeg";
import img5 from "/img5.jpeg";
import img6 from "/img6.jpeg";
import img7 from "/img7.jpeg";
import img9 from "/img9.jpeg";
import img11 from "/img11.jpeg";
import img14 from "/img14.jpeg";
import img15 from "/img15.jpeg";
import img16 from "/img16.jpeg";
import img17 from "/img17.jpeg";

const InfiniteCarousel = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img14,
    img9,
    img15,
    img11,
    img16,
    img17,
  ];

  const [isHovered, setIsHovered] = React.useState(false); // State to track hover status
  const [scrollPosition, setScrollPosition] = React.useState(0); // Track the scroll position

  // Function to handle scroll effect
  const handleScroll = () => {
    if (!isHovered) {
      setScrollPosition((prevPosition) => (prevPosition - 1) % (images.length * 200)); // Update the scroll position
    }
  };

  React.useEffect(() => {
    const interval = setInterval(handleScroll, 10); // Update the scroll every 10 ms
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isHovered]); // Only update when hover state changes

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause the carousel on hover
      onMouseLeave={() => setIsHovered(false)} // Resume the carousel when hover ends
    >
      <p className="text-amber-950 font-bold md:text-4xl text-xl text-center pb-8">
      Echoes of Festive Joy from Years Past.
      </p>
      <div
        style={{
          display: "flex",
          transform: `translateX(${scrollPosition}px)`, // Apply scroll position manually
          transition: "transform 0.1s ease-in-out", // Smooth transition for movement
        }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              flexShrink: 0,
              width: "200px",
              height: "auto",
              margin: "0 10px",
              transition: "transform 0.3s ease", // Smooth transition on hover
            }}
          >
            <motion.img
              src={src}
              alt={`carousel-img-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Keep image proportions intact
                objectPosition: "center", // Focus on the center of the image
                borderRadius: "12px",
                transition: "transform 0.3s ease, object-position 0.3s ease", // Smooth transition for zoom
              }}
             
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
