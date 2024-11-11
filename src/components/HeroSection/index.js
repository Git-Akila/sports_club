import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
const HeroSection = () => {
  return (
    <header className="hero">
      <div className="container hero__wrapper">
        <div className="hero__grid">
          <h1 className="md:hero__text text-5xl  text-white font-bold animate-pop-in">
            JOIN THE BEST
            <span> SPORTS CLUB</span>
          </h1>
          <h3 class="animate-pop-in text-white font-bold">
            <span>Challenge</span> your limits
          </h3>
          <p class="animate-pop-in">
            New events every week! Challenge yourself, your mind, your family
            and friends. Get to know us in the button below
          </p>
          {/* <LinkR to="/dashboard/#events"  className="btn primary bg-white animate-pop-in btn--animated justify-center text-center gap-2 flex">
            Events <MdArrowForward />
          </LinkR> */}

          <a
            href="/login"
            className="hidden lg:inline-flex items-center p-2 text-base font-semibold text-white bg-[#1E90FF] rounded-md hover:bg-blue-700"
          >
            Get started now
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
