import { RECEIVE_MESSAGE_COUNT, RECEIVE_MESSAGES } from '../actions/fetchMessage'


export const messageCount = (state={data:0 }, action) => {
		switch (action.type) {
			case RECEIVE_MESSAGE_COUNT:
				return {
					...state,
					data: action.count
				}
			default:
				return state
	}
}


export const messages = (state={hasReadMessages:[],hasNotReadMessages:[]}, action) => {
	switch(action.type) {
		
		case RECEIVE_MESSAGES:
		
		  return {
				...state,
				hasNotReadMessages: action.hasNotReadMessages,
				hasReadMessages:action.hasReadMessages
			}
		default :
		  return state
	}
	
	
}