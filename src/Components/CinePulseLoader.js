import React, { useEffect, useState } from "react";

const CinePulseLoader = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown animation
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    // Clear interval after countdown
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      {/* Film Reel Animation */}
      <div className="relative w-24 h-24 border-4 border-cyan-400 rounded-full animate-spin">
        <div className="absolute w-4 h-4 bg-cyan-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-4 h-4 bg-cyan-400 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Pulsating Effect */}
      <div className="absolute w-48 h-48 border-4 border-cyan-400 rounded-full animate-ping opacity-0"></div>

      {/* CinePulse Text */}
      <div className="absolute text-4xl font-bold text-white animate-fade-in">
        Cine<span className="text-cyan-400">Pulse</span>
      </div>

      {/* Countdown Animation */}
      {countdown > 0 && (
        <div className="absolute text-6xl font-bold text-white animate-countdown">
          {countdown}
        </div>
      )}
    </div>
  );
};

export default CinePulseLoader;