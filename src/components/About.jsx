import React from "react";
import bgImage from "../assets/ab.jpeg"; // Update with your image path

const AboutPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center  "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Text Content Styled Like Ancient Script */}
      <div className="text-center max-w-4xl sm:px-2 lg:px-6">
        <h2
          className=" mb-8  pt-32 lg:pt-28  text-5xl sm:text-7xl md:text-7xl lg:text-[100px]"
          style={{
            // fontSize: "100px",
            color: "#3b3024", // Dark brown for ancient feel
            fontFamily: "RomanFont", // Ancient-style font
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Subtle shadow for depth
          }}
        >
          Institute Legacy
        </h2>
        <p
          className="text-3xl font-semibold leading-relaxed mb-6 brightness-125"
          style={{
            color: "#3b3024", // Matches the title for consistency
            fontFamily: "RomanSmall", // Elegant ancient-style font
          }}
        >
          Established in 1926, the Indian Institute of Technology (Indian School
          of Mines) Dhanbad stands as a prestigious engineering and research
          institution in the heart of the Coal Capital of India, Dhanbad.
          Approaching its centenary, IIT (ISM) holds the esteemed Institute of
          National Importance and has evolved from its initial focus on Earth
          Sciences and Engineering to encompass 18 academic departments across
          various technical disciplines.
        </p>
        <p
          className="text-3xl font-semibold leading-relaxed"
          style={{
            color: "#3b3024",
            fontFamily: "RomanSmall",
          }}
        >
          Standing as the third oldest among IITs, IIT (ISM) has experienced
          significant growth beyond its roots in Earth Sciences. Notably, it
          achieved the 26th position in the QS World University Rankings for
          Mining and Mineral Engineering in 2022.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
