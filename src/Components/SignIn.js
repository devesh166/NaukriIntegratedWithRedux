import React, { Component } from 'react';
import Input from './Input';
import './style.css';
import Button from './Button';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import { Redirect } from 'react-router-dom';
import ErrorHandler from './errorHandler';
import axios from 'axios'
import appFooter from './appFooter';
class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: {},
            login_email: '',
            login_password: '',
            formErrors: { login_email: '', login_password: '' },
            //isNameValid: false,
            isEmailValid: false,
            isPasswordValid: false,
            userData: '',
            formValid: false,
            SignIn: true,

        }


    }
    componentWillMount() {
        if (localStorage.getItem('currentUser')) {
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('in componet will upd')
        //   if(nextProps.currentUser !== '') { 
        this.setState({ currentUser: nextProps.currentUser }, () => {
            //  console.log(this.state.currentUser)
            localStorage.setItem("currentUser", JSON.stringify(nextProps.currentUser));
            return this.props.history.push('/')
            // if (nextProps.currentUser.role == 1) {
            //    
            // } else {
            //     return this.props.history.push('/')
            // }
        })
        // }else{
        //         window.alert('Invalid Username/Password')
        //     }
        console.log(nextProps)

    }

    onChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;

        this.setState({
            [key]: value
        }, () => this.checkValidation(key, value));
    }
    checkValidation = (fieldName, value) => {
        let errors = this.state.formErrors;
        let isPasswordValid = this.state.isPasswordValid;
        // let isNameValid = this.state.isPasswordValid;
        //let isPhoneValid = this.state.isPhoneValid;
        let isEmailValid = this.state.isEmailValid;

        switch (fieldName) {

            case 'login_email':
                isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                errors.email = isEmailValid ? '' : 'invalid';
                break;
            case 'login_password':
                // isPasswordValid = value.length >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
                isPasswordValid = true;
                errors.password = isPasswordValid ? '' : 'is too weak';
                break;

            default:
                break;
        }
        this.setState({
            formErrors: errors,
            isEmailValid: isEmailValid,
            isPasswordValid: isPasswordValid,

        }, this.validation);
    }
    validation = () => {
        this.setState({
            formValid: this.state.isEmailValid &&
                this.state.isPasswordValid
        });
    }




    onClickSignIn = (e) => {
        e.preventDefault();

        this.props.getUser({
            email: this.state.login_email,
            password: this.state.login_password
        });



    }
    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <div className='content'>

                    <form>
                        <div className='loginHead'>Login </div>
                        <div >
                            <ErrorHandler className='err' errorList={this.state.formErrors} />
                        </div>
                        <label>Email</label>
                        <Input inputType={'email'} inputName={'login_email'} inputPlaceholder={'Email'} inputValue={this.state.login_email} inputChange={this.onChange}></Input>
                        <label>Password</label>
                        <Input inputType={'password'} inputName={'login_password'} inputPlaceholder={'Password'} inputValue={this.state.login_password} inputChange={this.onChange}></Input><br></br>
                        <Button buttonType={'submit'} buttonClick={this.onClickSignIn} buttonName={'Submit'}></Button>
                    </form>
                </div>
                <AppFooter></AppFooter>
            </div>
        )


    }

}
export default SignIn;