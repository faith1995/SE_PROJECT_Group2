import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import cookie from 'react-cookie';

import NavigationComponent from './components/Navigation/NavigationComponent.jsx';
import NoMatchComponent from './components/Navigation/NoMatchComponent.jsx';

import HomeComponent from './components/Home/HomeComponent.jsx';
import RegisterComponent from './components/Register/RegisterComponent.jsx';
import LoginComponent from './components/Login/LoginComponent.jsx';
import ResetComponent from './components/Reset/ResetComponent.jsx';

import DashboardComponent from './components/Dashboard/DashboardComponent.jsx';

import PatientComponent from './components/Patient/PatientComponent.jsx';
import AppoinmentComponent from './components/Appoinment/AppoinmentComponent.jsx';



module.exports = (
	<Route component={NavigationComponent} >
		<IndexRoute component={HomeComponent}  />
		<Route path="/" component={HomeComponent}  />
		<Route path="/register" component={RegisterComponent} />
		<Route path="/login" component={LoginComponent} />
		<Route path="/reset" component={ResetComponent} />
		<Route path="/dashboard" component={DashboardComponent} />
		<Route path="/patient" component={PatientComponent} >
            <IndexRoute component={DashboardComponent}  />
            <Route path="/patient/appoinment" component={AppoinmentComponent} />
        </Route>
	</Route>
)