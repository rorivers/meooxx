import React, { Component } from 'react'
//多装了markedown插件 其实是服务端渲染的content
//import { markdown } from 'markdown'
import { fetchArticle } from '../actions/topicid' 
import { Alert, Tag, Spin } from 'antd'
//css
import '../main.css'
//
import { connect } from 'react-redux'
import transformDate from '../utils/transformDate'
import ReplyTextarea from './ReplyTextarea'
import RepliesList from './RepliesList'
import LoginNode from './LoginNode'
import { fetchUser } from '../actions/fetchUser'
import { fetchMessageCount } from '../actions/fetchMessage'

class Content extends Component {
	//插入html
	createHtml= (content) => {
		if(!content) {return }
		return 	{__html: content }
	}
	
	
	componentWillMount() {
		const {dispatch} = this.props 
		const accesstoken = sessionStorage.getItem('userToken')
		
		if(!accesstoken) return
		dispatch(fetchUser(accesstoken))
		dispatch(fetchMessageCount(accesstoken))
		//render 之前 获取数据
	}
	
	componentDidMount() {
		const { dispatch, match, article } = this.props
		const  { content }  = article
		const id = match.params.id
		
		if(!content.content) {
				dispatch(fetchArticle(id))
		}
			
	}
	
	componentWillReceiveProps(nextProps) {
		const { match, dispatch } = this.props
		const id = match.params.id
		if(id == nextProps.match.params.id)	 return 
		//如果当前id与nextProps不同则重新fetch
		dispatch(fetchArticle(nextProps.match.params.id))
	} 
	
	
	
	render() {
	const {
		//loginnameInfo, userInfo
		messages,
		loginnameInfo,
		replyInfo,
		upsInfo, article, dispatch }= this.props
	
		const { userInfo } = this.props.userInfo
	
	
	const { replies, tab, last_reply_at, visit_count, author, create_at, title, content, good, top } = article.content
	const { currentId } = article
  
	//const id = match.params.id
	
	const  { loginname }  = author || '' 
	const { isFetching } = article
	const createAt = transformDate(create_at)
	const lastReplyAt = transformDate(last_reply_at)
	const { data } = this.props.messageCount 
	
	//注释掉info
	//const { info } =  replyInfo || {success:false }
	
	
	return (
		<Spin 
		  spinning={isFetching} 
			size='large' >
			<div >
				<span className='article-title'>
					{( good || top)
							&&<Tag 
								color='#80bd01'>
								{ top && '置顶' || good&& '精华' }
							</Tag>
					}
					{ title }
				</span>
				<span className='article-info'>
				 • 发布于{createAt} • 作者 {loginname } • {visit_count}次浏览 •最后用一次编辑{lastReplyAt } 来自 {tab}
				</span>
				<span>
					<LoginNode
						messages={messages}
						messageCount = {data}
						loginnameInfo={loginnameInfo}
						userInfo={userInfo}
						dispatch={dispatch}
						/>
				</span>
			</div>
				
			<div 
				className='content'
				dangerouslySetInnerHTML={this.createHtml(content)} >
			</div>
			
			<div>
				<div className='comment-header'>
				  {replies.length} 回复
				</div>
				<ul>
				{ 
				 replies.map((reply, index)=>
					<RepliesList
						fetchArticle={fetchArticle}
						id={userInfo.id}
						replyInfo={replyInfo}
						userInfo={userInfo}
						upsInfo={upsInfo}
					  accesstoken={this.props.userInfo.accesstoken}
						dispatch={dispatch}
						currentId={currentId}
						loginname={loginname}
						key={index}
						number={index}
						reply={reply}/>	)   }
				</ul>
			</div>
			<div className='article-reply'>
				<span className='comment-header' > 添加回复</span>
				<span>
					<ReplyTextarea 
						fetchArticle={fetchArticle}
						replyId={''}
						currentId={currentId}
						accesstoken = {this.props.userInfo.accesstoken}
						dispatch={dispatch}/>
				</span>
				
				
				{replyInfo.info&&replyInfo.info.success&&
					<span>
						<Alert 
							type='success'
							message={'回复成功'} />
						</span>
					
				}
			</div>
		</Spin >
	) 
	
	} 
}


const mapStateToProps = (state) => {
	const { replyInfo, upsInfo } = state
	const { userInfo, loginnameInfo } = state
	const { messages, messageCount } = state
	return {
		replyInfo,
		upsInfo,
		userInfo,
		loginnameInfo,
		messageCount,
		messages
	}
	
}

export default connect(mapStateToProps)(Content)