import React, { Component } from 'react'
import "./style.css"

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

    render() {
        // this.setState(()=>{
        //     this.state = this.props.filterList;
        // })
        var temp;
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


        return (


            temp.map((item, ind) => {
                return (
                    //<div style={{backgroundColor : "#007b5e", }} >


                    <div className="card ">
                        <div className="row" ><b>{this.props.jobs[ind].company}</b></div>
                        <div className="row" >
                            <div className="col-sm-2" > <img src={require("./paris.jpg")} height="50pt" width="50pt" alt="paris.jpg"></img></div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].id}</div>
                            < div className="col-sm-2 jobDetails">{this.props.jobs[ind].designation}</div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].location}</div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].salary}</div>
                            <button className="w3-button w3-block w3-dark-grey">Apply</button>
                        </div>
                    </div>

                )
            })
        )
    }
}
export default jobListing;