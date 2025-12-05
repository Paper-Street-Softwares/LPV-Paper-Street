import HeroLP from "../components/sections/lp01/HeroLP";
import WhatsappAnimated from "../components/interactives/WhatsappAnimated";
import React, { Suspense, useEffect, useState } from "react";

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
  const [showBelow, setShowBelow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setShowBelow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-bgFixedLight">
      <HeroLP fullImg={true} />

      <Suspense fallback={null}>
        {showBelow && <VideoCarousel />}
        {showBelow && <SocialProof />}
        {showBelow && <Client />}
        {showBelow && <AboutParalaxeLP logo={true} />}
        {showBelow && <FooterLP />}
      </Suspense>

      <WhatsappAnimated />
    </div>
  );
}
