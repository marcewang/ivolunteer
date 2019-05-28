import React from 'react';
// import SignInPage from '../SignInPage/SignInPage';

function OpportunityPage(props) {
    return (
        <div>
            <img src={props.selectedOpportunity && props.selectedOpportunity.co_logo} alt="co.logo" />
            
            <input
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
                value="I Want to Volunteer!"
            />
            <p>Phone #: {props.selectedOpportunity && props.selectedOpportunity.co_phone} </p>
            <p>Email: {props.selectedOpportunity && props.selectedOpportunity.co_email} </p>
            <p>Website: {props.selectedOpportunity && props.selectedOpportunity.co_website} </p>
            <p>Address: {props.selectedOpportunity && props.selectedOpportunity.vol_location} </p>
            <p>Date: {props.selectedOpportunity && props.selectedOpportunity.vol_date} </p>
            <p>
                Time: {props.selectedOpportunity && props.selectedOpportunity.vol_start_time} -{' '}
                {props.selectedOpportunity && props.selectedOpportunity.vol_end_time}
            </p>
            <p>Phone #: {props.selectedOpportunity && props.selectedOpportunity.co_phone} </p>
            <p>Phone #: {props.selectedOpportunity && props.selectedOpportunity.co_phone} </p>
            <h1>{props.selectedOpportunity && props.selectedOpportunity.vol_title} </h1>
            <p>{props.selectedOpportunity && props.selectedOpportunity.vol_description} </p>
        </div>
    );
}

export default OpportunityPage;