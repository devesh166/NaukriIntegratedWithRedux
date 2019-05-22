import React, { Component } from 'react'
import Home from '../Components/home'
import  {connect} from  "react-redux";
import {getJobs,getAppliedJobs} from '../actions/actions'




const mapStateToProps=(state)=>{
  console.log(state.fetchJobs)
   return {
   // fetchJobs:'state.fetchJobs',
    applied : state.fetchJobs.applied,
    jobs:state.fetchJobs.data,
    pages :state.fetchJobs.pages
     

   }
}

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        getJobs: (company,pageNo)=>dispatch(getJobs(company,pageNo)) ,
        getAppliedJobs: (user) => dispatch(getAppliedJobs(user))
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home)

