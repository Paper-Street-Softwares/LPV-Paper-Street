import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

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
    "/jessicaFernandes.mp4",
    "/carlabotelho.mp4",
    "/thabata.mp4",
    "edvaldo.mp4",
  ];

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="flex flex-col items-center w-full max-w-[1215px] m-auto justify-evenly  bg-bgFixedLight ">
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
                  <div className="rounded-md desktop1:rounded-[25px] overflow-hidden bg-white p-0.5 desktop1:border-8 w-full max-w-[178px] h-auto phone3:max-w-[267px] tablet2:max-w-[226px] desktop1:max-w-[309.32px] desktop2:max-w-[277.5px] ">
                    <video
                      src={video}
                      autoPlay={true}
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
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-primary w-5" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
