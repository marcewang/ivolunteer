import React from 'react'

function CoCongratsPage(props) {
    return (
        <div>
            <h1>Congrats! You are now registered and can start posting your Volunteering opportunities!</h1>
            <h2>Post an opportunity</h2>
            <input onClick = {()=> props.changePage("coPostPage")}type="submit" value="Post" />
        </div>
    )
}

export default CoCongratsPage