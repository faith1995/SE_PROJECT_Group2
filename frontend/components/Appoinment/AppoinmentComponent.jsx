import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import Select from 'react-select';

import { connect } from 'react-redux';
import { bookAppoinment } from '../../actions/actions';

class AppoinmentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            reason: "",
            password: "",
            submitted: false,
            error: false,
            start: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        const script = document.createElement("script");
        script.src = "../js/date-time.js";
        script.async = true;
        document.body.appendChild(script);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    typeChange(val) {
        this.setState({type: val.value});
    }

    handleInputChange(e) {
        const name = e.target.name;

        this.setState({
          [name]: e.target.value
        });
    }

    onSave(e) {
        e.preventDefault();
        this.props.bookAppoinment(this.state.type, this.date.value, this.time.value, this.state.reason);
    }
    
    
    render() {

        let jumbotron = {
            backgroundColor: 'white'
        }

        let cardS = {
            WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            border: 'none'
        }

        let url = {
            fontWeight: '400',
            textDecoration: 'none',
            color: 'forestgreen'
        }

        let options = [
            { value: 'Tooth Cleaning', label: 'Tooth cleaning' },
            { value: 'Tooth Decay', label: 'Tooth decay' },
            { value: 'Tooth Removal', label: 'Tooth removal'},
            { value: 'Fractured Teeth', label: 'Fractured teeth'},
            { value: 'Dental Braces', label: 'Dental braces'}
        ];

        //const { dispatch, loginResult } = this.props;

        let {isBookAppoinmentPending, isBookAppoinmentSuccess, bookAppoinmentError } = this.props;

        let btnLogin = (isBookAppoinmentPending) ? 
            <button className="btn btn-primary btn-block" type="button" disabled>
                <span className="fa fa-spinner fa-spin"></span> Please wait...
            </button>
            : 
            <button className="btn btn-primary btn-block" type="submit" >
                Book appoinment
            </button>;

        //alert(loginError);
        return (
            <div className="fixed-padding-top">
                <div className="container my-sm-4 my-2">
                    <div className="row ">
                        <div className="col-lg-8 col-lg-offset-4  " style={{margin: '0 auto', float: 'none'}}>
                            <form onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Book an Appoinment </h3>
                                <div className="form-row">

                                    <div className="col-sm-12 col-sm-offset-0">
                                        {/*<input type="text" className="form-control form-control-lg" placeholder="City" />*/}
                                        <div className="form-group">
                                            <label className="col-form-label">Type of appoinment *</label>
                                            <Select
                                                name="form-field-name"
                                                //value="one"
                                                options={options}
                                                cleaable="true"
                                                searchable={false}
                                                placeholder="Select.."
                                                value={this.state.type}
                                                onChange={this.typeChange.bind(this)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Appoinent date  *</label>
                                            <div className='input-group date' id='datetimepicker3'>
                                                <input 
                                                    type='text' 
                                                    className="form-control" 
                                                    placeholder="Date" 
                                                    ref={(date) => this.date = date}
                                                    required
                                                    readOnly
                                                />
                                                <span className="input-group-addon">
                                                    <span className="fa fa-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Appoinent time  *</label>
                                            <div className='input-group date' id='datetimepicker2'>
                                                <input 
                                                    type='text' 
                                                    className="form-control" 
                                                    placeholder="Time" 
                                                    ref={(time) => this.time = time}
                                                    readOnly
                                                    required
                                                />
                                                <span className="input-group-addon">
                                                    <span className="fa fa-clock-o"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label >Issues or concerns *</label>
                                            <textarea 
                                                className="form-control" 
                                                name="reason"
                                                rows="4" 
                                                placeholder="Issues or concerns."
                                                value={this.state.reason}
                                                onChange={this.handleInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>                   
                                </div>

                                <div className="text-center mt-2">
                                    {/*<button type="button" className="btn btn-primary btn-block" type="submit" style={{backgroundColor: '#2a92c7', borderColor: '#2a92c7'}}>
                                        <span className="ion-loading-a"></span> Login
                                    </button>*/}
                                    {btnLogin}
                                </div>

                                <div className="text-center mt-2">
                                    {/*isLoginPending && <div>Please wait...</div>*/}    
                                    {isBookAppoinmentSuccess && <div>Success.</div>}
                                    {bookAppoinmentError && <div>{bookAppoinmentError.message}</div>}
                                </div>

                            </form>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isBookAppoinmentPending: state.bookAppoinment.isBookAppoinmentPending,
        isBookAppoinmentSuccess: state.bookAppoinment.isBookAppoinmentSuccess,
        bookAppoinmentError: state.bookAppoinment.bookAppoinmentError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookAppoinment: (type, date, time, reason) => dispatch(bookAppoinment(type, date, time, reason))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppoinmentComponent);