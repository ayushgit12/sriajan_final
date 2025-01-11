import React, { useState } from "react";
import Carousel from "../components/Carousel.jsx";
import logo from "/logo.png";
import video from "../assets/video2.mp4";
import tshirt from "../assets/tshirt.png";
import hoodie from "../assets/hoodie.png";

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
      <div className="relative z-10 brightness-[85%] flex flex-col min-h-screen">
        <header className="flex justify-center py-5">
          <img src={logo} alt="Logo" className="h-16" />
        </header>

        <main className="flex-grow">
          <section className="mb-10">
            <Carousel items={products.map((product) => product.image)} />
          </section>

          <div className="text-center px-5">
            <h1
              className="text-7xl font-bold mb-12 text-black"
              style={{ fontFamily: "'MedievalSharp', serif" }}
            >
              Merchandise
            </h1>
            <div className="text-3xl text-black font-bold mb-8">
              {products.map((product) => (
                <p key={product.id} className="mb-4">
                  INR {product.price} / {product.name}
                </p>
              ))}
            </div>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gold text-black py-3 px-6 rounded text-lg">
                Buy Now
              </button>
            </a>
          </div>
        </main>

        <footer className="py-5">
          {/* Footer content (if any) */}
        </footer>
      </div>
    </div>
  );
};

export default MerchandisePage;
