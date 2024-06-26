import React, { useState, useEffect } from "react";

const Bento = () => {
  return (
    <section className="mt-40">
      <div className="mx-auto sm:flex md:gap-7             max-w-[1600px] gap-3">
        {/*//*DESKTOP IMAGE /////////////////////////////////////////////////////////////////////////////*/}

        <div className="sm:block hidden w-[63%] pl-7">
          <div
            style={{ backgroundImage: "url(https://i.imgur.com/gN1Oit1.jpeg)" }}
            className="             w-full aspect-[9/13.6] bg-center bg-cover bg-no-repeat"
          ></div>
        </div>

        {/*//*MOBILE IMAGE /////////////////////////////////////////////////////////////////////////////*/}
        <div
          style={{
            backgroundImage: "url(https://i.imgur.com/Xy6Rsdb.jpeg)",
          }}
          className="sm:hidden flex                 max-h-[675px] w-full aspect-[9/15] bg-top bg-cover bg-no-repeat mb-8"
        ></div>

        <div className="sm:pr-7 sm:pl-0 px-7                flex-1">
          <div
            style={{ backgroundImage: "url(https://i.imgur.com/NagPdGF.jpeg)" }}
            className="sm:mx-0 mx-auto sm:max-w-[9999px] max-w-[425px]             w-full aspect-[9/12] bg-center bg-cover bg-no-repeat"
          ></div>

          <div
            style={{ marginTop: 30 }}
            className="sm:mx-0 mx-auto sm:max-w-[9999px] max-w-[425px] md:text-[24px] sm:text-[16px] text-[18px]                   a-bottom-info"
          >
            A{" "}
            <span className="text-[#1c1d1e]">custom-designed mesh textile</span>{" "}
            wraps the ear cushions to provide pillow-like softness while
            listening.
          </div>

          <div
            style={{ backgroundImage: "url(https://i.imgur.com/9epZj4b.jpg)" }}
            className="sm:mx-0 mx-auto sm:max-w-[9999px] max-w-[425px] md:mt-24 mt-20                   w-full aspect-[9/12] bg-center bg-cover bg-no-repeat"
          ></div>

          <div
            style={{ marginTop: 30 }}
            className="sm:mx-0 mx-auto sm:max-w-[9999px] max-w-[425px] md:text-[24px] sm:text-[16px] text-[18px]                  a-bottom-info"
          >
            Crafted with acoustically engineered memory foam, the{" "}
            <span className="text-[#1c1d1e]">ear cushions</span> gently create
            an immersive seal that is the foundation of incredible sound.
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bento;
