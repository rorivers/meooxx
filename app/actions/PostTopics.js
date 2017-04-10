export const POST_TOPICS = 'POST_TOPICS'
export const POST_TOPICS_SUCCESS = 'POST_TOPICS_SUCCESS'
export const POST_TOPICS_FAILED='POST_TOPICS_FAILED' 
export const REQUEST_POST = 'REQUEST_POST'

 const postTopicSuccess = (json) => {
	 
	return ({
		type: POST_TOPICS_SUCCESS,
		success: json.success,
		topicId: json.topic_id  
		
	})
}

const requestPost = () => ({
	type: REQUEST_POST
})

const postTopicFailed = (json) => {
	return ({
		type: POST_TOPICS_FAILED,
		failed: true,
		errorMsg: json.error_msg,
		//topicId: json.topic_id  
	})
}

export const postTopics = (data, accesstoken) => dispatch=> {
	const {  tab, title } = data
	const { content } = data 
	const bodyPart =content ?  `accesstoken=${accesstoken}&content=${content}&tab=${tab}&title=${title}` : `accesstoken=${accesstoken}&tab=${tab}&title=${title}` 
	dispatch(requestPost())
		return fetch( 'https://cnodejs.org/api/v1/topics',{
			method: 'POST',
			headers: {
					'content-Type': 'application/x-www-form-urlencoded'               
				},
			body:`accesstoken=${accesstoken}&content=${content}&tab=${tab}&title=${title}`
		})
	.then(res=>res.json())
	.then(json=>{
		if(json.success == false){
		dispatch(postTopicFailed(json))
		}else {
			dispatch(postTopicSuccess(json))
		}
	})
		

}
