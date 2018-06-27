import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const MessagesItem = props => {
  const { author } = props;
  const { topic } = props;
  //del reply

  //console保留
  console.log("可能会有点赞等type类型 没遇到暂时都为回复"); //eslint-disable-line
  return (
    <div className="profile-messageItem">
      <span>
        {author.loginname} 回复了你的话题
        <Link to={`/main/article/${topic.id}`}>{topic.title}</Link>
      </span>
    </div>
  );
};

export default MessagesItem;
