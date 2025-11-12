import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import FooterLP from "../components/sections/lp01/FooterLP";
import HeroLP from "../components/sections/lp01/HeroLP";
import contentLp01 from "../content/contentLp01";
import { useEffect } from "react";
import VideoCarousel from "../components/interactives/CarouselVideos";
import SocialProof from "../components/sections/lp01/SocialProof";
import Client from "../components/sections/lp01/Client";

export default function Lp01() {
  useEffect(() => {
    document.title = contentLp01.infos.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", contentLp01.infos.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = contentLp01.infos.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", contentLp01.infos.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = contentLp01.infos.keywords;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-bgFixedLight">
      <HeroLP fullImg={true} />
      <VideoCarousel />
      <SocialProof />
      <Client />
      <AboutParalaxeLP logo={true} />
      <FooterLP />
      <FloatingWhatsappButton />
    </div>
  );
}
