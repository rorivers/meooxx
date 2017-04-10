import { POST_TOPICS_FAILED, POST_TOPICS_SUCCESS, REQUEST_POST } from '../actions/postTopics'

export const publishTopics = (state={ isFetching: false }, action) => {
	switch(action.type) {
		case REQUEST_POST:
		  return {
				...state,
				isFetching: true
			}
		case POST_TOPICS_SUCCESS:
		  return {
				...state,
				success: action.success,
				topicId: action.topicId,
				isFetching: false
			}
		case POST_TOPICS_FAILED:
		  return {
				...state,
				failed: action.failed,
				errorMsg: action.errorMsg,
				isFetching: false,
			}
		default :
				return state
	}
} 

