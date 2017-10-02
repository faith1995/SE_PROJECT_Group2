import fetch from 'isomorphic-fetch';
import queryString from 'query-string';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

export const ADD_TODO = 'ADD_TODO';

export const SERVICES_STARTED = 'SERVICES_STARTED';
export const SERVICES_SUCCEEDED = 'SERVICES_SUCCEEDED';
export const SERVICES_FAILED = 'SERVICES_FAILED';
export const SERVICES_LOADED = 'SERVICES_LOADED';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const POST_AppoinmentsTARTED = 'POST_AppoinmentsTARTED';
export const POST_AppoinmentsUCCEEDED = 'POST_AppoinmentsUCCEEDED';
export const POST_MYJOBFAILED = 'POST_MYJOBFAILED';

export const REGISTER_CUSTOMER = 'REGISTER_CUSTOMER';
export const CREATE_JOB = 'CREATE_JOB';

export const ADD_BookAppoinment = 'ADD_BookAppoinment';
export const ADD_CONTACTDETAILS = 'ADD_CONTACTDETAILS';

//login 
export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const SET_LOGOUT = 'SET_LOGOUT';

//register
export const SET_REGISTER_PENDING = 'SET_REGISTER_PENDING';
export const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS';
export const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';

//job details
export const SET_BOOK_APPOINMENT = 'SET_BOOK_APPOINMENT';
export const SET_BOOK_APPOINMENT_PENDING = 'SET_BOOK_APPOINMENT_PENDING';
export const SET_BOOK_APPOINMENT_SUCCESS = 'SET_BOOK_APPOINMENT_SUCCESS';
export const SET_BOOK_APPOINMENT_ERROR = 'SET_BOOK_APPOINMENT_ERROR';

export const SET_CONTACT_DETAILS_PENDING = 'SET_CONTACT_DETAILS_PENDING';
export const SET_CONTACT_DETAILS_SUCCESS = 'SET_CONTACT_DETAILS_SUCCESS';
export const SET_CONTACT_DETAILS_ERROR = 'SET_CONTACT_DETAILS_ERROR';

export const SET_APPOINMENTS = 'SET_APPOINMENTS';
export const SET_APPOINMENTS_PENDING = 'SET_APPOINMENTS_PENDING';
export const SET_APPOINMENTS_SUCCESS = 'SET_APPOINMENTS_SUCCESS';
export const SET_APPOINMENTS_ERROR = 'SET_APPOINMENTS_ERROR';


let nextTodoId = 0;

//let backendUrl = 'http://localhost/SE_PROJECT_Group2/backend';

let backendUrl = 'https://silverspace.co.za/avohealth';


