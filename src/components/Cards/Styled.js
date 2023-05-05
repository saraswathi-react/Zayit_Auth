import { Card } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'theme'

// ==========  Product Card  ==============

export const HoverCardWrapper = styled(Card)`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  & .ant-card-body {
    padding: 8px;
    border-radius: 0;
    border-right: 1px solid #f4f4f4;
    border-bottom: 2px solid #f4f4f4;
  }
  &.ant-card-bordered {
    border: none;
    border-radius: 0;
  }
`

export const HoverCardHolder = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 10px;
`

export const CardImageHolder = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  height: 200px;
  display: flex;
`

export const ProductImg = styled.img`
  /* -webkit-transform: none;
  transform: none;
  width: 50%;
  margin: auto; */
  position: absolute;
  width: 60%;
  height: auto;
  inset: 0;
  margin: auto;
  ${HoverCardWrapper}:hover & {
    transform: scale(0.8) rotateZ(8deg);
    transition: 0.3s;
  }
`

export const ProductLabelGroup = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
`

export const ProductLabel = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 5px;
  text-transform: uppercase;
  padding: 5px 11px;
  color: #fff;
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
  border-radius: 12px;
  background-color: ${props =>
    props.Offer ? `${COLORS.red}` : `${COLORS.secondary_green}`};
`

export const BtnIconGroup = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`

export const BtnAddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin: 0 0 5px;
  width: 36px;
  height: 36px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: visibility 0.3s, opacity 0.3s, background-color 0.3s,
    color 0.3s, border-color 0.3s;
  transition: visibility 0.3s, opacity 0.3s, background-color 0.3s, color 0.3s,
    border-color 0.3s;
  -webkit-transform: none;
  transform: none;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.blue};
    color: ${COLORS.white} !important;
  }
  & svg {
    font-size: 1.1rem;
  }
  ${HoverCardWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    color: ${COLORS.grey};
  }
`

export const BtnQuickView = styled.a`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  height: auto;
  color: #fff;
  background-color: #222529;
  font-size: 0.85rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: Poppins, sans-serif;
  text-transform: uppercase;
  visibility: hidden;
  opacity: 0;
  -webkit-transform: none;
  transform: none;
  margin: 0;
  border: none;
  padding: 10px;
  transition: 0.3s;

  ${HoverCardWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    bottom: 0;
    color: ${COLORS.white};
  }
`

export const ProductCardDetails = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 99;
  width: 100%;
  position: relative;
`

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CategoryLists = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 20px);
  text-align: left;
  white-space: nowrap;
  font-size: 0.75rem;
  color: ${COLORS.grey};
  text-transform: uppercase;
  font-weight: 500;
`

export const CategoryList = styled.a`
  cursor: pointer;
  color: ${COLORS.grey};
`

export const BtnIconWish = styled.a`
  padding-top: 1px;
  background-color: transparent;
  color: ${COLORS.grey};
  font-size: 1rem;
  margin-top: 0.3rem;
  & svg {
    fill: red;
  }
`

export const RatingsContainer = styled.div`
  margin-left: 0;
`

export const Ratings = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 0.1em;
  font-weight: 900;
`

export const PriceBox = styled.div`
  margin-bottom: 1.7rem;
`

// ====================  List Card  ===============
export const ListCardHolder = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  padding: 10px;
`
export const ListCardImageHolder = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 250px;
  margin-right: 1.2rem;
  margin-bottom: 0;
  border: 1px solid #e7e7e7;
  & img {
    display: flex;
  }
`
export const ListProductTitle = styled.div`
  letter-spacing: -0.01em;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.85rem;
  color: #222529;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${COLORS.LAPTOP} {
    font-size: 1rem;
  }
`
export const ListProductDescription = styled.p`
  letter-spacing: 0.6px;
  text-transform: capitalize;
  font-weight: 400;
  line-height: 24px;
  color: #6b727a;
  display: -webkit-box;
  margin-bottom: 1.6rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 6px;
  font-size: 0.85rem;
`
export const ListCardButton = styled.button`
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  color: #333;
  margin: 0 10px;
  padding: 8px 15px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.5s;
  overflow: hidden;
  &:hover {
    background: ${COLORS.bg_secondary_grey};
    color: ${COLORS.white};
    font-weight: 600;
    transform: translateX(5px);
  }
  & svg {
    fill: red;
  }
