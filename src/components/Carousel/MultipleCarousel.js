import React from 'react'
import { Section } from 'components/Styles/BasicStyled'
import {
  CarousalWrapper,
  CarouselHolder,
  CarouselButton,
} from 'components/Carousel/styled'
import { Col, Row, Spin } from 'antd'
import { HoverCard } from 'components/Cards/HoverCard'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { CategoryImageCard } from 'components/Cards/CategoryImageCard'
import { OfferImageCard } from 'components/Cards/OfferImageCard'

export const MultipleCarousel = ({
  data,
  responsive,
  allowButton,
  showItem,
  showCount,
  refference,
  setCart,
  cartItem,
  whishItem,
  setWhishList,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    draggable: true,
    slidesToShow: showCount,
    slidesToScroll: showCount,
    initialSlide: 0,
    responsive: responsive,
  }

  return (
    <Section Center>
      {data?.length === 0 ? (
        <div>
          <Spin size="large" />
        </div>
      ) : (
        <CarousalWrapper Normal>
          {allowButton && (
            <>
              <CarouselButton
                secondary
                onClick={() => {
                  refference.current.prev()
                }}
              >
                <MdKeyboardArrowLeft />
              </CarouselButton>
              <CarouselButton
                secondary
                onClick={() => {
                  console.log('next')

                  refference.current.next()
                }}
              >
                <MdKeyboardArrowRight />
              </CarouselButton>
            </>
          )}

          <CarouselHolder ref={refference} {...settings}>
            {data?.map((item, index) => {
              if (showItem == 'productCard') {
                return (
                  <Col
                    key={index}
                    span={24}
                    style={{ height: '100%', display: 'flex' }}
                  >
                    <HoverCard
                      item={item}
                      cartItem={cartItem}
                      setCart={setCart}
                      setWhishList={setWhishList}
                      whishItem={whishItem}
                    />
                  </Col>
                )
              }

              if (showItem == 'ImageCard') {
                return (
                  <Col
                    key={index}
                    span={24}
                    style={{ height: '100%', display: 'flex' }}
                  >
                    <CategoryImageCard item={item} />
                  </Col>
                )
              }

              if (showItem == 'OfferCard') {
                return (
                  <Row gutter={12} key={index}>
                    <OfferImageCard item={item} key={index} />
                  </Row>
                )
              }
            })}
          </CarouselHolder>
        </CarousalWrapper>
      )}
    </Section>
  )
}
