import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import { connect } from 'react-redux';
//import {  } from '../../actions/actions';

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
                            <div className="form-group">
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
                            <div className="form-group">
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
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block img-fluid banner-image" src="../dental1.jpg" alt="First slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Family Dentistry</h3>
                        <p>Healthy Smiles for Everyone!</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid banner-image" src="../dental2.jpg" alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Brighten</h3>
                        <p>Your Smile, Build Your Confidence</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid banner-image" src="../dental3.jpg" alt="Third slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h3>Quality Care</h3>
                        <p>Your health is our priority</p>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>


                <div className="container">
                    <div className="row text-center my-3">
                        <div className="col-sm-3">
                            <h5>Appoinments</h5>
                            <p>Patients information is well managed and secure.</p>
                        </div>

                        <div className="col-sm-3">
                            <h5>Practice Management</h5>
                            <p>Patients information is well managed and secure.</p>
                        </div>

                        <div className="col-sm-3">
                            <h5>Invoicing & Accounting</h5>
                            <p>Simple, clean, precise invoices and statements are send to our patients.</p>
                        </div>

                        <div className="col-sm-3">
                            <h5>Remainders</h5>
                            <p>Email remainders for patient appointments and important changes in the facility.</p>
                        </div>
                    </div>

                    <div className="row text-center my-3">
                        <div className="col-sm-12 my 2">
                            <h4>Services</h4>
                        </div>
                        <div className="col-sm-4">
                            <div className="rotate-link my-2"><img src="http://smiledentalclinic.co.za/wp-content/uploads/restorative-dentistry-icon.png" alt="Restorative Dentistry" width="125" className="rotate-icon" /></div>
                            <h5 className="mt-2" >Restorative Dentistry</h5>
                            <span>Extractions</span><br/>
                            <span>Root Canal Treatment</span><br/>
                            <span>Dental Fillings</span><br/>
                            <span>Extractions</span><br/>
                        </div>

                        <div className="col-sm-4">
                            <div className="rotate-link my-2"><img src="http://smiledentalclinic.co.za/wp-content/uploads/restorative-dentistry-icon.png" alt="Restorative Dentistry" width="125" className="rotate-icon" /></div>
                            <h5 className="mt-2" >Cosmetic Dentistry</h5>
                            <span>Dental Crowns</span><br/>
                            <span>Dental Bridges</span><br/>
                            <span>Dental Veneers</span><br/>
                            <span>Teeth Whitening</span><br/>
                        </div>

                        <div className="col-sm-4">
                            <div className="rotate-link my-2"><img src="http://smiledentalclinic.co.za/wp-content/uploads/restorative-dentistry-icon.png" alt="Restorative Dentistry" width="125" className="rotate-icon" /></div>
                            <h5 className="mt-2" >Restorative Dentistry</h5>
                            <span>Extractions</span><br/>
                            <span>Root Canal Treatment</span><br/>
                            <span>Dental Veneers</span><br/>
                            <span>Extractions</span><br/>
                        </div>
                    </div>

                    {/*<div className="row">
                        <section id="our-services">
                            <div className="container-rotate">
                                <div className="row2">
                                <div className="col-lg-12 text-center">
                                    <h1>Our Services</h1>
                                </div> 
                                </div>
                                 <div className="row">
                                   <div className="col-sm-6">
                                    <a href="#" className="rotate-link"><img src="http://smiledentalclinic.co.za/wp-content/uploads/restorative-dentistry-icon.png" alt="Restorative Dentistry" width="125" className="rotate-icon" /></a>
                                    <div className="center">
                                    <h5>Restorative Dentistry</h5>
                                   </div>
                                    <ul>
                                        <li>Extractions</li>
                                        <li>Root Canal Treatment</li>
                                        <li>Dental Fillings </li>
                                    </ul>
                                </div>
                                  <div className="col-sm-6">
                                    <a href="#" className="rotate-link"><img src="http://smiledentalclinic.co.za/wp-content/uploads/cosmetic-dentistry-icon.png" alt="Comsmetic Dentistry" width="125" className="rotate-icon" /></a>
                                    <div className="center">
                                    <h5>Cosmetic Dentistry</h5>
                                     </div>
                                    <ul>
                                        <li>Dental Crowns</li>
                                        <li>Dental Bridges</li>
                                        <li>Dental Veneers </li>
                                        <li>Teeth Whitening </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="rotate-link"><img src="http://smiledentalclinic.co.za/wp-content/uploads/sedation-dentistry-icon.png" alt="Sedation Dentistry" width="125" className="rotate-icon" /></a>
                                    <div className="center">
                                    <h5>Sedation Dentistry</h5>
                                     </div>
                                    <ul>
                                        <li>Conscious</li>
                                        <li>General Anaesthesia</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="rotate-link"><img src="http://smiledentalclinic.co.za/wp-content/uploads/prosthetic-dentistry-icon.png" alt="Prosthetic Dentistry" width="125" className="rotate-icon" /></a>
                                    <div className="center">
                                    <h5>Prosthetic Dentistry</h5>
                                     </div>
                                    <ul>
                                        <li>Full and partial dentures</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="rotate-link"><img src="http://smiledentalclinic.co.za/wp-content/uploads/preventative-dentistry-icon.png" alt="Preventative Dentistry" width="125" className="rotate-icon" /></a>
                                    <div className="center">
                                    <h5>Preventative Dentistry</h5>
                                     </div>
                                    <ul>
                                        <li>Scale and Polish</li>
                                    </ul>
                                </div>
                              </div>
                              </div>
                        </section>
                    </div>*/}
                </div>

                <br/><br/><br/>
            </div>
        );
    }
}
