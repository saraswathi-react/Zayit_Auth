import { Collapse, Steps } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'theme'

// ============  Section    ===============

export const SectionTitle = styled.h2`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  color: #313131;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 3rem;
  text-transform: none;
  margin: 30px;
  position: relative;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 0.1em;
  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background: red;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    border-radius: 6px;
  }
`

// ============  Notification    ===============

export const MiniPopUpWrapper = styled.div`
  padding: 10px;
`
export const MiniPopUpTitle = styled.h4`
  letter-spacing: -0.01em;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  color: ${COLORS.black};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
`
export const MiniPopUpPara = styled.h4`
  font-weight: 500;
  font-size: 0.8rem;
`

// ============  Collapse Div    ===============

export const FilterCollapse = styled(Collapse)`
  background: transparent;
  &.ant-collapse .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
    margin-left: 20px;
  }
  &.ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-header-text {
    font-size: 0.95rem;
    font-weight: 600;
  }
  &.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    margin-top: 15px;
  }
`
// =====================  Steps  ================

export const StepsWrapper = styled(Steps)`
  margin: 40px 0;
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: ${COLORS.red};
  }
  .ant-steps-item-process .ant-steps-item-icon {
    border-color: ${COLORS.red};
  }
  .anticon svg {
    fill: ${COLORS.red};
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: ${COLORS.red};
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${COLORS.red};
    font-weight: 600;
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background-color: ${COLORS.red};
  }
`
