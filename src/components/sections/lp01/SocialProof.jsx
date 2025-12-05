import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import React, { useRef, useState, useEffect } from "react";
import contentLp01 from "../../../content/contentLp01";
import { Pause, Play } from "lucide-react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

function SocialProofVideo({ src, poster }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCanLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[230px] bg-cover h-[105px] phone3:w-[300px] phone3:h-[130px] tablet1:w-[260px] rounded-lg overflow-hidden shadow-md border mx-3"
    >
      {!isPlaying && (
        <div className="bg-black/40 absolute inset-0 pointer-events-none" />
      )}

      <video
        ref={videoRef}
        src={canLoad ? src : undefined}
        poster={poster}
        muted
        preload="none"
        loop
        playsInline
        className="w-full h-full object-cover border-2 border-primaryDark rounded-lg"
      />

      <div className="absolute flex items-center gap-2 px-2 w-[140px] py-1 text-xs text-white -translate-x-1/2 rounded-full bottom-2 left-1/2 bg-white shadow-lg transition hover:scale-110 ">
        <button
          onClick={togglePlay}
          className="w-full"
          aria-label="Botão de Player e Pause dos vídeos"
        >
          {isPlaying ? (
            <p className="flex items-center justify-evenly text-black">
              Pausar áudio <Pause width={14} />
            </p>
          ) : (
            <p className="flex items-center justify-evenly text-black">
              Toque para ouvir <Play width={14} />
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const audios = Object.values(contentLp01.socialProof.depoimentos.audios);
  const posters = Object.values(contentLp01.socialProof.depoimentos.posters);

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

          <MotionDivDownToUp className="flex justify-center max-w-[580px] mx-auto desktop1:max-w-full">
            <div className="flex flex-wrap gap-y-6 justify-center items-center">
              {audios.map((audio, index) => (
                <SocialProofVideo
                  key={index}
                  src={audio}
                  poster={posters[index]}
                />
              ))}
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
