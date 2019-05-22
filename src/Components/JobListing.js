import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import "../chat/app1.css"
import "../chat/ChatApp.css"
import "../chat/Login.css"

// require('../styles/App.css');
// require('../styles/Login.css');

 
var currentUser;
class jobListing extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.filterList;
        this.state.applied = this.props.applied;
        this.state.temp=[];
        // console.log(this.state)
    }

    componentWillReceiveProps(nextProps) {
        // if(nextProps.company===''&& nextProps.location===''&& nextProps.designation==='' ){
        //     this.nextProps.jobs.reverse();
        //   }
       
        if (this.props.filterList !== nextProps.filterList) {
            this.setState(nextProps.filterList
            //     , () => { console.log(this.state)
            //     nextProps.jobs.reverse();
            // }
            )
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
    status = [
        'pending',
        'reviewed',
        'shortlisted',
        'selected',
        'rejected']
    statusColor = [
        '#FA882E',
        '#F1F50E',
        '#0EABF5  ',
        '#2CE550',
        '#FF3333']

    checkStatus = (id) => {
        let temp = this.state.applied.find((ele) => { return ele.job_id === id }).job_status
        return temp - 1
    }
    notFound =()=>{
        this.setState({company: '',
        location: '',
        designation: ''
    })
    }
    chatNavigate=(data)=>{
        this.props.history.push({
            pathname: '/chat',
            state: {
               reciever:data
            }
          })
    }
    render() {
        let temp =[];
        
        //    =this.this.props.jobs;
       // console.log(this.state)
        let appliedJobs = [];
        if (this.state.applied) {
            this.state.applied.map((ele, ind) => {
                appliedJobs[ind] = ele.job_id;
            })
            //console.log(appliedJobs).reverse()
        }

        if (this.state.company == '' && this.state.location == '' && this.state.designation == '') {
             temp = this.state.jobs;


        } else {
            
            // temp =this.this.props.jobs;
             temp= this.state.jobs.filter((element, ind) => {
                // console.log(this.state,element)
                if ((this.state.location)  && (element.location).toLowerCase() !== (this.state.location).toLowerCase()) {
                   // console.log(element.location,this.state.location);
                    return false;

                }
                if ((this.state.designation)  && (element.designation).toLowerCase() !== (this.state.designation).toLowerCase()) {
                    //console.log(element.designation, this.state.designation)
                    return false;
                }
                if ((this.state.company)  && (element.name).toLowerCase() !== (this.state.company).toLowerCase()) {
                   // console.log(element.name, this.state.company)
                    return false;
                }
                else {
                   //console.log(element)
                    return true;

                }
            })
        }
         console.log(temp);
    
        return (

            <div>
      

                {temp.length>0?
                     temp.map((item, ind) => {
                        return (
                            //<div style={{backgroundColor : "#007b5e", }} >
        
                            <div className='column' >
                                <div className="row">
                                    <div className="card1">
        
                                        <div className=" companyName" ><b><h2>{(item.name).toUpperCase()} </h2></b></div>
                                        <div  >
                                            {/* < div className="col-sm-2 jobDetails" >{count++}</div> */}
                                            <div > <img className='image' src={require("./paris.jpg")} height="200pt" width="200pt" alt="paris.jpg"></img></div>
                                            <div >
                                            < div className=" jobDetails"><div><div><b>Location:</b> </div>{item.location}</div>                </div>
                                            {/* this.props.jobs[ind].position */}
                                            < div className=" jobDetails"> <div><div><b>Designation:</b> </div>{item.designation}</div>    </div>
                                            </div>
                                            < div className="  jobDetails" > <div><div><b>Salary:</b> </div>{item.salary + '$'}</div></div>
                                            <div  style={{margin : 20}} >{item.description}</div>
        
                                            {localStorage.getItem('currentUser') ?
                                                (currentUser.role < 2 ? (currentUser.name == item.name ? <button onClick={() => { this.editjobs(item) }} className="w3-button w3-block w3-dark-grey btn1"  >Edit</button> : '') :
                                                    (appliedJobs.find((ele) => { return ele == item._id }) ? <div >
                                                        <div  style={{ backgroundColor: `${this.statusColor[this.checkStatus(item._id)]}` }} className="w3-block w3-button btn1" >Status : {this.status[this.checkStatus(item._id)]}</div><div><button className="w3-button w3-block btn1"  onClick={()=>{this.chatNavigate(item)}}> chat </button></div></div> : <button onClick={() => { this.applyJob(item) }} className="w3-button w3-block w3-dark-grey btn1">Apply</button>))
                                                : <button className="w3-button w3-block btn1" ><Link to="/signin"> Login to Apply</Link></button>}
                                            
                                            {/* {temp =this.this.state.jobs} */}
        
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
        
                    }
                    
                    )
                    :<div className='notFound'><div><h1>'No Jobs Found'</h1></div><div><button className="w3-button btn1"  onClick={()=>{this.notFound()}}>  Go Back </button></div></div>}
            </div>

            
          
        )
    }
}
export default withRouter(jobListing);