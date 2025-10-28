import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start", // 👈 centraliza sempre
      dragFree: false,
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000 })]
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
    "/sites-para-advogados/uploads/0901(3).mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
  ];

  return (
    <div className="flex flex-col items-center w-[100%] justify-evenly bg-red-900">
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
                tablet2:flex-[0_0_33.333%] /* 👈 3 slides em telas médias */
                desktop2:flex-[0_0_25%]     /* 👈 4 slides no desktop */

                px-2
              "
            >
              <div className="rounded-[25px] overflow-hidden bg-white p-0.5 shadow-xl border-8 w-full max-w-[300px] h-[400px] tablet1:h-[400px] tablet2:max-w-[232px] tablet2:h-[500px] desktop1:max-w-[309.33px] desktop1:h-[600px] desktop2:max-w-[277.5px] ">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[20px] bg-black"
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
              index === selectedIndex ? "bg-primary w-5" : "bg-black"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
