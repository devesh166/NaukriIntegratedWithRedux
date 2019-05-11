import React, { Component } from 'react';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import JobFilter from './jobFilter'
import JobListing from '../containers/applyContainer'
import axios from 'axios'
import JobData from '../jobs'
import '../App.css'

var temp;
var currentUser;
export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      company: '',
      location: '',
      designation: '',
      jobs: [],
      applied:[]
    }


  }
  // componentWillMount(){
  //   this.props.getJobs();
  //   this.setState({
  //     jobs:this.state.jobs
  //   })

  // }

  // componentDidUpdate(prevProps, prevState){
  //   console.log("in componentDidUpdate")

  //   if(localStorage.getItem('currentUser')){
  //     console.log('in condition')   

  //     currentUser=JSON.parse(localStorage.getItem('currentUser'));
  //     if(currentUser.role<2){     
  //     console.log(this.props.getJobs(currentUser.name))    
  //     }else{      
  //     this.props.getJobs();     
  //     }
  //   }else{     
  //     this.props.getJobs();      
  //   } 

  //   if(prevProps.jobs != this.state.jobs){

  //     //this.setState({jobs : this.state.jobs},()=>{
  //        console.log("state changed")
  //     // })
  //   }

  // }
  componentWillReceiveProps(nextProps) {
     
    if (this.state !== nextProps) {
      //console.log(this.state )
      this.setState({applied : nextProps.applied})
      return this.setState({ jobs: nextProps.jobs })
    }

  }

  componentDidMount(nextProps) {
    console.log(this.state.applied)
  
    this.props.getJobs();
    if (localStorage.getItem('currentUser')) {
      console.log('in condition')
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // this.props.getAppliedJobs({
      //   user_id: currentUser._id
      // })
     
      if (currentUser.role < 2) {
        console.log(this.props.getJobs(currentUser.name))
      } else {
        this.props.getJobs();
      }
    } else {
      this.props.getJobs();
    }


  }

  changeFilter(temp) {
    return this.setState({
      company: temp.company,
      location: temp.location,
      designation: temp.designation
    }, () => {
      // console.log(this.state)
    })

  }



  render() {

    // let temp = JobData;
    console.log(this.state  )
    
   // let appliedJobs =this.state.applied
    // appliedJobs.map((ele,ind)=>{
    //   ele.jobid
    // })
    return (
     
      <div className="App">

        <AppHeader />
        <JobFilter filter={this.state} onfilterchange={(temp) => {  this.changeFilter(temp) }} />
        <div className='container-fluid'>
        <JobListing filterList={this.state} applied = {this.state.applied} jobs={this.state.jobs.reverse()} />
        </div>
        <AppFooter />


      </div>
    )
  }


}
