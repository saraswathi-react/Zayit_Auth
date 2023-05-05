import React from 'react'
import { Drawer as AntdDrawer } from 'antd'
import styled from 'styled-components'
import Footer from './partials/Footer'
import { SideCartView } from 'components/Drawer/partials/SideCartView'

const StyledDrawer = styled(AntdDrawer)`
  .ant-drawer-content {
    background: ${props => (props.Black ? '#1d1e20' : '#fff')};
  }
  .ant-drawer-body {
    padding: 5px 10px;
  }
  .ant-drawer-wrapper-body {
    height: 92%;
    overflow: auto;
  }
  .ant-drawer-close {
    font-size: 18px;
    color: ${props => (props.Black ? '#fff' : '#1d1e20')};
  }
  .ant-drawer-header {
    justify-content: ${props => (props.RSide ? 'end' : 'start')};
  }
  .ant-drawer-header-title {
    flex: ${props => (props.RSide ? 'none' : '1')};
  }
`

const Drawer = ({
  width,
  title,
  placement,
  closable = false,
  onClose,
  open,
  content,
  footer,
  footerStyles,
  itemView,
  data,
  setCart,
  handleChange,
  ...rest
}) => {
  return (
    <>
      <StyledDrawer
        {...rest}
        width={width}
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {content}
        {itemView && (
          <SideCartView
            data={data}
            setCart={setCart}
            handleChange={handleChange}
          />
        )}
        {footer && <Footer footerStyles={footerStyles}>{footer}</Footer>}
      </StyledDrawer>
    </>
  )
}
export default Drawer
