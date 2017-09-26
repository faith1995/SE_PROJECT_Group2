import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import { connect } from 'react-redux';
import { register } from '../../actions/actions';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            password: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(props) {    
      //alert('props');
      alert(JSON.stringify(props.register));
    }

    handleInputChange(e) {
        //const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = e.target.name;

        this.setState({
          [name]: e.target.value
        });
    }

    onSave(e) {
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }
        this.props.onAddClick(data);
        e.preventDefault();
    }
    
    render() {
        let url = {
            fontWeight: '400',
            textDecoration: 'none'
        }

        return (
                        <div className="row">
                            <form className="col-sm-11 col-sm-offset-1 col-lg-11 col-lg-offset-1" style={{margin: '0 auto', float: 'none'}} onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Create account</h3> 
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Firstname *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="firstname" 
                                                className="form-control" 
                                                placeholder="Firstname" 
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Lastname *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="lastname" 
                                                className="form-control" 
                                                placeholder="Lastname"
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Email *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="email"
                                                className="form-control" 
                                                placeholder="Email" 
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputPass" className="col-form-label">Password *</label>
                                            <input 
                                                type="password" 
                                                id="inputPass"
                                                name="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                            />
                                            <small id="passwordHelpBlock" className="form-text text-muted">
                                                Minimum 6 characters                                
                                            </small>
                                        </div>
                                    </div>                      
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary btn-block" type="submit" style={{backgroundColor: '#2a92c7', borderColor: '#2a92c7'}}>Create Account</button>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="pt-2" >By signing up, you agree to our <Link to="/#" style={url}> Terms & Privacy Policy.</Link></p>
                                    <p className="pt-2" >Have an account? <Link to="/login" style={url}> Login</Link></p>    
                                </div>
                            </form>
                        </div>
        );
    }
}


class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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
        this.props.register(this.state.firstname, this.state.lastname, this.state.email, this.state.password);
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
            <div>

                <div className="container my-sm-4 my-2">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-4" style={{margin: '0 auto', float: 'none'}}>
                            <form style={{margin: '0 auto', float: 'none'}} onSubmit={this.onSave.bind(this)} >
                                <h3 className="" style={{fontSize: '1.5rem', fontWeight: '600'}} >Create account</h3> 
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Firstname *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="firstname" 
                                                className="form-control" 
                                                placeholder="Firstname" 
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Lastname *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="lastname" 
                                                className="form-control" 
                                                placeholder="Lastname"
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputEmail4" className="col-form-label">Email *</label>
                                            <input 
                                                type="text" 
                                                id="inputEmail4" 
                                                name="email"
                                                className="form-control" 
                                                placeholder="Email" 
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label for="inputPass" className="col-form-label">Password *</label>
                                            <input 
                                                type="password" 
                                                id="inputPass"
                                                name="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
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
        register: (firstname, lastname, email, password) => dispatch(register(firstname, lastname, email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
