
export const POST_TOPICS_REPLIES = 'POST_TOPICS_REPLIES'
export const POST_REPLY_UPS = 'POST_REPLY_UPS' 


export const REQUEST_REPLY_UPS = 'REQUEST_REPLY_UPS'


const requestReplyUps = (accesstoken) => {
	return {
		type: REQUEST_REPLY_UPS,
		accesstoken
	}
	
}

const receiveTopicsReplies = (repliesInfo, accesstoken) => {
	return ({
		type: POST_TOPICS_REPLIES,
		repliesInfo, 
		accesstoken: accesstoken
	})
}

const receiveReplyUps = (upsInfo, accesstoken) => {
	return ({
		type: POST_REPLY_UPS,
		upsInfo,
		accesstoken
	})
}

//回复某人
export const postReplies =(data, currentId, replyId, accesstoken) => dispatch => {
	const { content } = data
	return fetch(`https://cnodejs.org/api/v1/topic/${currentId}/replies`, {
		method: 'POST',
		headers: {
				'content-Type': 'application/x-www-form-urlencoded'
                        
      },
		body: `accesstoken=${accesstoken}&content=${content}&reply_id=${replyId}`
		
		
	})
	.then(res=>res.json())
	.then(json => dispatch(receiveTopicsReplies(json, accesstoken) ))
	
	
}

//点赞
export const postReplyUps = (replyId,accesstoken) => dispatch => {
	
	dispatch(requestReplyUps(accesstoken))
	
	
	return fetch(`https://cnodejs.org/api/v1/reply/${replyId}/ups`,{
		method: 'POST',
		headers: {
				'content-Type': 'application/x-www-form-urlencoded'
                        
      },
		body: `accesstoken=${accesstoken}`
	})
	.then(res => res.json())
	.then( json => dispatch(receiveReplyUps(json, accesstoken)) )
}

 