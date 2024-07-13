import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Video from "@/components/sections/Video";
import Texto1 from "@/components/sections/Texto1";
import Airpods from "@/components/sections/Airpods";
import Bento from "@/components/sections/Bento";
import Volume from "@/components/sections/Volume";

const Home = () => {
  return (
    <main className="apple-regular">
      <Navbar />
      <Hero />
      <Video />
      <Texto1 />
      <Airpods />
      <Bento />
      <Volume />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </main>
  );
};

export default Home;
