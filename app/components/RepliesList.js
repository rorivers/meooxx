import React, { Component } from "react";
import { message, Modal, Icon } from "antd";
import "../main.css";
import ReplyTextarea from "./ReplyTextarea";
import transformDate from "../utils/transformDate";
//del postReplies
import { postReplyUps } from "../actions/postReply";

import { fetchArticle } from "../actions/topicid";

//import Ups from './Ups'
export default class RepliesList extends Component {
  state = {
    down: false,
    up: false,
    hidden: true,
    ups: null,
    userUp: false
  };

  createComment = reply => {
    return { __html: reply };
  };

  handleReplyClick = e => {
    e.preventDefault();
    let hidden = !this.state.hidden;
    this.setState({
      hidden: hidden
    });
  };

  handleUpsClick = e => {
    e.preventDefault();

    //const count = this.state.ups

    const { userInfo, accesstoken, dispatch, reply } = this.props;

    //const up = this.state.up
    const replyId = reply.id;
    const replyAuthorName = reply.author.loginname;
    const loginName = userInfo.loginname;

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

    if (replyAuthorName == loginName) {
      message.error("不能给自己点赞");
      return;
    }

    //暂行解决方法 缺点只能点赞
    //这个可行的

    const { userUp } = this.state;

    userUp
      ? this.setState({
          userUp: !userUp,
          ups: this.state.ups - 1
        })
      : this.setState({
          userUp: true,
          ups: this.state.ups + 1
        });

    dispatch(postReplyUps(replyId, accesstoken));
  };

  componentWillMount() {
    const { id, reply } = this.props;
    const { ups } = reply;

    const userUp = ups.some(up => {
      return up == id;
    });

    userUp &&
      this.setState({
        userUp: userUp
      });

    let count = ups.length ? ups.length : 0;
    this.setState({
      ups: count
    });
  }
  handleAvatarClick = e => {
    e.preventDefault();
    //保留的console
    console.log("e, 不想写作者具体信息了"); //eslint-disable-line
  };

  render() {
    const authorLoginname = this.props.loginname;
    //del upsInfo 点赞post的返回信息
    const { accesstoken, reply, dispatch, currentId } = this.props;
    const { ups } = this.state;
    const hidden = this.state.hidden;
    const { loginname } = reply.author;
    const { number } = this.props;

    return (
      <div className="cell-comment">
        <div className="user-comment">
          <span className="comment-loginname">
            <a onClick={this.handleAvatarClick} href="#">
              <img className="user-avatar" src={reply.author.avatar_url} />
            </a>
            {reply.author.loginname}
            <span className="comment-reply-info">
              {number + 1} 楼 - {transformDate(this.props.reply.create_at)}
            </span>

            {authorLoginname == loginname && (
              <span className="reply-author"> 作者</span>
            )}
          </span>

          <div className="comment-reply">
            <span className="reply-like">
              {}
              <a
                className={this.state.userUp && "ups"}
                onClick={this.handleUpsClick}
                title="like"
              >
                <Icon type="like-o" />
                {ups == 0 ? "" : ups}
              </a>
            </span>
            <a href="#" onClick={this.handleReplyClick}>
              <Icon type="edit" />
            </a>
          </div>
        </div>

        <div
          className="commment-content"
          dangerouslySetInnerHTML={this.createComment(reply.content)}
        />

        <span className={hidden && "comment-reply-hidden"}>
          <ReplyTextarea
            fetchArticle={fetchArticle}
            replyId={reply.id}
            accesstoken={accesstoken}
            dispatch={dispatch}
            currentId={currentId}
            replyName={loginname}
            replyInfo={""}
          />
        </span>
      </div>
    );
  }
}
