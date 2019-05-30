import React from 'react'
import './style.css'
import colorhands from '../../Images/colorhands.jpg'

function CoCongratsPage(props) {
    return (
        <div className="outer12">
            <img src={colorhands} className="handpic12" />
            <div className="formdiv12">
            <h1>Congrats! You are now registered!</h1>
            <h2>Please Log In: </h2>
            <input className="button12" onClick={() => props.changePage("signinPageCo")} type="submit" value="Sign-In" />
        </div>
        </div>
    )
}

export default CoCongratsPage