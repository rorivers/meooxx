import React from "react";
import { Form, Select, Input } from "antd";

const FormItem = Form.Item;
const { Option } = Select;

const PublishTopicForm = Form.create()(props => {
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={props.onSubmit}>
      <FormItem
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 15 }}
        label="选择板块"
      >
        {getFieldDecorator("tab", {
          rules: [{ required: true, message: "必须选择一个话题" }]
        })(
          <Select placeholder="请选择" style={{ width: "50%" }}>
            <Option value="choose">请选择</Option>
            <Option value="ask">问答</Option>
            <Option value="share">分享</Option>
            <Option value="job">招聘</Option>
          </Select>
        )}
      </FormItem>

      <FormItem>
        {getFieldDecorator("title", {
          rules: [{ required: true, min: 10 }]
        })(<Input placeholder="标题数10字以上" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator("content")(<Input rows={5} type="textarea" />)}
      </FormItem>
    </Form>
  );
});
export default PublishTopicForm;
