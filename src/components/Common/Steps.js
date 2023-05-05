import React from 'react'
import { Steps } from 'antd'
import { StepsWrapper } from 'components/Common/Styled'

const { Step } = Steps

export const AntdSteps = () => {
  return (
    <StepsWrapper current={2}>
      <Step title="Shopping cart" />
      <Step title="Checkout" />
      <Step title="Review" />
    </StepsWrapper>
  )
}
