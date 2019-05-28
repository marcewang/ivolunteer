import React from "react"
import { Alert } from 'reactstrap';
import './style.css'
import hands from '../../Images/hands.jpg'

function SignInPage(props) {
    return (
        <div className="outer2">
            <img src={hands} className="handpic2" />
            <div className="formdiv2">
            
            <form className="form2"onSubmit={(e) => {
                e.preventDefault()
                return props.handleSignIn("welcomePage", e)
            }} >
            <h4>Please Log-In </h4>
                Email: <input name="email" type="email" /><br />
                Password: <input name="password" type="password" /><br />
                <input className="button2"type="button2" color="primary" type="submit" value="Log In" />
                {props.error &&
                    <Alert color="danger">
                        {props.error}
                    </Alert>}
            </form>
            </div>
        </div>
    )

}

export default SignInPage