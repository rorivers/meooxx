import React, { Component } from 'react'
import { Tag } from 'antd'
import '../main.css'
import { Link } from 'react-router-dom'

import transformDate from '../utils/transformDate'

const Topic = (props) => {
	
	const { topic, ind} = props
	const avatarUrl = topic.author.avatar_url
	const { top, tab, good } = topic
	
	
	const tabs = { 'share': '分享', 'top': '置顶', 'ask': '问答', 'good': '精华', 'job': '招聘'}
	
	return (
  <li className='comment-item'>
		<div className='cell' >
			{
				/* **
					* link to loginname
					*/
			}
				
			<img 
				className='author-avatar'
				src={avatarUrl}/>
				
				<div id='topic-title'>
					<span className='reply-count'>
						<span 
							className='count-of-replies'>
							{topic.reply_count}
						</span>
						<span
							className='sperator'>
								/
						</span>
						<span
							className='count-of-visit'>
								{topic.visit_count}
						</span>
					</span>
					{
						(good||top||tab)
						&&<Tag 
							color={
								(top||good)
								&&'#80bd01'
								|| '#999'
						}>
							{ top && '置顶' || good&&'精华' || tabs[tab] }
						</Tag>
					}
					<span>
						
						{topic.title}
						
					</span>
				
				</div>
			</div>
			<div 
				className='topic-last-reply'>
					{ transformDate(topic.last_reply_at) }
			 </div>	
				 
				
	</li>
	

)
}
export default Topic