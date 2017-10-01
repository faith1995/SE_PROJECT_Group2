import { combineReducers } from 'redux';
import { 
	ADD_TODO, ADD_BookAppoinment, ADD_CONTACTDETAILS,
	SERVICES_STARTED, SERVICES_SUCCEEDED,  SERVICES_FAILED, SERVICES_LOADED, 
	REQUEST_STARTED, REQUEST_SUCCEEDED,  REQUEST_FAILED,
	REGISTER_CUSTOMER, CREATE_JOB,
	POST_AppoinmentsTARTED, POST_AppoinmentsUCCEEDED, POST_MYJOBFAILED,
	SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_LOGOUT,
	SET_REGISTER_PENDING, SET_REGISTER_SUCCESS, SET_REGISTER_ERROR,
	USER_LOGGED_IN, 
	SET_BOOK_APPOINMENT_PENDING, SET_BOOK_APPOINMENT_SUCCESS, SET_BOOK_APPOINMENT_ERROR,
	SET_CONTACT_DETAILS_PENDING, SET_CONTACT_DETAILS_SUCCESS, SET_CONTACT_DETAILS_ERROR,
	SET_APPOINMENTS, SET_APPOINMENTS_PENDING, SET_APPOINMENTS_SUCCESS, SET_APPOINMENTS_ERROR
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

/*function BookAppoinment(state = [], action){
	switch (action.type) {
		case ADD_BookAppoinment:
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

		case SET_LOGOUT:
			return Object.assign({}, state, {
				isLoginPending: false,
				isLoginSuccess: false,
				loginError: null
			});

		default:
			return state;
	}
}

function loggedInStatus(state = 
	{
		isLoggedIn: (cookie.load('ah-token-id')) ? true : false, 
		id: cookie.load('ah-token-id'),
		userType: cookie.load('ah-token-type')
	}, action) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return Object.assign({}, state, {
				isLoggedIn: action.isLoggedIn,
				id: action.id,
				userType: action.userType
			});

		case SET_LOGOUT:
			return Object.assign({}, state, {
				isLoggedIn: false,
				id: null,
				userType: null
			});

		default:
			return state;
	}
}


function bookAppoinment(state = {
		isBookAppoinmentSuccess: false,
		isBookAppoinmentPending: false,
		bookAppoinmentError: null
	}, action ) {
	switch (action.type) {
		case SET_BOOK_APPOINMENT_PENDING:
			return Object.assign({}, state, {
				isBookAppoinmentPending: action.isBookAppoinmentPending
			});

		case SET_BOOK_APPOINMENT_SUCCESS:
			return Object.assign({}, state, {
				isBookAppoinmentSuccess: action.isBookAppoinmentSuccess
			});

		case SET_BOOK_APPOINMENT_ERROR:
			return Object.assign({}, state, {
				bookAppoinmentError: action.BookAppoinmentError
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


function appoinments(state = {
		isAppoinmentsSuccess: false,
		isAppoinmentsPending: false,
		appoinmentsError: null,
		appoinments: null
	}, action ) {
	switch (action.type) {
		case SET_APPOINMENTS_PENDING:
			return Object.assign({}, state, {
				isAppoinmentsPending: action.isAppoinmentsPending
			});

		case SET_APPOINMENTS_SUCCESS:
			return Object.assign({}, state, {
				isAppoinmentsSuccess: action.isAppoinmentsSuccess
			});

		case SET_APPOINMENTS_ERROR:
			return Object.assign({}, state, {
				appoinmentsError: action.appoinmentsError
			});

		case SET_APPOINMENTS:
			return Object.assign({}, state, {
				appoinments: action.appoinments
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
	bookAppoinment,
	contactDetails,
	appoinments
});

export default todoApp;