import React, { Component } from 'react';
import './style.css';
import Input from './Input';
import ErrorHandler from './errorHandler';
import Button from './Button';
import Appheader from './appheader'
import Appfooter from './appFooter'

var currentUser = {};
var count = 1245;
var temp;
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
      salary: '',
      location: '',
      description:'',


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
      currentUser =JSON.parse(localStorage.getItem('currentUser'))
       temp =JSON.parse(this.props.match.params.job);
      console.log((temp))
    this.setState({
        salary : temp.salary,
        designation : temp.designation,
        location:temp.location,
        description: temp.description
    },()=>{
       // console.log(this.state)
    })
  }
  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    });
  }
  role =['admin','company','user' ]
  onClickSignUp = (e) => {
    e.preventDefault();
  
    this.props.updateJobs({
          name: temp.name,
           _id :temp._id,
          user_id: currentUser._id,
          salary: this.state.salary,
          location:this.state.location,
          designation:this.state.designation,
          role:  temp.role,
          description:this.state.description
          
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
            <Button buttonType={'submit'} buttonClick={this.onClickSignUp} buttonName={'Update Job'}></Button>
          </form>
        </div>
        <Appfooter />
      </div>

    );
  }
}
export default company;
