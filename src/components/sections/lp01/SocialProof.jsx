import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { Carousel } from "primereact/carousel";
import Button from "../../interactives/Button";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

// Importar imagens
import img1 from "../../../assets/imgs/testimonials/testimonials1.webp";
import img2 from "../../../assets/imgs/testimonials/testimonials2.webp";
import img3 from "../../../assets/imgs/testimonials/testimonials3.webp";
import img4 from "../../../assets/imgs/testimonials/testimonials4.webp";
import img5 from "../../../assets/imgs/testimonials/testimonials5.webp";
import contentLp01 from "../../../content/contentLp01";

export default function SocialProof() {
  return (
    <SectionArea className="squares" paddingtop={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between pt-[350px] phone2:pt-[100%] phone3:pt-[90%] tablet1:pt-[65%] tablet2:pt-[65%] desktop1:pt-[55%] desktop2:tablet1:pt-[550px]">
        <div className="w-full">
          <SectionHeader
            className="justify-center text-center desktop1:flex"
            miniTitle={contentLp01.testimonials.sectionHeader.miniTag}
            sectionHeaderTitle={contentLp01.testimonials.sectionHeader.title}
            sectionHeaderSubtitle={
              contentLp01.testimonials.sectionHeader.subtitle
            }
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />

          <div className="flex flex-wrap bg-red-900 justify-evenly items-start gap-5">
            <img src={img1} alt="Imagem de Depoimento1" className="w-[220px]" />
            <img src={img2} alt="Imagem de Depoimento2" className="w-[220px]" />
            <img src={img3} alt="Imagem de Depoimento3" className="w-[220px]" />
            <img src={img4} alt="Imagem de Depoimento4" className="w-[220px]" />
            <img src={img5} alt="Imagem de Depoimento5" className="w-[220px]" />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
