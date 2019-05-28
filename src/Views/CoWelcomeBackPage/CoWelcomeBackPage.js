import React from 'react'

function CoWelcomeBackPage(props) {
    return (
        <div>
            <h1>Welcome back! </h1>
            <h2>Post a Volunteering Opportunity </h2>
            <input onClick={() => props.handlePost("coPostPage")} type="submit" value="Post" />
        </div>
    )
}

export default CoWelcomeBackPage