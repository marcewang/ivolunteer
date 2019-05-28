import React from 'react'
import './style.css'

function CoAccountPage(props) {
    {console.log('1',props.codata)} // array
    {console.log('2',props.userData)} //array
    return (
        <div>
            <h1>My Account:</h1>
            <img src={props.userData && props.userData[0].co_logo} alt="your logo"/>
            <p>  Name :{props.userData && props.userData[0].co_name}</p>
            <p>  Email :{props.userData && props.userData[0].co_email}</p>
            <p>  Phone :{props.userData && props.userData[0].co_phone}</p>
            <p>  Address :{props.userData && props.userData[0].co_location}</p>
            <p>  City :{props.userData && props.userData[0].co_city}</p>
            <h1>Your Posts: </h1>

            <table className='users'>
                <thead>
                    <tr>
                        <th>Date </th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>City</th>
                        <th>Post Title</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {props.codata && props.codata.map(
                        info => (
                            <div>
                                <tr>
                                    <td>{new Date(info.vol_date).toDateString()}</td>
                                    <td>{info.vol_start_time} - {info.vol_end_time}</td>
                                    <td>{info.vol_location}</td>
                                    <td>{info.vol_city}</td>
                                    <td>{info.vol_title}</td>
                                    <td>{info.co_phone}</td>
                                    <td>{info.co_email}</td>
                                    <td>{info.co_website}</td>
                                </tr>
                            </div>
                        )
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default CoAccountPage
