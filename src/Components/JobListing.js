import React, { Component } from 'react'
import Button from './Button'

import { withRouter } from "react-router-dom";
import "./style.css"
var temp;
var currentUser;
class jobListing extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = props.filterList;
        this.state.applied =this.props.applied;
        // console.log(this.state)
    }

    componentWillReceiveProps(nextProps) {
          
        if (this.props.filterList !== nextProps.filterList) {
            this.setState(nextProps.filterList, () => { console.log(this.state) })
        }
    }
    // componentDidUpdate(prevProps, prevState) {

    //     //console.log(this.props.filterList)

    // }
    componentWillMount() {
        console.log('in job Listing')
        if (localStorage.getItem('currentUser')) {
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    }
    editjobs = (e) => {
        // e.preventDefault();
        //return this.props.history.push('/')
        return this.props.history.push(`/editjobs/${JSON.stringify(e)}`)
        //  console.log(this.props)
    }
    applyJob = (e) => {
        this.props.applyJobs({
            job_status: 'pending',
            user_id: currentUser._id,
            job_id: e._id,
            name: e.name,
            role: e.role,
            description: e.description,
            salary: e.salary,
            designation: e.designation,
            location: e.location,
        })


    }

    render() {
        //console.log()
        let appliedJobs = [];
        if(this.state.applied){
            this.state.applied.map((ele,ind)=>{
                appliedJobs[ind]=ele.job_id;
            })
            //console.log(appliedJobs)
        }
        
        if (this.state.company == '' && this.state.location == '' && this.state.designation == '') {
            temp = this.props.jobs;

        } else {

            temp = this.props.jobs.filter((element, ind) => {
                if (this.state.location && element.location != this.state.location) {
                    // console.log(element);
                    return false;

                }
                if (this.state.designation && element.position != this.state.designation) {
                    // console.log(element,)
                    return false;
                }
                if (this.state.company && element.name != this.state.company) {
                    console.log(element.name, this.state.company)
                    return false;
                }
                else {
                    return true;

                }
            })
        }
        // console.log(temp);
        let count = 1;
        //let temp2 = temp.reverse();
        // console.log(temp2) 
        return (


            temp.map((item, ind) => {
                return (
                    //<div style={{backgroundColor : "#007b5e", }} >


                    <div key={ind} className="card ">
                        <div className="row companyName" ><b>{this.props.jobs[ind].name}</b></div>
                        <div className="row" >
                            {/* < div className="col-sm-2 jobDetails" >{count++}</div> */}
                            <div className="col-sm-3 " > <img className='image' src={require("./paris.jpg")} height="200pt" width="200pt" alt="paris.jpg"></img></div>
                            < div className="col-sm-3 jobDetails">{this.props.jobs[ind].location}</div>
                            {/* this.props.jobs[ind].position */}
                            < div className="col-sm-3 jobDetails">{this.props.jobs[ind].designation}</div>
                            < div className="col-sm-3 jobDetails" >{this.props.jobs[ind].salary}</div>
                            <div>{this.props.jobs[ind].description}</div>
                            {localStorage.getItem('currentUser') ? (currentUser.role < 2 ? (currentUser.name == this.props.jobs[ind].name ? <button onClick={() => { this.editjobs(this.props.jobs[ind]) }} className="w3-button w3-block w3-dark-grey"  >Edit</button> : '') : (appliedJobs.find((ele)=>{ return ele == this.props.jobs[ind]._id})?<button disabled='true' className="w3-button w3-block w3-dark-grey">applied</button>:<button onClick={() => { this.applyJob(this.props.jobs[ind]) }} className="w3-button w3-block w3-dark-grey">Apply</button>) ) : <button disabled='true' className="w3-button w3-block w3-dark-grey" >Login to Apply</button>}

                        </div>
                    </div>

                )
            })
        )
    }
}
export default withRouter(jobListing);