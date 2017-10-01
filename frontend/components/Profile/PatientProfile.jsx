import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';


export default class PatientProfileComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    quote() {
        browserHistory.push('/request');
    }
    
    render() {

        let jumbotron = {
            backgroundColor: 'forestgreen'
        }

        return (
            <div className="fixed-padding-top">

                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <IndexLink className="nav-link" activeClassName="active" to="/patient/profile">General</IndexLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="active" to="/patient/profile/address">Address</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="active" to="/patient/profile/medical-aid">Medical Aid</Link>
                                </li>
                                {/*<li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                {this.props.children}
                    
            </div>
        );
    }
}