import React from "react";

//nav
class BreadNav extends React.Component {
  handleClick = e => {
    //delete className
    const { onClick, type } = this.props;

    onClick(type);
    e.preventDefault();
  };

  render() {
    const { currentTab, type } = this.props;
    //ȥ��active����
    //��ǰTAB �͸���һ��class
    return (
      <a
        className={currentTab == type ? "topic-tab currentTab" : "topic-tab"}
        href="#"
        onClick={this.handleClick}
      >
        {type}
      </a>
    );
  }
}

export default BreadNav;
