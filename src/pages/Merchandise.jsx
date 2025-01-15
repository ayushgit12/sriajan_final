import React, { useState } from "react";
import Carousel from "../components/Carousel.jsx";
import logo from "/logo.png";
import video from "../assets/video3.mp4";
import tshirt from "../assets/tshirt-removebg.png";
import hoodie from "../assets/hoodie-removebg.png";

const MerchandisePage = () => {
  const [products] = useState([
    { id: 1, name: "Tshirt", price: 399, image: tshirt },
    { id: 2, name: "Hoodie", price: 799, image: hoodie },
  ]);

  return (
    <div className="relative bg-black text-white min-h-screen font-roman">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-10 w-screen brightness-[100%] flex flex-col min-h-screen">
        <header className="flex justify-center py-5">
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </header>

        <main className="flex flex-col">
          <section className="mb-10 md:px-10">
            <Carousel items={products.map((product) => product.image)} />
          </section>

          <div className="text-center px-5">
            <h1
              className="text-3xl md:text-7xl font-bold mb-8 text-black"
              style={{
                fontFamily: "'MedievalSharp', serif",
                color: "transparent",
                WebkitTextStroke: "2px gold",
              }}
            >
              Merchandise
            </h1>
            <div
              className="text-lg md:text-4xl text-black mb-6"
              style={{
                fontFamily: "'MedievalSharp', serif",
                color: "transparent",
                WebkitTextStroke: "2px gold",
              }}
            >
              {products.map((product) => (
                <p key={product.id} className="mb-2 md:mb-4">
                  INR {product.price} / {product.name}
                </p>
              ))}
            </div>
            <a
              href="https://docs.google.com/forms/d/129LlqOTY5EeVKuDCJ-ZWpiJDukS3h40DfTxIUcqMPvk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-gold text-black font-bold py-3 px-6 rounded text-md md:text-lg"
                style={{
                  fontFamily: "'MedievalSharp', serif",
                }}
              >
                Buy Now
              </button>
            </a>
          </div>
        </main>

        <footer className="py-5">{/* Footer content (if any) */}</footer>
      </div>
    </div>
  );
};

export default MerchandisePage;
