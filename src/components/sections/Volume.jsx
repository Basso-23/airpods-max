import React, { useState, useEffect } from "react";

const Volume = () => {
  return (
    <section className="mt-[175px] overflow-x-clip">
      <div
        style={{
          backgroundImage: "url(https://i.imgur.com/zfCnk7l.jpeg)",
        }}
        className="sm:scale-100 scale-150 aspect-[16/8.2] w-full bg-no-repeat bg-contain bg-top flex"
      >
        <div
          style={{ color: "#D0E9FD" }}
          className="sm:max-w-[475px] max-w-[225px] md:text-[24px] sm:text-[16px] text-[12px] 2xl:pb-[200px] xl:pb-[150px] lg:pb-[100px] sm:pb-[75px] pb-[4vw]                   a-bottom-info text-center self-end h-fit"
        >
          Press the <span className="text-[#FFFEFE]">Digital Crown</span> to
          play and pause music or mute and unmute yourself on calls, and press
          twice to skip between tracks or end calls. Turn it to precisely
          control volume.
        </div>
      </div>
    </section>
  );
};
export default Volume;
