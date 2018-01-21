import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { login } from "../actions/login";
import { connect } from "react-redux";
//Row Badge
import {
  Message,
  Badge,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Icon,
  Button
} from "antd";
//已经登录状态处理
import LoggedInfo from "./LoggedInfo";

//FormItem
const FormItem = Form.Item;

class Login extends Component {
  state = {
    count: 1
  };

  //获取用户输入
  handleIconClick = e => {
    e.preventDefault();
    const messageNumber = this.state.count;
    if (!messageNumber) {
      return;
    }
    Message.info("username, password can be anything");
    this.setState({
      count: 0
    });
  };

  //handleSubmit
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();

    const { validateFields, resetFields } = this.props.form;

    //验证表单数据
    validateFields((err, values) => {
      if (err) return;
      if (!err) {
        //reset field 不传入参数重置所有组件
        resetFields(["password"]);

        //注释掉username passwor
        /* 
				 * const username = 	values.userName
				 * const password = values.password 
				*/

        this.setState({
          validate: true
        });

        this.st = setTimeout(() => dispatch(login(values)), 1000);

        Message.success("login successful");
      }
    });
  };
  componentWillUnmount() {
    //清除定时器
    clearTimeout(this.st);
  }

  render() {
    //message Number
    const count = this.state.count;
    const { getFieldDecorator } = this.props.form;
    //button loading={validate}
    const { validate } = this.state;

    //sessionStorage.removeItem('username')

    const { isAuth } = this.props;

    const user = sessionStorage.getItem("user");

    if (user) {
      return <LoggedInfo user={"hello"} />;
    }
    if (isAuth && !user) return <Redirect push to="/nav/showTopics" />;
    return (
      <div>
        <h1
          style={{
            color: "#000",
            width: "25%",
            margin: "50px auto"
          }}
        >
          super-q space{" "}
          <a href="#" onClick={this.handleIconClick}>
            <Badge count={count}>
              <Icon type="message" />
            </Badge>
          </a>
        </h1>
        {/* **有prefix 就不能 用hasFeedback */}
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <FormItem
                wrapperCol={{
                  span: 6,
                  offset: 9
                }}
              >
                {getFieldDecorator("userName", {
                  rules: [
                    {
                      pattern: /^[a-zA-Z0-9]/,
                      required: true,
                      message: "输入正确usrname"
                    }
                  ],
                  initialValue: "Iron man"
                })(
                  <Input placeholder="Username" prefix={<Icon type="user" />} />
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem
            wrapperCol={{
              span: 6,
              offset: 9
            }}
          >
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "输入密码"
                }
              ],
              initialValue: "iamstrong"
            })(
              <Input
                type="password"
                placeholder="Password"
                prefix={<Icon type="lock" />}
              />
            )}
          </FormItem>

          <Row type="flex" justify="space-round">
            <Col offset={9} span={2}>
              <FormItem>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember</Checkbox>)}
              </FormItem>
            </Col>
            <Col span={2} offset={2}>
              <span style={{ margin: "0 0 20px 0" }}>
                <a href="#">Forgotpassword</a>
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={9}>
              <Button
                loading={validate}
                htmlType="submit"
                style={{ width: "100%" }}
                type="primary"
                size="large"
              >
                login
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={9}>
              or <a href="#">regist</a>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isAuth } = state.users || false;
  return {
    isAuth
  };
};

const WrapperLogin = Form.create()(Login);

export default connect(mapStateToProps)(WrapperLogin);
