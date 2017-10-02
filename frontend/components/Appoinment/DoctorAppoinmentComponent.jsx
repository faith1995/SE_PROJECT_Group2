import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

import { connect } from 'react-redux';
import { appoinments } from '../../actions/actions';

class Appoinment extends React.Component {
    render() {

        let date_time = new Date(this.props.appoinment.date_time);

        let date = date_time.getDay() + '/' + date_time.getMonth() + '/' + date_time.getFullYear();

        let time = date_time.getHours() + ':' +  ('0' + date_time.getMinutes()).slice(-2);
        return (
            <li>
                <time className="cbp_tmtime" dateTime="2013-04-10 18:30"><span>{date}</span> <span>{time}</span></time>
                <div className="cbp_tmicon ion-ios-person-outline"></div>
                <div className="cbp_tmlabel">
                    
                    <span href="#" className="badge badge-dark my-2">{this.props.appoinment.status}</span>
                    <h4>{this.props.appoinment.firstname} {this.props.appoinment.lastname}</h4>
                    <h5>{this.props.appoinment.type}</h5>
                    <p>{this.props.appoinment.reason}</p>
                    <div className="row">
                        <div className="col-sm-6 my-2">
                            <button className="btn btn-outline-light btn-block" type="submit" >
                                Add Comment
                            </button>
                        </div>
                        <div className="col-sm-6 my-2">
                            <button className="btn btn-outline-light btn-block" type="submit" >
                                Add Prescription
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

class Timeline extends React.Component {
    render() {
        let appoinments = this.props.appoinments.map(function(appoinment, i) {
            return (
                <Appoinment key={i} appoinment={appoinment} />
            );
        }.bind(this));

        return (
            <div className="main">
                <ul className="cbp_tmtimeline">
                    {appoinments}
                    {/*<Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />*/}
                </ul>
            </div>
        );
    }
}

class DoctorAppoinmentComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.appoinments();
    }

    onSave(e) {
        e.preventDefault();
    }
    
    render() {
        /*let url = {
            fontWeight: '400',
            textDecoration: 'none'
        }*/

        let jumbotron = {
            backgroundColor: 'forestgreen'
        }

        let loader = {
            fontSize: '2em',
            color: 'forestgreen'
        }

        let {isAppoinmentsPending, isAppoinmentsSuccess, appoinmentsError, appoinmentsList } = this.props;

        return (
            <div className="fixed-padding-top" >
                <div className="jumbotron jumbotron-fluid mb-0" style={jumbotron} >
                    <div className="container" style={{padding: '0 15px'}} >
                        <br/>
                        <div className="text-center" style={{color: 'white'}}>
                            <h3 className="color-white weight-bold" style={{fontSize: '1.5rem', fontWeight: '600'}} >Appoinments</h3>
                            {/*<div className="row">
                                <div className="col-sm-4 col-sm-offset-8 mt-2" style={{float: 'none', margin: '0 auto'}}>
                                    <Link className="btn btn-outline-light btn-block" to="/patient/book-an-appoinment" >
                                        Book an Appoinment
                                    </Link>
                                </div>
                            </div>*/}
                        </div>
                        <br/>
                    </div>
                </div>

                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-sm-12">
                            {
                                (isAppoinmentsPending && !isAppoinmentsSuccess)
                                ?
                                <div className="text-center" >
                                    <hr />
                                    <span className="fa fa-spinner fa-spin" style={loader}></span> <br/>loading...
                                </div>
                                :
                                (isAppoinmentsSuccess && appoinmentsList != null) ? <Timeline appoinments={appoinmentsList} /> : null
                            }
                            {/*<Timeline />*/}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    /*if (state.Appoinments.Appoinments) {
        alert(state.Appoinments.Appoinments.length)
    }*/
    return {
        isAppoinmentsPending: state.appoinments.isAppoinmentsPending,
        isAppoinmentsSuccess: state.appoinments.isAppoinmentsSuccess,
        appoinmentsError: state.appoinments.appoinmentsError,
        appoinmentsList: state.appoinments.appoinments
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        appoinments: () => dispatch(appoinments())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAppoinmentComponent);