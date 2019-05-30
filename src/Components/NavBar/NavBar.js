import React from 'react'
import './style.css'
import { Button } from "reactstrap"
import logo from '../../Images/logo.png'



function NavBar(props) {
    return (
        <div className="body">
            <div className="logodiv">
                <img className="logo" src={logo} alt='logo' onClick={() => props.changePage("mainPage")} />
                {props.currentCo && <Button onClick={() => props.handlePost("coPostPage")} type="post" type="button">Post Opportunity</Button>}
            </div>
            <div className="background">
                <div className="initialbtn">
                    {
                        !props.currentUser && !props.currentCo &&
                        <div className='userbtn'>
                            <Button onClick={() => props.changePage("registerPage")} >Volunteer Register</Button>
                            <Button onClick={() => props.changePage("signinPage")}  >Volunteer Log In </Button>
                        </div>

                    }
                    {
                        !props.currentUser && !props.currentCo &&
                        <div className='cobtn'>
                            <Button onClick={() => props.changePage("registerPageCo")}  >Organization Register</Button>
                            <Button onClick={() => props.changePage("signinPageCo")}  >Organization Log In</Button>
                        </div>
                    }
                </div>

                <div className="initialbtn">
                    {props.currentUser &&
                        <div>
                            <Button onClick={() => props.handleAccount("accountPage")}  >My Account </Button>
                            <Button onClick={() => props.handleLogOut()}  >Log Out</Button><br />
                        </div>
                    }

                    {props.currentCo &&
                        <div>
                            <Button onClick={() => props.handleAccountCo("coAccountPage")} type="button" >My Account</Button>
                            <Button onClick={() => props.handleLogOutCo()} type="button" value="Log Out Co" >Log Out</Button>

                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
export default NavBar
