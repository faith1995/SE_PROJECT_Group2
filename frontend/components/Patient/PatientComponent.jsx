import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';


export default class HomeComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    quote() {
        browserHistory.push('/request');
    }
    
    render() {

        let imgStyle = {
            height: '6rem',
            width: '6rem',
            objectFit: 'cover',
            borderRadius: '50%'
        }

        let galleryStyle = {
            objectFit: 'cover'
        }

        

        let cardS = {
            WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            border: 'none'
        }

        let jumbotron = {
            background: 'url("../home.jpg") no-repeat center center',
            WebkitBackgroundSize: '100% 100%',
            MozBackgroundSize: '100% 100%',
            OBackgroundSize: '100% 100%',
            backgroundSize: '100% 100%',
            backgroundSize: 'cover',
            borderRadius: '0',
            boxShadow: 'inset 0px -120px 80px -60px rgba(0,0,0,0.5)'
        }

        let starIcon = {
            fontSize: '2em',
            color: '#2a92c7'
        }

        let box = {
            WebkitBoxShadow: '0px 0px 2px 0px rgba(42,146,199,0.5)',
            MozBoxShadow: '0px 0px 2px 0px rgba(42,146,199,0.5);',
            boxShadow: 'inset 0px -65px 60px -4px rgba(84,84,84,1)',
        }

        let nav = {
            backgroundColor: 'white',
            color: '#9a9a9a'
        }

        let fs2em = {
            fontSize: '2em',
            display: 'block',
            lineHeight: '1'
        }

        let fs085em = {
            fontSize: '0.75em',
            textDecoration: 'none',
            color: 'inherit'
        }

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