import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

export default class ResetComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSave(e) {
        e.preventDefault();
    }
    
    render() {
        let url = {
            fontWeight: '400',
            textDecoration: 'none'
        }

        return (
            <div className="fixed-padding-top" >
                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}}>                        
                            <form  onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Forgotten password</h3>
                                <p>Enter your email address below and we'll send you instructions to reset your password</p>
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Email *</label>
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>                      
                                </div>
                                <div className="text-center mt-2 mb-2">
                                    <button type="submit" className="btn btn-primary btn-block" type="submit">Send Reset Link</button>
                                </div>
                            </form>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}