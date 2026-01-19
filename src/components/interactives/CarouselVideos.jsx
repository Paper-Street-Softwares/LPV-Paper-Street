// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import SectionArea from '../sectionElements/SectionArea'
// import SectionWrapper from '../sectionElements/SectionWrapper'
// import SectionHeader from '../sectionElements/SectionHeader'
// import contentLp01 from '../../content/contentLp01'
// import MotionDivDownToUp from '../animation/MotionDivDownToUp'
// import Button from './Button'

// export default function VideoCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: 'start',
//     dragFree: false,
//     skipSnaps: false,
//   })

//   const videos = Object.values(contentLp01.videos.sites)

//   const videoRefs = useRef([])
//   const wrapperRefs = useRef([])
//   const observerRef = useRef(null)

//   const [loaded, setLoaded] = useState(() => videos.map(() => false))
//   const [activeIndex, setActiveIndex] = useState(0)

//   /* =============================
//    EMBLA SELECT
//   ==============================*/
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setActiveIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return
//     onSelect()
//     emblaApi.on('select', onSelect)
//   }, [emblaApi, onSelect])

//   /* =============================
//    INTERSECTION OBSERVER
//   ==============================*/
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return
//           const index = Number(entry.target.dataset.index)
//           setLoaded((prev) => {
//             if (prev[index]) return prev
//             const copy = [...prev]
//             copy[index] = true
//             return copy
//           })
//           observerRef.current.unobserve(entry.target)
//         })
//       },
//       { threshold: 0.3 },
//     )

//     wrapperRefs.current.forEach((el) => {
//       if (el) observerRef.current.observe(el)
//     })

//     return () => observerRef.current?.disconnect()
//   }, [])

//   /* =============================
//    PLAY / PAUSE
//   ==============================*/
//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return
//       if (index === activeIndex) {
//         video.play().catch(() => {})
//       } else {
//         video.pause()
//       }
//     })
//   }, [activeIndex])

//   return (
//     <SectionArea>
//       <SectionWrapper>
//         <div className="flex flex-col items-center w-full max-w-[1215px] m-auto bg-bgFixedLight">
//           <SectionHeader
//             className="justify-center text-center"
//             sectionHeaderTitle={contentLp01.videos.sectionHeader.title}
//             sectionHeaderSubtitle={contentLp01.videos.sectionHeader.subtitle}
//             titleColorSet="text-black"
//             subtitleColorSet="text-black"
//           />

//           <MotionDivDownToUp>
//             <div className="overflow-hidden w-[95%] m-auto" ref={emblaRef}>
//               <div className="flex">
//                 {videos.map((src, index) => (
//                   <div
//                     key={index}
//                     className="
//                       flex justify-center
//                       flex-[0_0_50%]
//                       tablet1:flex-[0_0_33.333%]
//                       desktop2:flex-[0_0_25%]
//                       px-2
//                     "
//                   >
//                     <div
//                       ref={(el) => (wrapperRefs.current[index] = el)}
//                       data-index={index}
//                       className="
//                         rounded-[25px]
//                         overflow-hidden
//                         bg-black/40
//                         shadow-lg
//                         p-0.5
//                         border-black/40
//                         w-full
//                         aspect-[9/16]
//                       "
//                     >
//                       {loaded[index] && (
//                         <video
//                           ref={(el) => (videoRefs.current[index] = el)}
//                           src={src}
//                           muted
//                           loop
//                           playsInline
//                           preload="metadata"
//                           className="w-full h-full object-cover rounded-[20px] bg-black"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* BULLETS */}
//             <div className="flex justify-center gap-2 mt-6 desktop2:hidden">
//               {[0, 2].map((scrollIndex, index) => (
//                 <button
//                   key={index}
//                   onClick={() => emblaApi?.scrollTo(scrollIndex)}
//                   aria-current={activeIndex === scrollIndex}
//                   className={`rounded-full transition-all ${
//                     activeIndex === scrollIndex
//                       ? 'bg-primaryDark w-5 h-5'
//                       : 'bg-white w-3 h-3 border border-black/40'
//                   }`}
//                 />
//               ))}
//             </div>
//           </MotionDivDownToUp>

//           <div className="flex justify-center w-full pt-10">
//             <MotionDivDownToUp>
//               <Button
//                 aria-label="Quero um orçamento sem compromisso"
//                 label={contentLp01.hero.textArea.buttonLabel2}
//                 color="bg-[#075e54]"
//                 textclassName="text-white"
//                 animation
//                 className="w-full"
//               />
//             </MotionDivDownToUp>
//           </div>
//         </div>
//       </SectionWrapper>
//     </SectionArea>
//   )
// }
