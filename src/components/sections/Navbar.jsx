import React, { useState, useEffect } from "react";
import Bag from "../icons/Bag";
import Search from "../icons/Search";
import Apple from "../icons/Apple";
import Menu from "../icons/Menu";

const Navbar = () => {
  const [paddingTop, setPaddingTop] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => {
        if (window.scrollY <= 44) {
          setPaddingTop(window.scrollY);
        } else {
          setPaddingTop(44);
        }
      };

      window.addEventListener("scroll", onScroll);
    }
  }, []);

  const Bar = () => {
    return (
      <>
        <div className="nav-top-container">
          {/*//*DESKTOP /////////////////////////////////////////////////////////////////////////////*/}
          <div className="nav-top 2xl:px-[85px] sm:px-[40px] px-[12px] md:flex hidden">
            <div className="nav-option !text-[17px] -mt-1">
              <Apple />
            </div>
            <div className="nav-option">Store</div>
            <div className="nav-option">Mac</div>
            <div className="nav-option">iPad</div>
            <div className="nav-option">iPhone</div>
            <div className="nav-option">Watch</div>
            <div className="nav-option">Airpods</div>
            <div className="nav-option">TV & Home</div>
            <div className="nav-option">Entertaiment</div>
            <div className="nav-option">Accessories</div>
            <div className="nav-option">Support</div>
            <div className="nav-option !text-[18px]">
              <Search />
            </div>
            <div className="nav-option !text-[16px]">
              <Bag />
            </div>
          </div>

          {/*//*MOBILE /////////////////////////////////////////////////////////////////////////////*/}
          <div className="nav-top 2xl:px-[85px] sm:px-[40px] px-[12px] md:hidden flex">
            <div className="nav-option !text-[20px] -mt-1">
              <Apple />
            </div>
            <div className=" flex justify-centeritems-center gap-8">
              <div className="nav-option !text-[18px]">
                <Search />
              </div>
              <div className="nav-option !text-[16px]">
                <Bag />
              </div>
              <div className="nav-option !text-[16px]">
                <Menu />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`nav-bottom-container ${
            paddingTop === 44 ? "" : "max-w-[1150px]"
          }`}
        >
          <div className="nav-bottom 2xl:px-[85px] sm:px-[40px] px-[12px]">
            <div>
              <div className="apple-semibold md:text-[20px] text-[19px] tracking-wide leading-none">
                AirPods Max
              </div>
            </div>
            <div className="flex gap-6 items-center apple-light">
              <div className="nav-option2 pointer-events-none sm:block hidden">
                Overview
              </div>
              <div className="nav-option2 sm:block hidden">Tech Specs</div>
              <div className="nav-option2 sm:block hidden">Compare</div>
              <div className="buy-btn">Buy</div>
            </div>
          </div>
          <div className={paddingTop != 44 ? "2xl:px-[85px] lg:px-[40px]" : ""}>
            <div className="w-full border-[#d6d6d6] border-b-[1px]"></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <nav className="w-full fixed z-50">
      <div style={{ marginTop: -paddingTop }} className="sm:block hidden bar">
        <Bar />
      </div>

      <div className="sm:hidden block">
        <Bar />
      </div>
    </nav>
  );
};

export default Navbar;
