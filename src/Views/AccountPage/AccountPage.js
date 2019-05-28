import React from 'react'
import './style.css'

function AccountPage(props) {
    return (
        <div>
            <h1>My Account:</h1>
            <p>  Name :{props.userData && props.userData[0].name}</p>
            <p>  Email :{props.userData && props.userData[0].email}</p>
            <p>  Phone :{props.userData && props.userData[0].phone}</p>
            <h1>Opportunities you signed up for:</h1>

            <table className='users'>
                <thead>
                    <tr>
                        <th>Date </th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>City</th>
                        <th>Details</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map(
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

export default AccountPage
