import styled from 'styled-components'
import { Checkbox as AntdCheckbox } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { COLORS } from 'theme'

export const ViewButton = styled.button`
  height: 42px;
  width: 100%;
  padding: 0 25px !important;
  font-size: 13px;
  line-height: 42px;
  text-indent: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.85rem;
  background: ${COLORS.bg_secondary_grey};
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: ${COLORS.button_box_shadow};
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    box-shadow: ${COLORS.buttonHover_box_shadow};
    background: ${COLORS.red};
    color: ${COLORS.white};
  }
`

// ===============  Filter  ====================
export const Aside = styled(Sider)`
  background: ${COLORS.white} !important;
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.SpaceBetween ? 'space-between' : 'center'};
  width: 100%;
  background: ${COLORS.bg_secondary_grey};
  padding: 10px;
  margin-bottom: 2rem;
`

export const ResponseSM = styled.h4`
  color: red;
  display: flex;
  align-items: center;
`

export const DisplayNone = styled.span`
  display: ${props => (props.show ? 'inline-block' : 'none')};
  @media ${COLORS.TABLET} {
    display: ${props => (props.show ? 'none' : 'inline-block')};
  }
  & button {
    display: flex;
    position: static;
    margin: 5px;
    padding: 0 0.8rem;
    align-items: center;
    width: auto;
    height: 34px;
    text-transform: uppercase;
    line-height: 36px;
    color: inherit;
    border: 1px solid #dfdfdf;
    background: ${COLORS.white};
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 6px;
    gap: 6px;
    & svg {
      font-size: 1.1rem;
    }

    &.active {
      background: ${COLORS.red};
      color: ${COLORS.white};
    }
    &:hover {
      background: ${COLORS.red};
      color: ${COLORS.white};
    }
  }
`

export const FilterButton = styled.button`
  background: ${COLORS.red};
  color: ${COLORS.white};
  padding: 12px 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: ${COLORS.button_box_shadow};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: 0.5s;
  opacity: 0.8;
  &:hover {
    box-shadow: ${COLORS.buttonHover_box_shadow};
    letter-spacing: 1.5px;
    opacity: 1;
  }
`

// =========  COMMON COMPONENTS  ================

export const StyledCheckbox = styled(AntdCheckbox)`
  & .ant-checkbox .ant-checkbox-inner {
    width: 25px;
    height: 25px;
    background: ${props => props.color || 'black'};

    &:hover {
      background: ${props => props.color || 'black'};
      border-color: ${props => props.color || 'black'};
    }
  }
  & .ant-checkbox .ant-checkbox-inner:after {
    inset-inline-start: 25%;
  }
  &.ant-checkbox-wrapper {
    align-items: center;
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${props => props.color || 'black'};
    border-color: ${props => props.color || 'black'};
  }
`
