import React , { Component } from 'react';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import JobFilter from './jobFilter'
import JobListing from './JobListing'
import JobData from '../jobs'
import '../App.css'


class Home extends Component {
  
constructor(){
    super();
  this.state= {
    company:'',
    location:'',
    designation:''   
}

}

 changeFilter(temp){
  return this.setState(temp,()=>{
   console.log(this.state)
   })

 }
   

  render() {
    let temp = JobData;

    return (

      <div className="App">
     
      <AppHeader />
      <JobFilter filter={this.state} onfilterchange={(temp)=>{this.changeFilter(temp)}}/>
      
      <JobListing filterList={this.state} jobs ={temp}/>
      <AppFooter/>
   

      </div>
    )
  }

   
}


export default Home;
