import React from "react";
import { Gem, TvMinimalPlay, Unlink } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex flex-col lg:mt-20 lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Tag box gradient border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-[linear-gradient(90deg,#a855f7,#ec4899,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)] bg-[length:300%_300%] animate-rainbow-border shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <Gem />
            <span className="text-sm font-semibold tracking-wider">
              INTRODUCING
            </span>
          </div>
        </div>

        {/* Main header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold m-0 mt-4 tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPER
        </h1>

        {/* Decription */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Reach inboxes, not spam folders — send transactional and marketing
          emails reliably at scale
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a
            href="#"
            className="flex gap-3 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Documentation <Unlink />
          </a>
          <a
            href="#"
            className="flex gap-3 items-center border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-white bg-gray-300 text-black"
          >
            GetStarted
            <TvMinimalPlay />
          </a>
        </div>
      </div>

      {/* Hero 3D Robot */}
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/S1qFeuWVP6Th4zat/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
