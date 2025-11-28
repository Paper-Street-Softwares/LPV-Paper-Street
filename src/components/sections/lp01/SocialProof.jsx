import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import React, { useRef, useState } from "react";
import contentLp01 from "../../../content/contentLp01";
import { Pause, Play } from "lucide-react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

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
    <div className="relative w-[90%] desktop1:w-[250px] desktop2:w-[300px] rounded-lg overflow-hidden shadow-md flex mx-auto border ">
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="object-cover border-2 border-[#075e54]/40 rounded-lg"
      />

      <div className="absolute flex items-center gap-2 px-4 text-xs text-white -translate-x-1/2 rounded-full bottom-2 left-1/2 bg-[#075e54]">
        <button onClick={togglePlay} className="transition hover:scale-110">
          {isPlaying ? <Pause width={14} /> : <Play width={14} />}
        </button>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const audios = Object.values(contentLp01.socialProof.depoimentos.audios);

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

          <MotionDivDownToUp>
            <div className="grid grid-cols-1 tablet1:grid-cols-2 gap-4 desktop1:grid-cols-3 ">
              {audios.map((audio, index) => (
                <SocialProofVideo key={index} src={audio} />
              ))}
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
