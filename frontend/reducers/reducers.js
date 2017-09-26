import { combineReducers } from 'redux';
import { 
	ADD_TODO, ADD_JOBDETAILS, ADD_CONTACTDETAILS,
	SERVICES_STARTED, SERVICES_SUCCEEDED,  SERVICES_FAILED, SERVICES_LOADED, 
	REQUEST_STARTED, REQUEST_SUCCEEDED,  REQUEST_FAILED,
	REGISTER_CUSTOMER, CREATE_JOB,
	POST_MYJOBSTARTED, POST_MYJOBSUCCEEDED, POST_MYJOBFAILED,
	SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR,
	SET_REGISTER_PENDING, SET_REGISTER_SUCCESS, SET_REGISTER_ERROR,
	USER_LOGGED_IN, 
	SET_JOB_DETAILS, SET_JOB_DETAILS_PENDING, SET_JOB_DETAILS_SUCCESS, SET_JOB_DETAILS_ERROR,
	SET_CONTACT_DETAILS_PENDING, SET_CONTACT_DETAILS_SUCCESS, SET_CONTACT_DETAILS_ERROR,
	SET_MY_JOBS, SET_MY_JOBS_PENDING, SET_MY_JOBS_SUCCESS, SET_MY_JOBS_ERROR
}  from '../actions/actions';

import cookie from 'react-cookie';

function todo(state, action){
	switch (action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
			}

		default:
			return state
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			]

		default:
			return state
	}
}

/*function jobDetails(state = [], action){
	switch (action.type) {
		case ADD_JOBDETAILS:
			return action.data

		default:
			return state
	}
}*/

/*function contactDetails(state = [], action){
	switch (action.type) {
		case ADD_CONTACTDETAILS:
			alert(JSON.stringify(action.data))
			return action.data

		default:
			return state
	}
}*/

function createjob(state = [], action){
	switch (action.type) {
		case CREATE_JOB:
			alert('job');
			return  action.data

		default:
			return state
	}
}

function services(state = [], action) {
	switch (action.type) {
		case SERVICES_LOADED:
			alert(JSON.stringify(state))
			return state
		case SERVICES_STARTED:
			//alert(action.type)
			return state
		case SERVICES_SUCCEEDED:
			//alert(action.type)
			return action.payload
		case SERVICES_FAILED:
			//alert(action.type)
			return state
			
		default:
			return state
	}
	//return state;
}

function api(state = [], action) {
	switch (action.type) {
		case REQUEST_STARTED:
			//alert(action.type);
			return state
		case REQUEST_SUCCEEDED:
			//alert(action.type)
			return action.payload
		case REQUEST_FAILED:
			//alert(action.type)
			return state
			
		default:
			return state
	}
	//return state;
}

function register(state = {
		isRegisterSuccess: false,
		isRegisterPending: false,
		registerError: null
	}, action ) {
	switch (action.type) {
		case SET_REGISTER_PENDING:
			return Object.assign({}, state, {
				isRegisterPending: action.isRegisterPending
			});

		case SET_REGISTER_SUCCESS:
			return Object.assign({}, state, {
				isRegisterSuccess: action.isRegisterSuccess
			});

		case SET_REGISTER_ERROR:
			return Object.assign({}, state, {
				registerError: action.registerError
			});

		default:
			return state;
	}
}


function login(state = {
		isLoginSuccess: false,
		isLoginPending: false,
		loginError: null
	}, action ) {
	switch (action.type) {
		case SET_LOGIN_PENDING:
			return Object.assign({}, state, {
				isLoginPending: action.isLoginPending
			});

		case SET_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoginSuccess: action.isLoginSuccess
			});

		case SET_LOGIN_ERROR:
			return Object.assign({}, state, {
				loginError: action.loginError
			});

		default:
			return state;
	}
}

function loggedInStatus(state = 
	{
		isLoggedIn: (cookie.load('ah-token-id')) ? true : false, 
		id: cookie.load('ah-token-id')
	}, action) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return Object.assign({}, state, {
				isLoggedIn: action.isLoggedIn,
				id: action.id
			});

		default:
			return state;
	}
}


function jobDetails(state = {
		isJobDetailsSuccess: false,
		isJobDetailsPending: false,
		jobDetailsError: null,
		jobDetails: null
	}, action ) {
	switch (action.type) {
		case SET_JOB_DETAILS_PENDING:
			return Object.assign({}, state, {
				isJobDetailsPending: action.isJobDetailsPending
			});

		case SET_JOB_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isJobDetailsSuccess: action.isJobDetailsSuccess
			});

		case SET_JOB_DETAILS_ERROR:
			return Object.assign({}, state, {
				jobDetailsError: action.jobDetailsError
			});

		case SET_JOB_DETAILS:
			return Object.assign({}, state, {
				jobDetails: action.jobDetails
			});

		default:
			return state;
	}
}


function contactDetails(state = {
		isContactDetailsSuccess: false,
		isContactDetailsPending: false,
		contactDetailsError: null
	}, action ) {
	switch (action.type) {
		case SET_CONTACT_DETAILS_PENDING:
			return Object.assign({}, state, {
				isContactDetailsPending: action.isContactDetailsPending
			});

		case SET_CONTACT_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isContactDetailsSuccess: action.isContactDetailsSuccess
			});

		case SET_CONTACT_DETAILS_ERROR:
			return Object.assign({}, state, {
				contactDetailsError: action.contactDetailsError
			});

		default:
			return state;
	}
}


function myJobs(state = {
		isMyJobsSuccess: false,
		isMyJobsPending: false,
		myJobsError: null,
		myJobs: null
	}, action ) {
	switch (action.type) {
		case SET_MY_JOBS_PENDING:
			return Object.assign({}, state, {
				isMyJobsPending: action.isMyJobsPending
			});

		case SET_MY_JOBS_SUCCESS:
			return Object.assign({}, state, {
				isMyJobsSuccess: action.isMyJobsSuccess
			});

		case SET_MY_JOBS_ERROR:
			return Object.assign({}, state, {
				myJobsError: action.myJobsError
			});

		case SET_MY_JOBS:
			return Object.assign({}, state, {
				myJobs: action.myJobs
			});

		default:
			return state;
	}
}


const todoApp = combineReducers({
	todos,
	services,
	api,
	createjob,
	register,
	login,
	loggedInStatus,
	jobDetails,
	contactDetails,
	myJobs
});

export default todoApp;