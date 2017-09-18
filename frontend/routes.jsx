import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import cookie from 'react-cookie';

import NavigationComponent from './components/Navigation/NavigationComponent.jsx';
import NoMatchComponent from './components/Navigation/NoMatchComponent.jsx';

import HomeComponent from './components/Home/HomeComponent.jsx';


module.exports = (
	<Route component={NavigationComponent} >
		<IndexRoute component={HomeComponent}  />
		<Route path="/" component={HomeComponent}  />
	</Route>
)