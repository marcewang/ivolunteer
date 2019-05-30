import React from 'react'
import './styleRegister.css'
import hands from '../../Images/hands.jpg'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

function RegisterPage(props) {
    return (
        <div className="outer3">
            <img src={hands} className="handpic3" />
            <div className="formdiv3">
                <form className="form3" onSubmit={(e) => { props.handleRegister("congratsPage", e) }}>
                    <h4>Register as a Volunteer </h4>
                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Name</InputGroupText>
                        </InputGroupAddon>
                        <Input name="name" type="text" defaultValue="Marcela" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Email</InputGroupText>
                        </InputGroupAddon>
                        <Input name="email" type="email" required defaultValue="marcela@gmail.com" />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Password</InputGroupText>
                        </InputGroupAddon>
                        <Input name="password" type="password" required defaultValue="123" />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText  >Phone Number</InputGroupText>
                        </InputGroupAddon>
                        <Input name="phone" type="tel" defaultValue="587-574-3159" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    </InputGroup>
                    <input className="button3" type="submit" value="Register" />




                </form>
            </div>


        </div>

    )
}

export default RegisterPage
// <div className="formdiv3">

//                 <form className="form3" onSubmit={(e) => { props.handleRegister("congratsPage", e) }}>
//                     <h4>Please register: </h4>
//                     <label>Name</label><input name="name" type="text" defaultValue="Marcela" required /><br />
//                     <label>Email: </label><input name="email" type="email" required defaultValue="marcela@gmail.com" /><br />
//                     <label>Password: </label><input name="password" type="password" required defaultValue="123" /><br />
//                     <label>Phone Number: </label><input name="phone" type="tel" defaultValue="587-574-3159" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /> Format: 587-574-3155<br />
//                     <input className="button3" type="submit" value="Register" />
//                 </form>
//             </div>