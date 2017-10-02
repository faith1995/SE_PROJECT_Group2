import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

import Specialist from './Specialist.jsx';
import Frontdesk from './Frontdesk.jsx';
import Patient from './Patient.jsx';
import Guest from './Guest.jsx';

import { connect } from 'react-redux';
import { login, logout } from '../../actions/actions';


class DashboardComponent extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        let url = {
            fontWeight: '400',
            textDecoration: 'none'
        }

        let {isLoggedIn, id, userType } = this.props;
        if (isLoggedIn) {
            //return <Specialist />;
            switch (userType) {
                case "P":
                    return <Patient />
                    break;
                case "F":
                    return <Frontdesk />
                    break;
                case "S":
                    return <Specialist />;

                default:
                    return null;
            }

        }else{
            return <Guest />;
        }
        
        /*return (
            <div className="fixed-padding-top" >
                <div className="container my-sm-4 my-2">


            <header className="clearfix">
                <span>Blueprint <span className="bp-icon bp-icon-about" data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span></span>
                <h1>Vertical Timeline</h1>
                <nav>
                    <a href="https://tympanus.net/Blueprints/ScrollingLayout/" className="bp-icon bp-icon-prev" data-info="previous Blueprint"><span>Previous Blueprint</span></a>
                    <a href="https://tympanus.net/codrops/?p=14941" className="bp-icon bp-icon-drop" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>
                    <a href="https://tympanus.net/codrops/category/blueprints/" className="bp-icon bp-icon-archive" data-info="Blueprints archive"><span>Go to the archive</span></a>
                </nav>
            </header>   
                <div className="row">
                    <div className="col-sm-8">
                        <Timeline />
                    </div>
                </div>





                </div>
            </div>
        );*/
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loggedInStatus.isLoggedIn,
        id: state.loggedInStatus.id,
        userType: state.loggedInStatus.userType
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);