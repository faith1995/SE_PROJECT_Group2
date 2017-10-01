import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
//import { connect } from 'react-redux';
//import {  } from '../../actions/actions';

import Select from 'react-select';

/*:global {
  @import 'react-select/dist/react-select.css';
}*/
//import 'react-select/dist/react-select.css';



export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    componentWillMount(){

    }

    componentDidMount(){
        window.scrollTo(0,0);
        //const { dispatch, visibleServices } = this.props;
        //alert(visibleServices.length);
        //if (visibleServices.length == 0)
            //dispatch(getBook());
        //dispatch(getBook());
    }

    componentWillReceiveProps(props) { 
        //alert(props);   
        //this.setState({services: props.visibleServices});
    }
    
    render() {

        let imgStyle = {
            height: '5em',
            width: '5em',
            objectFit: 'cover',
            borderRadius: '50%'
        }

        let cardS = {
            WebkitBoxShadow: '0px 0px 2px 0px rgba(42,146,199,0.5)',
            MozBoxShadow: '0px 0px 2px 0px rgba(42,146,199,0.5);',
            boxShadow: '0px 0px 2px 0px rgba(42,146,199,0.5)',
            border: 'none'
        }

        let jumbotron = {
            background: 'url("../home.jpg") no-repeat center center',
            WebkitBackgroundSize: '100% 100%',
            MozBackgroundSize: '100% 100%',
            OBackgroundSize: '100% 100%',
            backgroundSize: '100% 100%',
            backgroundSize: 'cover',
            borderRadius: '0'
        }

        let starIcon = {
            fontSize: '2em',
            color: '#2a92c7'
        }

        
        //alert(visibleServices);
        return (
            <div className="fixed-padding-top">
                <div className="jumbotron jumbotron-fluid" style={jumbotron} >
                    <div className="container" style={{padding: '0 15px'}}>
                        <div className="text-center" style={{color: 'white'}}>
                            <h1 className="color-white weight-bold" style={{fontSize: '2.5rem', fontWeight: '700'}} >AvoHealth</h1>
                        </div>
                        {/*<button onClick={book => dispatch(getBook())}>Service</button>*/}
                        {/*<Search result={visibleServices} />*/}
                        <br/><br/><br/>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Landing Page Content</h1>    
                        </div>
                    </div>
                </div>

                <br/><br/><br/>
            </div>
        );
    }
}
