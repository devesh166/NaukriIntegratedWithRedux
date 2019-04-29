import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
class appHeader extends Component {
    SignInMenu() {
        this.nextPath('/signin')
    }
    SignUpMenu() {
        this.nextPath('/signup')
    }
    render() {
        return (

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">NaukriPao</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li> <Link to="/">Home</Link></li>
                   

                    </ul>
                    <ul className="nav navbar-nav" style={{float : "right"}}>

                        {/* <div><li><Button buttonType={'button'} buttonClick={this.SignInMenu} buttonName={'Login'}></Button></li></div>
                        <div><li><Button buttonType={'button'} buttonClick={this.SignUpMenu} buttonName={'Signup'}></Button></li></div> */}
                        <li>
                        <Link to="/signin">Sign In</Link>
                        </li>
                        <li>
                        <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}
export default appHeader;