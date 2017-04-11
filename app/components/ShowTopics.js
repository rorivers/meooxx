import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Topic from './Topic'

import PublishTopic from './PublishTopic'
//node 登录模块
import LoginNode from './LoginNode'
import { connect } from 'react-redux'
//tabs 
import { Pagination, Spin } from 'antd'
//css
import '../main.css'

//breadnav
import BreadNav from './Breadnav'
//fetch action
import { fetchArticle } from '../actions/topicid'
import { fetchIfNeeded, fetchTopics } from '../actions/fetchTopic'
// user login in
import { fetchUser } from '../actions/fetchUser'
//showtopics
//message count 
import { fetchMessageCount } from '../actions/fetchMessage'


class ShowTopics extends Component {
	constructor(){
		super()
		this.handleClick =this.handleClick.bind(this)
	}
	
	state = {
		closeInfo:false,
		postInfo: true,
		page: 1
	}
	
	handleLinkClick() {
		this.setState({
		//	closeInfo: false
			
		})
	}
	
	
	
	handleClick= (id) => {
		const { dispatch, currentId } =this.props
		//fetch
		if(currentId == id) return
		dispatch(fetchArticle(id)) 
	} 
	
	//处理点击第几个页 处理函数
	handlePageChange = (page) => {
		const currentPage = this.state.page
		if(!(currentPage ===   page) ) {
			this.setState({
			page: page
			})
		  const { dispatch, currentTab  } =this.props
			//hash history cannot push currentPage
			dispatch(fetchTopics(currentTab,'topics', page))
			sessionStorage.setItem('currentPage', page)
			sessionStorage.setItem('currentTab', currentTab)	
		}	
	}
	//处理点击 all job 四个types 的处理
	handleNavClick = (type) => {
		
		this.setState({
			page:1
		})
		
		const { dispatch  } =this.props
		
		sessionStorage.setItem('currentTab', type)
		
		dispatch(fetchIfNeeded(type, 'topics', 1 ))
	}
	
	componentDidMount() {
		
		const {dispatch , topics } =this.props 
		//login
		const accesstoken = sessionStorage.getItem('userToken')
		
		if(accesstoken) {
			dispatch(fetchUser(accesstoken ))
			dispatch(fetchMessageCount(accesstoken))
		}
		
		
		
		// fetch topics
		if(!topics.length) {
			
			let currentTab = sessionStorage.getItem('currentTab') || 'all'
			
			let currentPage = sessionStorage.getItem('currentPage') || 1
		
			
		  this.setState({
				
				//sessionStroage setItem会将数字 转换为字符
				page: Number(currentPage)
			})

			dispatch(fetchIfNeeded(currentTab, 'topics', currentPage))
		}
	
		}
		
		
	render(){
		 
		  const { messages, messageCount,  isFetching, dispatch, topics, publishTopics} = this.props
			const { userInfo } = this.props
			.userInfo
			//get user/:loginname 得到
			const { loginnameInfo } = this.props
			
			const currentTab = sessionStorage.getItem('currentTab') || this.props.currentTab 
			const { success } = publishTopics || false
			const newArticleId = publishTopics.topicId
			//message Count
			const { data } = messageCount
			
			//注释掉 failed isFetching
			/* *const { failed } =    publishTopics || false
			* const { isFething } = 	publishTopics
		  */
			return (
				<div >
					<div className='bread-nav'>
						<BreadNav
							currentTab={currentTab}
							type={'all'}
							onClick={this.handleNavClick} />
						<BreadNav
							currentTab={currentTab}
							type={'good'}
							onClick={this.handleNavClick} />
						<BreadNav 
							currentTab={currentTab}
							type={'ask'}
							onClick={this.handleNavClick} />
						<BreadNav
							currentTab={currentTab}
							type={'share'}
							onClick={this.handleNavClick} />
						<BreadNav
							currentTab={currentTab}
							type={'job'}
							onClick={this.handleNavClick} />
						<span className='login-node'>
						<LoginNode
							messages={messages}
							messageCount={data}	
							loginnameInfo={loginnameInfo}
							userInfo={userInfo}
							dispatch={dispatch}/>
						</span>
						
					</div>
					{isFetching ? 
					(<div style={{margin:'15% 40%'}}>	
						<Spin size='large' />
					</div>)
					:(<ul>
					
						<PublishTopic 
							newArticleId={newArticleId}
							postSuccess={success}
							postInfo={publishTopics}
							dispatch={dispatch}
							userInfo={this.props.userInfo.accesstoken} />
					
						{topics.map(
						(topic, index)=> (
						  <Link 
							  onClick={()=>this.handleClick(topic.id)}
							  key={index} 
							  to={`/nav/article/${topic.id}`}>
							  <Topic
								 ind={index}
								 topic={topic} key={index}/>
							</Link>	
						)
						)}		
						<Pagination 
							current={this.state.page}
							pageSize={15}
							total={500}
							onChange={(page, pageSize)=>this.handlePageChange(page, pageSize)
							}
							showQuickJumper
						/>
					</ul>
					
					
					)
				}
				
			</div>		
			)}
			
	}

const mapStateToProps = (state) => {
	
	
	const {tab, topics, isFetching } =state.topics
	const { messages, messageCount, publishTopics, contentData, userInfo, loginnameInfo } = state
	const topicsData = topics.data || []
	const { currentId } = contentData.data || ''
	
  
	
	return {
		
		topics:topicsData,
		isFetching:isFetching,
		currentId: currentId,
		currentTab: tab || 'all', 
		userInfo,
		loginnameInfo,
		publishTopics,
		messageCount,
		messages
	} 
}

export default connect(mapStateToProps)(ShowTopics)