import React, { Component } from'react'
//antd 样式，菜单 图标等
import {Layout, Menu, Icon } from 'antd'
//侧边栏
const { SubMenu } = Menu
const { Header, Content,Footer, Sider } = Layout

//player
import Player from './MusicPlayer'


//topic content
import TopicContent from './topiccontent'


 
import { connect } from 'react-redux'
import { Redirect, Link, Route } from 'react-router-dom'
import { signout } from '../actions/login'
import PersonalProfile from '../components/PersonalProfile'
import ShowTopics from '../components/ShowTopics' 

//carouse  暂时没用
//import CarouselFilm from '../components/carouselfilm'
 
 
 
class Home extends Component {
	
	
	
	handleLogoutClick = () => {
		//从 Route 中继承hitory
		const { user, history,dispatch } = this.props
		sessionStorage.removeItem('user')
		dispatch(signout(user))
		history.push('/login') 	
	}
	render() {
		
	const { dispatch,match,user, isAuth, article } = this.props
	const loggedUser= sessionStorage.getItem('user', user)
	
	 
	if(!isAuth &&!loggedUser) return<Redirect push to='/login' />
  if(!loggedUser){
		sessionStorage.setItem('user',user)}
		
		
	return(
	<Layout>
		<Header>
			<Menu 
				theme='dark'
				mode='horizontal'>
				<Menu.Item key = '4'>
					<Link to='/nav'>
						nav
						
					</Link>
				</Menu.Item>
				<Menu.Item key = '1'>
					<Link to={`${match.url}/showtopics` }>
						Showtopics
					</Link>
				</Menu.Item>
				<Menu.Item key = '2'>
					<Link to={`${match.url}/PersonalProfile`}>
						个人的简历
					</Link>
				</Menu.Item>
				<Menu.Item 
					key='3'>
					<span onClick={this.handleLogoutClick}>
						<Icon type="logout" />
						logout
					</span>
				</Menu.Item>
			</Menu>
		</Header>
		
		<Layout>
			<Sider
				breakpoint='md'
				collapsedWidth='0'
				collapsible
				defaultCollapsed
				
				>
				<Menu 
					style={{ height: '100%' }}
					mode='inline'>
					<SubMenu key='sub1' title='不知道做什么占位'>
						<Menu.Item key='1'>
							1
						</Menu.Item>
						<Menu.Item key='2'>
							2
						</Menu.Item>
						<Menu.Item key='3'>
							3
						</Menu.Item>
						
					</SubMenu>	
					</Menu>
				</Sider>
				<Layout style={{
					lineHeight:'36px',
					padding:'0 36px 36px'}}>
					
					<Content 
						style={{
							marginTop:'20px',
							backgroundColor:'#fff'}}>
					<Route exact path='/nav' 		
						render={() =>
							(<div 
								style={{
								fontSize:'50px',
								margin:'10% 30%'
								}
								}>
							<span className='nav-username'>{user}</span>
								<br />
							<p>
								love you <Player/>
							</p>
							<span style={{
								fontSize: 'small'
							}}>
								<a 
									target='_blank'
									href='https://github.com/meooxx/ReactSPA'>github </a>
								<p>		showtopic用的cnode社区提供的API做的, 个人简历就是个人简历</p>
							</span>
							</div>		
						)
					}/>
					
					<Route 
						path={`${match.url}/showtopics`} component={ShowTopics} />
					<Route 
						path={`${match.url}/PersonalProfile`} component={PersonalProfile} />
					<Route 
						path={`${match.url}/article/:id`}
						render={(props)=>{
							return (
							<TopicContent 
								dispatch={dispatch} {...props } 
								article={article}
							/>)}}
						/>  
					</Content>
				</Layout>
				
			</Layout>	
			<Footer style={{
				textAlign:'center',
				width:'100%'}}>
				super-q's space Design by <a 
						target='_blank'
						href='https://github.com/meooxx/ReactSPA'>super-q </a>
			</Footer>
		</Layout >
	) 
	}		

}

const mapStateToProps = state => {
		//
		//console.log(state)
		//	
		const {isAuth } = state.users
		const users = state.users.user
		//初始化虚拟的user
		const loggedUser = sessionStorage.getItem('user')
		
		const { contentData }  = state
		
		const data = contentData.data || { content:{ replies: [] }}
		
		const user=users || loggedUser
  	return {
			user,
			isAuth,
			article:data
		}
	}
	
	
const welcome = connect(
		mapStateToProps
)(Home)

export default welcome