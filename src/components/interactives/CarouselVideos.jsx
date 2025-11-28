import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import contentLp01 from "../../content/contentLp01";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "./Button";

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start", // 👈 centraliza sempre
      dragFree: false,
      skipSnaps: false,
    }
    // [Autoplay({ delay: 5000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const videos = [
    "/Jessica.mov",
    "Thabata.mov",
    "/Thais.mov",
    "/Edvaldo.mov",
    "Carla.mov",
  ];

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="flex flex-col items-center w-full max-w-[1215px] m-auto justify-evenly  bg-bgFixedLight ">
          <SectionHeader
            className="justify-center text-center desktop1:flex"
            sectionHeaderTitle={contentLp01.videos.sectionHeader.title}
            sectionHeaderSubtitle={contentLp01.videos.sectionHeader.subtitle}
            miniTitleBgColor={false}
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />
          <MotionDivDownToUp>
            {/* VIEWPORT */}
            <div className="overflow-hidden w-[95%] m-auto " ref={emblaRef}>
              {/* CONTAINER */}
              <div className="flex">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="
                flex justify-center
                flex-[0_0_50%]     /* 👈 2 slides no mobile */
                tablet1:flex-[0_0_33.333%] /* 👈 3 slides em telas médias */
                desktop2:flex-[0_0_25%]     /* 👈 4 slides no desktop */
                px-2
              "
                  >
                    <div className="rounded-md desktop1:rounded-[25px] overflow-hidden bg-[#075e54]/70 shadow-lg p-0.5 desktop1:border-2 border-[#075e54]/40 w-full max-w-[178px] h-auto phone3:max-w-[267px] tablet2:max-w-[226px] desktop1:max-w-[309.32px] desktop2:max-w-[277.5px] ">
                      <video
                        src={video}
                        autoPlay={true}
                        preload="lazy"
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-top rounded-md desktop1:rounded-[20px] bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* BULLETS */}
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Ir para o slide ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-[#075e54] w-5 h-5"
                      : "bg-white w-5 h-5 border border-[#075e54]"
                  }`}
                ></button>
              ))}
            </div>
          </MotionDivDownToUp>

          <div className="flex justify-center w-full pt-[40px]">
            <MotionDivDownToUp>
              <Button
                aria-label={contentLp01.hero.textArea.ctaButtonAriaLabel}
                label={contentLp01.hero.textArea.buttonLabel2}
                color="bg-[#075e54]"
                textclassName="text-white"
                animation
                className="w-[100%]"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
