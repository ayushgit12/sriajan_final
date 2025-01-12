// import React, { useEffect } from "react";
// import { Crown, Users, Code, Scroll, Linkedin, Instagram } from "lucide-react";
// import "../App.css";
// import bg_img from "../assets/ab.jpeg";
// const Team = () => {
//   const leadership = [
//     {
//       name: "Prof. Sanjoy Mandal",
//       role: "Convenor",
//       department: "Dept. of Electrical Engineering",
//       image:
//         "https://res.cloudinary.com/dfr1kvie3/image/upload/v1703957539/prof_convener_mojstc.jpg",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Prof. Arijit Baral",
//       role: "Co-Convenor",
//       department: "Dept. of Electrical Engineering",
//       image:
//         "https://res.cloudinary.com/dkdratnao/image/upload/v1704404941/Co-convenor_xoepnr.png",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Prof. Suresh K Yatirajula",
//       role: "Co-Convenor",
//       department: "Dept. of Chemical Engineering",
//       image:
//         "https://res.cloudinary.com/dkdratnao/image/upload/v1704403824/Co-convenor2_qp0smn.png",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Prof. Madhulika Gupta",
//       role: "Treasurer",
//       department: "Dept. of Chemistry and Chemical Biology",
//       image:
//         "https://res.cloudinary.com/dkdratnao/image/upload/v1704473056/madhulika_gupta_ye3xav.jpg",
//       linkedin: "#",
//       instagram: "#",
//     },
//   ];

//   const teamMembers = [
//     {
//       name: "Avinash Sahu",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736618569/t0nbi0vyqc7ykzcbvreb.jpg",
//       team: "Advisors",
//     },
//     {
//       name: "Lakshya Garg",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736618571/kvkffp9mi7ueco7gqzja.jpg",
//       team: "Advisors",
//     },
//     {
//       name: "Naramdas Shiva",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619183/tz4d043u0cghog0azx4u.jpg",
//       team: "Coordinators",
//     },
//     {
//       name: "Tanush Nimbawat",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619194/fgibxezbzj84oewl8x82.heic",
//       team: "Coordinators",
//     },
//     {
//       name: "Dheeraj",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619432/yuv7ukrg36mskyrlogyd.jpg",
//       team: "Content Team",
//     },
//     {
//       name: "Shreya Shradha",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619441/rhvswo06qrp2d7va5cry.jpg",
//       team: "Content Team",
//     },
//     {
//       name: "Sona Kumari",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619444/bdlaatw2wiqzf4wa7d1g.jpg",
//       team: "Content Team",
//     },
//     {
//       name: "Raghav Kansal",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619516/lopyknf6i0ubgcycryno.jpg",
//       team: "Design Team",
//     },
//     {
//       name: "Shyamal Tirkey",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619522/mee2k3z4rd0f5ik2ffee.jpg",
//       team: "Design Team",
//     },
//     {
//       name: "Kumar Daksh",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619608/bcod6vm0p2enncntqbsh.webp",
//       team: "Event Team",
//     },
//     {
//       name: "Adib Nawaz",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619702/pe2rlczfu50po26rcpl4.webp",
//       team: "Finance Team",
//     },
//     {
//       name: "Karan Negi",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619704/j5z4wttssv00n2fkrgaq.webp",
//       team: "Finance Team",
//     },
//     {
//       name: "Sachin Parmar",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619709/audroso3kkmmp1d4uenq.jpg",
//       team: "Finance Team",
//     },
//     {
//       name: "Upkar Bharti",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619711/nui1aajk0nnjovn4jpmv.jpg",
//       team: "Finance Team",
//     },
//     {
//       name: "Gayatree Behera",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619791/yqiai0c4vop6cioqjo8s.jpg",
//       team: "Hospitality Team",
//     },
//     {
//       name: "Riyanshi Gupta",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619795/z6rxpmu9ckjwrztanj2s.jpg",
//       team: "Hospitality Team",
//     },
//     {
//       name: "Riyanshi Gupta",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619798/m6hzgtqjcbouucjonorr.jpg",
//       team: "Hospitality Team",
//     },
//     {
//       name: "Mohit Gupta",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619859/salcfakonnwce0chcwyu.jpg",
//       team: "Marketing Team",
//     },
//     {
//       name: "Pragati Jangir",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619863/a3ckh9qmezkinrkbrrux.jpg",
//       team: "Marketing Team",
//     },
//     {
//       name: "Sumit Manchanda",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619865/sish4xzxuutbunoi2dh6.jpg",
//       team: "Marketing Team",
//     },
//     {
//       name: "Tuntun Ganjhu",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620096/yovudaa8tzpzx1p2iion.jpg",
//       team: "Operations and Logistics Team",
//     },
//     {
//       name: "Animesh",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620197/lgbgyv3jewcqjg5nucsc.jpg",
//       team: "Promotion Team",
//     },
//     {
//       name: "Jatin Kumar",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620199/ksktobpt3w9tfjdyxdcz.jpg",
//       team: "Promotion Team",
//     },
//     {
//       name: "Abhinav Aditya",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620261/qvbabiu3ebppxwdsr77p.jpg",
//       team: "Public Relation Team",
//     },
//     {
//       name: "Manthanraj",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620267/oglg1frqjcixa7fzcgy3.jpg",
//       team: "Public Relation Team",
//     },
//     {
//       name: "Tejas",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620328/vdukg9vjwmsh96xugu1m.heic",
//       team: "Security Team",
//     },
//     {
//       name: "Vikash",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620329/nsmkq2cdzg7joo9tbmz6.jpg",
//       team: "Security Team",
//     },
//     {
//       name: "Geetanjali",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620376/lvzdwacahrgjktpxitqp.jpg",
//       team: "Sponsorship Team",
//     },
//     {
//       name: "Kartik Rahi",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620378/gnyupfr5ym0iybkzc7bh.jpg",
//       team: "Sponsorship Team",
//     },
//     {
//       name: "Manjeet",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620383/hrostggueo3few8yohsu.jpg",
//       team: "Sponsorship Team",
//     },
//     {
//       name: "Rishabh Raj",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620384/g03d8jo7xm8h6jtajm6j.jpg",
//       team: "Sponsorship Team",
//     },
//     {
//       name: "Divya Gupta",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620457/zdkp2uvyhosodedbjgxd.jpg",
//       team: "Technical Team",
//     },
//     {
//       name: "Shubham Saurav",
//       image:
//         "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620461/flc0zraard9sc9vvz6qs.jpg",
//       team: "Technical Team",
//     },
//   ];

