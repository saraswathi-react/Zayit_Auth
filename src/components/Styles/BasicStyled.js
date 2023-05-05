import styled from 'styled-components'
import { Carousel, Row, BackTop, Checkbox } from 'antd'
import { COLORS } from '../../theme'

export const name = styled.div``
export const name1 = styled(Carousel)``

export const Container_fluid = styled.div`
  width: 100%;
  margin: 0 auto;
  /* padding-right: calc(${COLORS.gutter_x} * 0.5);
  padding-left: calc(${COLORS.gutter_x} * 0.5); */
`

export const Container = styled.div`
  width: 100%;
  margin: 15px auto;
  padding-right: calc(${COLORS.gutter_x} * 0.5);
  padding-left: calc(${COLORS.gutter_x} * 0.5);

  @media ${COLORS.MOBILEL} {
    max-width: 540px;
  }

  @media ${COLORS.TABLET} {
    max-width: 720px;
  }

  @media ${COLORS.LAPTOP} {
    max-width: 960px;
  }

  @media ${COLORS.LAPTOPL} {
    max-width: 1140px;
  }

  @media ${COLORS.DESKTOP} {
    max-width: 1320px;
  }

  @media ${COLORS.DESKTOPL} {
    max-width: 1500px;
  }
`

export const RowWrapper = styled(Row)`
  margin: 20px 0;
  padding: 10px 0;
  & .ant-col {
    width: 100%;
  }
`

export const NextLink = styled.a`
  color: ${COLORS.red};
  font-size: 1.2rem;
  font-weight: 700 !important;
  transition: 0.5s;
  padding: 5px 15px;
  border-radius: 6px;
  font-variant: small-caps;
  letter-spacing: 1px;
  background: ${COLORS.red};
  color: ${COLORS.white};
  &:hover {
    background: ${COLORS.black};
    color: ${COLORS.white};
    letter-spacing: 2px;
  }
`

// ===============  Common ==================

export const Icon = styled.h1`
  border: ${props => props.Border || 'none'};
  border-radius: 50%;
  height: ${props => (props.Pro ? '3rem' : '1.7rem')};
  width: ${props => (props.Pro ? '3rem' : '1.7rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
  & svg {
    font-size: 1.5rem;
    color: ${COLORS.white};
    transition: 0.5s;
    &:hover {
      color: ${props => (props.black ? `${COLORS.white}` : `${COLORS.black}`)};
      transform: scale(1.3);
      fill: black;
    }
  }
  & .ant-btn {
    padding: 0;
  }
`

export const MediumIcon = styled.h1`
  //Icon1
  height: ${props => (props.bottomNav ? '100%' : '1.7rem')};
  margin-bottom: 0;
  width: ${props => (props.bottomNav ? '100%' : '1.7rem')};
  cursor: pointer;
  transition: 0.5s;
  display: ${props => (props.ResNone ? 'none' : 'inline-block')};
  & svg {
    width: 100%;
    height: ${props => (props.bottomNav ? '1.5rem' : '100%')};
    color: ${props => (props.black ? `${COLORS.black}` : `${COLORS.white}`)};
    transition: 0.5s;
  }
  &:hover svg {
    color: ${props => (props.black ? `${COLORS.white}` : `${COLORS.black}`)};
    transform: scale(1.3);
    fill: black;
  }
  @media ${COLORS.TABLET} {
    display: inline-block;
  }
`

export const ResNone = styled.div`
  display: none;
  @media ${COLORS.TABLET} {
    display: ${props => (props.Tab ? 'none' : 'flex')};
  }
  @media ${COLORS.LAPTOP} {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`

export const ResShow = styled.div`
  display: flex;
  & p {
    margin-bottom: 0;
  }
  @media ${COLORS.TABLET} {
    display: ${props => (props.Tab ? 'none' : 'none')};
  }
  @media ${COLORS.LAPTOP} {
    display: none;
  }
`

export const Section = styled.section`
  padding: ${props => (props.Center ? `1rem 0` : `2rem`)};
  background: ${props =>
    props.Secondary ? `${COLORS.bg_secondary_grey}` : `${COLORS.white}`};
  display: ${props => (props.Center ? `flex` : `block`)};
`
export const CustomButton = styled.a`
  display: flex;
  position: static;
  margin: 5px;
  padding: 0 0.8rem;
  align-items: center;
  width: auto;
  height: 34px;
  text-transform: uppercase;
  line-height: 36px;
  color: inherit;
  border: 1px solid #dfdfdf;
  background: ${COLORS.white};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 6px;
  gap: 6px;
  & svg {
    font-size: 1.1rem;
  }

  &.active {
    background: ${COLORS.red};
    color: ${COLORS.white};
  }
  &:hover {
    background: ${COLORS.red};
    color: ${COLORS.white};
  }
`
export const Button = styled.button`
  margin: 0.5rem 0;
  background: ${props => (props.BtnDark ? '#222529' : '#e7e7e7')};
  color: ${props => (props.BtnDark ? '#fff' : '#222529')};
  text-transform: uppercase;
  width: 100%;
  padding: ${props => (props.SmallText ? '8px 10px' : '12px 15px')};
  border-radius: 0.2rem;
  cursor: pointer;
  height: auto;
  font-size: ${props => (props.popUpButton ? '.80rem' : '.95rem')};
  font-weight: 600;
  font-family: Poppins, sans-serif;
  border-color: transparent;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    letter-spacing: ${props => (props.popUpButton ? '.3px' : '2px')};
    background: ${props => (props.BtnDark ? '#222529' : `${COLORS.red}`)};
    color: ${props => (props.BtnDark ? `${COLORS.white}` : `${COLORS.white}`)};
  }
`
// ===============  Product ==================

