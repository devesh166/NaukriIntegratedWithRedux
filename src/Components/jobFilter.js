import React, { Component } from 'react'

class jobFilter extends Component {
   constructor(props){
       super(props);
       
      this.state= this.props;
    
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
   }

  
    onInputChange(event){
       let val =event.target.value;
        let key =event.target.name;
       this.setState({[key]: val})
      
      
    }



    onButtonClick(e){
        e.preventDefault();  
        //console.log(this.state);
        this.props.onfilterchange(this.state);
        
    }
    render() {
        return(

            <div>              
               <form>
               <input type="text" placeholder="Company" onChange = {this.onInputChange} name='company'></input>
               <input type="text" placeholder="Location" onChange = {this.onInputChange} name ='location' style={{margin: 10}}></input>
               <input type="text" placeholder="Designation" onChange = {this.onInputChange} name='designation'></input>
               <button style={{margin: 10}} onClick={this.onButtonClick}>Filter</button>
               </form>
            </div>
        )
    }
}
export default jobFilter;