 import { POST_TOPICS_REPLIES, POST_REPLY_UPS, REQUEST_REPLY_UPS } from '../actions/postReply' 


export const replyInfo = (state = {}, action) => {
	switch(action.type) {
		case POST_TOPICS_REPLIES:
		  return {
				...state,
				accesstoken: action.accesstoken,
				info: action.repliesInfo
			}
		default :
		  return state
	}
	
}

export const upsInfo = (state = {
	isFetching:false,
	accesstoken:'',
	info: {}
	}, action) => {
	switch(action.type) {
		
		case REQUEST_REPLY_UPS:
		
			return {
				...state,
				isFething: true
			}
		case POST_REPLY_UPS:
		  return {
				...state,
				isFetchingL:false,
				accesstoken: action.accesstoken,
				info: action.upsInfo
			}
		default :
		  return state
	}
	
}
 