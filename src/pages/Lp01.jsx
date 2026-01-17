import HeroLP from '../components/sections/lp01/HeroLP'
import React from 'react'

const VideoCarousel = React.lazy(
  () => import('../components/interactives/CarouselVideos'),
)
const SocialProof = React.lazy(
  () => import('../components/sections/lp01/SocialProof'),
)
const Client = React.lazy(() => import('../components/sections/lp01/Client'))
const AboutParalaxeLP = React.lazy(
  () => import('../components/sections/lp01/AboutParalaxeLP'),
)
const FooterLP = React.lazy(
  () => import('../components/sections/lp01/FooterLP'),
)

const WhatsappAnimated = React.lazy(
  () => import('../components/interactives/WhatsappAnimated'),
)

export default function Lp01() {
  return (
    <div className="bg-bgFixedLight">
      {/* <div className="bg-primary flex justify-center">
        <h1 className="text-title2">
          Para Advogados(a) que precisam captar clientes na internet
        </h1>
      </div> */}
      <HeroLP fullImg={true} />
      <VideoCarousel />
      <SocialProof />
      <Client />
      <AboutParalaxeLP logo={true} />
      <FooterLP />
      <WhatsappAnimated />
    </div>
  )
}
