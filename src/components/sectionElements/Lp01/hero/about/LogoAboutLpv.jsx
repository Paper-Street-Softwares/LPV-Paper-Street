import React from "react";
import contentLp01 from "../../../../../content/contentLp01";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";

function LogoAboutLpv() {
  return (
    <MotionDivDownToUp className=" w-[100%] justify-center desktop1:w-[415px] desktop2:w-[485px] flex desktop1:justify-center">
      <picture>
        <source
          srcSet={contentLp01.about.imgAbout.imgMobile}
          media="(max-width: 424px)"
        />
        <img
          src={contentLp01.about.imgAbout.img}
          alt={contentLp01.about.logo.alt}
          width="930"
          height="930"
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
        />
      </picture>
    </MotionDivDownToUp>
  );
}

export default LogoAboutLpv;
