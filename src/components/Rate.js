import React from 'react'
import { Rate } from 'antd'
import styled from 'styled-components'

const StyledRate = styled(Rate)`
  &.ant-rate {
    color: ${props => (props?.color ? props?.color : '#fadb14')} !important;
    background: ${props =>
      props?.Secondary ? props?.Secondary : 'transparent'} !important;
  }
`

export const AntdRate = ({
  defaultValue,
  color,
  onChange,
  value,
  disabled = false,
  Secondary,
}) => {
  // const [value, setValue] = useState(0);
  return (
    <>
      <StyledRate
        allowHalf
        Secondary={Secondary}
        onChange={onChange}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        color={color}
      />
    </>
  )
}
