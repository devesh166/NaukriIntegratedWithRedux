import React, { Component } from 'react'
import SignUp from '../Components/SignUp'
import  {connect} from  "react-redux";
import {postUser} from '../actions/actions'


const mapStateToProps=(state)=>{
    console.log(state.user.data)
   return {       
       currentUser:state.user.data
          }
}


const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        postUser: (user)=>dispatch(postUser(user)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(SignUp)

