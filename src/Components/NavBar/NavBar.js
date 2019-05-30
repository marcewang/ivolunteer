import React from 'react'
import './style.css'
import { Button } from "reactstrap"
import logo from '../../Images/logo.png'

function NavBar(props) {
    return (
        <div className="body">
            <img className="logo" src={logo} alt='logo' onClick={() => props.changePage("mainPage")} />
            {
                !props.currentUser && !props.currentCo &&
                <div className='buttons'>
                    <Button onClick={() => props.changePage("registerPage")} >Register</Button>
                    <Button onClick={() => props.changePage("signinPage")}  >Log In </Button>
                    <Button onClick={() => props.changePage("registerPageCo")}  >Register Co</Button>
                    <Button onClick={() => props.changePage("signinPageCo")}  >Log In Co </Button>
                </div>
            }
            {props.currentUser &&
                <div>
                    <Button onClick={() => props.handleAccount("accountPage")}  >My Account </Button>
                    <Button onClick={() => props.handleLogOut()}  >Log Out</Button><br />
                </div>
            }

            {props.currentCo &&
                <div>
                    <input onClick={() => props.handleAccountCo("coAccountPage")} type="button" value="My Account co" />
                    <input onClick={() => props.handleLogOutCo()} type="button" value="Log Out Co" />
                    <input onClick={() => props.handlePost("coPostPage")} type="post" type="button" value="Post" />
                </div>
            }

        </div>
    )
}
export default NavBar
