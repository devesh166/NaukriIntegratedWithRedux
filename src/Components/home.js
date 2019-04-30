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
class Home extends Component {

  constructor() {
    super();
    this.state = {
      company: '',
      location: '',
      designation: '',
      jobList:[]
    }

  }
  componentWillMount(){
    currentUser=JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser.role<2){
      axios.get('http://localhost:5001/jobs/'+currentUser.name)
    //axios.get('http://localhost:5001/users')
    .then((res) => {
        console.log()
        this.setState({ jobList: res.data }, () => {
            console.log(res.data)
        });

    })
    }else{
      axios.get('http://localhost:5001/jobs')
    //axios.get('http://localhost:5001/users')
    .then((res) => {

        this.setState({ jobList: res.data }, () => {
            console.log(res.data)
        });

    })
    }
  }

  changeFilter(temp) {
    return this.setState(temp, () => {

      console.log(this.state)
    })

  }
  componentDidMount(){
   
    
  }


  render() {
   // let temp = JobData;
    console.log(this.state.jobList)
    return (
      
      <div className="App">

        <AppHeader />
        <JobFilter filter={this.state} onfilterchange={(temp) => { this.changeFilter(temp) }} />

        <JobListing filterList={this.state} jobs={this.state.jobList} />
        <AppFooter />


      </div>
    )
  }


}


export default Home;
