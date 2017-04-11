import React from 'react'

//nav 
class BreadNav extends React.Component {
	
	handleClick = (e) => {
	//delete className
		const { onClick, type } = this.props
		
		onClick(type)
		e.preventDefault()
		
	} 
	
	render() {
	const { currentTab, type } = this.props 
	//去掉active！！
	//当前TAB 就给予一个class
	return (
	 <a 
		className={currentTab==type?'topic-tab currentTab':'topic-tab'}
		href ='#' 
		onClick ={this.handleClick}>
		{type}
	 </a>
	
	)
}
}

export default BreadNav