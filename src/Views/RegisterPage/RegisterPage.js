import React from 'react'


function RegisterPage(props) {
    return (
        <div>
            <h1>To register, please enter the following information: </h1>
            <form onSubmit={(e) => { props.handleRegister("congratsPage", e) }}>
                <label>Name: </label><input name="name" type="text" defaultValue="Marcela" required /><br />
                <label>Email: </label><input name="email" type="email" required defaultValue="marcela@gmail.com" /><br />
                <label>Password: </label><input name="password" type="password" required defaultValue="123" /><br />
                <label>Phone Number: </label><input name="phone" type="tel" defaultValue="587-574-3159" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /> Format: 587-574-3155<br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterPage
