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
import PatientAppoinmentComponent from './components/Appoinment/PatientAppoinmentComponent.jsx';
import DoctorAppoinmentComponent from './components/Appoinment/DoctorAppoinmentComponent.jsx';



import PatientProfile from './components/Profile/PatientProfile.jsx';
import GeneralComponent from './components/Profile/GeneralComponent.jsx';
import AddressComponent from './components/Profile/AddressComponent.jsx';
import MedicalAidComponent from './components/Profile/MedicalAidComponent.jsx';


import SpecialistComponent from './components/Specialist/SpecialistComponent.jsx';


module.exports = (
	<Route component={NavigationComponent} >
		<IndexRoute component={DashboardComponent}  />
		<Route path="/" component={DashboardComponent}  />
		<Route path="/register" component={RegisterComponent} />
		<Route path="/login" component={LoginComponent} />
		<Route path="/reset" component={ResetComponent} />
		<Route path="/dashboard" component={DashboardComponent} />
		<Route path="/patient" component={PatientComponent} >
            <IndexRoute component={DashboardComponent}  />
            <Route path="/patient/book-an-appoinment" component={AppoinmentComponent} />
            <Route path="/patient/appoinments" component={PatientAppoinmentComponent} />
            <Route path="/patient/profile" component={PatientProfile} >
            	<IndexRoute component={GeneralComponent}  />
            	<Route path="/patient/profile/address" component={AddressComponent} />
            	<Route path="/patient/profile/medical-aid" component={MedicalAidComponent} />
            </Route>
        </Route>
        <Route path="/specialist" component={SpecialistComponent} >
        	<IndexRoute component={DashboardComponent}  />
        	<Route path="/specialist/appoinments" component={DoctorAppoinmentComponent} />
        </Route>
	</Route>
)