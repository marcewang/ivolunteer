import React from 'react';
import hands from '../../Images/hands.jpg'
import './styleopp.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function OpportunityPage(props) {
    return (
        <div className="outer-div">
            <img src={hands} className="handpicture" alt="image " />

            <div className="formdiv15">

                <div className="coinfo" >
                    <img src={props.selectedOpportunity && props.selectedOpportunity.co_logo} alt="co.logo" />
                    <h6>Contact Information</h6>
                    <p>Phone #: {props.selectedOpportunity && props.selectedOpportunity.co_phone} </p>
                    <p>Email: {props.selectedOpportunity && props.selectedOpportunity.co_email} </p>
                    <p>Website: {props.selectedOpportunity && props.selectedOpportunity.co_website} </p>
                    <p>Address: {props.selectedOpportunity && props.selectedOpportunity.vol_location} </p>
                    <input className="button15"
                        onClick={
                            props.currentUser ? (
                                () => props.handleSignUp(
                                    'signedUpPage',
                                    props.selectedOpportunity && props.selectedOpportunity.id
                                )
                            ) : (
                                    () => props.changePage('signinPage')
                                )
                        }
                        name="volunteer"
                        type="Submit"
                        value="Click to Volunteer!"
                    />
                </div>


                <div className="volinfo">
                    <h1>{props.selectedOpportunity && props.selectedOpportunity.vol_title} </h1>
                    <p className="date">Date: {props.selectedOpportunity && props.selectedOpportunity.vol_date} </p>
                    <p className="time">
                        Time: {props.selectedOpportunity && props.selectedOpportunity.vol_start_time} -{' '}
                        {props.selectedOpportunity && props.selectedOpportunity.vol_end_time}
                    </p>
                
                    <p>{props.selectedOpportunity && props.selectedOpportunity.vol_description} </p>
                </div>
            </div>
        </div>
    );
}

export default OpportunityPage;