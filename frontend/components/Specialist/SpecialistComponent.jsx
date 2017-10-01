import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';


export default class SpecialistComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {

        return (
            <div>
                {/*<div className="jumbotron jumbotron-fluid mb-0" style={jumbotron} >
                    <div className="container">
                        <div className="text-center" style={{color: 'white'}}>
                            <div className=""> 
                                <img className="mb-2" src="../pro.jpg" style={imgStyle} />
                                <h5 className="mt-2" style={{fontWeight: '400'}} >Firstname Lastname</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar sticky-top mb-1 mb-sm-4" style={nav} >
                    <div className="container pt-0 pb-0">
                        <Link to="/" className="text-center" style={fs085em}>
                            <span className="ion-grid" style={fs2em}></span>
                            Dashboard
                        </Link>
                        <Link to="/account/jobs" className="text-center" style={fs085em}>
                            <span className="ion-settings" style={fs2em}></span>
                            My Jobs
                        </Link>
                        <Link to="/" className="text-center" style={fs085em}>
                            <span className="ion-person-stalker" style={fs2em}></span>
                            My Appoinments
                        </Link>
                        <span className="text-center" style={fs085em}>
                            <span className="ion-more" style={fs2em}></span>
                            More
                        </span>
                    </div>
                </nav>*/}

                {this.props.children}

            </div>
        );
    }
}