import React from "react";
import WomanImg from "../img/woman_hero.png";
//simport { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <button
            type="button"
            className="cursor-not-allowed self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </button>
        </div>
        <div>
          {/* image */}
          <div className="hidden sm:block">
            <img className="h-[504px]" src={WomanImg} alt="Woman model" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
