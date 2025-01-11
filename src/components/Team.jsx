import React, { useEffect } from "react";
import { Crown, Users, Code, Scroll, Linkedin, Instagram } from "lucide-react";
import "../App.css";
const Team = () => {
  const leadership = [
    {
      name: "Prof. Sanjoy Mandal",
      role: "Convenor",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703957539/prof_convener_mojstc.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Prof. Arijit Baral",
      role: "Co-Convenor",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dkdratnao/image/upload/v1704404941/Co-convenor_xoepnr.png",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Prof. Suresh K Yatirajula",
      role: "Co-Convenor",
      department: "Dept. of Chemical Engineering",
      image:
        "https://res.cloudinary.com/dkdratnao/image/upload/v1704403824/Co-convenor2_qp0smn.png",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Prof. Madhulika Gupta",
      role: "Treasurer",
      department: "Dept. of Chemistry and Chemical Biology",
      image:
        "https://res.cloudinary.com/dkdratnao/image/upload/v1704473056/madhulika_gupta_ye3xav.jpg",
      linkedin: "#",
      instagram: "#",
    },
  ];

  const developers = [
    {
      name: "Developer 1",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Developer 2",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2787&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Developer 3",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Developer 4",
      role: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Developer 5",
      role: "Mobile Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Developer 6",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2848&auto=format&fit=crop",
      linkedin: "#",
      instagram: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#dad3a5] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Crown className="w-24 h-24 text-[#dad3a5] floating-animation" />
          </div>
          <h1 className="text-7xl font-bold mb-4 tracking-[0.3em]">SRIJAN</h1>
          <p className="text-2xl tracking-[0.2em]">The Cultural Odyssey</p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="container mx-auto px-8 py-32">
        <div className="text-center mb-20 reveal">
          <Scroll className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
          <h2 className="text-5xl font-bold mb-4 tracking-wider">Leadership</h2>
          <p className="text-xl text-gray-400">The Pillars of Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {leadership.map((member, index) => (
            <div
              key={index}
              className="roman-card rounded-lg p-8 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="profile-image mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#dad3a5] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 mb-4">{member.department}</p>
                <div className="social-links flex justify-center space-x-4">
                  <a href={member.linkedin} className="hover:text-[#dad3a5]">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.instagram} className="hover:text-[#dad3a5]">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Team Section */}
      <div className="bg-[#2a2a2a] py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20 reveal">
            <Users className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
            <h2 className="text-5xl font-bold mb-4 tracking-wider">
              Core Team
            </h2>
            <p className="text-xl text-gray-400">The Guardians of Our Legacy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="roman-card rounded-lg p-8 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="profile-image mb-6">
                    <img
                      src={`https://source.unsplash.com/random/300x300?portrait&sig=${index}`}
                      alt="Team member"
                      className="w-32 h-32 mx-auto rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Core Member {index + 1}
                  </h3>
                  <p className="text-gray-400 mb-4">Department / Role</p>
                  <div className="social-links flex justify-center space-x-4">
                    <a href="#" className="hover:text-[#dad3a5]">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-[#dad3a5]">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20 reveal">
            <Code className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
            <h2 className="text-5xl font-bold mb-4 tracking-wider">
              Developers
            </h2>
            <p className="text-xl text-gray-400">
              The Architects of Digital Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="roman-card rounded-lg p-8 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="profile-image mb-6">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-36 h-36 mx-auto rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{dev.name}</h3>
                  <p className="text-[#dad3a5] font-semibold mb-4">
                    {dev.role}
                  </p>
                  <div className="social-links flex justify-center space-x-4">
                    <a href={dev.linkedin} className="hover:text-[#dad3a5]">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={dev.instagram} className="hover:text-[#dad3a5]">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