`
export const ListCardCartButton = styled.button`
  background-color: ${COLORS.black};
  border: 1px solid ${COLORS.black};
  color: ${COLORS.white};
  padding: 8px 15px;
  font-size: 0.85rem;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.5s;
  overflow: hidden;
  font-variant: small-caps;

  display: flex;
  align-items: center;
  gap: 4px;
  ${HoverCardWrapper}:hover & {
    background: ${COLORS.red};
    color: ${COLORS.white};
    border: 1px solid ${COLORS.red};
    font-weight: 600;
    letter-spacing: 1px;
  }
  & svg {
    transition: 0.5s;
    fill: ${COLORS.white};
    font-size: 0.95rem;
    display: none;
    ${HoverCardWrapper}:hover & {
      display: inline-block;
    }
  }
`

// =================  Grid   ===================

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  grid-template-rows: 2fr;
  @media ${COLORS.MOBILEL} {
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: 2fr;
  }
  @media ${COLORS.TABLET} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${COLORS.LAPTOP} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const GridBox1 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 1/3;
  }
  @media ${COLORS.TABLET} {
    grid-column: 1/4;
    grid-row: 1/3;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 1/3;
    grid-row: 1/4;
  }
`

export const GridBox2 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 1/2;
  }
  @media ${COLORS.TABLET} {
    grid-column: 4/5;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 3/4;
    grid-row: 1/3;
  }
`

export const GridBox3 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 2/3;
  }
  @media ${COLORS.TABLET} {
    grid-column: 4/5;
  }
`

export const GridBox4 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 1/2;
  }
  @media ${COLORS.TABLET} {
    grid-column: 1/2;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 5/6;
  }
`
export const GridBox5 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 2/4;
  }
  @media ${COLORS.TABLET} {
    grid-column: 2/3;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 3/4;
  }
`
export const GridBox6 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 1/2;
  }
  @media ${COLORS.TABLET} {
    grid-column: 3/4;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 4/5;
  }
`
export const GridBox7 = styled.div`
  grid-column: 1;
  @media ${COLORS.MOBILEL} {
    grid-column: 2/4;
  }
  @media ${COLORS.TABLET} {
    grid-column: 4/5;
  }
  @media ${COLORS.LAPTOPL} {
    grid-column: 5/6;
  }
`

// ==========  Category Image Card  ==============

export const CategoriesDiv = styled.a`
  color: ${COLORS.black};
  display: grid;
  place-items: center;
  &:hover {
    color: ${COLORS.red};
  }
`

export const CategoriesIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${COLORS.bg_secondary_grey};
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    background-color: ${COLORS.red};
    color: ${COLORS.white};
  }
`

export const CategoriesName = styled.p`
  font-size: 1rem;
  padding: 5px;
  font-weight: 600;
`

// ==========  Offer Image Card  ==============

export const CardBanner = styled.div`
  height: 236px;
  width: 100%;
  display: block;
  background: ${COLORS.bg_secondary_grey};
  padding: 0;
  margin: 1px;
  position: relative;
`

export const BannerImage = styled.img`
  max-width: 100% !important;
  height: 100%;
  position: absolute !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  object-fit: cover;
`

export const BannerTitle = styled.h1`
  position: absolute;
  top: 50%;
  width: 30%;
  font-weight: 700;
  font-family: cursive;
  transform: translateY(-50%);
  z-index: 1;
  color: ${COLORS.black};
  text-transform: uppercase;
  font-size: 1rem;
  @media ${COLORS.TABLET} {
    font-size: 2rem;
  }
  @media ${COLORS.MOBILEL} {
    font-size: 1.5rem;
  }
`

export const BannerSubTitle = styled.h4`
  position: absolute;
  font-size: 1rem;
  text-transform: uppercase;
  z-index: 1;
  color: ${COLORS.black};
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  transform: rotateZ(10deg);
  @media ${COLORS.TABLET} {
    font-size: 1.4rem;
  }
  @media ${COLORS.MOBILEL} {
    font-size: 1.2rem;
  }
  & span {
    background: ${COLORS.red};
    color: ${COLORS.white};
    padding: 0 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  & del {
    font-size: 0.85rem;
    @media ${COLORS.TABLET} {
      font-size: 1rem;
    }
  }
`
