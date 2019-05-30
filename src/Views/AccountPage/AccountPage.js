import React from 'react'
import './style.css'
import hands from '../../Images/hands.jpg'
import { Table } from 'reactstrap';
import logo from '../../Images/logo.png'

function AccountPage(props) {
    return (
        <div>
            <img className="handpic5" src={hands} />
            <div className="allinfo5">

            <h4>My Account:</h4>

            <div className="accountdiv5">
            <img src={logo} alt="brand logo"/>
            <div>
            <p>  Name :{props.userData && props.userData[0].name}</p>
            <p>  Email :{props.userData && props.userData[0].email}</p>
            <p>  Phone :{props.userData && props.userData[0].phone}</p>
            </div>
            </div>

            <h4>Upcoming events: </h4>

            <div className="tablediv5">
            <Table className='users5'>
                <thead>
                    <tr>
                        <th  width="10%">Date </th>
                        <th  width="10%">Time</th>
                        <th  width="22%">Address</th>
                        <th  width="15%">Details</th>
                        <th  width="13%">Phone</th>
                        <th  width="10%">Email</th>
                        <th  width="10%">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map(
                        info => (
                            
                                <tr>
                                    <td>{new Date(info.vol_date).toDateString()}</td>
                                    <td>{info.vol_start_time} - {info.vol_end_time}</td>
                                    <td>{info.vol_location}</td>
                                    <td>{info.vol_title}</td>
                                    <td>{info.co_phone}</td>
                                    <td>{info.co_email}</td>
                                    <td>{info.co_website}</td>
                                </tr>
                            
                        )
                    )}
                </tbody>
            </Table>
            </div>
        </div>
        </div>
        
    )
}

export default AccountPage
