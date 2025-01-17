import React from "react";
import "./EventCard.css";
import bg from "../assets/building.jpg"
// import bg from "../../../assets/sun-tornado.png";
// import img from "../../../assets/image 43.png";
import { Link } from "react-router-dom";

const Card = ({ index, event }) => {
  const id = encodeURIComponent(event.EventName);
  return (
    <div className="card0 w-[90vw] max-w-[400px]">
      <div className="content0">
        <div className="back0">
          <div
            className="back-content0"
            // style={{
            //   backgroundImage: `url(${event.Poster})`,
            //   objectFit: "fill",
            // }}
          >
            {/* <svg
              stroke="#ffffff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            >
            </svg> */}
            <img src={`${event.Poster}`} alt="" className="bg-contain p-2" />
            <p className=" text-[#0d0c06] text-3xl font-bold absolute bottom-4 left-3 px-2 py-2 bg-opacity-35 backdrop-blur-lg rounded-lg">
              {event.EventName}
            </p>
          </div>
        </div>
        <div className="front0">
          <div
            className="img0 bg-cover"
            style={{ backgroundImage: `url(${bg})`, objectFit: "contain" ,objectPosition: 'bottom'}}
          >
            <div className="circle0"></div>
            <div className="circle0" id="right"></div>
            <div className="circle0" id="bottom"></div>
          </div>
          <div className="front-content0">
            <strong className="badge0">{event.EventName}</strong>

            <div className="description0">
              <div className="title0 flex-col">
                <div className="title0 venue0 flex justify-around my-4">
                  Venue:{" "}
                  <strong className="">
                    {event.Venue ? ` ${event.Venue} ` : ` TBD`}
                  </strong>
                </div>
                <div className="title0">
                  {event.description.substring(0, 120)} ...
                </div>
                <div className="title0 mt-2 -mb-2">
                  <Link to={`${event.rulebook}`} target="_blank">
                    <button
                      type="button"
                      className="text-[#0d0c06] bg-gradient-to-r from-[#dad3a5] via-[#c9bc57] to-[#fbe10e] hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-xs text-center px-3 py-2"
                    >
                      View More
                    </button>
                  </Link>
                  <Link to={event?.registerLink}>
                    <button
                      type="button"
                      className="text-[#0d0c06] bg-gradient-to-r from-[#dad3a5] via-[#c9bc57] to-[#fbe10e] hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-xs text-center px-3 py-2"
                    >
                      Register Now
                    </button>
                  </Link>
                </div>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{
                      mixBlendMode: "normal",
                    }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    {/* <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g> */}
                  </g>
                </svg>
              </div>
              {/* <p className="card-footer0">30 Mins &nbsp; | &nbsp; 1 Serving</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;