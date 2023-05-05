import React from 'react'
import { Collapse } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FilterCollapse } from 'components/Common/Styled'

const { Panel } = Collapse

export const CollapseDiv = ({ name, content }) => {
  return (
    <FilterCollapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition="end"
      expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
      className="site-collapse-custom-collapse"
    >
      <Panel header={name} key="1" className="site-collapse-custom-panel">
        <p>{content}</p>
      </Panel>
    </FilterCollapse>
  )
}
