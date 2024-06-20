import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const Airpods = () => {
  const textVariants = (time) => ({
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: time,
      },
    },
  });

  return (
    <section>
      <div className="overflow-x-clip">
        <div className="sm:scale-[1] scale-[1] sm:max-w-[9999px] max-w-[350px] mt-[150px] mx-auto">
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/3hz1mGO.png)",
            }}
            className="sm:h-[35vw] sm:min-h-[450px] sm:w-full w-[150%] sm:ml-0 ml-[-25%] mx-auto a-desktop-image"
          >
            {/*//*DESKTOP INFO /////////////////////////////////////////////////////////////////////////////*/}
            <div className="md:grid hidden 2xl:max-w-[1275px] max-w-[1150px] 2xl:px-[85px] sm:px-[40px] px-[12px] a-desktop-info">
              <div className="h-full w-full">
                <m.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={textVariants(0)}
                  className="max-w-[275px]"
                >
                  The <span className="text-[#1c1d1e]">canopy</span> spanning
                  the headband is made from a breathable knit mesh, distributing
                  weight to reduce on-head pressure.
                </m.div>

                <m.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={textVariants(0.25)}
                  className="max-w-[290px] mt-24"
                >
                  The{" "}
                  <span className="text-[#1c1d1e]">stainless steel frame</span>{" "}
                  is wrapped with a soft-to-the-touch material for a remarkable
                  combination of strength, flexibility, and comfort.
                </m.div>
              </div>
              <m.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants(0.5)}
                className="h-full w-full justify-end items-end flex"
              >
                <div className="max-w-[275px] mb-[8vw] h-fit ">
                  <span className="text-[#1c1d1e]">Telescoping arms</span>{" "}
                  smoothly extend and stay where you set them, for a consistent
                  fit and seal.
                </div>
              </m.div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/meHhD3B.png)",
            }}
            className="sm:h-[35vw] sm:min-h-[450px] sm:w-full w-[150%] sm:ml-0 ml-[-25%] mx-auto a-mobile-image"
          >
            {/*//*MOBILE INFO /////////////////////////////////////////////////////////////////////////////*/}
            <div className="md:hidden block a-mobile-info">
              <m.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants(0)}
              >
                <span className="text-white">Telescoping arms</span> smoothly
                extend and stay where you set them, for a consistent fit and
                seal.
              </m.div>
            </div>
          </div>
        </div>
      </div>

      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants(0)}
        className="md:text-[21px] text-[18px] md:text-center md:max-w-[375px] max-w-[325px] a-bottom-info"
      >
        The{" "}
        <span className="text-[#1c1d1e]">
          beautifully anodized aluminum cups
        </span>{" "}
        feature a revolutionary mechanism that allows each cup to rotate
        independently and balance pressure.
      </m.div>
    </section>
  );
};
export default Airpods;
