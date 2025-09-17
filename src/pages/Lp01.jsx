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
      <Urgency />
      <Testimonial />
      <Steppers />

      <SolutionLPV />
      <NwesPosts />

      <WhyUs />
      <FeaturesLPCards />

      {/* <AboutParalaxeLP logo={true} /> */}

      <CtaLP />
      {/* <Faq /> */}
      <ContactLP />
      <FooterLP />
      {/* <LPFloatingWhatsappButton /> */}
      <FloatingWhatsappButton />
      {/* <WhatsChat /> */}
      <BackToTopButton />
    </div>
  );
}