export function registerCustomer(data) {
	return (dispatch, getState) => {
        dispatch({type : "REQUEST_STARTED"});
        fetch('http://localhost/loop/Reliable/api/authenticate/create.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(json => dispatch({type : "REQUEST_SUCCEEDED", payload : json}))
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    
    };
}

function userLoggedIn(isLoggedIn, id, userType) {
	let d = new Date();
    let minutes = 525600;
    d.setTime(d.getTime() + (minutes*60*1000));

    cookie.save('ah-token-id', id, { path: '/', expires:  d});
    cookie.save('ah-token-type', userType, { path: '/', expires:  d});
    //cookie.save('type', user.type, { path: '/', expires: d });
	return {
		type: USER_LOGGED_IN,
		isLoggedIn,
		id,
		userType
	}
}

//register
function sendmail(email, firstname, lastname) {
	let data = {email: email, firstname: firstname, lastname: lastname}
	return (dispatch, getState) => {
        //dispatch({type : "REQUEST_STARTED"});
        fetch('http://avohealth.avospace.xyz/api/sendmail', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(response => {
            	alert(response);
            });    
    };
}

function setRegisterPending(isRegisterPending) {
	return {
		type: SET_REGISTER_PENDING,
		isRegisterPending
	}
}

function setRegisterSuccess(isRegisterSuccess) {
	return {
		type: SET_REGISTER_SUCCESS,
		isRegisterSuccess
	}
}

function setRegisterError(registerError) {
	return {
		type: SET_REGISTER_ERROR,
		registerError
	}
}

export function register(firstname, lastname, dob, contact, email, password) {	
	let data = {firstname: firstname, lastname: lastname, dob: dob, contact: contact, email: email, password: password}
	//alert(JSON.stringify(data));

	return (dispatch, getState) => {
        dispatch(setRegisterPending(true));
		dispatch(setRegisterSuccess(false));
		dispatch(setRegisterError(null));

        fetch(backendUrl + '/api/authenticate/create.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(
            	response => {
            		dispatch(setRegisterPending(false));
            		if (response.success) {
            			dispatch(setRegisterSuccess(true));
            			dispatch(userLoggedIn(true, response.id, response.type));
            			dispatch(sendmail(email, firstname, lastname));
            			browserHistory.push('/');
            		}else{
            			let message = new Error(response.message);
            			dispatch(setRegisterError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}


export function logout() {
	cookie.remove('ah-token-id', { path: '/' });
	cookie.remove('ah-token-type', { path: '/' });
	return (dispatch, getState) => {
        dispatch({type : "SET_LOGOUT"});
        browserHistory.push('/');
    }
	
}

//login 
function setLoginPending(isLoginPending) {
	return {
		type: SET_LOGIN_PENDING,
		isLoginPending
	}
}

function setLoginSuccess(isLoginSuccess) {
	return {
		type: SET_LOGIN_SUCCESS,
		isLoginSuccess
	}
}

function setLoginError(loginError) {
	return {
		type: SET_LOGIN_ERROR,
		loginError
	}
}




export function login(email, password) {	
	let data = {email: email, password: password}
	return (dispatch, getState) => {
        dispatch(setLoginPending(true));
		dispatch(setLoginSuccess(false));
		dispatch(setLoginError(null));

        fetch(backendUrl + '/api/authenticate/login.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(
            	response => {
            		dispatch(setLoginPending(false));
            		if (response.success) {
            			dispatch(setLoginSuccess(true));
            			dispatch(userLoggedIn(true, response.id, response.type));
            			browserHistory.push('/');
            		}else{
            			let message = new Error(response.message);
            			dispatch(setLoginError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}

//job details

function setBookAppoinmentPending(isBookAppoinmentPending) {
	return {
		type: SET_BOOK_APPOINMENT_PENDING,
		isBookAppoinmentPending
	}
}

function setBookAppoinmentSuccess(isBookAppoinmentSuccess) {
	return {
		type: SET_BOOK_APPOINMENT_SUCCESS,
		isBookAppoinmentSuccess
	}
}

function setBookAppoinmentError(bookAppoinmentError) {
	return {
		type: SET_BOOK_APPOINMENT_ERROR,
		bookAppoinmentError
	}
}

export function bookAppoinment(type, date, time, reason) {
	return (dispatch, getState) => {

		let data = {
			id: 1,//cookie.load(id)
			type: type,
			date_time: date + " " + time,
			reason: reason
		}
		//alert(JSON.stringify(data));
        dispatch(setBookAppoinmentPending(true));
		dispatch(setBookAppoinmentSuccess(false));
		dispatch(setBookAppoinmentError(null));

        fetch(backendUrl + '/api/appoinment/create.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(
            	response => {
            		dispatch(setBookAppoinmentPending(false));
            		if (response.success) {
            			dispatch(setBookAppoinmentSuccess(true));
            		}else{
            			let message = new Error(response.message);
            			dispatch(setBookAppoinmentError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}

//contact details

function setContactDetailsPending(isContactDetailsPending) {
	return {
		type: SET_CONTACT_DETAILS_PENDING,
		isContactDetailsPending
	}
}

function setContactDetailsSuccess(isContactDetailsSuccess) {
	return {
		type: SET_CONTACT_DETAILS_SUCCESS,
		isContactDetailsSuccess
	}
}

function setContactDetailsError(contactDetailsError) {
	return {
		type: SET_CONTACT_DETAILS_ERROR,
		contactDetailsError
	}
}

function callContactDetailsApi(data, callback) {
	setTimeout(() => {
		
		if (data) {
			//alert(JSON.stringify(data));
			return callback(null);
		}else {
			return callback(new Error('Please fill in all required fields'));
		}
	}, 1000);
}


export function contactDetails(contact, street_number, street, suburb, city, state, country, zip_code, location, viewport) {
	/*return (dispatch, getState) => {
		
		

		//alert(JSON.stringify(data))

		dispatch(setContactDetailsPending(true));
		dispatch(setContactDetailsSuccess(false));
		dispatch(setContactDetailsError(null));

		callContactDetailsApi(data, error => {
			dispatch(setContactDetailsPending(false));
			if (!error) {
				//dispatch(setContactDetailsSuccess(title, description, stage, start, budget));
				dispatch(setContactDetailsSuccess(true));
			}else{
				dispatch(setContactDetailsError(error));
			}
		});
	}*/

	return (dispatch, getState) => {
		let BookAppoinment = getState().BookAppoinment.BookAppoinment;
		if (BookAppoinment == null){
			browserHistory.push('/request');
			return;
		}

		let data = {
			title: BookAppoinment.title, 
			description: BookAppoinment.description, 
			stage: BookAppoinment.stage, 
			start: BookAppoinment.start, 
			budget: BookAppoinment.budget, 
			contact: contact, 
			street: street_number + " " + street,
			suburb: suburb,
			city: city,
			state: state,
			country: country,
			zip_code: zip_code,
			location: zip_code,
			viewport: viewport
		}

        dispatch(setContactDetailsPending(true));
		dispatch(setContactDetailsSuccess(false));
		dispatch(setContactDetailsError(null));

        fetch('http://localhost/loop/Reliable/api/job/create.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(
            	response => {
            		dispatch(setContactDetailsPending(false));
            		if (response.success) {
            			dispatch(setContactDetailsSuccess(true));
            			browserHistory.push('/account/success');
            		}else{
            			let message = new Error(response.message);
            			dispatch(setContactDetailsError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}

//get my jobs


function setAppoinments(appoinments) {
	return {
		type: SET_APPOINMENTS,
		appoinments
	}
}

function setAppoinmentsPending(isAppoinmentsPending) {
	return {
		type: SET_APPOINMENTS_PENDING,
		isAppoinmentsPending
	}
}

function setAppoinmentsSuccess(isAppoinmentsSuccess) {
	return {
		type: SET_APPOINMENTS_SUCCESS,
		isAppoinmentsSuccess
	}
}

function setAppoinmentsError(appoinmentsError) {
	return {
		type: SET_APPOINMENTS_ERROR,
		appoinmentsError
	}
}

export function appoinments() {
	let data = {id: 1};
	return (dispatch, getState) => {

        dispatch(setAppoinmentsPending(true));
		dispatch(setAppoinmentsSuccess(false));
		dispatch(setAppoinmentsError(null));

        fetch(backendUrl + '/api/appoinment/read.php', 
		{
		    method: "POST",
		    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			},
		    body: queryString.stringify(data)
		})
            .then(response => response.json())
            .then(
            	response => {
            		dispatch(setAppoinmentsPending(false));
            		if (response.success) {
            			dispatch(setAppoinmentsSuccess(true));
            			dispatch(setAppoinments(response.records));
            		}else{
            			let message = new Error(response.message);
            			dispatch(setAppoinmentsError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}