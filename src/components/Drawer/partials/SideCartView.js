import React from 'react'
import styled from 'styled-components'
import {
  CloseableImageHolder,
  CloseableButton,
  Button,
} from 'components/Styles/BasicStyled'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { BiX } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { handleRemoveFromCart } from 'utils/removeProductFromCart'

export const ProductDetails = styled.div`
  margin-bottom: 3px;
  font-size: 1.3rem;
  & h6 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 180px;
  }
  & span {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    color: #696969;
  }
`
export const CartDropdown = styled.div`
  display: flex;
  margin: 0 !important;
  padding: 0.75rem 0;
  align-items: center;
  border-bottom: 1px solid #e6ebee;
`
export const ProductImage = styled.div`
  position: relative;
  margin: 0 0 0 auto;
  border: 1px solid #f4f4f4;
`

export const SideCartView = ({ data, setCart, handleChange }) => {
  const cartInfo = useSelector(state => state.home)

  const ProductRemoveFromCart = item => {
    handleRemoveFromCart(item, data, setCart)
  }

  const handleSentValue = () => {
    const arg = false
    handleChange(arg)
  }

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <h4
          style={{
            textAlign: 'center',
            color: '#777',
            fontSize: '15px',
            fontWeight: '500',
          }}
        >
          No products in the cart
        </h4>
      ) : (
        <div>
          {data.map((item, key) => (
            <CartDropdown key={key}>
              <ProductDetails>
                <h6>
                  <strong>{item.title}</strong>
                </h6>
                <span>
                  {item.cartQuantity}
                  <BiX />
                  {item.price}
                </span>
              </ProductDetails>
              <ProductImage>
                <CloseableImageHolder>
                  <CloseableButton onClick={() => ProductRemoveFromCart(item)}>
                    <BiX />
                  </CloseableButton>
                  <img src={item.image} alt="" />
                </CloseableImageHolder>
              </ProductImage>
            </CartDropdown>
          ))}
          <br />
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <h4>
                <strong>SUBTOTAL</strong>
              </h4>
            </Col>
            <Col span={12}>
              <h4 style={{ textAlign: 'right' }}>
                <strong>
                  Rs&nbsp;:&nbsp;
                  {cartInfo.cartTotalAmount.toFixed(2)}
                </strong>
              </h4>
            </Col>
          </Row>
          <br />
          <Link to="/cart">
            <Button onClick={handleSentValue}>View Cart</Button>
          </Link>
          <Link to="/checkout">
            <Button BtnDark onClick={handleSentValue}>
              Checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
