import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import { connect } from 'react-redux';
import { addTodo, getBook } from '../../actions/actions';

import Select from 'react-select';

/*:global {
  @import 'react-select/dist/react-select.css';
}*/
//import 'react-select/dist/react-select.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: null,
            location: null,
            services: [],
            locations: []
        }
    }

    componentWillMount() {
        
    }

    componentWillReceiveProps(props) {    
      //alert('props');
      //alert(JSON.stringify(props.result.services));
      
        if (props.result.services.records){
            let services = props.result.services.records.map(function(service){
                return {
                    value: service.id, label: service.name,
                };
            });
            
            this.setState({services: services});
        }

        if (props.result.locations.records){
            let locations = props.result.locations.records.map(function(location){
                return {
                    value: location.id, label: location.name,
                };
            });
            
            this.setState({locations: locations});
        }

      /*this.setState({services: services});*/
    }

    handleInputChange(e) {
        const name = e.target.name;

        this.setState({
          [name]: e.target.value
        });
    }

    locationChange(val) {
        this.setState({location: val});
    }

    serviceChange(val) {
        this.setState({service: val});
    }

    onSave(e) {
        //alert(this.state.location.value);
        browserHistory.push('/search');
        e.preventDefault();
    }
    
    render() {

        let services = null;

        var options = [
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: '1', label: 'Johannesburg'}
        ];



        return (
            <div className="row">
                <form className="col-sm-12 col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}} onSubmit={this.onSave.bind(this)} >
                    <div className="form-row">
                        
                        <div className="col-sm-6 mb-2">
                            <div class="form-group">
                                <small id="passwordHelpBlock" className="form-text" style={{color: 'white'}} >
                                    Select location
                                </small>
                                <Select
                                  name="form-field-name"
                                  //value="one"
                                  options={this.state.locations}
                                  cleaable="true"
                                  searchable={false}
                                  placeholder="Select your location"
                                  value={this.state.location}
                                  onChange={this.locationChange.bind(this)}
                                  required
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 mb-2">
                            <div class="form-group">
                                <small id="passwordHelpBlock" className="form-text" style={{color: 'white'}} >
                                    Select a service
                                </small>
                                <Select
                                  name="form-field-name"
                                  //value="one"
                                  options={this.state.services}
                                  cleaable="true"
                                  searchable={false}
                                  placeholder="Select your service"
                                  value={this.state.service}
                                  onChange={this.serviceChange.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-3" type="submit" style={{backgroundColor: '#2a92c7', borderColor: '#2a92c7'}} >Find a Proffesional</button>
                    </div>
                </form>
            </div>
        );
    }
}


class HomeComponent extends React.Component {
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
        const { dispatch, visibleServices } = this.props;
        //alert(visibleServices.length);
        //if (visibleServices.length == 0)
            //dispatch(getBook());
        dispatch(getBook());
    }

    componentWillReceiveProps(props) { 
        //alert(props);   
        this.setState({services: props.visibleServices});
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
            mozBackgroundSize: '100% 100%',
            oBackgroundSize: '100% 100%',
            backgroundSize: '100% 100%',
            backgroundSize: 'cover',
            borderRadius: '0'
        }

        let starIcon = {
            fontSize: '2em',
            color: '#2a92c7'
        }

        const { dispatch, visibleServices } = this.props;
        //alert(visibleServices);
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotron} >
                    <div className="container" style={{padding: '0 15px'}}>
                        <div className="text-center" style={{color: 'white'}}>
                            <h1 class="color-white weight-bold" style={{fontSize: '2.5rem', fontWeight: '700'}} >Reliable Trader</h1>
                        </div>
                        {/*<button onClick={book => dispatch(getBook())}>Service</button>*/}
                        <Search result={visibleServices} />
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

function select(state) {
    return {
        visibleServices: state.services
    }
}

export default connect(select)(HomeComponent);