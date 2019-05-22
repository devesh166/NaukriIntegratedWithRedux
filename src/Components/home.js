import React, { Component } from 'react';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import JobFilter from './jobFilter'
import JobListing from '../containers/applyContainer'
import axios from 'axios'
import JobData from '../jobs'
import '../App.css'
import JwPagination from 'jw-react-pagination';

var temp;
var currentUser;
// var pageArray=[];

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      company: '',
      location: '',
      designation: '',
      jobs: [],
      applied: []
    }


  }

  componentWillReceiveProps(nextProps) {

    if (this.state !== nextProps) {
      //console.log(this.state )
      this.setState({ applied: nextProps.applied })
      return this.setState({ jobs: nextProps.jobs }, () => {

        this.setState({ pages: nextProps.pages }, () => {


        })
        console.log(this.state)
      })
    }

  }

  componentDidMount(nextProps) {
    console.log(this.state.applied)
    
    this.props.getJobs();
    if (localStorage.getItem('currentUser')) {
      console.log('in condition')
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // this.props.getAppliedJobs({
      //   user_id: currentUser._id
      // })
      if (currentUser.role < 2) {
        console.log(this.props.getJobs(currentUser.name))
      } else {
        this.props.getJobs(null ,1);
      }
    } else {
      this.props.getJobs(null ,1);
    }


  }

  changeFilter(temp) {
    return this.setState({
      company: temp.company,
      location: temp.location,
      designation: temp.designation
    }, () => {
      // console.log(this.state)
    })

  }

  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  generateButton = () => {
    let pageArray = [];
    let i = this.state.pages;
    // for(let i=0; i<this.state.pages;i--){
    //      pageArray.push(<button>i+1</button>);
    // }
    let count = 1;
    while (i > 0) {
      pageArray.push(<li class="page-item"><button onClick={this.onPageClick} value={count} class="page-link">{count++}</button></li>)
      i--;
    }
    return pageArray;
  }
  onPageClick=(event)=>{
    console.log(event)
    this.props.getJobs(null,event.target.value)
      // window.alert(event.target.value)
  }

  render() {


    // let temp = JobData;
    console.log(this.state)

    // let appliedJobs =this.state.applied
    // appliedJobs.map((ele,ind)=>{
    //   ele.jobid
    // })
    return (


      <div className="App">

        <AppHeader />
        <JobFilter filter={this.state} onfilterchange={(temp) => { this.changeFilter(temp) }} />
        <div className='container-fluid'>
          <JobListing filterList={this.state} applied={this.state.applied} jobs={this.state.jobs} />
          <div aria-label="Page navigation   " style={{ marginBottom:20}}>
            <ul class="pagination pg-blue">
              {/* <li class="page-item">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li> */}

              {this.generateButton()}
              {/* <li class="page-item">
                <a class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li> */}
            </ul>
          </div>
          <AppFooter />
        </div>

     


      </div >
    )
  }


}
