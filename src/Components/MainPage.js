import React from 'react';
import HeaderLogin from './HeaderLogin';

const MainPage = () => {
  return (
    <div className="h-screen w-screen relative"> {/* Ensure relative positioning */}
      {/* Header with z-index to keep it clickable */}
      <div className="relative z-20"> {/* Increased z-index */}
        <HeaderLogin />
      </div>

      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-10"> {/* Added z-index */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 flex-col">
        <h1 className="animate-fade-up animate-once animate-ease-in text-6xl font-bold mb-10">Welcome to CINEPULSE GPT</h1>
        <h1 className="animate-fade-up animate-once animate-ease-in text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
        <h1 className="animate-fade-up animate-once animate-ease-in text-xl font-bold mt-4">Powered by AI</h1>
      </div>
    </div>
  );
};

export default MainPage;