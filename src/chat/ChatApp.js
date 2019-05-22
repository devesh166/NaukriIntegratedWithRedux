

import React from 'react';
import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import ChatInput from './ChatInput';
import  './ChatApp.css'
import Axios from 'axios';
// require('../styles/ChatApp.css');
 
var currentUser
class ChatApp extends React.Component {
  socket = {};
  constructor(props) {

    super(props);

    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.state = { messages: [],reciever:{} };
    this.sendHandler = this.sendHandler.bind(this);
    this.state.reciever = this.props.location.state.reciever;
    // console.log(currentUser)
    // Connect to the server
    
    this.socket = io(config.api, { query:{"username": currentUser.name  ,"userID": currentUser._id}  }).connect();
    console.log(this.state.reciever )
    // Listen for messages from the server
    this.socket.on('server:message', message => {

      this.addMessage(message);
    });
  }
  
  componentDidMount(){
      console.log( this.state.reciever._id)
      console.log( currentUser._id)
    // if(currentUser.name === this.state.reciever.name){
  Axios.post("http://localhost:5001/message",{ id1:currentUser._id, id2:this.state.reciever._id}).then((res)=>{
  
    if(res.data[0]){
      console.log(res.data[0].message)
      this.setState({messages: res.data[0].message})
    // }

    // })
    // }else{
    //   this.setState({   messages:[]})
    }
    
    
  })
}
 

  sendHandler(message) {
    const messageObject = {
      username: currentUser.name,
      sendTo: this.state.reciever.name,
      sendToID: this.state.reciever._id,
      message
    };

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h3> {currentUser.name} to {this.state.reciever.name}</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
