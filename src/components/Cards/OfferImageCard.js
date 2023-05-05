import React from 'react'
import {
  CardBanner,
  BannerImage,
  BannerTitle,
  BannerSubTitle,
} from 'components/Cards/Styled'
import { Col, Badge } from 'antd'

export const OfferImageCard = ({ item, key }) => {
  console.log(item.path, 'item')

  const different = item.oldPrice - item.newPrice
  console.log(different, 'different')

  const average = (item.oldPrice + item.newPrice) / 2
  console.log(average, 'average')

  const discount = (different / average) * 100

  return (
    <Col span={24} key={key}>
      <Badge.Ribbon
        text={parseFloat(discount).toFixed() + ' %'}
        placement="start"
        color="red"
      >
        <CardBanner>
          <BannerImage preview={false} src={item.path} />
          <BannerTitle>{item?.productName}</BannerTitle>
          {/* <BannerSubTitle>Starting</BannerSubTitle> */}
          <BannerSubTitle>
            <span>Starting&nbsp;From</span> <br />
            <span>Rs.&nbsp;{item?.newPrice} </span>&nbsp;{' '}
            <del>Rs.&nbsp;{item?.oldPrice}</del>
          </BannerSubTitle>
        </CardBanner>
      </Badge.Ribbon>
    </Col>
  )
}
