import React from 'react'
import {
  CarousalWrapper,
  CarouselHolder,
  CarouselTitle,
  CardContent,
  ProductCountdown,
} from 'components/Carousel/styled'
import { Ratings } from 'components/Cards/Styled'
import { FlashedImages } from 'components/Carousel/Data'
import { AntdRate } from 'components/Rate'
import { AntdTooltip } from 'components/ToolTip'
import { Clock } from 'components/Common/Clock'

export const FlashCarousel = () => (
  <CardContent>
    {console.log(FlashedImages, 'flash')}

    <CarousalWrapper Normal>
      <CarouselHolder
        Normal
        autoplay
        effect="fade"
        pauseOnHover={true}
        draggable
      >
        {FlashedImages.map((item, index) => (
          <div key={index}>
            <CarouselTitle>Flash&nbsp;Deals</CarouselTitle>
            <img src={item.path} alt={item.name} />
            <h4>{item.name}</h4>
            <p>
              <AntdTooltip title={item.rate}>
                <Ratings>
                  <AntdRate
                    allowHalf
                    defaultValue={item.rate}
                    disabled
                    color="#6a6a6d"
                  />
                </Ratings>
              </AntdTooltip>
            </p>
            <span>
              <del>Rs.&nbsp;{item.price}</del>
            </span>
            &nbsp;<span>Rs.&nbsp;{item.salePrice}</span>
            <ProductCountdown>
              <Clock />
            </ProductCountdown>
          </div>
        ))}
      </CarouselHolder>
    </CarousalWrapper>
  </CardContent>
)
