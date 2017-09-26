import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

class Login extends React.Component {


    onSave(e) {
        alert(this.location.value);
        e.preventDefault();
    }
    
    render() {
        let url = {
            fontWeight: '400',
            textDecoration: 'none'
        }
        return (
            <form  onSubmit={this.onSave.bind(this)} >
                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Forgotten password</h3>
                <p>Enter your email address below and we'll send you instructions to reset your password</p>
                <div className="form-row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label for="inputEmail4" className="col-form-label">Email *</label>
                            <input type="text" id="inputEmail4" className="form-control" placeholder="Email" />
                        </div>
                    </div>                      
                </div>
                <div className="text-center mt-2 mb-2">
                    <button type="button" className="btn btn-primary btn-block" type="submit">Send Reset Link</button>
                </div>
            </form>
        );
    }
}


export default class HomeComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {

        let jumbotron = {
            backgroundColor: 'white'
        }

        let cardS = {
            WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            border: 'none'
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}}>
                            <div className="card my-sm-4 my-2" style={cardS}>
                                <div className="card-body">                                   
                                    <Login />
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}