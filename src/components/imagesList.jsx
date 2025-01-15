import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";
import img1 from "/img1.jpeg";
import img2 from "/img2.jpeg";
import img3 from "/img3.jpeg";
import img4 from "/img4.jpeg";
import img5 from "/img5.jpeg";
import img6 from "/img6.jpeg";
import img7 from "/img7.jpeg";
import img8 from "/img8.jpeg";
import img9 from "/img9.jpeg";
import img10 from "/img10.jpeg";
import img11 from "/img11.jpeg";
import img12 from "/img12.jpg";
import img19 from "/img19.jpeg";

import { useEffect } from "react";


export default function ImagesList() {

  const [columns, setColumns] = React.useState(getColumns());

  function getColumns() {
    const width = window.innerWidth;
    if (width <= 900) return 2; // 2 columns for mobile
    // if (width <= 960) return 3; // 3 columns for tablets
    return 3; // 4 columns for larger screens
  }

  // Update columns on window resize
  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // 100% width on small screens (e.g., mobile)
          sm: "75%", // 75% width on larger screens (e.g., tablets and desktops)
        },
        overflowY: "scroll",
        margin: "auto",
        padding: "5rem 0",
      }}
    >
      <ImageList variant="masonry" cols={columns} gap={8}>
        {itemData.map((item, index) => (
          <motion.div
            key={item.img}
            initial={{ opacity: 0, scale: 0.9 }} // Initial state: faded and slightly smaller
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full visibility and scale
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the item is visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add staggered delay for smoother effect
          >
            <ImageListItem
              sx={{
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Add motion.div for animated glowing border */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px 4px rgba(255, 255, 255, 0.2)",
                    "0 0 20px 8px rgba(255, 255, 255, 0.5)",
                    "0 0 10px 4px rgba(255, 255, 255, 0.2)",
                  ],
                }}
                whileHover={{ scale: 1.1 }} // Zoom in the entire container on hover
                transition={{
                  duration: 0.3, // Smooth transition
                }}
                style={{
                  borderRadius: "12px", // Rounded corners
                  overflow: "hidden", // Clip overflowing content
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.2 }} // Zoom in the image itself on hover
                  transition={{ duration: 0.3 }} // Smooth scaling transition
                  src={item.img} // Use the direct image path
                  srcSet={`${item.img} 2x`} // Optional srcSet for high resolution
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintain aspect ratio and crop content
                    display: "block", // Ensure no inline block spacing
                  }}
                />
              </motion.div>
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  { img: img1, title: "Bed" },
  { img: img2, title: "Books" },
  { img: img3, title: "Sink" },
  { img: img4, title: "Kitchen" },
  { img: img5, title: "Blinds" },
  { img: img6, title: "Chairs" },
  { img: img7, title: "Laptop" },
  { img: img8, title: "Doors" },
  { img: img9, title: "Coffee" },
  { img: img10, title: "Storage" },
  { img: img12, title: "Coffee table" },
  { img: img11, title: "Candle" },
  { img: img19, title: "Couch" },
  
];
