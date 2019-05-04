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
//  componentWillMount(){
//     console.log('hii')
//     this.props.getJobs();
//     //this.props.getJobSkills();
    
//     this.setState({
//       jobs:this.state.jobs
//     })
//     //console.log(this.props.getJobs());
//   }
  
  componentWillReceiveProps(nextProps){
    this.setState({jobs : nextProps.jobs},()=>{
     // console.log(this.state)
    })
   
  // console.log(nextProps)

    
  }
  componentWillMount() {
    if(localStorage.getItem('currentUser')){
      currentUser=JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser.role<2){
      //   axios.get('http://localhost:5001/jobs/'+currentUser.name)
      // //axios.get('http://localhost:5001/users')
      // .then((res) => {
      //     console.log()
      //     this.setState({ jobs: res.data }, () => {
      //         console.log(res.data)
      //     });
  
      // })
      this.props.getJobs(currentUser.name);
      }else{
      //   axios.get('http://localhost:5001/jobs')
      // //axios.get('http://localhost:5001/users')
      // .then((res) => {
  
      //     this.setState({ jobs: res.data }, () => {
      //         console.log(res.data)
      //     });
  
      // })
      this.props.getJobs();
      }
    }else{
      // axios.get('http://localhost:5001/jobs')
      // //axios.get('http://localhost:5001/users')
      // .then((res) => {
  
      //     this.setState({ jobs: res.data }, () => {
      //         console.log(res.data)
      //     });
  
      // })
      this.props.getJobs();
    }
 
  }

  changeFilter(temp) {
    return this.setState({
      company:temp.company,
      location:temp.location,
      designation:temp.designation
    }, () => {

      console.log(this.state)
    })

  }
  componentDidMount() {


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
 