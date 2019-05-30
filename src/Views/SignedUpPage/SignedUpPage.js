import React from 'react'
import './style1.css'
import colorhands from '../../Images/colorhands.jpg'

function SignedUpPage(props) {
    return (
        <div className="outerdiv">
            <img className="image-inner" src={colorhands} alt="background" />
            <div className="details">
                <h1> Congrats have signed up to volunteer!</h1>
                <h3> Here are the details: </h3>
                <p> Date: {new Date(props.data.vol_date).toDateString()}</p>
                <p> Time: {props.data.vol_start_time} - {props.data.vol_end_time}</p>
                <p> Location: {props.data.vol_location}</p>
                <p> Phone: {props.data.co_phone}</p>
                <p> Email: {props.data.co_email}</p>
                <p> Website: {props.data.co_website}</p>
            </div>
        </div>
    )
}

export default SignedUpPage