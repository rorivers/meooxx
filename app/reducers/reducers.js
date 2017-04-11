import { combineReducers } from 'redux'
import { USER,SIGNOUT,LOGIN } from '../actions/login'
import { RECEIVE_TOPICS, REQUEST_TOPICS } from'../actions/fetchTopic'

import { publishTopics } from './publishTopics'
//content reducer
import { contentData } from './content'
//userInfo
import {  userInfo, loginnameInfo } from './userInfo'


import { replyInfo, upsInfo } from './replyInfo.js'
import { messageCount, messages } from './message'


//Topic reducer 
const topics = (state={
	isFetching: false,
	topics: {},

},action) => {
	switch(action.type) {
		case RECEIVE_TOPICS:
			return {
				...state,
				topics:action.items,
				isFetching:false,
				tab:action.tab
			}
		case REQUEST_TOPICS:
		  return {
				...state,
				isFetching:true
			}
		default:
		  return state
		
	}
}


//users reducer
const users = (state={isAuth:false}
, action) => {
	switch(action.type) {
		case USER:
			const users=[action.user,...state]
			return {...state, users}
		case LOGIN:
			return {
				...state,
				user:action.username, 
				pasword:action.password,
				isAuth:action.isAuth}
		case SIGNOUT:
			return {...state, isAuth:false}
		default:
			return state
	}
	
}

/* 
const topicsAndUser =(state={
	isAuth: false,
	topics:{isFetching:false,topics:{}}
}, action) => {
	const users =  users(state.isAuth, action)
	const topics = topics(state.topics, action)
	return {
		...state,
		users,
		topics
	}
	
} */



const reducers=combineReducers({
	users,
	topics,
	contentData,
	userInfo,
	loginnameInfo,
	publishTopics,
	replyInfo, 
	upsInfo, 
	messageCount,
	messages
})
export default reducers