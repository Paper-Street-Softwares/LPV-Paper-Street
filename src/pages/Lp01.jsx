import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import FooterLP from "../components/sections/lp01/FooterLP";
import HeroLP from "../components/sections/lp01/HeroLP";
import VideoCarousel from "../components/interactives/CarouselVideos";
import SocialProof from "../components/sections/lp01/SocialProof";
import Client from "../components/sections/lp01/Client";
import WhatsappAnimated from "../components/interactives/WhatsappAnimated";

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
