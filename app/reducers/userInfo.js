import { LOGIN_SUCCESSFUL, RECEIVE_LOGINNAME } from '../actions/fetchUser'

export const userInfo = (state={
	userInfo: {},
	accesstoken: ''
	}, action) => {
	switch (action.type) {
		
		case LOGIN_SUCCESSFUL: 
		  return {
				...state,
				userInfo: action.loginInfo,
				accesstoken: action.accesstoken
			}
		default:
		  return  state
	}
}

export const loginnameInfo = (state={}, action ) => {
	switch(action.type) {
		case RECEIVE_LOGINNAME: 
		  return {
				...state,
				loginnameInfo: action.data,
				loginname: action.loginname
			}
		default:
		  return state
		
		
	}
} 