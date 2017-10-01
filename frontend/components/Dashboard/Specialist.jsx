import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

import ReactHighcharts from 'react-highcharts';


class Appoinment extends React.Component {
    render() {
        return (
            <li>
                <time className="cbp_tmtime" dateTime="2013-04-10 18:30"><span>4/10/13</span> <span>18:30</span></time>
                <div className="cbp_tmicon ion-ios-person-outline"></div>
                <div className="cbp_tmlabel">
                    <h2>Firstname Lastname</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </li>
        );
    }
}

class Timeline extends React.Component {
    render() {
        return (
            <div className="main">
                <ul className="cbp_tmtimeline">
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                    <Appoinment />
                </ul>
            </div>
        );
    }
}

export default class SpecialistComponent extends React.Component {
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

        let dashTotal = {
            border: '1em solid forestgreen',
            borderRadius: '5px',
            background: 'forestgreen',
            color: 'white',
            padding: '2em'
        }

        let ionSize = {
            fontSize: '2.5em'
        }

        const config = {
            /* HighchartsConfig */
            chart: {
                type: 'column'
            },
            title: {
                text: 'Appoinments status breakdown'
            },
            subtitle: {
                text: 'This Month'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No. of Appoinments'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<b>{point.y:.0f} Appoinments this month.</b>'
            },
            series: [{
                name: 'Population',
                color: 'forestgreen',
                data: [
                    ['Upcoming', 14.2],
                    ['Arrived', 12.5],
                    ['Did not arrive', 12.1],
                    ['Cancelled', 11.1]

                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    backgroundColor: 'forestgreen',
                    align: 'right',
                    format: '{point.y:.0f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        };

        return (
            <div className="fixed-padding-top" >
                <div className="container my-sm-4 my-2">
                    <div className="row text-center">
                        <div className="col-sm-4 my-2">
                            <div className="" style={dashTotal} >
                                <span className="fa fa-calendar" style={ionSize} ></span>
                                <br/>
                                <b>2 <br/>Appoinments Today</b>
                            </div>
                            <hr />
                            <button className="btn btn-outline-success btn-block" type="submit" >
                                View Appoinments
                            </button>
                        </div>

                        <div className="col-sm-4 text-center my-2">
                            <div className="" style={dashTotal} >
                                <span className="fa fa-calendar" style={ionSize} ></span><br/>
                                <b>3 <br/>Active Patients</b>
                            </div>
                            <hr />
                            <button className="btn btn-outline-success btn-block" type="submit" >
                                View Patients
                            </button>
                        </div>

                        <div className="col-sm-4 my-2">
                            <div className="" style={dashTotal} >
                                <span className="fa fa-calendar" style={ionSize} ></span><br/>
                                <b>6 <br/>Upcoming Appoinments</b>
                            </div>
                            <hr />
                            <button className="btn btn-outline-success btn-block" type="submit" >
                                View Appoinments
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 my-4">
                            <ReactHighcharts config={config} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}