import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';

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

export default class ResetComponent extends React.Component {
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "../js/timeline.js";
        script.async = true;
        document.body.appendChild(script);
    }

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


            <header className="clearfix">
                <span>Blueprint <span className="bp-icon bp-icon-about" data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span></span>
                <h1>Vertical Timeline</h1>
                <nav>
                    <a href="https://tympanus.net/Blueprints/ScrollingLayout/" className="bp-icon bp-icon-prev" data-info="previous Blueprint"><span>Previous Blueprint</span></a>
                    <a href="https://tympanus.net/codrops/?p=14941" className="bp-icon bp-icon-drop" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>
                    <a href="https://tympanus.net/codrops/category/blueprints/" className="bp-icon bp-icon-archive" data-info="Blueprints archive"><span>Go to the archive</span></a>
                </nav>
            </header>   
            {/*<Timeline />*/}
                <div className="row">
                    <div className="col-sm-8">
                        <Timeline />
                    </div>
                </div>





                </div>
            </div>
        );
    }
}