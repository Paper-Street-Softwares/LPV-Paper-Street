import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import React, { useRef, useState } from "react";

import img1 from "../../../../public/socialProof/printhernani.webp";
import imgMobile1 from "../../../../public/socialProof/printhernaniMobile.webp";

import img5 from "../../../../public/socialProof/printperez.webp";
import imgMobile5 from "../../../../public/socialProof/printperezMobile.webp";
import contentLp01 from "../../../content/contentLp01";

function SocialProofVideo({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-[90%] desktop1:w-[170px] desktop2:w-[220px] rounded-lg overflow-hidden shadow-md">
      <video ref={videoRef} src={src} loop playsInline className="w-full" />

      <div className="absolute flex items-center gap-2 px-3 py-1 text-xs text-white -translate-x-1/2 rounded-full bottom-2 left-1/2 bg-black/60">
        <button onClick={togglePlay} className="transition hover:scale-110">
          {isPlaying ? "⏸️ Pausar" : "▶️ Play"}
        </button>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <SectionArea className="bg-bgSectionOpacityLight">
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-full">
          <SectionHeader
            className="justify-center text-center desktop1:flex"
            sectionHeaderTitle={contentLp01.socialProof.sectionHeader.title}
            sectionHeaderSubtitle={
              contentLp01.socialProof.sectionHeader.subtitle
            }
            miniTitleBgColor={false}
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />

          <div className="flex flex-wrap items-start gap-5 justify-evenly desktop1:gap-0">
            <picture>
              <source srcSet={imgMobile1} media="(max-width: 424px)" />
              <img
                src={img1}
                alt="Imagem de Feedback"
                className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
              />
            </picture>

            <picture>
              <source srcSet={imgMobile5} media="(max-width: 424px)" />
              <img
                src={img5}
                alt="Imagem de Feedback"
                className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
              />
            </picture>
            <SocialProofVideo src="socialProof/videoperez.mp4" />
            <SocialProofVideo src="socialProof/videovivianepinheiro.mp4" />
            <SocialProofVideo src="socialProof/videogabriele.mp4" />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
