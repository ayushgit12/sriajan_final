import { useNavigate } from "react-router-dom";

export default function Card({ value, index }) {
  const letters = ["A", "K", "Q"];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/events2");
  };
  return (
    <div
      className="relative w-[300px] h-[420px] rounded-2xl shadow-xl overflow-hidden drop-shadow-2xl"
      onClick={handleClick}
      style={{ cursor: "pointer" }} // Optional: Indicates the element is clickable
    >
      {/* Yellowish Fade Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(./card_bg.jpeg)",
        }}
      />

      {/* Card Content */}
      <div className="absolute top-8 left-8 text-3xl font-serif font-bold text-[#8b4513]">
        {letters[index % 3]}
      </div>
      <div className="absolute top-[67px] left-[30px] text-2xl text-[#8b4513]">
        <img src="./src/assets/icons/spades-512.png" alt="spade" width={28} />
      </div>

      {/* Center Emblem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative z-10">
          <img
            src={`./src/assets/icons/${value}.png`}
            alt="dance"
            width={180}
          />
        </div>
        {/* Rome Text with Roman-style font */}
        <div
          className="mt-1 text-xl font-serif tracking-[0.3em] text-[#8B0000] z-10"
          style={{
            textShadow: "2px 2px 4px rgba(139, 69, 19, 0.3)",
          }}
        >
          {value.toUpperCase()}
        </div>
      </div>

      {/* Bottom Corner */}
      <div className="absolute bottom-8 right-8 text-3xl font-serif font-bold text-[#8b4513] transform rotate-180">
        {letters[index % 3]}
      </div>
      <div className="absolute bottom-[67px] right-[30px] text-2xl text-[#8b4513] transform rotate-180">
        <img src="./src/assets/icons/spades-512.png" alt="spade" width={28} />
      </div>
    </div>
  );
}
