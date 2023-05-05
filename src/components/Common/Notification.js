import React from 'react'
import { Col, notification, Row } from 'antd'
import {
  MiniPopUpWrapper,
  // MiniPopUpTitle,            >>>  FUTURE USE
  MiniPopUpPara,
} from 'components/Common/Styled'
import { CloseableImageHolder } from 'components/Styles/BasicStyled'
// import { Link } from 'react-router-dom'              >>>  FUTURE USE

export const OpenNotification = props => {
  console.log(props, 'props')
  const ShowNotification = props => {
    return (
      <MiniPopUpWrapper>
        <Row gutter={[12, 12]}>
          <Col span={6}>
            <CloseableImageHolder>
              <img src={props?.item?.image} alt="" />
            </CloseableImageHolder>
          </Col>
          <Col span={18}>
            {/* <MiniPopUpTitle as="a" href={`/product/${props?.item?.id}`}>                 >>>  FUTURE USE
              {props?.item?.title}
            </MiniPopUpTitle> */}
            {/* <Link to={`/product/${props?.item?.id}`}>
              <MiniPopUpTitle>{props?.item?.title}</MiniPopUpTitle>
            </Link> */}
            <MiniPopUpPara>
              has been {props?.info} your {props?.infoEnd}
            </MiniPopUpPara>
          </Col>
        </Row>
      </MiniPopUpWrapper>
    )
  }

  notification.open({
    description: ShowNotification(props),
    duration: 1,
    placement: 'bottomRight',
    onClick: () => {
      console.log('Notification Clicked!')
    },
  })
}
