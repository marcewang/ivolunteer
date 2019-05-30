import React from 'react'
import './stylecowe.css'
import hands from '../../Images/hands.jpg'

function CoWelcomeBackPage(props) {
    return (
        <div className="outer9">
            <img src={hands} className="handpic9" />
            <div className="formdiv9">
                <h1>Welcome back! </h1>
                <h2>Post a Volunteering Opportunity: </h2>
                <input className="button9" onClick={() => props.handlePost("coPostPage")} type="submit" value="Post" />
            </div>
        </div>
    )
}

export default CoWelcomeBackPage