//   const developers = [
//     {
//       name: "Developer 1",
//       role: "Frontend Developer",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Developer 2",
//       role: "Backend Developer",
//       image:
//         "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2787&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Developer 3",
//       role: "UI/UX Designer",
//       image:
//         "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Developer 4",
//       role: "Full Stack Developer",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Developer 5",
//       role: "Mobile Developer",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//     {
//       name: "Developer 6",
//       role: "DevOps Engineer",
//       image:
//         "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2848&auto=format&fit=crop",
//       linkedin: "#",
//       instagram: "#",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const reveals = document.querySelectorAll(".reveal");
//       reveals.forEach((element) => {
//         const windowHeight = window.innerHeight;
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//           element.classList.add("active");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#1a1a1a] text-[#dad3a5] overflow-x-hidden">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/70" />
//         <div className="relative z-10 text-center">
//           <div className="flex justify-center mb-6">
//             <Crown className="w-24 h-24 text-[#dad3a5] floating-animation" />
//           </div>
//           <h1 className="text-7xl font-bold mb-4 tracking-[0.3em]">SRIJAN</h1>
//           <p className="text-2xl tracking-[0.2em]">The Cultural Odyssey</p>
//         </div>
//       </div>

//       {/* Leadership Section */}
//       <div className="container mx-auto px-8 py-32">
//         <div className="text-center mb-20 reveal">
//           <Scroll className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
//           <h2 className="text-5xl font-bold mb-4 tracking-wider">Leadership</h2>
//           <p className="text-xl text-gray-400">The Pillars of Excellence</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {leadership.map((member, index) => (
//             <div
//               key={index}
//               className="roman-card rounded-lg p-8 reveal"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="text-center">
//                 <div className="profile-image mb-6">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-40 h-40 mx-auto rounded-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//                 <p className="text-[#dad3a5] font-semibold mb-2">
//                   {member.role}
//                 </p>
//                 <p className="text-gray-400 mb-4">{member.department}</p>
//                 <div className="social-links flex justify-center space-x-4">
//                   <a href={member.linkedin} className="hover:text-[#dad3a5]">
//                     <Linkedin className="w-5 h-5" />
//                   </a>
//                   <a href={member.instagram} className="hover:text-[#dad3a5]">
//                     <Instagram className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Core Team Section */}
//       <div className="bg-[#2a2a2a] py-32">
//         <div className="container mx-auto px-8">
//           <div className="text-center mb-20 reveal">
//             <Users className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
//             <h2 className="text-5xl font-bold mb-4 tracking-wider">
//               Core Team
//             </h2>
//             <p className="text-xl text-gray-400">The Guardians of Our Legacy</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="roman-card rounded-lg p-8 reveal"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="text-center">
//                   <div className="profile-image mb-6">
//                     <img
//                       src={member.image}
//                       alt="Team member"
//                       className="w-32 h-32 mx-auto rounded-full object-cover"
//                     />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">
//                     Core Member {index + 1}
//                   </h3>
//                   <p className="text-gray-400 mb-4">Department / Role</p>
//                   <div className="social-links flex justify-center space-x-4">
//                     <a href="#" className="hover:text-[#dad3a5]">
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a href="#" className="hover:text-[#dad3a5]">
//                       <Instagram className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Developers Section */}
//       <div className="py-32">
//         <div className="container mx-auto px-8">
//           <div className="text-center mb-20 reveal">
//             <Code className="w-16 h-16 mx-auto mb-6 text-[#dad3a5]" />
//             <h2 className="text-5xl font-bold mb-4 tracking-wider">
//               Developers
//             </h2>
//             <p className="text-xl text-gray-400">
//               The Architects of Digital Excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {developers.map((dev, index) => (
//               <div
//                 key={index}
//                 className="roman-card rounded-lg p-8 reveal"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="text-center">
//                   <div className="profile-image mb-6">
//                     <img
//                       src={dev.image}
//                       alt={dev.name}
//                       className="w-36 h-36 mx-auto rounded-full object-cover"
//                     />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">{dev.name}</h3>
//                   <p className="text-[#dad3a5] font-semibold mb-4">
//                     {dev.role}
//                   </p>
//                   <div className="social-links flex justify-center space-x-4">
//                     <a href={dev.linkedin} className="hover:text-[#dad3a5]">
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a href={dev.instagram} className="hover:text-[#dad3a5]">
//                       <Instagram className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from "react";
import "../Team.css";
import { Linkedin, Instagram } from "lucide-react";

