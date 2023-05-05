import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import {
  CarousalWrapper,
  CarouselButton,
  CarouselHolder,
  CarousalSize,
} from 'components/Carousel/styled'
import { CarouselImages } from 'components/Carousel/Data'

const carouselRef = React.createRef()

export const BannerCarousel = () => {
  return (
    <CarousalWrapper>
      <CarouselButton
        secondary
        onClick={() => {
          carouselRef.current.prev()
        }}
      >
        <MdKeyboardArrowLeft />
      </CarouselButton>
      <CarouselButton
        secondary
        onClick={() => {
          carouselRef.current.next()
        }}
      >
        <MdKeyboardArrowRight />
      </CarouselButton>

      <CarouselHolder
        autoplay
        effect="fade"
        ref={carouselRef}
        dots={false}
        pauseOnHover={true}
        draggable
      >
        {CarouselImages.map((item, index) => (
          <CarousalSize key={index} span={24}>
            <img src={item.path} alt={item.name} />
          </CarousalSize>
        ))}
      </CarouselHolder>
    </CarousalWrapper>
  )
}
