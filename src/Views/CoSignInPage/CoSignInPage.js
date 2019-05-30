import React from "react"
import './stylecosign.css'
import hands from '../../Images/hands.jpg'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

function CoSignInPage(props) {
    return (
        <div className="outer5">
            <img src={hands} className="handpic5" />
            <div className="formdiv5">
                <form className="form5" onSubmit={(e) => {
                    e.preventDefault()
                    return props.handleCoSignIn("welcomePageCo", e)
                }}>

                    <h4>Organization Log-In </h4>
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


                    <input className="button5" type="submit" value="Log-In"></input>
                    {props.error && <p style={{ color: "red" }}>{props.error}</p>}
                </form>
            </div>
        </div>
    )

}

export default CoSignInPage

// Email: <input name="email" type="email"></input><br />
//                 Password: <input name="password" type="password"></input><br />
