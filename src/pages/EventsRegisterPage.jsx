import React, { useRef, useEffect, useState } from "react";
import EventCard from "../../src/components/EventCard.jsx";
import "../components/EventCard.css";
import {
  musicEvents,
  danceEvents,
  cinemaEvents,
  comedyEvents,
  dramaEvents,
  fashionEvents,
  literaryEvents,
  quizEvents,
  fineartsEvents,
} from "../utils/events.js";
import { useParams } from "react-router-dom";
//import bg from "../assets/bg.jpg";
import video from "../assets/video4.mp4";

const getEventData = (category) => {
  switch (category) {
    case "music":
      return musicEvents;
    case "dance":
      return danceEvents;
    case "cinema":
      return cinemaEvents;
    case "comedy":
      return comedyEvents;
    case "drama":
      return dramaEvents;
    case "fashion":
      return fashionEvents;
    case "literary":
      return literaryEvents;
    case "quiz":
      return quizEvents;
    case "finearts":
      return fineartsEvents;
  }
};
const EventsRegisterPage = () => {
  const { category } = useParams();
  const Events = getEventData(category);

  console.log(Events);
  return (
    <div className="py-40">
      <video
        autoPlay
        loop
        muted
        className="fixed brightness-50 inset-0 object-cover w-full h-full z-0"
        style={{ height: "190%" }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1
        className="text-6xl text-center pt-0 text-white event-category relative z-10"
        style={{ fontFamily: "ChalkDuster" }}
      >
        {category.toUpperCase()}
      </h1>
      <div className="flex flex-col items-center h-auto px-8 lg:flex-row lg:px-24 py-40 gap-24 lg:flex-wrap lg:justify-center overflow-y-none">
        {Events?.map((event, idx) => (
          <EventCard key={idx} index={idx} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsRegisterPage;
