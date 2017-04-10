import { CURRENT_ID,  REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../actions/topicid'

export const currentId = (state='', action) => {
	switch(action.type) {
		case CURRENT_ID:
		  return action.id
		default:
		  return state
	}
} 

const content = (state={
	isFetching:false,
	content:{  replies: []  },
	currentId: ''
	}, action) => {
	switch(action.type) {
		case REQUEST_ARTICLE:
		  return {
				...state,
				isFetching: true
			}
		case RECEIVE_ARTICLE: 
	    return {
				...state,
				isFetching:false,
				content:action.article,
				currentId:action.id
			}
		default:
		  return state
	}
	
}

export const contentData = (state={
	}, action) => {
	switch(action.type) {
		case REQUEST_ARTICLE:
		case RECEIVE_ARTICLE: 
		  return {
				...state,
				data:content(state[contentData.data], action)
			}
		//这里为什么state[action.content] 第一次request 
		//undefined 然后就会使用默认值，
		//如果在这里面初始化也行页面也不会报错state={isFetching,content,...rest}
		default:
		  return state
	}
	
}

 