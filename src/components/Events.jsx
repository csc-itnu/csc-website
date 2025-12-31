import React, { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [];

  const pastEvents = [
    {
      id: 1,      title: "HACKVERSE - Episode 2: ACCESS GRANTED",
      attendees: "150+ participants",
      type: "Workshop",
      highlight:
        "An engaging live demonstration exploring Windows Malware, Android Spyware, and Digital Espionage.",
      image: "/images/event_hackverse2.jpg"
    },
    {
      id: 2,      title: "HACKVERSE - Episode 1: The Journey Begins",
      attendees: "300+ participants",
      type: "Workshop",
      highlight:
        "An engaging live demonstration exploring vulnerabilities, data breaches and dark web.",
      image: "/images/event1.jpg"
    },
    {
      id: 3,
      title: "CSGC - 2.0 Briefing",
      attendees: "95 participants",
      type: "Workshop",
      highlight:
        "An engaging session by Mr. Hemang Prakhar introducing students to the Cybersecurity Grand Challenge 2.0",
      image: "/images/event2.jpg"
    },
    {
      id: 4,
      title: "Expert Lecture on Careers in Cybersecurity",
      attendees: "88 participants",
      type: "Guest Lecture",
      highlight:
        "The session provided key insights which helped students to kickstart their career in Cybersecurity domain by Mr. Sandip Jadav",
      image: "/images/event3.jpg"
    },
    {
      id: 5,
      title: "Cyber Awareness Session",
      attendees: "92 participants",
      type: "Workshop",
      highlight:
        "Cyber Jagrukta - Dr. Uday Pratap Rao guided our M.Tech. in Cybersecurity students to a safe digital world",
      image: "/images/event4.jpg"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="events" className="py-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our exciting lineup of cybersecurity workshops, competitions, and industry talks 
            designed to enhance your skills and knowledge.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Upcoming Event (PlaceMate Style) */}
        {activeTab === 'upcoming' && (
          <div>
            {upcomingEvents.length === 0 ? (
      <div className="text-center py-20">
        <h3 className="text-3xl font-bold text-gray-300">
          🚀 No upcoming events right now!
        </h3>
      </div>
    ) : (upcomingEvents.map((event) => (
              <div key={event.id} className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
                
                {/* Left Poster */}
                <div className="relative md:col-span-5 order-2 md:order-1">
                  <div className="relative overflow-hidden rounded-xl max-w-md mx-auto bg-gray-800/50 p-4 border border-gray-700/50 flex items-center justify-center min-h-[400px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-transparent rounded-xl"></div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-7 order-1 md:order-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {event.title.split(" ")[0]}{" "}
                    <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                      {event.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-xl text-gray-200 font-medium">
                      The CSC Team cordially invites you to attend an exciting workshop on spyware, malware and digital episonage!
                    </p>
                  </div>

                  {/* Event Details Box */}
                  <div className="mt-6 bg-gray-800 rounded-xl p-6 grid md:grid-cols-2 gap-4 shadow-lg border border-gray-700">
                    <div>
                      <p className="text-gray-400 text-sm">Mode</p>
                      <p className="font-semibold">Offline</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="font-semibold">{event.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Venue</p>
                      <p className="font-semibold">{event.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Time</p>
                      <p className="font-semibold">{event.time}</p>
                    </div>
                  </div>

                  {/* Register Button */}
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
                  >
                    Register Now For Hackverse !
                  </a>
                </div>
              </div>
            )))}
          </div>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{event.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <span className="text-green-400 font-semibold text-sm">{event.attendees}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{event.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
// nothing have a fun
export default Events;