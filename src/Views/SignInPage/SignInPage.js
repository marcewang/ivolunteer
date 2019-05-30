import React from "react"
import { Alert } from 'reactstrap';
import './styleSignin.css'
import hands from '../../Images/hands.jpg'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

function SignInPage(props) {
    return (
        <div className="outer2">
            <img src={hands} className="handpic2" />
            <div className="formdiv2">
                <form className="form2" onSubmit={(e) => {
                    e.preventDefault()
                    return props.handleSignIn("welcomePage", e)
                }} >
                    <h4>Volunteer Log-In </h4>
                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText>Email</InputGroupText>
                        </InputGroupAddon>
                        <Input name="email" type="email" />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText>Password</InputGroupText>
                        </InputGroupAddon>
                        <Input name="password" type="password" />
                    </InputGroup>

                    <input className="button3" type="submit" value="Sign In" />
                    {props.error &&
                        <p style={{color:'red'}}>{props.error}</p>}

                </form>

            </div>

        </div>
    )

}

export default SignInPage

    // < div className = "formdiv2" >

    //     <form className="form2" onSubmit={(e) => {
    //         e.preventDefault()
    //         return props.handleSignIn("welcomePage", e)
    //     }} >
    //         <h4>Please Log-In </h4>


    //         <input className="button2" type="button2" color="primary" type="submit" value="Log In" />

    //     </form>
    //         </div >