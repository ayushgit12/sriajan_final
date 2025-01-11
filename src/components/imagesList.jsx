import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";

export default function ImagesList() {
  return (
    
    <Box sx={{ width: "75%", overflowY: "scroll", margin: "auto" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <motion.div
            key={item.img}
            initial={{ opacity: 0, scale: 0.9 }} // Initial state: faded and slightly smaller
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full visibility and scale
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the item is visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add staggered delay for smoother effect
          >
            <ImageListItem sx={{ overflow: "hidden", position: "relative" }}>
              {/* Add motion.img for hover scaling */}
              <motion.img
                whileHover={{ scale: 1.2 }} // Scale content on hover
                transition={{ duration: 0.3 }} // Smooth scaling transition
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Maintain aspect ratio and crop content
                  display: "block", // Ensure no inline block spacing
                }}
              />
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967632/fotofreaks_iitism_1675510867_3030727283215629849_5457821429_rdiys1.jpg",
    title: "Bed",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967638/fotofreaks_iitism_1675510867_3030727283232442698_5457821429_ntn445.jpg",
    title: "Books",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967623/fotofreaks_iitism_1675510867_3030727283148499964_5457821429_e2sk8e.jpg",
    title: "Sink",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140034780_5457821429_gxrzzk.jpg",
    title: "Kitchen",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967635/fotofreaks_iitism_1675751380_3032744844446654362_5457821429_wdblrk.jpg",
    title: "Blinds",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967477/fotofreaks_iitism_1675751379_3032744844127884839_5457821429_clavzn.jpg",
    title: "Chairs",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967563/fotofreaks_iitism_1675751379_3032744844136108526_5457821429_ejmxch.jpg",
    title: "Laptop",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140053768_5457821429_f8ul1t.jpg",
    title: "Doors",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967634/fotofreaks_iitism_1675510867_3030727283232278412_5457821429_bncuph.jpg",
    title: "Coffee",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967631/fotofreaks_iitism_1675597389_3031453081258077365_5457821429_fclfrl.jpg",
    title: "Storage",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967522/fotofreaks_iitism_1675676767_3032118946815236599_5457821429_g7qhtw.jpg",
    title: "Candle",
  },
  {
    img: "https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967533/fotofreaks_iitism_1675597389_3031453081182662787_5457821429_zbs9ev.jpg",
    title: "Coffee table",
  },
];
