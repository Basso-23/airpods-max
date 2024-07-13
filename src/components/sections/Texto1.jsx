import React, { useState, useEffect } from "react";

const Texto1 = () => {
  return (
    <section className="2xl:max-w-[1225px] lg:max-w-[980px] sm:max-w-[745px] max-w-[370px] sm:mt-[100px] mt-[75px] mx-auto apple-semibold xl:px-0 px-6">
      <div className="2xl:text-[32px] lg:text-[21px] text-[19px]">Design</div>

      <div className="2xl:text-[180px] lg:text-[140px] sm:text-[96px] text-[56px] leading-none">
        <div>A radically</div>
        <div>original</div>
        <div>composition.</div>
      </div>

      <div className="2xl:text-[32px] lg:text-[21px] text-[19px] flex sm:justify-end 2xl:mt-[55px] lg:mt-[60px] sm:mt-[40px] mt-[20px]">
        <div className="2xl:max-w-[610px] lg:max-w-[415px] max-w-[350px] leading-tight">
          The over-ear headphone has been completely reimagined. From cushion to
          canopy, AirPods Max are designed for an uncompromising fit that
          creates the optimal acoustic seal for many different head shapes —
          fully immersing you in every sound.
        </div>
      </div>
    </section>
  );
};
export default Texto1;
