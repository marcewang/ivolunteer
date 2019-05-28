import React from 'react'

function CongratsPage(props) {
    return (
        <div>
            <h1>Congrats! You are now registered as a volunteer!</h1>
            <h2>You are one step closer to finding amazing volunteer opportunities in your city</h2>
            <input onClick={() => props.changePage("mainPage")} type="submit" value="Find volunteering opportunities" />
        </div>
    )
}

export default CongratsPage