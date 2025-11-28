import HeroLP from "../components/sections/lp01/HeroLP";
import WhatsappAnimated from "../components/interactives/WhatsappAnimated";
import React from "react";

const VideoCarousel = React.lazy(() =>
  import("../components/interactives/CarouselVideos")
);
const SocialProof = React.lazy(() =>
  import("../components/sections/lp01/SocialProof")
);
const Client = React.lazy(() => import("../components/sections/lp01/Client"));
const AboutParalaxeLP = React.lazy(() =>
  import("../components/sections/lp01/AboutParalaxeLP")
);
const FooterLP = React.lazy(() =>
  import("../components/sections/lp01/FooterLP")
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
