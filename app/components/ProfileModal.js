import React from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import Topic from "./Topic";
import MessageItem from "./MessageItem";

const ProfileModal = props => {
  //点击 profile的 往期消息文章链接
  const { handleArticleClick, logout, loginnameInfo } = props;
  //去掉了porps中的loginname以防bug备注
  //最近回复的data
  const info = loginnameInfo.loginnameInfo || { data: {} };
  const { data } = info;
  const recentReplies = data.recent_replies || [];
  const recentTopics = data.recent_topics || [];
  const { messages } = props;
  const { hasNotReadMessages, hasReadMessages } = messages;
  return (
    <Modal
      onOk={props.onOk}
      onCancel={props.onCancel}
      visible={props.showProfile}
      title="profile"
    >
      <span className="user-profile">
        <img src={data.avatar_url} />
        {data.loginname}
      </span>
      <div>
        <div className="profile-message">
          <span>未读信息：</span>
          {(hasNotReadMessages.length &&
            hasNotReadMessages.map((item, index) => (
              <MessageItem {...item} key={index} />
            ))) || <span>nothing</span>}
        </div>
        <div>
          <span>往期信息：</span>
          <br />
          {(hasReadMessages &&
            hasReadMessages.map((item, index) => (
              <MessageItem {...item} key={index} />
            ))) || <span>nothing</span>}
        </div>

        <span>
          最近的参与主题帖子：
          {recentReplies.length ? (
            recentReplies.map((topic, index) => (
              <Link
                onClick={() => handleArticleClick(topic.id)}
                key={index}
                to={`/main/article/${topic.id}`}
              >
                <Topic ind={index} topic={topic} key={index} />
              </Link>
            ))
          ) : (
            <span className="profile-noInfo"> no thing</span>
          )}
        </span>
        <span className="profile-recent-replies">
          最近的主题帖子：
          {recentTopics.length ? (
            recentTopics.map((topic, index) => (
              <Link
                onClick={() => handleArticleClick(topic.id)}
                key={index}
                to={`/main/article/${topic.id}`}
              >
                <Topic ind={index} topic={topic} key={index} />
              </Link>
            ))
          ) : (
            <span className="profile-noInfo">no thing</span>
          )}
        </span>
      </div>
      <span className="profile-button">
        <Button type="danger" onClick={logout}>
          logout
        </Button>
      </span>
    </Modal>
  );
};

export default ProfileModal;
