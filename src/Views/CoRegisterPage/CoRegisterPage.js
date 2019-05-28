import React from 'react'

const capitalize = {
    textTransform: 'capitalize'
}
function CoRegisterPage(props) {
   
    return (
        <div>
            <h1>To register, please enter the following information: </h1>
            <form onSubmit= {(e)=> props.handleCoRegister("coCongratsPage", e)}>
                <label>Name: </label><input name="name" type="text" defaultValue="Kin" required /><br />
                <label>Address: </label><input name="location" type="text" defaultValue="1010 6 Ave SW, AB, T2P5N6" required /><br />
                <label>City: </label><input style={capitalize} name="city" type="text" defaultValue="Calgary" required /><br />
                <label>Phone Number: </label><input name="phone" type="tel" defaultValue="587-574-3121" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /> Format: 587-574-3155<br />
                <label>Website: </label><input name="website" type="text" defaultValue="www.kincanada.ca" required /><br />
                <label>Logo Url: </label><input name="logo" type="text" defaultValue="https://www.kincanada.ca/layouts/main_site/images/logo.jpg" required /> <br />
                <label>Email: </label><input name="email" type="email" required defaultValue="kin@gmail.com" /><br />
                <label>Password: </label><input name="password" type="password" required defaultValue="123" /><br />
                <input type="submit" value="Register"/>
            </form>

        </div>
    )
}

export default CoRegisterPage