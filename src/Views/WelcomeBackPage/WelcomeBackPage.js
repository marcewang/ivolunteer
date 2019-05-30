import React from 'react'
import './style.css'
import colorhands from '../../Images/colorhands.jpg'

function WelcomeBackPage(props) {
    return (
        <div className="outer7">
            <img src={colorhands} className="handpic7" />
            <div className="formdiv7">
                <h1>Welcome back! </h1>
                <input className="button7" onClick={() => props.changePage("mainPage")} type="submit" value="Find volunteering opportunities" />
            </div>
        </div>
    )
}

export default WelcomeBackPage