import React, { Component } from 'react';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import JobFilter from './jobFilter'
import JobListing from './JobListing'
import axios from 'axios'
import JobData from '../jobs'
import '../App.css'

var temp;
var currentUser;
export default  class Home extends Component {

  constructor() {
    super();
    this.state = {
      company: '',
      location: '',
      designation: '',
      jobs: []
    }
    

  }

  
  componentWillReceiveProps(nextProps){
    this.setState({jobs : nextProps.jobs},()=>{
     // console.log(this.state)
    })
  // console.log(nextProps)
  }

  componentWillMount() {
     
    this.props.getJobs();
    
    
    this.setState({
      jobs:this.state.jobs
    })
    if(localStorage.getItem('currentUser')){
      currentUser=JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser.role<2){
     
      this.props.getJobs(currentUser.name);
      }else{
      
      this.props.getJobs();
      }
    }else{
     
      this.props.getJobs();
    }
 
  }

  changeFilter(temp) {
    return this.setState({
      company:temp.company,
      location:temp.location,
      designation:temp.designation
    }, () => {
     // console.log(this.state)
    })

  }
  


  render() {
    // let temp = JobData;
    //console.log(this.state.jobList)
   
    return (

      <div className="App">

        <AppHeader />
        <JobFilter filter={this.state} onfilterchange={(temp) => { this.changeFilter(temp) }} />
        <JobListing filterList={this.state} jobs={this.state.jobs.reverse()} />
        <AppFooter />


      </div>
    )
  }


}
 