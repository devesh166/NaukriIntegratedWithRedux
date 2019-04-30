import React, { Component } from 'react'
import "./style.css"
var temp;
var currentUser;
class jobListing extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = this.props.filterList;
        // console.log(this.state)
    }

    // componentWillReceiveProps(nextProps) {

    //   }
    componentDidUpdate(prevProps, prevState) {

        //console.log(this.props.filterList)
        if (this.props.filterList !== prevProps.filterList) {
            this.setState(this.props.filterList, () => { console.log(this.state) })

        }
    }
    componentWillMount() {
        if(localStorage.getItem('currentUser')){
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
       
    }

    render() {
        // this.setState(()=>{
        //     this.state = this.props.filterList;
        // })

        if (this.state.company == '' && this.state.location == '' && this.state.designation == '') {
            temp = this.props.jobs;

        } else {
            temp = this.props.jobs.filter((element, ind) => {
                if (this.state.location && element.location !== this.state.location) {
                    console.log(element);
                    return false;

                }
                if (this.state.designation && element.designation !== this.state.designation) {
                    console.log(element)
                    return false;
                }
                if (this.state.company && element.company !== this.state.company) {
                    console.log(element)
                    return false;
                }
                else {
                    return true;

                }
            })
        }
        console.log(temp);
        let count = 0;
        return (

            
            temp.map((item, ind) => {
                return (
                    //<div style={{backgroundColor : "#007b5e", }} >


                    <div className="card ">
                        <div className="row" ><b>{this.props.jobs[ind].name}</b></div>
                        <div className="row" >
                            <div className="col-sm-2" > <img src={require("./paris.jpg")} height="50pt" width="50pt" alt="paris.jpg"></img></div>
                            < div className="col-sm-2 jobDetails" >{count++}</div>
                            < div className="col-sm-2 jobDetails">Gurgaon</div>
                            {/* this.props.jobs[ind].position */}
                            < div className="col-sm-2 jobDetails">{this.props.jobs[ind].position}</div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].salary}</div>

                            {localStorage.getItem('currentUser')?( currentUser.role < 2 ? '' : <button className="w3-button w3-block w3-dark-grey">Apply</button>):<button disabled='true' className="w3-button w3-block w3-dark-grey" onClick={()=>{this.props.history.push('/login')}}>Login to Apply</button>}

                        </div>
                    </div>

                )
            })
        )
    }
}
export default jobListing;