import React from 'react'
import { Input, Form } from 'antd'
import Label from 'components/Form/Label'
import styled from 'styled-components'

const { TextArea } = Input

const StyledItem = styled(Form.Item)`
  > div {
    text-align: left;
  }
  .ant-input:focus,
  .ant-input-focused {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  .ant-input:hover {
    border-color: #e9e9e9;
  }
  & .ant-form-item-label > label > span {
    font-size: 0.95rem;
  }
`

const TextAreas = ({
  name,
  type = 'text',
  placeholder,
  label,
  rules,
  required,
  rows = 4,
  ...rest
}) => {
  return (
    <StyledItem
      colon={false}
      required={false} // Hides red asterisk
      label={
        label && (
          <Label required={required} showLock={rest.showLock}>
            {label}
          </Label>
        )
      }
      rules={rules}
      name={name}
      {...rest}
    >
      <TextArea
        {...rest}
        type={type}
        rows={rows}
        placeholder={placeholder}
        style={{ resize: 'none' }}
      />
    </StyledItem>
  )
}

export default TextAreas
