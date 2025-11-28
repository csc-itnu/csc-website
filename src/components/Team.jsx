import React, { useState, useEffect } from 'react';
import President from "../assets/team/P.jpg";
import VicePresident from "../assets/team/vp.jpg";
import GS1 from "../assets/team/GS1.jpg";
import GS2 from "../assets/team/GS2.jpg";
import MD1 from "../assets/team/MD1.jpg";
import MD2 from "../assets/team/MD2.jpg";
import TH1 from "../assets/team/TH1.jpg";
import TH2 from "../assets/team/TH2.jpg";
import PRO1 from "../assets/team/PRO1.jpg";
import PRO2 from "../assets/team/PRO2.jpg";
import SD1 from "../assets/team/SD1.jpg";
import SD2 from "../assets/team/SD2.jpg";
import SMH from "../assets/team/SMH.jpg";
import PH from "../assets/team/PH.jpg";
import T from "../assets/team/T.jpg";

// https://colorhunt.co/palette/3e5f445e936c93da97e8ffd7

const boardMembers = [
  {
    id: 1,
    name: "Prakhar Parikh",
    title: "President",
    image: President,
    bio: "Leading cybersecurity initiatives with a focus on ethical hacking and threat analysis.",
    social: {
      // github: "https://www.github.com/prakhar-thecoder",
      linkedin: "https://www.linkedin.com/in/prakhar-parikh/"
    }
  },
  {
    id: 2,
    name: "Ketan Dav",
    title: "Vice President",
    image: VicePresident,
    bio: "Leading the club with a vision to make CSC the premier cybersecurity community.",
    social: {
      // github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/ketandav/"
    }
  },
  {
    id: 3,
    name: "Aum Patel",
    title: "General Secretary",
    image: GS1,
    bio: "Developing secure applications and tools for the club. Expert in web security and secure coding practices.",
    social: {
      // github: "https://github.com/AUM2209",
      linkedin: "https://www.linkedin.com/in/aum-patel-93b686284/"
    }
  },
  {
    id: 4,
    name: "Het Pandya",
    title: "General Secretary",
    image: GS2,
    bio: "Full-stack developer with focus on building cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/het-pandya-846464226/"
    }
  },
  {
    id: 5,
    name: "Ketav Shah",
    title: "Managing Director",
    image: MD1,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/ketavshah30",
      linkedin: "https://www.linkedin.com/in/ketav-shah-3ab74629b/"
    }
  },
  {
    id: 6,
    name: "Dhruval Patel",
    title: "Managing Director",
    image: MD2,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/dhruvalpatel2804/"
    }
  },
  {
    id: 7,
    name: "Devarsh Dalwadi",
    title: "Technical Head",
    image: TH1,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/Red0psD3v4rsh007",
      linkedin: "https://www.linkedin.com/in/devarshdalwadi/"
    }
  },
  {
    id: 8,
    name: "Dhruv Padhiyaar",
    title: "Technical Head",
    image: TH2,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/dhruv-programmes",
      linkedin: "https://www.linkedin.com/in/dhruvpadhiyar/"
    }
  },
  {
    id: 9,
    name: "Ishan Wadhwa",
    title: "Public Relations Officer",
    image: PRO1,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "",
      linkedin: "https://www.linkedin.com/in/ishan-wadhwa-5670a8309/"
    }
  },
  {
    id: 10,
    name: "Hiya Vashi",
    title: "Public Relations Officer",
    image: PRO2,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/HiyaVashi",
      linkedin: "https://www.linkedin.com/in/hiya-vashi-47257636a/"
    }
  },
  {
    id: 11,
    name: "Aksh Patel",
    title: "Software Developer",
    image: SD1,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/Aksh015",
      linkedin: "https://www.linkedin.com/in/aksh-patel158/"
    }
  },
  {
    id: 12,
    name: "Jiya Patel",
    title: "Software Developer",
    image: SD2,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/jiyaa-patel",
      linkedin: "https://www.linkedin.com/in/jiya-patel-919497321/"
    }
  },
  {
    id: 13,
    name: "Misari Lakhani",
    title: "Social Media Head",
    image: SMH,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/misarilakhani",
      linkedin: "https://www.linkedin.com/in/misari-lakhani-5ab51431b/"
    }
  },
  {
    id: 14,
    name: "Dhruv Matariya",
    title: "Publicity Head",
    image: PH,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/DhruvMatariya",
      linkedin: "https://www.linkedin.com/in/dhruv-matariya-1966a6325/"
    }
  },
  {
    id: 15,
    name: "Hrushiraj Patel",
    title: "Treasurer",
    image: T,
    bio: "uilding cybersecurity tools and educational platforms for the club.",
    social: {
      // github: "https://github.com/hrushiraj19",
      linkedin: "https://www.linkedin.com/in/hrushiraj-patel-182575322/"
    }
  },
];

// Individual Member Card Component
const BoardMemberCard = ({ member, onMemberClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-80 mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onClick={(e) => {
      //   // Open modal only when you DON'T click the link
      //   if (!e.target.closest('a') && onMemberClick) onMemberClick(member);
      // }}
    >
      {/* Gradient frame under the card (no pointer events) */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400 via-cyan-400 to-blue-400" />
        {/* Mask to show a thin border */}
        <div className="absolute inset-[2px] rounded-xl bg-gray-900" />
      </div>

      {/* Card */}
      <div className="relative z-10 h-full bg-gray-900 rounded-xl shadow-xl p-6 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-1 border-green-400">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border border-white/10">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>

        <div className="mt-2 mb-4 px-3 py-1 rounded-lg text-sm font-semibold text-white/80 bg-white/5">
          {member.title}
        </div>

        {/* LinkedIn button */}
        <a
          href={member.social?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${member.name}'s LinkedIn`}
          className="relative z-20 inline-flex items-center justify-center w-10 h-10 rounded-full border-green-400/30 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400/60"
        >
          {/* LinkedIn mark */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  );
};


// Modal Component
// const MemberModal = ({ member, onClose }) => {
//   if (!member) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-gray-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           {/* Close Button */}        <button 
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 rounded-full p-1"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
          
//           {/* Member Header */}
//           <div className="flex flex-col items-center mb-6">
//             <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-green-400">
//               <img 
//                 src={member.image} 
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
//             <div className="px-4 py-2 rounded-full text-sm font-semibold mb-3 text-gray-900">
//              {member.title}
//             </div>
//           </div>
          
//           {/* Bio */}
//           <div className="mb-6">
//             <h4 className="text-lg font-bold text-white mb-3">About</h4>
//             <p className="text-gray-300 leading-relaxed">{member.bio}</p>
//           </div>
          
//           {/* Social Links */}
//           <div className="flex gap-4 justify-center">
//             <a 
//               href={member.social.linkedin} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
//             >
//               <i className="fab fa-linkedin-in"></i>
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Main Team Component
const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Add Font Awesome
  useEffect(() => {
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesome);
    
    return () => {
      document.head.removeChild(fontAwesome);
    };
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  // const closeModal = () => {
  //   setSelectedMember(null);
  // };

  return (
    <div id="team" className="min-h-screen bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals behind CSC (Cyber Security Club)
          </p>
        </header>
        
        {/* 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {boardMembers.map(member => (
            <BoardMemberCard 
              key={member.id} 
              member={member} 
              onMemberClick={handleMemberClick}
            />
          ))}
        </div>

        {/* <MemberModal member={selectedMember} onClose={closeModal} /> */}
      </div>
    </div>
  );
};

export default Team;