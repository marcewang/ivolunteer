import React from 'react'
import './styleregisterco.css'
import hands from '../../Images/hands.jpg'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const capitalize = {
    textTransform: 'capitalize'
}
function CoRegisterPage(props) {

    return (
        <div className="outer4">
            <img src={hands} className="handpic4" alt="image " />
            <div className="formdiv4">
                <form className="form4" onSubmit={(e) => props.handleCoRegister("coCongratsPage", e)}>
                    <h4>Register your Organization: </h4>
                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Name</InputGroupText>
                        </InputGroupAddon>
                        <Input name="name" type="text" defaultValue="Kin" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Address</InputGroupText>
                        </InputGroupAddon>
                        <Input name="location" type="text" defaultValue="1010 6 Ave SW, AB, T2P5N6" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >City</InputGroupText>
                        </InputGroupAddon>
                        <Input style={capitalize} name="city" type="text" defaultValue="Calgary" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Phone # </InputGroupText>
                        </InputGroupAddon>
                        <Input name="phone" type="tel" placeholder="format: 587-574-3121" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Website</InputGroupText>
                        </InputGroupAddon>
                        <Input name="website" type="text" defaultValue="www.kincanada.ca" required />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Logo Url</InputGroupText>
                        </InputGroupAddon>
                        <Input name="logo" type="text" defaultValue="https://www.kincanada.ca/layouts/main_site/images/logo.jpg" required />
                    </InputGroup>


                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Email</InputGroupText>
                        </InputGroupAddon>
                        <Input name="email" type="email" required defaultValue="kin@gmail.com" />
                    </InputGroup>


                    <InputGroup >
                        <InputGroupAddon className="new" addonType="prepend">
                            <InputGroupText >Password</InputGroupText>
                        </InputGroupAddon>
                        <Input name="password" type="password" defaultValue="123"  required />
                    </InputGroup>

                    <input className="button3" type="submit" value="Register" />
                   


                   

                </form>
            </div>
        </div>
    )
}

export default CoRegisterPage

    // < form className = "form4" onSubmit = {(e)=> props.handleCoRegister("coCongratsPage", e)}>
    //     <h4>Please Register: </h4>
    //     <label>Name: </label> <input name="name" type="text" defaultValue="Kin" required /> <br />
    //     <label>Address: </label> <input name="location" type="text" defaultValue="1010 6 Ave SW, AB, T2P5N6" required /> <br />
    //     <label>City: </label> <input style={capitalize} name="city" type="text" defaultValue="Calgary" required /> <br />
    //     <label>Phone Number: </label> <input name="phone" type="tel" defaultValue="587-574-3121" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /> Format: 587 - 574 - 3155 < br />
    //         <label>Website: </label> <input name="website" type="text" defaultValue="www.kincanada.ca" required /> <br />
    //         <label>Logo Url: </label> <input name="logo" type="text" defaultValue="https://www.kincanada.ca/layouts/main_site/images/logo.jpg" required /> <br />
    //         <label>Email: </label> <input name="email" type="email" required defaultValue="kin@gmail.com" /> <br />
    //         <label>Password: </label> <input name="password" type="password" required defaultValue="123" /> <br />
    //         <input className="button3" type="submit" value="Register" />
    //         </form >