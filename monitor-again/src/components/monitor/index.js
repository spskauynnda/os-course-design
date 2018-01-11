import React, { Component } from 'react'
import { Card, Icon, Modal, Form, Input, Button} from 'antd'
import List from './list'
import data from '../../data/process-tree.json'
// import Add from './operate/add'
import './index.less'
const FormItem = Form.Item;


class MonitorApp extends Component {
  constructor () {
    super()
    this.state = {
      addVisible: false,
    }
  }

  showAdd = () => {
    this.setState({
      addVisible: true,
    });
  }
  // 后期增加数据持久化功能
  handleSubmitAdd = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(data)
        data.processTree.push(values);
        console.log(values)
      }
    });
    this.setState({
      // ModalText: 'The modal will be closed after two seconds',
      // confirmLoading: true,
    });
  }
  handleCancelAdd = () => {
    console.log('Cancel');
    this.setState({
      addVisible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        className="monitor-mask"
        style={{ background: '#ECECEC', padding: '30px' }}
      >
        <Card
          // 后续添加增加响应式设计
          className="monitor-wrapper" title="进程管理器"
        >
          <div className="header-wrapper">
            <div className="btn">
              <Icon type="close-circle" />
              <span>删除进程</span>
            </div>
            <div className="btn" onClick={this.showAdd}>
              <Icon type="plus-circle-o" />
              <span>增加进程</span>
            </div>
          </div>
          <div className="list-wrapper">
            <List data={data}/>
          </div>
          <Modal title="增加进程"
                 visible={this.state.addVisible}
                 onOk={this.handleSubmitAdd}
                 onCancel={this.handleCancelAdd}
          >
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('name', {
                  // rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                         placeholder="process-name" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('memory', {
                  // rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                         placeholder="memory" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('pid', {
                  // rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                         placeholder="PID" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('user', {
                  // rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                         placeholder="user" />
                )}
              </FormItem>
            </Form>
          </Modal>
        </Card>
      </div>
    );
  }
}
const Monitor = Form.create()(MonitorApp);
export default Monitor;