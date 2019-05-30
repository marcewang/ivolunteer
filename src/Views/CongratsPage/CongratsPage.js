import React from 'react'
import './style.css'
import colorhands from '../../Images/colorhands.jpg'

function CongratsPage(props) {
    return (
        <div className="outer6">
            <img src={colorhands} className="handpic6" /> 
            <div className="formdiv6">
            <h2>Congrats! You are now registered as a volunteer!</h2>
            <input className="button6" onClick={() => props.changePage("mainPage")} type="submit" value="Find volunteering opportunities" />
            </div>
        </div>
    )
}

export default CongratsPage