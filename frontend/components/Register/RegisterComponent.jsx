import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
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
            password: ""
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
            <div className="fixed-padding-top">

                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}}>
                            <form style={{margin: '0 auto', float: 'none'}} onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Create account</h3> 
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Firstname *</label>
                                            <input 
                                                type="text" 
                                                name="firstname" 
                                                className="form-control" 
                                                placeholder="Firstname" 
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Lastname *</label>
                                            <input 
                                                type="text" 
                                                name="lastname" 
                                                className="form-control" 
                                                placeholder="Lastname"
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange} 
                                                required
                                            />
                                        </div>
                                    </div>

                                   

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Date of Birth *</label>
                                            <div className='input-group date' id='datetimepicker1'>
                                                <input 
                                                    type='text' 
                                                    name="dob"
                                                    className="form-control" 
                                                    placeholder="Date of Birth" 
                                                    ref={(dob) => this.dob = dob}
                                                    readOnly
                                                    required
                                                />
                                                <span className="input-group-addon">
                                                    <span className="fa fa-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Contact number *</label>
                                            <input 
                                                type="text"  
                                                name="contact"
                                                className="form-control" 
                                                placeholder="Contact number" 
                                                value={this.state.contact}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>



                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Email *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="email"
                                                className="form-control" 
                                                placeholder="Email" 
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Password *</label>
                                            <input 
                                                type="password" 
                                                name="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                            <small id="passwordHelpBlock" className="form-text text-muted">
                                                Minimum 6 characters                                
                                            </small>
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

                                <div className="text-center mt-2">
                                    <p className="pt-2" >By signing up, you agree to our <Link to="/#" style={url}> Terms & Privacy Policy.</Link></p>
                                    <p className="pt-2" >Have an account? <Link to="/login" style={url}> Login</Link></p>    
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
