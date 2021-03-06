import React, { Component } from 'react';
import './style.css';
import Input from './Input';
import ErrorHandler from './errorHandler';
import Button from './Button';
import Appheader from './appheader'
import Appfooter from './appFooter'

var currentUser = {};
var count = 1245;
class company extends Component {
  // render(){
  //   return(
  //     <div>Hii </div>
  //   )
  // }
  constructor() {
    super()
    this.state = {
      designation: '',
      description:'',
      salary: '',
      location: '',


      name: '',
      password: '',
      email: '',
      mobile: '',
      // formErrors: { name: '', email: '', password: '', mobile: '', login_email: '', login_password: '' },
      // isNameValid: false,
      // isEmailValid: false,
      // isPasswordValid: false,
      // isPhoneValid: false,
      // formValid: false,
      // SignIn: true,

    }

  }

  componentWillMount() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!localStorage.getItem('currentUser')) {
      this.props.history.push('/');
    }
  }
  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;

    this.setState({
      [key]: value
    });
  }
  //   checkValidation=(fieldName, value) =>{
  //     let errors = this.state.formErrors;
  //     let isPasswordValid = this.state.isPasswordValid;
  //     let isNameValid = this.state.isPasswordValid;
  //     let isPhoneValid = this.state.isPhoneValid;
  //     let isEmailValid =    errors.email = isEmailValid ? '' : 'invalid';
  //         break;
  //       case 'password':
  //        // isPasswordValid = (value.length) >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
  //        isPasswordValid =true;
  //        errors.password = isPasswordValid ? '' : 'is too Weak';
  //         break;
  //       case 'name':
  //         isNameValid = value.match(/^[a-zA-Z]+$/);;
  //         errors.name = isNameValid ? '' : ' is required';
  //         break;

  //       default:
  //         break;
  //     }
  //     this.setState({
  //       formErrors: errors,
  //       isEmailValid: isEmailValid,
  //       isPasswordValid: isPasswordValid,
  //       isNameValid: isNameValid,
  //       isPhoneValid: isPhoneValid
  //     }, this.validation());
  //   }

  //   validation=() =>{
  //     this.setState({
  //       formValid: this.state.isEmailValid &&
  //         this.state.isPasswordValid &&
  //         this.state.isNameValid &&
  //         this.state.isPhoneValid
  //     });
  //   } this.state.isEmailValid;

  //     switch (fieldName) {
  //       case 'mobile':
  //         isPhoneValid = value.length === 10 && value.match(/^[0-9]+$/);;
  //         errors.mobile = isPhoneValid ? '' : ' number is not valid.';
  //         break;

  //       case 'email':
  //         isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //         errors.email = isEmailValid ? '' : 'invalid';
  //         break;
  //       case 'password':
  //        // isPasswordValid = (value.length) >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
  //        isPasswordValid =true;
  //        errors.password = isPasswordValid ? '' : 'is too Weak';
  //         break;
  //       case 'name':
  //         isNameValid = value.match(/^[a-zA-Z]+$/);;
  //         errors.name = isNameValid ? '' : ' is required';
  //         break;

  //       default:
  //         break;
  //     }
  //     this.setState({
  //       formErrors: errors,
  //       isEmailValid: isEmailValid,
  //       isPasswordValid: isPasswordValid,
  //       isNameValid: isNameValid,
  //       isPhoneValid: isPhoneValid
  //     }, this.validation());
  //   }

  //   validation=() =>{
  //     this.setState({
  //       formValid: this.state.isEmailValid &&
  //         this.state.isPasswordValid &&
  //         this.state.isNameValid &&
  //         this.state.isPhoneValid
  //     });
  //   }
    role =['admin','company','user' ]
     
    
  onClickSignUp = (e) => {
    e.preventDefault();

    this.props.postJob({
          name: currentUser.name,
          
          user_id: currentUser._id,
          salary: this.state.salary,
          location:this.state.location,
         
          designation:this.state.designation,
          description : this.state.description,
          role:  this.role[currentUser.role]
        })
        return this.props.history.push('/');
  }
  render() {
    //console.log()
    return (
      <div>
        <Appheader />
        <div className='content'>
          <form >
            <h2> Hello {currentUser.name} </h2>

            {/* <div>
                <ErrorHandler className='err' errorList={this.state.formErrors} />
              </div> */}
            <label>Designamtion</label>
            <Input inputType={'text'} inputName={'designation'} inputPlaceholder={'designation'} inputValue={this.state.designation} inputChange={this.onChange}></Input>
            <label>Salary</label>
            <Input inputType={'number'} inputName={'salary'} inputPlaceholder={'salary'} inputValue={this.state.salary} inputChange={this.onChange}  ></Input>
            <label>location</label>
            <Input inputType={'text'} inputName={'location'} inputPlaceholder={'location'} inputValue={this.state.location} inputChange={this.onChange}  ></Input>
            
            <label>Descriprion</label>
            <Input inputType={'text'} inputName={'description'} inputPlaceholder={'description'} inputValue={this.state.description} inputChange={this.onChange}  ></Input>

            {/* <label>Password</label>
              <Input inputType={'password'} inputName={'password'} inputPlaceholder={'Password'} inputValue={this.state.password} inputChange={this.onChange}></Input><br></br> */}
            <Button buttonType={'submit'} buttonClick={this.onClickSignUp} buttonName={'Add Job'}></Button>
          </form>
        </div>
        <Appfooter />
      </div>

    );
  }
}
export default company;
