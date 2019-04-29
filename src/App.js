import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </BrowserRouter>
    )
  }
}

export default App;
