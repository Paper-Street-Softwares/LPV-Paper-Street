import HeroLP from "../components/sections/lp01/HeroLP";
import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import Client from "../components/sections/lp01/Client";
import FooterLP from "../components/sections/lp01/FooterLP";
import React from "react";

const VideoCarousel = React.lazy(() =>
  import("../components/interactives/CarouselVideos")
);
const SocialProof = React.lazy(() =>
  import("../components/sections/lp01/SocialProof")
);

const WhatsappAnimated = React.lazy(() =>
  import("../components/interactives/WhatsappAnimated")
);

export default function Lp01() {
  return (
    <div className="bg-bgFixedLight">
      <HeroLP fullImg={true} />
      <VideoCarousel />
      <SocialProof />
      <Client />
      <AboutParalaxeLP logo={true} />
      <FooterLP />
      <WhatsappAnimated />
    </div>
  );
}
