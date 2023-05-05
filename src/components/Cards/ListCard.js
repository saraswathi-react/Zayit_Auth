import React, { useState } from 'react'
import {
  BtnQuickView,
  ListCardImageHolder,
  CategoryList,
  CategoryLists,
  CategoryWrap,
  ListCardHolder,
  HoverCardWrapper,
  PriceBox,
  ProductCardDetails,
  ProductImg,
  ProductLabel,
  ProductLabelGroup,
  RatingsContainer,
  Ratings,
  ListProductTitle,
  ListProductDescription,
  ListCardButton,
  ListCardCartButton,
} from 'components/Cards/Styled'
import { useNavigate } from 'react-router-dom'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { AntdRate } from 'components/Rate'
import { AntdTooltip } from 'components/ToolTip'
import { ProductPrice } from 'components/Styles/BasicStyled'
import Flex from 'components/Flex'
import { AddToCart } from 'utils/addProductToCart'
import { AddToWhishList } from 'utils/addProductToWhishList'

export const ListCard = ({
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
      <ListCardHolder>
        <ListCardImageHolder>
          <ProductImg src={item.image} alt={item.title} />
          <ProductLabelGroup>
            <ProductLabel>Hot</ProductLabel>
            {item.offer && <ProductLabel Offer>{item.offer}</ProductLabel>}
          </ProductLabelGroup>
          <BtnQuickView onClick={() => GoToViewPage(item?.id)}>
            View
          </BtnQuickView>
        </ListCardImageHolder>

        <ProductCardDetails>
          <CategoryWrap>
            <CategoryLists>
              <CategoryList>{item.category}</CategoryList>
            </CategoryLists>
          </CategoryWrap>

          <ListProductTitle as="a" href="#">
            {item.title}
          </ListProductTitle>

          <RatingsContainer>
            <AntdTooltip title={item.rating.rate}>
              <Ratings>
                <AntdRate
                  allowHalf
                  defaultValue={item.rating.rate}
                  disabled
                  SmallSize
                />
              </Ratings>
            </AntdTooltip>
          </RatingsContainer>

          <ListProductDescription>{item.description}</ListProductDescription>

          <PriceBox>
            <ProductPrice>
              <del>Rs.&nbsp;{item.price}</del>
            </ProductPrice>
            &nbsp;
            <ProductPrice>Rs.&nbsp;{item.price}</ProductPrice>
          </PriceBox>

          <Flex>
            <ListCardCartButton onClick={() => addToCart(item)}>
              <RiShoppingBagLine />
              Add to Cart
            </ListCardCartButton>
            {/* <ListCardButton> */}
            {isInProductList ? (
              <ListCardButton onClick={() => GoToWhishList()}>
                <BsHeartFill />
              </ListCardButton>
            ) : (
              <ListCardButton onClick={() => addToWhishlist(item)}>
                <BsHeart />
              </ListCardButton>
            )}
            <div style={{ display: 'none' }}> {heart}</div>
            {/* </ListCardButton> */}
          </Flex>
        </ProductCardDetails>
      </ListCardHolder>
    </HoverCardWrapper>
  )
}
