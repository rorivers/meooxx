
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
//export const CURRENT_CONTENT = 'CURRENT_CONTENT'
export const CURRENT_ID = 'CURRENT_ID'


//id ��ȡ
export const currentId = (id) => ({
	type: CURRENT_ID,
	id
})

const requestArticle = (id) => ({
	type: REQUEST_ARTICLE,
	id
})

const receiveArticle = (data, id) => {
	
	return {
	type: RECEIVE_ARTICLE,
	article: data,
	id
}}

 export const fetchArticle = (id) => dispatch => {
	 
	dispatch(requestArticle(id))
	return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
	.then(res => res.json())
	.then((json) => dispatch(receiveArticle(json.data, id)) )
}

 