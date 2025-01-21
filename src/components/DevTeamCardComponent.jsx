import "../Dev.css";
import React, { useEffect, useRef } from 'react';
import { Linkedin, Instagram, Sparkles } from 'lucide-react';

function DevTeamMemberCard({
  name,
  role,
  image,
  cardBackground = "https://res.cloudinary.com/dfczrbv7b/image/upload/v1737472506/f7x3ftcypxfuhwnx1pul.jpg",
  department,
  linkedin,
  instagram,
}) {
  const cardRef = useRef(null);
  const sparklesRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = (y - 0.5) * 20;
      const rotateY = (x - 0.5) * 20;
      
      card.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="team-card group"
      style={{ width: "320px", height: "480px" }}
    >
      <div className="card-inner relative">
        <div 
          className="card-bg absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${cardBackground})`,
          }}
        >
          <div  />
        </div>

        <div className="animated-border" />

        <div ref={sparklesRef} className="sparkles">
          {[...Array(3)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-amber-400/30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
              size={16}
            />
          ))}
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
          <div className="image-container mb-6 relative rounded-full">
            <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-pulse" />
            <img
              src={image}
              alt={`Profile picture of ${name}`}
              className="w-48 h-48 rounded-full object-cover border-4 border-amber-400/50 
                         transform transition-all duration-500 group-hover:scale-110
                         shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              style={{ objectPosition: "top center" }}
            />
          </div>

          <div className="text-center transform transition-all duration-500">
            <h3 className="text-2xl font-bold text-amber-400 mb-3 tracking-wide font-serif">
              {name}
            </h3>
            
            <div className="role-badge mb-4 transform transition-all duration-500 group-hover:translate-y-0">
              <span className="inline-block bg-amber-900/70 text-amber-200 px-6 py-2 rounded-full 
                             border border-amber-500/30 backdrop-blur-sm shadow-lg">
                {role}
              </span>
            </div>

            {department && (
              <p className="text-amber-200/90 text-sm mt-4 tracking-widest font-medium
                          transform transition-all duration-500 group-hover:translate-y-0">
                {department}
              </p>
            )}

            <div className="mt-6 flex justify-center space-x-4 opacity-0 transform translate-y-4
                          transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {linkedin && (
                <a
                  href={linkedin}
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevTeamMemberCard;