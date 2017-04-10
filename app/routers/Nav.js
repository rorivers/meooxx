import React, { Component } from 'react'
import Welcome from '../components/welcome'
import { Route, Link } from 'react-router-dom'


const Nav = () => (
	<ul> 
		<li>	
			<Link to='/welcome'>
				index
			</Link> 
			<Route path='/welcome'  component={Welcome} />
		</li>
	</ul>

)
export default Nav