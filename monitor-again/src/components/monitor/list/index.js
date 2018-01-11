import React, { Component } from 'react'

import { Table } from 'antd'

class List extends Component {
  render() {
    const {data: {processTree}} = this.props

    const columns = [{
      title: '进程名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '内存占用',
      dataIndex: 'memory',
      key: 'memory',
    }, {
      title: '优先级PID',
      dataIndex: 'pid',
      key: 'pid',
    }, {
      title: '用户',
      dataIndex: 'user',
      key: 'user',
    }]

    return (
      <div className="monitor-list-wrapper">
        <Table dataSource={processTree} columns={columns} />
      </div>
    )
  }
}

export default List;