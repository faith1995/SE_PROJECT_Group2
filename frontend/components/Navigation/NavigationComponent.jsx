import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import cookie from 'react-cookie';

import { connect } from 'react-redux';
import { login } from '../../actions/actions';


class FooterComponent extends React.Component {
    render() {
        return ( 
			<footer className="text-center mb-4">
                <div className="container">
                    <hr />
                </div>
                {/*<div style={{display: 'inline-flex'}}>
                    <Link to="//www.facebook.com/BidvestCarHire/" target="blank_" className="ion-social">
                        <span className="ion-social-facebook-outline"></span>
                    </Link>
                    <Link to="//twitter.com/BidvestCarHire/" target="blank_" className="ion-social">
                        <span className="ion-social-twitter-outline"></span>
                    </Link>
                    <Link to="//www.instagram.com/bidvestcarhire/" target="blank_" className="ion-social">
                        <span className="ion-social-instagram-outline"></span>
                    </Link>
                </div>*/}
                
				

				<div className="mb-0" style={{color: '#969696'}} >
                    <Link to="//www.facebook.com/BidvestCarHire/" target="blank_" className="pl-1 pr-1">
                        T's & C's
                    </Link>
                    <span>&bull;</span>
                    <Link to="//www.facebook.com/BidvestCarHire/" target="blank_" className="pl-1 pr-1">
                        Privacy Policy
                    </Link>
                    <span>&bull;</span>
                    <Link to="//www.facebook.com/BidvestCarHire/" target="blank_" className="pl-1 pr-1">
                        Cookies
                    </Link>
                </div>

                <span className="mk-footer-copyright mb-2" style={{fontSize: '0.85rem', color: '#969696'}} >
                    Reliable &copy; All Rights Reserved 2017 
                </span>
			</footer> 
        );
    }
}

class NavigationComponent extends React.Component {
    render() {
    	let btnStyle = {
    		padding: '1rem 1rem',
    		margin: '0 0 1rem',
    		fontFamily: 'inherit',
    		fontSize: '1.3rem',
    		color: '#fff',
    		backgroundColor: '#2a92c7',
    		border: '1px solid #2a92c7',
    		fontWeight: 'bolder',
    		cursor: 'pointer'
    	}

        let imgStyle = {
            height: '3em',
            width: '3em',
            objectFit: 'cover',
            borderRadius: '50%'
        }

        let fs2em = {
            fontSize: '2em',
            display: 'block',
            lineHeight: '1'
        }

        let fsnb2em = {
            fontSize: '1em'
        }

        let fs085em = {
            fontSize: '0.75em'
        }

        let inf = {
            display: 'inline-flex',
            flexDirection: 'row',
            msFlexDirection: 'row'
        }

        

        let {isLoggedIn, id } = this.props;

        //alert(isLoggedIn);


    	return (
<div>

	<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'white', borderBottom: '1px solid forestgreen'}} >
    <div className="container">
		<Link className="navbar-brand" to="/">
			AvoHealth
		</Link>
        <div>
            {/*<span className="mr-2 mobile-im-v" >
                <img src="../pro.jpg" style={imgStyle} /> My Account
            </span>*/}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mobile-im-v" >
                <li className="nav-item mx-2">
                    <Link className="nav-link text-center p-0" to="/contact" style={fs085em}>
                        <span className="ion-ios-telephone" style={fs2em}></span>
                        Contact
                    </Link>
                </li>
                {/*<li className="nav-item mx-2">
                    <Link className="nav-link text-center p-0" to="/login" style={fs085em}>
                        <span className="ion-ios-bell" style={fs2em}></span>
                        Notifications
                    </Link>
                </li>*/}
                {
                    (isLoggedIn) 
                    ?
                    <li className="nav-item mx-2">
                        <Link className="nav-link text-center p-0" to="/account/jobs" style={fs085em}>
                            <span className="ion-person" style={fs2em}></span>
                            My Account
                        </Link>
                    </li>
                    :
                    <li className="nav-item mx-2">
                        <Link className="nav-link text-center p-0" to="/login" style={fs085em}>
                            <span className="ion-log-in" style={fs2em}></span>
                            Login
                        </Link>
                    </li>
                }
                
                <li className="nav-item ml-2">
                    <Link className="nav-link text-center p-0" to="#" style={fs085em} data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ion-navicon-round" style={fs2em}></span>
                        Menu
                    </Link>
                </li>
            </ul>
           

    		{/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
    		</button>*/}
        </div>

		<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul className="navbar-nav mr-auto mt-2 mt-lg-0 desktop-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
				
                <li className="nav-item">
                    <Link className="nav-link" to="#">Trades</Link>
                </li>

				<li className="nav-item">
					<Link className="nav-link" to="#">About</Link>
				</li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="#">Blog</Link>
                </li>
                
			</ul>

            {/*mobile nam */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mobile-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home <span className="ion-ios-arrow-right float-right" style={fsnb2em}></span></Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="#">Trades <span className="ion-ios-arrow-right float-right" style={fsnb2em}></span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="#">About <span className="ion-ios-arrow-right float-right" style={fsnb2em}></span></Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="#">Blog <span className="ion-ios-arrow-right float-right" style={fsnb2em}></span></Link>
                </li>
            </ul>

			<div className="form-inline my-2 my-lg-0 desktop-nav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-center" to="/contact" style={fs085em}>
                            <span className="ion-ios-telephone" style={fs2em}></span>
                            Contact
                        </Link>
                    </li>
                    {/*<li className="nav-item">
                        <Link className="nav-link text-center" to="/contact" style={fs085em}>
                            <span className="ion-ios-bell" style={fs2em}></span>
                            Notifications
                        </Link>
                    </li>*/}
                    {
                        (isLoggedIn) 
                        ?
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/account/jobs" style={fs085em}>
                                <span className="ion-person" style={fs2em}></span>
                                My Account
                            </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link className="nav-link text-center" to="/login" style={fs085em}>
                                <span className="ion-log-in" style={fs2em}></span>
                                Login
                            </Link>
                        </li>
                    }
                </ul>
			</div>
		</div>
    </div>
	</nav>

			{this.props.children}

	<FooterComponent />

</div>
    	);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loggedInStatus.isLoggedIn,
        id: state.loggedInStatus.id
    };
}

export default connect(mapStateToProps)(NavigationComponent);