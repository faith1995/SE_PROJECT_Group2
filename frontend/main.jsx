import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
/*import App from './App.jsx';*/

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App.jsx'
import todoApp from './reducers/reducers';

let store = createStore(todoApp, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app')
);