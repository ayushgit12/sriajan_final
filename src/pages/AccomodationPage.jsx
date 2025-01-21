import React from "react";
import back from "../assets/col.jpg";
import { Link } from "react-router-dom";

const AccomodationPage = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] pt-20 relative flex  flex-col items-center"
      style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Use rgba for transparency
          backdropFilter: "blur(2px)",
          zIndex: 0,
        }}
      ></div>
      <h1
        className="text-5xl lg:text-6xl text-center relative z-10 text-amber-950"
        style={{ fontFamily: "RomanFont"}}
      >
        Accomodation
      </h1>
      <p className="relative z-10 text-center text-white text-md lg:text-4xl px-8 mt-2 lg:px-36 lg:mt-4" style={{fontFamily: "Embolism", lineHeight: "1.5"}}>
        Whether you're a solo traveler or part of a group, we offer various room
        configurations to suit your needs, from single chambers to shared
        suites. Each accommodation comes equipped with essential amenities,
        ensuring a comfortable stay while maintaining the thematic ambiance of
        ancient Rome. We understand that a proper rest is crucial for fully
        enjoying the festival experience, which is why we've paid special
        attention to creating a welcoming atmosphere that reflects our Roman
        theme while providing all modern conveniences. Secure your stay through
        our booking system, and join us in this unique celebration where history
        meets hospitality. Available rooms are limited, so we encourage early
        reservations to ensure your place in our cultural celebration.  
      </p>
      <Link className="active:scale-90" to={"https://docs.google.com/forms/d/11PZl9jbWWTXepK054LV0SVd_YqMyn5JbGKvNP3_JysI/edit "} target="_blank">
      <button className="relative z-10 bg-amber-500 px-4 py-2 rounded-md mt-8 text-lg" style={{fontFamily: 'RomanSmall'}}>Book Now</button>
      </Link>
    </div>
  );
};

export default AccomodationPage;
