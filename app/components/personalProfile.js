//import { Modal } from 'antd';

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
			<p>个人简历</p>
		</div>
		)
	}
}



export default ModalExample