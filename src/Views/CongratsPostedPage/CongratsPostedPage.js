import React from 'react'
import './style.css'
import colorhands from '../../Images/colorhands.jpg'

function CongratsPostedPage(props) {
    return(
        <div className="outer6">
            <img src={colorhands} className="handpic6" /> 
            <div className="formdiv6">
        <h2>Your ad has been posted </h2>
        <h3>Post another ad:</h3>
        <input className="button6"  onClick= {()=> props.changePage("coPostPage")}type="button" value="Post"/>
        </div>
        </div>

    )
}

export default CongratsPostedPage