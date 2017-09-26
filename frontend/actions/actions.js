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

export const POST_MYJOBSTARTED = 'POST_MYJOBSTARTED';
export const POST_MYJOBSUCCEEDED = 'POST_MYJOBSUCCEEDED';
export const POST_MYJOBFAILED = 'POST_MYJOBFAILED';

export const REGISTER_CUSTOMER = 'REGISTER_CUSTOMER';
export const CREATE_JOB = 'CREATE_JOB';

export const ADD_JOBDETAILS = 'ADD_JOBDETAILS';
export const ADD_CONTACTDETAILS = 'ADD_CONTACTDETAILS';

//login 
export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

//register
export const SET_REGISTER_PENDING = 'SET_REGISTER_PENDING';
export const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS';
export const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';

//job details
export const SET_JOB_DETAILS = 'SET_JOB_DETAILS';
export const SET_JOB_DETAILS_PENDING = 'SET_JOB_DETAILS_PENDING';
export const SET_JOB_DETAILS_SUCCESS = 'SET_JOB_DETAILS_SUCCESS';
export const SET_JOB_DETAILS_ERROR = 'SET_JOB_DETAILS_ERROR';

export const SET_CONTACT_DETAILS_PENDING = 'SET_CONTACT_DETAILS_PENDING';
export const SET_CONTACT_DETAILS_SUCCESS = 'SET_CONTACT_DETAILS_SUCCESS';
export const SET_CONTACT_DETAILS_ERROR = 'SET_CONTACT_DETAILS_ERROR';

export const SET_MY_JOBS = 'SET_MY_JOBS';
export const SET_MY_JOBS_PENDING = 'SET_MY_JOBS_PENDING';
export const SET_MY_JOBS_SUCCESS = 'SET_MY_JOBS_SUCCESS';
export const SET_MY_JOBS_ERROR = 'SET_MY_JOBS_ERROR';


let nextTodoId = 0;

export function addTodo(text){
	alert('todo')
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	};
}

/*export function addJobDetails(data){
	return {
		type: ADD_JOBDETAILS,
		data
	}
}

export function addContactDetails(data){
	return {
		type: ADD_CONTACTDETAILS,
		data
	}
}*/

export function createJob(data){
	//	alert(JSON.stringify(data));
	return (dispatch, getState) => {
		alert(JSON.stringify(getState()));
		dispatch({type : "CREATE_JOB", data: data});
		/*return {
			type: CREATE_JOB,
			
		};*/
	}
}

export function getBook() {
    return (dispatch, getState) => {
    	//alert(JSON.stringify(getState()));
    	/*if (getState().services.length != []){
    		alert('not null');
    		dispatch({ type: "SERVICES_LOADED" });
    	}*/
    	 
    	//alert('null');
        dispatch({type : "SERVICES_STARTED"});
        
        fetch('http://localhost/loop/Reliable/api/service/read.php')
            .then(response => response.json())
            .then(json => dispatch({type : "SERVICES_SUCCEEDED", payload : json}))
            .catch(error => dispatch({type : "SERVICES_FAILED", error : error}));    
    };
}

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

function userLoggedIn(isLoggedIn, id) {
	let d = new Date();
    let minutes = 525600;
    d.setTime(d.getTime() + (minutes*60*1000));

    cookie.save('rt-token-id', id, { path: '/', expires:  d});
    //cookie.save('type', user.type, { path: '/', expires: d });
	return {
		type: USER_LOGGED_IN,
		isLoggedIn,
		id
	}
}

//register
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

