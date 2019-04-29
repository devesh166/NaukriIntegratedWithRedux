import React, { Component } from 'react';
import Input from './Input';
import './style.css';
import Button from './Button';
import AppHeader from './appheader'
import { Redirect } from 'react-router-dom';
import ErrorHandler from './errorHandler';
import axios from 'axios'
class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {

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
    componentDidMount() {
        axios.get('http://localhost:5001/users')
            .then((res) => {

                this.setState({ userData: res.data }, () => {
                    console.log(res.data)
                });

            })
    }
    onClickSignIn = (e) => {
        e.preventDefault();
        this.state.userData.map((ele, ind) => {
            if (ele.email == this.state.login_email) {
                if (ele.user_id == this.state.login_password) {
                    localStorage.setItem("currentUser",JSON.stringify(ele))
                    return this.props.history.push('/')
                } else {

                    return console.log("incorrect password")
                }

            }
        })
    }
    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <div className='content'>

                    <form>
                        <h1>Login </h1>
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
            </div>
        )


    }

}
export default SignIn;