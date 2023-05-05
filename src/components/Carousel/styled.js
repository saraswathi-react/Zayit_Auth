import { Card, Carousel } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'theme'

// =============  Carousel  =============

export const CardContent = styled(Card)`
  & .ant-card-body {
    padding: 0 20px 2px;
    border-radius: 0 0 8px 8px;
  }
`

export const CarousalWrapper = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  background: ${props =>
    props.Normal ? `${COLORS.white}` : `${COLORS.bg_secondary_grey}`};
`
export const CarousalSize = styled.div`
  width: 574px;
  height: 400px;
`

export const CarouselButton = styled.button`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 60px;
  background: ${props =>
    props.secondary ? `${COLORS.secondary_grey}` : 'none'};
  border: 0;
  outline: none;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  &:nth-child(2) {
    left: calc(100% - 36px);
  }
`
export const CarouselHolder = styled(Carousel)`
  padding-bottom: ${props => (props.Normal ? '30px' : '0px')};
  /* cursor: grabbing; */
  & .slick-track {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & .slick-slide img {
    max-width: 100%;
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: auto;
    max-width: 100%;
    margin: auto;
  }
  > .slick-dots li button::after {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid ${COLORS.black};
  }
  > .slick-dots li.slick-active {
    width: 16px;
  }
  > .slick-dots li.slick-active button {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: ${COLORS.black};
  }
  > .slick-dots li button::after {
    inset: -3px;
  }
  > .slick-list .slick-slide > div > div {
    position: relative;
  }
`

export const CarouselTitle = styled.h3`
  position: absolute;
  text-transform: uppercase;
  font-weight: 600;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`
export const ProductCountdown = styled.div`
  align-items: center;
  bottom: -13.2rem;
  padding: 5px;
  color: ${COLORS.black};
  background: ${COLORS.bg_secondary_grey};
  border-radius: 3.2rem;
  line-height: 26px;
  opacity: 1;
`
