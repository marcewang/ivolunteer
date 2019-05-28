import React from 'react'

function CongratsPostedPage(props) {
    return(
        <div>
        <h1>Your ad has been posted </h1>
        <h2>Post another ad:</h2>
        <input onClick= {()=> props.changePage("coPostPage")}type="button" value="Post"/>
        </div>

    )
}

export default CongratsPostedPage