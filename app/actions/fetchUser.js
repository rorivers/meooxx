//export REQUEST_USER = 'REQUEST_USER'
export  const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
export const RECEIVE_LOGINNAME = 'RECEIVE_LOGINNAME'

export const loginSucessful = (json, accesstoken) => {
	
	return({
		type: LOGIN_SUCCESSFUL,
		loginInfo: json,
		accesstoken
	}
	)
}

//'6718ae18-1b1e-4fb5-8705-8ff5e91949df'

export const fetchUser = (accesstoken) => dispatch => {
	
	return fetch(
		`https://cnodejs.org/api/v1/accesstoken`, {
      method: 'POST',
      headers: {
				'content-Type': 'application/x-www-form-urlencoded'
                        
      },
      body: `accesstoken=${accesstoken}`
			
     })
		 .then(res => res.json())
		 .then((json) => dispatch(loginSucessful(json, accesstoken))
		 ) 
}

const receiveLoginname = (json, loginname) => ({
	type: RECEIVE_LOGINNAME,
	data: json, 
	loginname: loginname
})


export const fetchLoginname = (loginname) => dispatch => {
	
	return fetch('https://cnodejs.org/api/v1/user/meooxx')
	.then( res => res.json())
	.then((json) => dispatch(receiveLoginname(json, loginname)) )
	
	
}