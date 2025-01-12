import React from "react";
import video from "../assets/video4.mp4";

const Events2 = () => {
  return (
    <div className="relative bg-black text-white min-h-screen font-roman">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
      </div>
    </div>
  );
};

export default E
vents2;
