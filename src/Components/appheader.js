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
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
        console.log(currentUser);

        return (

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">NaukriPao</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <Link to="/">Home</Link></li>


                    </ul>
                    {currentUser ? <ul className="nav navbar-nav" style={{ float: "right" }}>

                        <li>
                            <Link to="/signin"> hi {currentUser.name} </Link>
                        </li>
                        <li>
                            <Link to="/" ><span onClick = {()=>{localStorage.removeItem('currentUser')}}>Logout</span></Link>
                        </li>
                    </ul>
                        :
                        <ul className="nav navbar-nav" style={{ float: "right" }}>

                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>}


                </div>

            </nav>
        )
    }
}
export default appHeader;