export function register(firstname, lastname, email, password) {	
	let data = {firstname: firstname, lastname: lastname, email: email, password: password}
	//alert(JSON.stringify(data));

	return (dispatch, getState) => {
        dispatch(setRegisterPending(true));
		dispatch(setRegisterSuccess(false));
		dispatch(setRegisterError(null));

        fetch('http://localhost/loop/Reliable/api/authenticate/create.php', 
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
            			dispatch(userLoggedIn(true, response.id));
            			browserHistory.push('/account/jobs');
            		}else{
            			let message = new Error(response.message);
            			dispatch(setRegisterError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
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

/*function callLoginApi(email, password, callback) {
	setTimeout(() => {
		if (email === 'admin@example.com' && password === 'admin') {
			return callback(null);
		}else {
			return callback(new Error('Invalid email and password'));
		}
	}, 1000);
}

export function login(email, password) {
	return dispatch => {
		dispatch(setLoginPending(true));
		dispatch(setLoginSuccess(false));
		dispatch(setLoginError(null));

		callLoginApi(email, password, error => {
			dispatch(setLoginPending(false));
			if (!error) {
				dispatch(setLoginSuccess(true));
			}else{
				dispatch(setLoginError(error));
			}
		});
	}
}*/


export function login(email, password) {	
	let data = {email: email, password: password}
	return (dispatch, getState) => {
        dispatch(setLoginPending(true));
		dispatch(setLoginSuccess(false));
		dispatch(setLoginError(null));

        fetch('http://localhost/loop/Reliable/api/authenticate/login.php', 
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
            			dispatch(userLoggedIn(true, response.id));
            			browserHistory.push('/account/jobs');
            		}else{
            			let message = new Error(response.message);
            			dispatch(setLoginError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}

/*
export function login(data) {
	alert(JSON.stringify(data));
	return (dispatch, getState) => {
		
        dispatch({type : "REQUEST_STARTED"});
        fetch('http://localhost/loop/Reliable/api/authenticate/login.php', 
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

*/

//job details

function setJobDetails(title, description, stage, start, budget) {
	let jobDetails = {title: title, description: description, stage: stage, start: start, budget: budget }
	return {
		type: SET_JOB_DETAILS,
		jobDetails
	}
}

function setJobDetailsPending(isJobDetailsPending) {
	return {
		type: SET_JOB_DETAILS_PENDING,
		isJobDetailsPending
	}
}

function setJobDetailsSuccess(isJobDetailsSuccess) {
	return {
		type: SET_JOB_DETAILS_SUCCESS,
		isJobDetailsSuccess
	}
}

function setJobDetailsError(jobDetailsError) {
	return {
		type: SET_JOB_DETAILS_ERROR,
		jobDetailsError
	}
}

function callJobDetailsApi(title, description, stage, start, budget, callback) {
	setTimeout(() => {
		if (title && description && stage && start && budget) {
			return callback(null);
		}else {
			return callback(new Error('Please fill in all required fields'));
		}
	}, 1000);
}

export function jobDetails(title, description, stage, start, budget) {
	return dispatch => {
		dispatch(setJobDetailsPending(true));
		dispatch(setJobDetailsSuccess(false));
		dispatch(setJobDetailsError(null));

		callJobDetailsApi(title, description, stage, start, budget, error => {
			dispatch(setJobDetailsPending(false));
			if (!error) {
				dispatch(setJobDetails(title, description, stage, start, budget));
				dispatch(setJobDetailsSuccess(true));
				browserHistory.push('/contactdetails');
			}else{
				dispatch(setJobDetailsError(error));
			}
		});
	}
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
		let jobDetails = getState().jobDetails.jobDetails;
		if (jobDetails == null){
			browserHistory.push('/request');
			return;
		}

		let data = {
			title: jobDetails.title, 
			description: jobDetails.description, 
			stage: jobDetails.stage, 
			start: jobDetails.start, 
			budget: jobDetails.budget, 
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


function setMyJobs(myJobs) {
	return {
		type: SET_MY_JOBS,
		myJobs
	}
}

function setMyJobsPending(isMyJobsPending) {
	return {
		type: SET_MY_JOBS_PENDING,
		isMyJobsPending
	}
}

function setMyJobsSuccess(isMyJobsSuccess) {
	return {
		type: SET_MY_JOBS_SUCCESS,
		isMyJobsSuccess
	}
}

function setMyJobsError(myJobsError) {
	return {
		type: SET_MY_JOBS_ERROR,
		myJobsError
	}
}

export function myJobs() {
	let data = {id: 1};
	return (dispatch, getState) => {

        dispatch(setMyJobsPending(true));
		dispatch(setMyJobsSuccess(false));
		dispatch(setMyJobsError(null));

        fetch('http://localhost/loop/Reliable/api/job/read.php', 
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
            		dispatch(setMyJobsPending(false));
            		if (response.success) {
            			dispatch(setMyJobsSuccess(true));
            			dispatch(setMyJobs(response.records));
            		}else{
            			let message = new Error(response.message);
            			dispatch(setMyJobsError(message));
            		}
            	}
            )
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error}));    //need to be worked on 
    };
}