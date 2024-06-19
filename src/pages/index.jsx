import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Video from "@/components/sections/Video";
import Texto1 from "@/components/sections/Texto1";

const Home = () => {
  return (
    <main className="apple-regular">
      <Navbar />
      <Hero />
      <Video />
      <Texto1 />
      <div className=" min-h-screen"></div>
      <div className=" min-h-screen"></div>
      <div className=" min-h-screen"></div>
      <div className=" min-h-screen"></div>
    </main>
  );
};

export default Home;
