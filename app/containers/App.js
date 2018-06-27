import React from 'react'
import Welcome from '../components/Welcome'
import Login from '../components/SignIn'
import { Route, Redirect, Switch } from 'react-router-dom'


const App = () => {
	
	return	(
		<div>
		<Switch>
				<Route path='/main' component={Welcome} />
				<Route path='/login' component={Login} />
				<Redirect from='*'  to='/main/showTopics' /> 
		</Switch>  
		</div>
			
)
}

export default App