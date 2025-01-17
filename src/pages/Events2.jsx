import React from "react";
import video from "../assets/video4.mp4";

const Events2 = () => {
  return (
    <div className="relative bg-black text-white min-h-screen font-roman">
      <video
        controls={false}
        autoPlay
        loop
        muted
        className="absolute brightness-50 inset-0 object-cover w-full h-full z-0 pointer-events-none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-black"
          style={{
            fontFamily: "RomanSmall",
            color: "#f09005",
            fontSize: "14vw",
            lineHeight: "1.1",
            cursor: "pointer",
            opacity: 0.75,
          }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default Events2;
