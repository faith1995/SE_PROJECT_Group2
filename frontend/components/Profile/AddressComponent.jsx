import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import Select from 'react-select';

import { connect } from 'react-redux';
import { register } from '../../actions/actions';


class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            contact: "",
            email: "",
            password: "",
            province: null
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

    provinceChange(val) {
        this.setState({province: val.value});
    }

    handleInputChange(e) {
        const name = e.target.name;
        this.setState({
          [name]: e.target.value
        });
    }

    onSave(e) {
        e.preventDefault();
        this.props.register(this.state.firstname, this.state.lastname, this.dob.value, this.state.contact, this.state.email, this.state.password);
    }
    
    render() {


        let url = {
            fontWeight: '400',
            textDecoration: 'none',
            color: 'forestgreen'
        }

        let options = [
            { value: 'Gauteng', label: 'Gauteng' },
            { value: 'Eastern Cape', label: 'Eastern Cape' },
            { value: 'Western Cape', label: 'Western Cape'},
            { value: 'KwaZulu Natal', label: 'KwaZulu Natal'},
            { value: 'Mpumalanga', label: 'Mpumalanga'},
            { value: 'Free State', label: 'Free State'},
            { value: 'Northern Cape', label: 'Northern Cape'},
            { value: 'North West', label: 'North West'},
            { value: 'Limpopo', label: 'Limpopo'}
        ];

        let {isRegisterPending, isRegisterSuccess, registerError } = this.props;

        let btnRegister = (isRegisterPending) ? 
            <button className="btn btn-primary btn-block" type="button" disabled>
                <span className="fa fa-spinner fa-spin"></span> Please wait...
            </button>
            : 
            <button className="btn btn-primary btn-block" type="submit" >
                Create Account
            </button>;

        return (
            <div className="">

                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}}>
                            <form style={{margin: '0 auto', float: 'none'}} onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Address</h3> 
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Street 1 *</label>
                                            <input 
                                                type="text" 
                                                name="street1" 
                                                className="form-control" 
                                                placeholder="Street 1" 
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Street 2</label>
                                            <input 
                                                type="text" 
                                                name="street2" 
                                                className="form-control" 
                                                placeholder="Street 2"
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange} 
                                            />
                                        </div>
                                    </div>


                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">City *</label>
                                            <input 
                                                type="text"  
                                                name="city"
                                                className="form-control" 
                                                placeholder="City" 
                                                value={this.state.contact}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>



                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Province *</label>
                                            <Select
                                                name="form-field-name"
                                                //value="one"
                                                options={options}
                                                cleaable="true"
                                                searchable={false}
                                                placeholder="Select.."
                                                value={this.state.province}
                                                onChange={this.provinceChange.bind(this)}
                                                required
                                            />
                                        </div>
                                    </div>
                  
                                </div>
                                <div className="text-center">
                                    {/*<button type="button" className="btn btn-primary btn-block" type="submit" style={{backgroundColor: '#2a92c7', borderColor: '#2a92c7'}}>Create Account</button>*/}
                                    {btnRegister}
                                </div>

                                <div className="text-center mt-2">  
                                    {isRegisterSuccess && <div>Success.</div>}
                                    {registerError && <div>{registerError.message}</div>}
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
        isRegisterPending: state.register.isRegisterPending,
        isRegisterSuccess: state.register.isRegisterSuccess,
        registerError: state.register.registerError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (firstname, lastname, dob, contact, email, password) => dispatch(register(firstname, lastname, dob, contact, email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
