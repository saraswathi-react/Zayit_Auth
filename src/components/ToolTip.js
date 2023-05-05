import React from 'react'
import { Tooltip } from 'antd'
import styled from 'styled-components'

const StyledTooltip = styled(Tooltip)``

export const AntdTooltip = props => {
  return (
    <>
      <StyledTooltip title={props.title}>{props.children}</StyledTooltip>
    </>
  )
}
