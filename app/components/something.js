import { Modal } from 'antd';

import React from 'react'

class ModalExample extends React.Component  {
	
	state = {
		isTrue: false
	}
	
	handleClick = () => {
		this.setState({
			isTrue: true
		})
	}
	
	render() {
		return(
		<div>
			<button onClick={this.handleClick} >
				click
			</button>
			<Modal 
				visible ={this.state.isTrue}>
				<input />
			</Modal>
		</div>
		)
	}
}



export default ModalExample