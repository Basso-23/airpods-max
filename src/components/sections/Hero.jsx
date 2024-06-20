import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Play from "../icons/Play";

const Hero = () => {
  const [windowX, setWindowX] = useState();
  const [windowY, setWindowY] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onResize = () => {
        setWindowX(window.innerWidth);
        setWindowY(window.innerHeight);
      };

      window.addEventListener("resize", onResize);
    }
  }, []);

  return (
    <section className="sm:mb-28 mb-16 h-section">
      {/*//*DESKTOP /////////////////////////////////////////////////////////////////////////////*/}
      <div className="sm:flex sm:flex-col hidden h-desktop-container">
        <div className="h-desktop">
          <m.div
            initial={{ scale: 1.4, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            style={{
              backgroundImage: "url(https://i.imgur.com/IWW2LuU.png)",
            }}
            className="h-desktop-image"
          ></m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="z-30 w-full texto"
          >
            <div className="apple-semibold h-title">AirPods Max</div>
          </m.div>
        </div>

        <div className="md:max-w-[1100px] max-w-[600px] 2xl:px-[85px] sm:px-[40px] px-[12px] h-subtitle text-[min(3.8vw,32px)] mt-24 apple-semibold">
          Introducing AirPods Max — a perfect balance of exhilarating
          high-fidelity audio and the effortless magic of AirPods. The ultimate
          personal listening experience is here.
        </div>

        <div className="sm:text-[24px] text-[18px] apple-semibold h-subtitle2">
          <div className="cursor-pointer hover:underline">
            Watch <span className="apple-semibold-i">Journey into Sound</span>
          </div>
          <div className="play-btn">
            <div className="mr-[-1px]">
              <Play />
            </div>
          </div>
        </div>
      </div>

      {/*//*MOBILE /////////////////////////////////////////////////////////////////////////////*/}
      <div className="sm:hidden block pt-[150px]">
        <div className="w-full mt-[-56px]">
          <div className="h-mobile">
            <m.div
              initial={{ scale: 1.4, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring",
              }}
              style={{
                backgroundImage: "url(https://i.imgur.com/IWW2LuU.png)",
              }}
              className="lg:w-[50%] w-[100%] !max-w-[375px] h-image"
            ></m.div>
          </div>
        </div>
        <div className="pt-[50px]">
          <div className="apple-semibold text-[50px] text-center">
            AirPods Max
          </div>
          <div className="sm:text-[31px] text-[20px] 2xl:px-[85px] sm:px-[40px] px-[12px] apple-semibold h-subtitle">
            Introducing AirPods Max — a perfect balance of exhilarating
            high-fidelity audio and the effortless magic of AirPods. The
            ultimate personal listening experience is here.
          </div>

          <div className="sm:text-[24px] text-[18px] apple-semibold h-subtitle2">
            <div className="cursor-pointer hover:underline">
              Watch <span className="apple-semibold-i">Journey into Sound</span>
            </div>
            <div className="play-btn">
              <div className="mr-[-1px]">
                <Play />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
