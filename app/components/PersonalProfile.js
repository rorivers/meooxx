//import { Modal } from 'antd';

import React from "react";
import Rezume from "./Rezume";

class ModalExample extends React.Component {
  state = {
    isTrue: false
  };

  handleClick = () => {
    this.setState({
      isTrue: true
    });
  };

  render() {
    return (
      <div>
        <Rezume />
      </div>
    );
  }
}

export default ModalExample;
