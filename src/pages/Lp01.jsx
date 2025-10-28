import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import ContactLP from "../components/sections/lp01/ContactLP";
import CtaLP from "../components/sections/lp01/CtaLP";
import FooterLP from "../components/sections/lp01/FooterLP";
import HeroLP from "../components/sections/lp01/HeroLP";
import WhyUs from "../components/sections/lp01/WhyUs";
import FeaturesLP from "../components/sections/lp01/FeaturesLP";
import contentLp01 from "../content/contentLp01";

import { useEffect } from "react";
import Urgency from "../components/sections/lp01/Urgency";
import FeaturesLPCards from "../components/sections/lp01/FeaturesLPCards";
import SolutionLPV from "../components/sections/lp01/Solution";
import NwesPosts from "../components/sections/NewsPosts";
import Steppers from "../components/sections/lp01/Steppers";
import Testimonial from "../components/sections/lp01/Testimonials";
import Faq from "../components/sections/Faq";
import VideoCarousel from "../components/interactives/CarouselVideos";
import SocialProof from "../components/sections/lp01/SocialProof";

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
    <div>
      {/* <div className="bg-green-300 text-black dark:bg-green-300 dark:text-black h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Teste Darkmode</h1>
      </div> */}
      <HeroLP fullImg={false} />
      <div className="absolute left-1/2 -translate-x-1/2 top-[100%] phone2:top-[90%] phone3:top-[80%] tablet1:top-[75%] tablet2:top-[60%] desktop1:top-[45%] desktop2:top-[350px] z-20 w-full flex justify-center">
        <div className="w-full">
          <VideoCarousel />
        </div>
      </div>
      {/* <Urgency />
      <SolutionLPV />
      <NwesPosts />
      <Steppers />
      <WhyUs /> */}
      {/* <FeaturesLPCards /> */}
      {/* <Faq />
      <CtaLP />
      <ContactLP />
      <FooterLP /> */}
      {/* <Testimonial /> */}
      <SocialProof />
      <AboutParalaxeLP logo={true} />
      {/* <LPFloatingWhatsappButton /> */}
      <FloatingWhatsappButton />
      {/* <WhatsChat /> */}
      <BackToTopButton />
    </div>
  );
}
