import React, { Component } from "react";
import SearchBar from "~/components/SearchInput";


const Hero = ({ heading, message }: ILandingHeroProps) => {
  return (
    <div className="custom_img flex h-screen min-h-min items-center justify-center bg-cover bg-fixed bg-center">
      {/* Overlay*/}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/60" />
      <div className="z-[2] mt-[5rem] p-5 text-white">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <div className="hero_img no-repeat mt-10 h-40 w-full bg-center bg-no-repeat"></div>
        <div>
          <SearchBar />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
