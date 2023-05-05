import React, { useState } from 'react'
import {
  BtnIconGroup,
  BtnIconWish,
  BtnQuickView,
  CardImageHolder,
  CategoryList,
  CategoryLists,
  CategoryWrap,
  HoverCardHolder,
  HoverCardWrapper,
  PriceBox,
  ProductCardDetails,
  ProductImg,
  ProductLabel,
  ProductLabelGroup,
  RatingsContainer,
  Ratings,
  BtnAddCart,
} from 'components/Cards/Styled'
import { BiShoppingBag } from 'react-icons/bi'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { AntdRate } from 'components/Rate'
import { AntdTooltip } from 'components/ToolTip'
import { ProductTitle, ProductPrice } from 'components/Styles/BasicStyled'
import { AddToCart } from 'utils/addProductToCart'
import { AddToWhishList } from 'utils/addProductToWhishList'
import { useNavigate } from 'react-router-dom'

export const HoverCard = ({
  item,
  cartItem,
  setCart,
  setWhishList,
  whishItem,
}) => {
  const [heart, setheart] = useState(<BsHeart />)

  const addToCart = item => {
    AddToCart(item, setCart, cartItem)
  }

  const addToWhishlist = item => {
    AddToWhishList(item, setWhishList, whishItem)
    setheart(<BsHeartFill />)
  }

  const navigate = useNavigate()

  const GoToWhishList = () => {
    navigate('/whishlist')
  }
  const GoToViewPage = id => {
    navigate(`/product/${id}`)
  }

  if (!whishItem) return null
  const isInProductList = whishItem.find(prod => prod?.id === item?.id)

  return (
    <HoverCardWrapper>
      <HoverCardHolder>
        <CardImageHolder>
          <ProductImg src={item?.image} alt={item?.title} />
          <ProductLabelGroup>
            <ProductLabel>Hot</ProductLabel>
            {item?.offer && <ProductLabel Offer>{item?.offer}</ProductLabel>}
          </ProductLabelGroup>
          <BtnIconGroup>
            <BtnAddCart onClick={() => addToCart(item)}>
              <BiShoppingBag />
            </BtnAddCart>
          </BtnIconGroup>
          <BtnQuickView onClick={() => GoToViewPage(item?.id)}>
            View
          </BtnQuickView>
        </CardImageHolder>

        <ProductCardDetails>
          <CategoryWrap>
            <CategoryLists>
              <CategoryList>{item?.category}</CategoryList>
            </CategoryLists>
            {isInProductList ? (
              <BtnIconWish onClick={() => GoToWhishList()}>
                <BsHeartFill />
              </BtnIconWish>
            ) : (
              <BtnIconWish onClick={() => addToWhishlist(item)}>
                <BsHeart />
              </BtnIconWish>
            )}
            <div style={{ display: 'none' }}> {heart}</div>
          </CategoryWrap>

          <ProductTitle as="a" href="#">
            {item?.title}
          </ProductTitle>

          <RatingsContainer>
            <AntdTooltip title={item?.rating?.rate}>
              <Ratings>
                <AntdRate allowHalf value={item?.rating?.rate} disabled />
              </Ratings>
            </AntdTooltip>
          </RatingsContainer>

          <PriceBox>
            <ProductPrice>
              <del>Rs.&nbsp;{item?.price}</del>
            </ProductPrice>
            &nbsp;
            <ProductPrice>Rs.&nbsp;{item?.price}</ProductPrice>
          </PriceBox>
        </ProductCardDetails>
      </HoverCardHolder>
    </HoverCardWrapper>
  )
}
