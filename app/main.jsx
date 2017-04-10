import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider} from 'react-redux'
import { createStore ,applyMiddleware} from 'redux'
import { HashRouter as Router,Route } from 'react-router-dom'
import reducers from './reducers/reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV !== `production`) {
  
	middlewares.push(createLogger());
} 
	
/* const store=compose(applyMiddleware(...middlewares))(createStore)(

reducers) */
const store = createStore(
	reducers,
	applyMiddleware(...middlewares) )


ReactDOM.render(
<Provider store={store}>
	<Router>
		<App />
	</Router>
</Provider>,
  document.body.appendChild(document.createElement('div'))
)
