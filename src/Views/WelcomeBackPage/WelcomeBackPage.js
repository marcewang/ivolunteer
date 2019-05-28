import React from 'react'

function WelcomeBackPage(props) {
    return (
        <div>
            <h1>Welcome back! </h1>
            <h2>Ready to find some exciting volunteering opportunities? </h2>
            <h2>Click the button now! </h2><input onClick={() => props.changePage("mainPage")} type="submit" value="Find volunteering opportunities" />
        </div>
    )
}

export default WelcomeBackPage