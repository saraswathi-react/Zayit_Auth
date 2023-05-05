/* eslint-disable */
import React, { Fragment } from 'react'
import { Input as AntdInput, Form } from 'antd'
import Label from './Label'
import styled from 'styled-components'
import { COLORS } from '../../theme'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }
  border-radius: 8px;
  margin-bottom: 0px !important;
  & .ant-form-item-label > label > span {
    font-size: 0.95rem;
    font-weight: 500 !important;
  }
`
const AntdInputStyle = styled(AntdInput)`
  ::placeholder {
    font-size: 16px;
  }
  height: ${props => (props.height ? props.height : '40px')};
  border-radius: 8px;
  box-shadow: none;
  border-color: ${props => (props.error ? 'red' : '#e9e9e9')};
  :focus {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  :hover {
    border-color: #e9e9e9;
  }
  :not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #e9e9e9 !important;
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }
  &.ant-input[disabled] {
    color: ${COLORS.black};
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }
`
const Input = ({
  label,
  type,
  name,
  rules,
  onChange,
  placeholder,
  required,
  disabled,
  width,
  height,
  marginRight,
  labelStyle,
  defaultValue,
  optional,
  noStyle = undefined,
  ...rest
}) => {
  return (
    <StyledItem
      style={{
        width: width,
        marginRight: marginRight,
      }}
      rules={rules}
      noStyle={noStyle}
      name={name}
      colon={false}
      required={false}
      label={
        label && (
          <Fragment>
            <Label required={required} labelStyle={labelStyle}>
              {label} <span>{optional}</span>
            </Label>
          </Fragment>
        )
      }
    >
      <AntdInputStyle
        {...rest}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
      />
    </StyledItem>
  )
}
export default Input
