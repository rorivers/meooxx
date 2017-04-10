



export const REQUEST_TOPICS = 'REQUEST_TOPICS'
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS'


const requestTopics = (topic) => ({
	type: REQUEST_TOPICS,
	topic
})

const receiveTopics = (items,topics, tab ) => {
  
	
	return { 
		type:RECEIVE_TOPICS,
		items,
		topics,
		tab
	}
}

export const fetchTopics =(tab, topics, page, limit=15)=> dispatch => {
	dispatch(requestTopics(topics))
	
	return fetch( `https://cnodejs.org/api/v1/topics?limit=${limit}&tab=${tab}&page=${page}`).then(res => res.json()).then((json)=>{ 
	dispatch(receiveTopics(json, topics, tab))
		})
}

const shouldFetchTopics =(tab, currentTopics)=> {
	
	const currentTab = currentTopics.tab
	
	if(!currentTab){
		
		return true
		
	}
	
	/* if(tab === currentTab) {
		
		return false 
		
	} */
	//之前一直忘了默认返回 true 
	return true 
	
}



export const fetchIfNeeded = (tab, topics, page) => (dispatch,getState)=> {
	
	if(!shouldFetchTopics(tab, getState().topics, page)) {	
	
	return 
	
	}	
	
	dispatch(fetchTopics(tab, topics, page))
}

