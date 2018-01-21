import React, { Component } from 'react'
import { Badge, Button } from 'antd'
//del link
//import { Link } from 'react-router-dom' 

import { fetchUser, fetchLoginname } from '../actions/fetchUser'
//import Topic from './Topic'
import LoginModal from './LoginModal'
import { fetchArticle } from '../actions/topicid'
 import { fetchMessageCount,fetchMessages } from '../actions/fetchMessage'
import ProfileModal from './ProfileModal'
 

class LoginNode extends Component {

	state = {
	  hidden: false ,
		showProfile: false,
		logout: true
	}

	handleArticleClick= (id) => {
		const { dispatch } =this.props
		dispatch(fetchArticle(id)) 
	} 
	
	handleLoginButtonClick = () => {
	//hidden loginmodal 是否hidden 
		this.setState({
			hidden: true
		})
		
	}
	
	handleCancel = () => {
		//showProfile 是否显示profile
		this.setState({
			hidden: false,
			showProfile: false,
		})
	}
	///fetch loginname
	handleProfileClick = (e, loginname) => {
		const { dispatch } = this.props
		//fetch loginname
		dispatch(fetchLoginname(loginname))
		const accesstoken = sessionStorage.getItem('userToken')
		dispatch(fetchMessages(accesstoken))
		this.setState({
			showProfile: true
		})
		e.preventDefault()
	} 
	
  login = () => {
	const { validateFields } = this.modal
	const { dispatch } = this.props
	
	validateFields((err, value) => {
		const accesstoken = value.loginNode
	  
	  if (err || !accesstoken) {
			return;
    	}
		dispatch(fetchUser(accesstoken))
		dispatch(fetchMessageCount(accesstoken))
		
		//保留的console
		console.log('need to rewrite') //eslint-disable-line
		
		
		sessionStorage.setItem('userToken', accesstoken)
		
		
		//这边有问题 是这个 diaptch请求是异步的 没有获得 返回信息  下面的就执行了所以 会有bug   暂时放一下
		
		//保留的console
		console.log('bug, 能力不够 需要重新写')//eslint-disable-line
      this.setState({
				hidden: false,
				logout: false
			}) 
			
	})
	}
	
	logout = () => {
		const { dispatch }= this.props
		
		this.setState({
			logout: true,
			showProfile: false
			
		})
		
		sessionStorage.removeItem('userToken')
		dispatch(fetchUser(''))
	}
	
	componentWillReceiveProps(nextProps) {
		if(!nextProps.userInfo.success) {
			this.setState({
				logout: true
			})
		
		}
	}
	
	render() {
		//data messages data
		const { messages, messageCount, userInfo, loginnameInfo } = this.props
		const { success } = userInfo
	  const { hidden, logout } = this.state
		//头像地址
		const avatarUrl = userInfo.avatar_url || ''
		const loginName =  userInfo.loginname || ''
		
		return (
	    <div>
				<ProfileModal 
					messages={messages}
					handleArticleClick={this.handleArticleClick}
					onOk={this.handleCancel}
					logout={this.logout}
					loginnameInfo={loginnameInfo}
					onCancel={this.handleCancel}
					showProfile={this.state.showProfile} />
					{(!logout || success)&&<span className='user-profile'>
						
							<a 
								onClick={e=>this.handleProfileClick(e,loginName)}
								href='#' >
								{ avatarUrl&&
								<Badge 
									showZero
									count={messageCount}>
									<img src={avatarUrl} />
								</Badge>}	
								<span>{loginName}</span>
							</a>
							
					</span>}
					
				{ (logout && !success)
				&&(<Button 
						type='default'
						icon='user'
						onClick={this.handleLoginButtonClick}>
					login
				</Button>)}
			<LoginModal
				width='350px'
				onClick={this.login}
				onCancel={this.handleCancel}
				ref={modal => this.modal = modal}
				visible={hidden}/>
			</div>
		)
	}
}

export default LoginNode