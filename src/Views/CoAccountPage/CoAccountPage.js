import React from 'react'
import './style.css'
import hands from '../../Images/hands.jpg'
import { Table } from 'reactstrap';


function CoAccountPage(props) {
    { console.log('1', props.codata) } // array
    { console.log('2', props.userData) } //array
    return (
        <div>
            <img className="handpic4" src={hands} />
            <div className="allinfo">

                <h4>My Account:</h4>

                <div className="accountdiv">
                    <img src={props.userData && props.userData[0].co_logo} alt="your logo" />
                    <div>
                        <p>  Name :{props.userData && props.userData[0].co_name}</p>
                        <p>  Email :{props.userData && props.userData[0].co_email}</p>
                        <p>  Phone :{props.userData && props.userData[0].co_phone}</p>
                        <p>  Address :{props.userData && props.userData[0].co_location}</p>
                        <p>  City :{props.userData && props.userData[0].co_city}</p>
                    </div >
                </div>

                <h4>My Posts: </h4>

                <div className="tablediv">
                    <Table className='users'>
                        <thead>
                            <tr>
                                <th width="28%">Post Title</th>
                                <th width="15%">Date </th>
                                <th width="15%">Time</th>
                                <th width="30%">Address</th>
                                <th width="12%">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.codata && props.codata.map(
                                info => (

                                    <tr>
                                        <td >{info.vol_title}</td>
                                        <td> {new Date(info.vol_date).toDateString()}</td>
                                        <td >{info.vol_start_time} - {info.vol_end_time}</td>
                                        <td >{info.vol_location}</td>
                                        <td >{info.vol_city}</td>

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

export default CoAccountPage
// <td>{info.co_phone}</td>
//                                 <td>{info.co_email}</td>
//                                 <td>{info.co_website}</td>