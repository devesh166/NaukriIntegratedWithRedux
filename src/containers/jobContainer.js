import React, { Component } from 'react'
import Home from '../Components/home'
import  {connect} from  "react-redux";
import {getJobs} from '../actions/actions'




const mapStateToProps=(state)=>{
  //  console.log(state)
   return {
       
       jobs:state.fetchJobs.data
   }
}

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        getJobs: (company)=>dispatch(getJobs(company)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home)

