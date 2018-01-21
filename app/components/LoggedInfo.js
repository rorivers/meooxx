import React from 'react'
import { Redirect } from 'react-router-dom'

//已经登录的信息
class LoggedInfo extends React.Component {
	state={
		time:2,
		shouldRedirect:false
	}
	
	
	
	
	componentDidMount() {
		const threeS = () => {
		let stateTime = this.state.time
		
		stateTime--
		
		//这个不能放在if后面否则会unmount之后setState 就会报错
		this.setState({
				time:stateTime
		})
		if(stateTime <= 0) {
			
		 	this.setState({
				shouldRedirect:true
		}) 
			clearInterval(this.timer)
			
			
		}
		
	}
		this.timer = setInterval(threeS, 1000)
	}
	
	
	render(){
		const { user } = this.props
		const { time, shouldRedirect } = this.state
		
		if(shouldRedirect) {
			return (
				<Redirect push to='/nav' />) }
	return(
		<h1>
			hello <strong>{user}</strong>,已经登录。{time}秒后跳转...
		</h1>)
	
	}
}

export default LoggedInfo