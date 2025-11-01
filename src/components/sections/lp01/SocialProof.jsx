import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import React, { useRef, useState } from "react";

import img1 from "../../../../public/socialProof/printhernani.webp";
import img5 from "../../../../public/socialProof/printperez.webp";
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

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 px-3 py-1 rounded-full text-white text-xs items-center">
        <button onClick={togglePlay} className="hover:scale-110 transition">
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

          <div className="flex flex-wrap justify-evenly items-start gap-5 desktop1:gap-0">
            <img
              src={img1}
              alt="Imagem de Depoimento1"
              className="w-[90%] desktop1:w-[170px] desktop2:w-[220px]"
            />

            <SocialProofVideo src="socialProof/videogabriele.mp4" />
            <SocialProofVideo src="socialProof/videoperez.mp4" />
            <SocialProofVideo src="socialProof/videovivianepinheiro.mp4" />

            <img
              src={img5}
              alt="Imagem de Depoimento5"
              className="w-[90%] desktop1:w-[170px] desktop2:w-[220px]"
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
