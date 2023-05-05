import React from 'react'
import { COLORS } from 'theme'
import { Col } from 'antd'
import styled from 'styled-components'
import { RowWrapper } from 'components/Styles/BasicStyled'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'

// ========  STYLED COMPONENT  =============
const Border = styled.div`
  border: 1px solid ${COLORS.grey};
  margin-top: 20px;
`

const InfoCardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px 10px 30px;
  height: 100%;
  border-right: none;
  @media ${COLORS.TABLET} {
    border-right: 0.5px solid ${COLORS.grey};
  }
  & :nth-child(1) {
    border-right: none;
  }
`

const InfoCardIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${COLORS.red};
  margin-right: 1.5rem;
`

const InfoCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  h5 {
    font-size: 0.85rem;
    font-weight: 400;
    color: ${COLORS.black};
  }
  p {
    color: #839199;
    font-size: 13px;
    line-height: 18px;
  }
`

export const InfoCardData = [
  {
    icon: <TbTruckDelivery />,
    title: 'FREE SHIPPING & RETURN',
    content: 'Free shipping on orders over $99',
  },
  {
    icon: <HiOutlineCurrencyRupee />,
    title: 'MONEY BACK GUARANTEE',
    content: '100% money back guarantee',
  },
  {
    icon: <BiSupport />,
    title: 'ONLINE SUPPORT 24/7',
    content: 'Lorem ipsum dolor sit amet.',
  },
  {
    icon: <RiSecurePaymentLine />,
    title: 'SECURE PAYMENT',
    content: 'Lorem Ipsum dolor sit amet',
  },
]

export const InfoCard = () => {
  return (
    <Border>
      <RowWrapper gutter={[12, 12]} showborder>
        {InfoCardData.map((item, index) => (
          <Col lg={6} md={12} sm={24} key={index}>
            <InfoCardWrapper>
              <InfoCardIcon>{item.icon}</InfoCardIcon>
              <InfoCardContent>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </InfoCardContent>
            </InfoCardWrapper>
          </Col>
        ))}
      </RowWrapper>
    </Border>
  )
}
