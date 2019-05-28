import React from 'react'

function SignedUpPage(props) {
    return (
        <div>
            <h1> Congrats you are signed up to volunteer!</h1>
            <h3> Here are the details: </h3>
            <p> Date: {props.data.vol_date}</p>
            <p> Time: {props.data.vol_start_time} - {props.data.vol_end_time}</p>
            <p> Location: {props.data.vol_location}</p>
            <h3>If you have any further questions please contact: </h3>
            <p> Phone: {props.data.co_phone}</p>
            <p> Email: {props.data.co_email}</p>
            <p> Website: {props.data.co_website}</p>
        </div>
    )
}

export default SignedUpPage