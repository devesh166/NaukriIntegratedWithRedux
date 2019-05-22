import React, { Component } from 'react'

export default class usersCard extends Component {
    constructor(props) {
        super()
        this.state={
            userList:[],
        }
        //this.state = props.userList
    }
    componentWillReceiveProps(nextProps){
        if(this.state.userList !==  nextProps.users){
            this.setState({userList : nextProps.users},()=>{
                //console.log(this.state)
            })
        }
    }

    componentDidMount() {
        this.setState({userList : this.props.users},()=>{
             
        })
         
    }
    render() {
       // console.log(this.state.userList)
        //console.log(this.props.userList.length)
       return(
           <div>
          
             <div>{ this.state.userList.length}</div>
       
           </div>
              
        
       ) 
   // return
     
    
    
       
       
      //  return ( <div>hii</div>
            // <div>
            //     <div>
            //         <div class="card1">
            //             {/* <img src="img_men.png" alt="Avatar" style="width:100%" ></img> */}
            //             <div class="container1">
            //                 <h4><b>{ele.name}</b></h4>
            //                 <p>{ele.location}</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            // this.props.userList.map((ele, ind) => {
            //     return (
            //         <div>
            //             hii
            //         </div>
            //     )
            // })

       // )
    }
}

