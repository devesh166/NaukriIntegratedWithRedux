import React, { Component } from 'react';
import Input from './Input';
import './style.css';
import Button from './Button';
import AppHeader from './appheader'
import ErrorHandler from './errorHandler';
class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {

      name: '',
      password: '',
      email: '',
      mobile: '',
      login_email: '',
      login_password: '',
      formErrors: { name: '', email: '', password: '', mobile: '', login_email: '', login_password: '' },
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPhoneValid: false,
      formValid: false,
      SignIn: true,

    }


  }


  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;

    this.setState({
      [key]: value
    }, () => this.checkValidation(key, value));
  }
  checkValidation=(fieldName, value) =>{
    let errors = this.state.formErrors;
    let isPasswordValid = this.state.isPasswordValid;
    let isNameValid = this.state.isPasswordValid;
    let isPhoneValid = this.state.isPhoneValid;
    let isEmailValid = this.state.isEmailValid;

    switch (fieldName) {
      case 'mobile':
        isPhoneValid = value.length === 10 && value.match(/^[0-9]+$/);;
        errors.mobile = isPhoneValid ? '' : ' number is not valid.';
        break;
      case 'login_email':
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = isEmailValid ? '' : 'invalid';
        break;
      case 'login_password':
        isPasswordValid = value.length >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        errors.password = isPasswordValid ? '' : 'is too weak';
        break;
      case 'email':
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = isEmailValid ? '' : 'invalid';
        break;
      case 'password':
        isPasswordValid = (value.length) >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        errors.password = isPasswordValid ? '' : 'is too Weak';
        break;
      case 'name':
        isNameValid = value.match(/^[a-zA-Z]+$/);;
        errors.name = isNameValid ? '' : ' is required';
        break;

      default:
        break;
    }
    this.setState({
      formErrors: errors,
      isEmailValid: isEmailValid,
      isPasswordValid: isPasswordValid,
      isNameValid: isNameValid,
      isPhoneValid: isPhoneValid
    }, this.validation);
  }
  validation=() =>{
    this.setState({
      formValid: this.state.isEmailValid &&
        this.state.isPasswordValid &&
        this.state.isNameValid &&
        this.state.isPhoneValid
    });
  }
  render() {
    return (
      <div >
       <AppHeader></AppHeader>
        <div className='content'>
          
            <div><form >
              <h1>Signup </h1>

              <div>
                <ErrorHandler className='err' errorList={this.state.formErrors} />
              </div>
              <label>Name</label>
              <Input input_type={'text'} inputName={'name'} inputPlaceholder={'Name'} input_value={this.state.name} inputChange={this.onChange}></Input>
              <label>Email</label>
              <Input input_type={'email'} inputName={'email'} inputPlaceholder={'Email'} input_value={this.state.email} inputChange={this.onChange}></Input>
              <label>Mobile</label>
              <Input input_type={'tel'} inputName={'mobile'} inputPlaceholder={'Mobile'} input_value={this.state.mobile} inputChange={this.onChange}></Input>
              <label>Password</label>
              <Input input_type={'password'} inputName={'password'} inputPlaceholder={'Password'} input_value={this.state.password} inputChange={this.onChange}></Input><br></br>
              <Button buttonType={'submit'} buttonName={'Submit'}></Button>
            </form>
            </div>


          
        </div>


      </div>

    )
  }

  SignInMenu = () => {
    this.setState({
      SignIn: true,
      login_email: '',
      login_password: '',
      formErrors: { login_email: '', login_password: '' },

    });
  }
  SignUpMenu = () => {
    this.setState({
      SignIn: false,
      name: '',
      password: '',
      email: '',
      mobile: '',
      formErrors: { name: '', email: '', password: '', mobile: '' }
    })
  }

}

export default Signup;