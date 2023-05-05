import React from 'react'
import { Link } from 'react-router-dom'
import {
  GridBox1,
  GridBox2,
  GridBox3,
  GridBox4,
  GridBox5,
  GridBox6,
  GridBox7,
  GridWrapper,
} from 'components/Cards/Styled'
import {
  Container,
  ProductDefault,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductImage,
} from 'components/Styles/BasicStyled'

import imgg1 from 'assets/Images/VivioV20/v5.jpg'
import imgg2 from 'assets/Images/electronics/product-21.jpg'
import imgg3 from 'assets/Images/electronics/product-22.jpg'
import imgg4 from 'assets/Images/electronics/product-23.jpg'
import imgg5 from 'assets/Images/electronics/product-5.jpg'
import imgg6 from 'assets/Images/electronics/product-21.jpg'
import imgg7 from 'assets/Images/electronics/product-23.jpg'

export const GridCards = () => {
  return (
    <Container>
      <GridWrapper>
        <GridBox1>
          <Link to="/productView">
            <ProductDefault H100>
              <ProductImage src={imgg1} W100 />
              <ProductDetails>
                <ProductTitle>Vivo v20</ProductTitle>
                <ProductPrice>
                  <del>Rs.&nbsp;15,699.00</del>
                </ProductPrice>
                <ProductPrice>Rs.&nbsp;15,000.00</ProductPrice>
              </ProductDetails>
            </ProductDefault>
          </Link>
        </GridBox1>
        <GridBox2>
          <ProductDefault>
            <ProductImage src={imgg2} />
            <ProductDetails>
              <ProductTitle>Smart Watches</ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox2>
        <GridBox3>
          <ProductDefault>
            <ProductImage src={imgg3} />
            <ProductDetails>
              <ProductTitle>HD Camera</ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox3>
        <GridBox4>
          <ProductDefault>
            <ProductImage src={imgg4} />
            <ProductDetails>
              <ProductTitle>Intelligence Camera</ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox4>
        <GridBox5>
          <ProductDefault>
            <ProductImage src={imgg5} />
            <ProductDetails>
              <ProductTitle>3D Printer</ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox5>
        <GridBox6>
          <ProductDefault>
            <ProductImage src={imgg6} />
            <ProductDetails>
              <ProductTitle>Smart Watches </ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox6>
        <GridBox7>
          <ProductDefault>
            <ProductImage src={imgg7} />
            <ProductDetails>
              <ProductTitle>Intelligence Camera</ProductTitle>
              <ProductPrice>
                <del>Rs.&nbsp;299.00</del>
              </ProductPrice>
              <ProductPrice>Rs.&nbsp;299.00</ProductPrice>
            </ProductDetails>
          </ProductDefault>
        </GridBox7>
      </GridWrapper>
    </Container>
  )
}