function TeamMemberCard({
  name,
  role,
  image,
  cardBackground = "https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg",
  department,
  linkedin,
  instagram,
}) {
  return (
    <div className="team-card" style={{ minWidth: "300px", minHeight: "400px" }}>
      <div className="card-inner relative group">
        <div className="border-effect rounded-lg overflow-hidden">
          {/* Background Image */}
          <div
            className="card-bg"
            style={{
              backgroundImage: `url(${cardBackground})`,
            }}
          ></div>
          <div className="card-overlay"></div>

          {/* Decorative corners */}
          <div className="ornament absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400 z-10"></div>
          <div className="ornament absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400 z-10"></div>
          <div className="ornament absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400 z-10"></div>
          <div className="ornament absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400 z-10"></div>

          <div className="card-content relative p-6">
            {/* Image container */}
            <div className="image-container mb-4">
              <img
                style={{ objectPosition: "top center" }}
                src={image}
                alt={name}
                draggable={false}
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-amber-600"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3
                className="text-2xl font-bold text-amber-400 mb-2 tracking-wide"
                style={{ fontFamily: "Trajan Pro, serif" }}
              >
                {name}
              </h3>
              <div className="role-badge mb-4">
                <span className="inline-block bg-amber-900/50 text-amber-200 px-4 py-2 rounded-full border border-amber-600/30">
                  {role}
                </span>
              </div>
              {department && (
                <p className="text-amber-200/80 text-sm mt-8 tracking-widest font-bold">{department}</p>
              )}
              {/* Social Links */}

              {/* {role === "Frontend Developer" && (
                <div className="flex justify-center space-x-4 cursor-pointer">
                  <a
                    href={linkedin}
                    className="text-amber-400 hover:text-amber-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("LinkedIn URL:", linkedin);
                      window.open(linkedin, "_blank");
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={instagram}
                    className="text-amber-400 hover:text-amber-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("LinkedIn URL:", instagram);
                      window.location.href = { instagram };
                    }}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const leadership = [
    {
      name: "Prof. Vinay Kumar Rajak",
      role: "Convenor",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      cardBackground:
        "https://i.pinimg.com/474x/f2/d8/7f/f2d87f4aea5eac67b67ab1b60aa117fb.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Prof. Rajashekhar Reddy",
      role: "Co-Convenor",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708703/vksvr4xl67k3svx4lkqq.jpg",
      cardBackground:
        "https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Prof. Madhulika Gupta",
      role: "Co-Convenor",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708700/aajajntlajkqycwq8k8b.png",
      cardBackground:
        "https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: `\u00A0\u00A0\u00A0\u00A0\u00A0Prof.\u00A0\u00A0Ashok\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Kumar`,
      role: "Treasurer",
      department: "Dept. of Electrical Engineering",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708697/ozwxkxowhknkdrwzn1sh.png",
      cardBackground:
        "https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg",
      linkedin: "#",
      instagram: "#",
    },
    

    // Add other leadership members with similar structure
  ];

  const teamMembers = [
    {
      name: "Aditya",
      department: "Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736711751/lm0zq26felvb9c8qnuab.jpg",
      // cardBackground:
      //   "https://i.pinimg.com/474x/f2/d8/7f/f2d87f4aea5eac67b67ab1b60aa117fb.jpg",
      team: "Coordinater",
    },
    {
      name: "Priyanka",
      department: "Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736691655/hbel5vli2t3wdjw5ysxn.png",
      // cardBackground:
      //   "https://i.pinimg.com/474x/f2/d8/7f/f2d87f4aea5eac67b67ab1b60aa117fb.jpg",
      team: "Chairperson",
    },
    {
      name: "Avinash Sahu",
      department: "Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736618569/t0nbi0vyqc7ykzcbvreb.jpg",
      // cardBackground:
      //   "https://i.pinimg.com/474x/f2/d8/7f/f2d87f4aea5eac67b67ab1b60aa117fb.jpg",
      team: "Advisors",
    },
    {
      name: "Lakshya Garg",
      department: "Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736618571/kvkffp9mi7ueco7gqzja.jpg",
      team: "Advisors",
    },
    {
      name: "Naramdas Shiva",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619183/tz4d043u0cghog0azx4u.jpg",
      // cardBackground:
      //   "https://i.pinimg.com/474x/f2/d8/7f/f2d87f4aea5eac67b67ab1b60aa117fb.jpg",
      team: "Coordinators",
    },
    {
      name: "Tanush Nimbawat",
      department: "Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736691167/w491e0syicpmk9x4pubi.jpg",
      team: "Coordinators",
    },
    {
      name: "Manav Sharma",
      department: 'Head',
      image:
      " https://res.cloudinary.com/dfczrbv7b/image/upload/v1736707401/e06ifrdrahn64lts5wy9.jpg",
      team: "Technical Team",
    },
    {
      name: "Siddharth Aggrawal",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736707406/g4kufwfd4ubuwttbtu3d.jpg ",
        team: "Technical Team",
      },
      {
        name: "Divya Gupta",
        department: 'Co-Head',
        image:
          "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620457/zdkp2uvyhosodedbjgxd.jpg",
        team: "Technical Team",
      },
      {
        name: "Shubham Saurav",
        department: 'Head',
        image:
          "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620461/flc0zraard9sc9vvz6qs.jpg",
        team: "Technical Team",
      },
    {
      name: "Dheeraj",
      department: "Co-Head",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619432/yuv7ukrg36mskyrlogyd.jpg",
      team: "Content Team",
    },
    {
      name: "Shreya Shradha",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619441/rhvswo06qrp2d7va5cry.jpg",
      team: "Content Team",
    },
    {
      name: "Sona Kumari",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619444/bdlaatw2wiqzf4wa7d1g.jpg",
      team: "Content Team",
    },
    {
      name: "Raghav Kansal",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619516/lopyknf6i0ubgcycryno.jpg",
      team: "Design Team",
    },
    {
      name: "Shayamal Tirkey",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619522/mee2k3z4rd0f5ik2ffee.jpg",
      team: "Design Team",
    },
    {
      name: "Kumar Daksh",
      department: '',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619608/bcod6vm0p2enncntqbsh.webp",
      team: "Event Team",
    },
    {
      name: "Adib Nawaz",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619702/pe2rlczfu50po26rcpl4.webp",
      team: "Finance Team",
    },
    {
      name: "Karan Negi",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619704/j5z4wttssv00n2fkrgaq.webp",
      team: "Finance Team",
    },
    {
      name: "Sachin Parmar",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619709/audroso3kkmmp1d4uenq.jpg",
      team: "Finance Team",
    },
    {
      name: "Upkar Bharti",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736711754/v8fjvb2osfzq3qaebn3f.jpg ",
      team: "Finance Team",
    },
    {
      name: "Gayatree Behera",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619791/yqiai0c4vop6cioqjo8s.jpg",
      team: "Hospitality Team",
    },
    {
      name: "Riyanshi Gupta",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619798/m6hzgtqjcbouucjonorr.jpg",
      team: "Hospitality Team",
    },
    {
      name: "Mohit Gupta",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619859/salcfakonnwce0chcwyu.jpg",
      team: "Marketing Team",
    },
    {
      name: "Pragati Jangir",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619863/a3ckh9qmezkinrkbrrux.jpg",
      team: "Marketing Team",
    },
    {
      name: "Sumit Manchanda",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736619865/sish4xzxuutbunoi2dh6.jpg",
      team: "Marketing Team",
    },
    {
      name: "Tuntun Ganjhu",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620096/yovudaa8tzpzx1p2iion.jpg",
      team: "Operations and Logistics Team",
    },
    {
      name: "Animesh",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620197/lgbgyv3jewcqjg5nucsc.jpg",
      team: "Promotion Team",
    },
    {
      name: "Abhinav Aditya",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620261/qvbabiu3ebppxwdsr77p.jpg",
      team: "Public Relation Team",
    },
    {
      name: "Manthanraj",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620267/oglg1frqjcixa7fzcgy3.jpg",
      team: "Public Relation Team",
    },
    {
      name: "Tejas",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736707414/d3daasso9wpcpxrlajsr.jpg ",
      team: "Security Team",
    },
    {
      name: "Vikash Kumar",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620329/nsmkq2cdzg7joo9tbmz6.jpg",
      team: "Security Team",
    },
    {
      name: "Geetanjali",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736696751/dshtlvgxghcf32i0oimw.jpg",
      team: "Sponsorship Team",
    },
    {
      name: "Kartik Rahi",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620378/gnyupfr5ym0iybkzc7bh.jpg",
      team: "Sponsorship Team",
    },
    {
      name: "Manjeet",
      department: 'Co-Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620383/hrostggueo3few8yohsu.jpg",
      team: "Sponsorship Team",
    },
    {
      name: "Rishabh Raj",
      department: 'Head',
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736620384/g03d8jo7xm8h6jtajm6j.jpg",
      team: "Sponsorship Team"
    },
  ];

  const developers = [
    {
      name: "Dhruv Agrawal ",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736696750/qrgtuzc2xgozjurwothx.jpg",
      linkedin: "https://www.linkedin.com/in/dhruv-agrawal05/",
      instagram:
        "https://www.instagram.com/dhruv.agarwal05?igsh=bXIzZ3RvdGE1bTRm&utm_source=qr",
    },
    {
      name: "Hrishabh Patel",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736696752/z2xxxfnbmgumzswxxnlx.jpg",
      linkedin: "https://www.linkedin.com/in/hrishabh-patel-a15379289/",
      instagram: "https://www.instagram.com/hrishabh_patel09/",
    },
    {
      name: "Ayush Raj Baranwal",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736696749/lc6fsrdudjwzbu3vxua1.jpg",
      linkedin: "https://www.linkedin.com/in/ayushrbaranwal?",
      instagram:
        "https://www.instagram.com/hey_ayushraj?igsh=MWx0bXpyMjA0dmk5MA==",
    },
    {
      name: "Yug Kaliraman",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736700743/tyvgurspkf1wskssihco.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Samarth Jindal ",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736696754/xz6o3qdrme4vj2t9bpko.jpg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Aaradhy jain ",
      role: "Frontend Developer",
      department: "",
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736700742/a2vxspsswbp1ap1eydw9.jpg",
      linkedin: "#",
      instagram: "#",
    },
  ];
  //https://i.pinimg.com/736x/45/c9/d3/45c9d356d30a0dfead45c47463fa3612.jpg
  return (
    <div
      className="min-h-screen pt-28 p-8 flex flex-col items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://i.pinimg.com/736x/45/c9/d3/45c9d356d30a0dfead45c47463fa3612.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Leadership Section */}
      <div className="max-w-7xl flex flex-col items-evenly mb-16">
        <h2 className="text-7xl  text-amber-400 text-center mb-12 tracking-wider lead">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {leadership.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Core Team Section */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col items-evenly">
        <h2 className="text-5xl font-bold text-amber-400 text-center mb-12 tracking-wider lead">
          Core Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} role={member.team} {...member} />
          ))}
        </div>
      </div>

      {/* Developers Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-amber-400 text-center mb-12 tracking-wider lead">
          Developers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
