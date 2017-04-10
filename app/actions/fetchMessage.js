export const RECEIVE_MESSAGE_COUNT = 'RECEIVE_MESSAGE_COUNT'

export const RECEIVE_MESSAGES = 'REVEIVE_MESSAGES'

const receiveMessageCount = (data, accesstoken) => ({
	type: RECEIVE_MESSAGE_COUNT,
	count: data
})

const receiveMessages = (data, accesstoken) => ({
	type: RECEIVE_MESSAGES,
	hasReadMessages:data.has_read_messages
	,
	hasNotReadMessages: data.hasnot_read_messages,
	accesstoken,
}) 


export const fetchMessageCount = accesstoken=>dispatch => {
	return fetch(`https://cnodejs.org/api/v1/message/count?accesstoken=${accesstoken}`)
	.then(res=>res.json())
	.then(json=>dispatch(receiveMessageCount(json.data,accesstoken)))
}

export const fetchMessages = accesstoken => dispatch => {
	return fetch(`https://cnodejs.org/api/v1/messages?accesstoken=${accesstoken}`)
	.then(res=>res.json())
	.then(json=>dispatch(receiveMessages(json.data,accesstoken)))
}
