import React, { Component } from 'react'
import axios from 'axios';
import './cardStyle.css'
import AppHeader from './appheader'
import AppFooter from './appFooter'
import UserCard from './usersCard'
var currentUser;



export default class applied extends Component {
    constructor() {
        super()
        this.state = {
            appliedUsers: [],
            userList: [],
            loaded: false,
            designation: '',
            location: '',
            status: ''

        }
    }

    //  getUsers = async () => {

    // }

    componentWillReceiveProps(nextProps) {

        if (this.state.loaded !== nextProps.loaded) {
            this.setState({ appliedUsers: nextProps.appliedUsers }, () => {
                this.setState({ loaded: true })
            })

        }

        if (this.state.userList !== nextProps.userList) {
            this.setState({ userList: nextProps.userList }, () => {

            })
        }
        if (this.state.appliedUsers !== nextProps.appliedUsers) {
            //console.log(this.state )
            this.setState({ appliedUsers: nextProps.appliedUsers }, () => {

            })

        }
        //  if (this.state!== nextProps) {
        //console.log(count++)


        // this.setState({ jobs: nextProps.jobs })
        // }



    }

    componentWillMount() {
        // console.log( this.props.appliedUsers)


        if (localStorage.getItem('currentUser')) {
            // console.log('in condition')
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.props.getAppliedUsers({ name: currentUser.name })
            this.props.getAllUsers();
            //    console.log(this.props.appliedUsers)

        }

    }
    // async componentDidMount() {
    //     console.log(this.state.userList)

    //      this.props.getAppliedUsers({ name: currentUser.name })
    //     await this.props.getAllUsers();

    // }
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
    changeStatus = (e, id, th) => {
        //   e.preventDefaults;
        console.log(e, id, th);
        this.props.changeJobStatus({
            "id": id,
            "status": e
        })
        //  return document.getElementById(`select_button${e}`).innerHTML = this.status[e-1]+' <span class="caret">';
        //this.forceUpdate()

        this.props.getAppliedUsers({ name: currentUser.name })
        this.setState({ loaded: false })


    }

    onInputChange = (event) => {
        let val = event.target.value;
        let key = event.target.name;
        // console.log(key,val)
        this.setState({ [key]: val })
    }



    onButtonClick = (e) => {
        e.preventDefault();
        //console.log(this.state);
        // this.props.onfilterchange(this.state);

    }


    render() {
        let temp = [];

        //-----
        if (this.state.status == '' && this.state.location == '' && this.state.designation == '') {
            temp = this.state.appliedUsers;


        } else {

            // temp =this.this.props.jobs;
            temp = this.state.appliedUsers.filter((element, ind) => {
                // console.log(this.state,element)
                if ((this.state.location) && (element.location).toLowerCase() !== (this.state.location).toLowerCase()) {
                    // console.log(element.location,this.state.location);
                    return false;

                }
                if ((this.state.designation) && (element.designation).toLowerCase() !== (this.state.designation).toLowerCase()) {
                    //console.log(element.designation, this.state.designation)
                    return false;
                }
                if ((this.state.status) && (this.status[element.job_status - 1]).toLowerCase() !== ( this.state.status).toLowerCase()) {
                    // console.log(element.name, this.state.company)  this.status[element.job_status - 1]
                    return false;
                }
                else {
                    //console.log(element)
                    return true;

                }
            })
        }





        //-------
        let count = 1;
        return <div className="App">
            <AppHeader />
            <div>
                <form>
                    <input type="text" placeholder="Designation" onChange={this.onInputChange} name='designation'></input>
                    <input type="text" placeholder="Location" onChange={this.onInputChange} name='location' style={{ margin: 10 }}></input>
                    <input type="text" placeholder="Status" onChange={this.onInputChange} name='status'></input>
                    {/* <button style={{ margin: 10 }} onClick={this.onButtonClick}>Filter</button> */}
                </form>
            </div>
            <div className='container-fluid'>
                {this.state.userList && this.state.appliedUsers &&
                    <div>
                        { temp.length>0 ?
                        <div>
                        {temp
                            // .sort((a,b)=> {return a.designation - b.designation})
                            .map((element, index) => {

                                return (
                                    <div className='column' >
                                        <div className=" row  ">
                                            <div className="card1">

                                                <div> <h4><b>{element.designation} </b></h4></div>{
                                                    this.state.userList.map((ele, ind) => {

                                                        if (element.user_id == ele._id) {
                                                            return (<div key={ind}  >

                                                                <img src={require("./img_men.png")} alt="Avatar" style={{ width: 100 }} ></img>
                                                                <h4><b>{ele.name}</b></h4>
                                                                <div className="  "><b>email :</b>{ele.email}</div>
                                                                <div className="  "><b>mobile :</b>{ele.mobile}</div>
                                                                <div className="  "><b>location :</b>{ele.location}</div>
                                                                {/* <div>{ele.name}</div> */}
                                                                <div style={{ display: 'inline-block' }}>
                                                                    <span><b>Status :</b></span>
                                                                    <span class="dropdown">
                                                                        <button id={`select_button${count}`} style={{ backgroundColor: `${this.statusColor[element.job_status - 1]}`, color: '#000000' }} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.status[element.job_status - 1]}
                                                                            <span class="caret"></span></button>
                                                                        <ul class="dropdown-menu">
                                                                            <li onClick={() => { return this.changeStatus('1', element._id) }} ><a href="#">pending</a></li>
                                                                            <li onClick={() => { return this.changeStatus('2', element._id) }} ><a href="#">reviewed</a></li>
                                                                            <li onClick={() => { return this.changeStatus('3', element._id) }} ><a href="#">shortlisted</a></li>
                                                                            <li onClick={() => { return this.changeStatus('4', element._id) }} ><a href="#">selected</a></li>
                                                                            <li onClick={() => { return this.changeStatus('5', element._id) }} ><a href="#">rejected</a></li>
                                                                            <div style={{ display: 'none' }}>{count++}</div>
                                                                        </ul>
                                                                    </span>

                                                                </div>

                                                            </div>)
                                                        }

                                                    })}

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>:<div className='notFound'>Not Found</div>}

                    </div>

                }
            </div>
            <div style={{display:'none'}}>{count = 0}</div>
            <AppFooter />
        </div>
        // return this.state.userList.map((ele,ind)=>{
        //     return <div>{ele.name} </div>
        // })
    }

}
