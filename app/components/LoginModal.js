import React from "react";
import { Modal, Form, Input } from "antd";

//form.create()() antd 提供的的方法提供 getFieldDecorator， validateFeilds 方法
const LoginModal = Form.create()(props => {
  const { width, onCancel, onClick, visible } = props;
  const { getFieldDecorator } = props.form;
  return (
    <Modal
      width={width}
      onCancel={onCancel}
      onOk={onClick}
      okText="login"
      title="Login node"
      visible={visible}
    >
      <Form>
        <Form.Item
          label="token"
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 16
          }}
        >
          {getFieldDecorator("loginNode", {
            initialValue: " 6718ae18-1b1e-4fb5-8705-8ff5e91949df"
          })(<Input type="large" placeholder="input your accesstoken" />)}
        </Form.Item>

        {/*  <Form.Item
						wrapperCol={{
							span:12, offset:6}}>
					<Button
						type='primary'
						onClick={props.onClick}>
						login
					</Button>
				 </Form.Item> */}
      </Form>
    </Modal>
  );
});

export default LoginModal;
