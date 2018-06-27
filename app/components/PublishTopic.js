import React, { Component } from "react";
import { Alert, Modal, Affix, Icon } from "antd";
import { Link } from "react-router-dom";
import "../main.css";

import PublishTopicForm from "./PublishTopicForm";
//import LoginModal from './LoginModal'
import { postTopics } from "../actions/postTopics";

class PublishTopic extends Component {
  state = {
    isShow: false,
    closeInfo: false
  };

  handlePublishButtonClick = e => {
    e.preventDefault();

    const accesstoken = this.props.userInfo;
    if (!accesstoken) {
      Modal.error({
        title: "No authorization",
        content: <p>还没有登录！@_@</p>,
        onCancel() {
          /* 不设置会报错 说没有提供这个函数给， 底层的函数会报错 */
        }
      });
      return;
    }
    this.setState({
      isShow: true
    });
  };

  handleCancel = () => {
    this.setState({
      isShow: false
    });
  };

  handlePublishClick = e => {
    e.preventDefault();

    const { validateFields } = this.form;
    const { dispatch } = this.props;
    const accesstoken = this.props.userInfo;

    validateFields((err, value) => {
      if (err) return;
      dispatch(postTopics(value, accesstoken));

      this.setState({
        isShow: false,
        closeInfo: true
      });
    });
  };

  handlePostInfo = () => {
    this.setState({
      postInfo: false
    });
  };

  render() {
    //发表新的帖子的 id
    const { newArticleId, postInfo, postSuccess } = this.props;
    //需要关闭发表新帖子成功的的profile
    const { closeInfo } = this.state;

    return (
      <div>
        {postSuccess &&
          closeInfo && (
            <Modal
              title="发帖成功	"
              visible={true}
              onCancel={this.handlePostInfo}
              onOk={this.handlePostInfo}
            >
              <Link
                onClick={this.handleLinkClick}
                to={`/main/article/${newArticleId}`}
              >
                新帖子出炉，去看看
              </Link>
            </Modal>
          )}

        {postInfo.failed &&
          closeInfo && (
            <Alert message={postInfo.errorMsg} type="error" content="hello" />
          )}
        <Affix className="affix-login" offsetTop={300}>
          <a href="#" onClick={this.handlePublishButtonClick}>
            <Icon type="plus-circle-o" />
          </a>
        </Affix>

        <Modal
          okText="发布"
          title="发布主题"
          visible={this.state.isShow}
          onCancel={this.handleCancel}
          onOk={this.handlePublishClick}
        >
          <PublishTopicForm
            onSubmit={this.handlePublishClick}
            ref={form => (this.form = form)}
          />
        </Modal>
      </div>
    );
  }
}

export default PublishTopic;