export const ProductTitle = styled.h3`
  font-family: Open Sans, sans-serif;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  height: 50px;
  margin-bottom: 0.4rem;
  color: ${COLORS.black};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductPrice = styled.span`
  color: #222529;
  font-size: ${props => (props.large ? '1.5rem' : '1rem')};
  line-height: 0.8;
  font-weight: 500;
  & del {
    font-size: ${props => (props.large ? '1.2rem' : '0.85rem')};
    color: ${COLORS.grey};
    margin-right: 9px;
    font-weight: 600;
  }
`
// ===============  Image Holder ==================

export const CloseableImageHolder = styled.div`
  position: relative;
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    object-fit: scale-down;
    height: 55px;
  }
`
export const CloseableButton = styled.a`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 2px 6px rgb(0 0 0 / 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
`

// =============== Product Grid ===============

export const ProductDefault = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${props => (props.H100 ? '100%' : '100%')};
  background: ${COLORS.white};
  border: 2px solid ${COLORS.bg_secondary_grey};
  cursor: pointer;
  padding-top: 15px;
`

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  width: ${props => (props.W100 ? '80%' : 'auto')};
  -webkit-transform: none;
  transform: none;
  transition: 0.3s;
  ${ProductDefault}:hover & {
    transform: scale(0.8) rotateZ(8deg);
  }
`

export const ProductDetails = styled.div`
  padding: 10px 2rem;
`

// ====================  Bottom Nav  ===========

export const BottomNavButton = styled(BackTop)`
  width: 100%;
  &.ant-float-btn {
    box-shadow: none;
  }
  &.ant-float-btn-circle {
    height: 50px;
    border-radius: 0;
  }
  & .ant-float-btn-body {
    background: none;
    width: 100%;
    border-radius: 0;
    transition: 0.3s;

    &:hover {
      background: none;
      transform: translateY(-6px);
      color: ${COLORS.white} !important;
    }
    &:hover .ant-float-btn-content .ant-float-btn-icon {
      color: ${COLORS.white} !important;
    }
  }
`
// ===========  Footer ====================

export const FooterContent = styled.div`
  padding: 20px;
  line-height: 2rem;
`

export const FooterLogo = styled.div`
  width: 100px;
  height: 100px;
`

export const FooterHeading = styled.h3`
  font-size: 1rem;
`

export const FooterParagraph = styled.a`
  font-size: 0.75rem;
  display: block;
  color: ${COLORS.grey};
  &:hover {
    color: ${COLORS.orange};
  }
`

export const FooterContainer = styled(Container_fluid)`
  border-top: 20px solid ${COLORS.red};
`

// export const PreviewImage = styled.img`
//   width: 100%;
//   height: 100px;
//   display: block;
//   cursor: pointer;
//   @media ${COLORS.MOBILEL} {
//     height: 150px;
//   }
//   @media ${COLORS.TABLET} {
//     height: 200px;
//   }
// `

export const YourOrderText = styled.p`
  font-size: 0.85rem;
  line-height: 1rem;
  padding: 5px;
  & span {
    float: right;
  }
  & svg {
    color: ${COLORS.blue};
    font-size: 1rem;
  }
`

export const ColorBox = styled(Checkbox)`
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: red;
    border-color: red;
    width: 30px;
    height: 30px;
    &:hover {
      background-color: red;
      border-color: red;
    }
  }
  & .ant-checkbox .ant-checkbox-inner:after {
    width: 10px;
    height: 18px;
    border: 3px solid #fff;
    border-top: 0;
    border-left: 0;
  }
  & .ant-checkbox {
    width: 30px;
    height: 30px;
  }
  & .ant-checkbox .ant-checkbox-input {
    border-color: red;
    height: 100%;
    width: 100%;
    opacity: 1;
  }
  & .ant-menu-inline.ant-menu-COLORS .ant-menu-item > .ant-menu-title-content {
    margin: auto;
  }
`

export const CButton = styled(Checkbox)`
  font-size: 2rem;
  background: red;
`
