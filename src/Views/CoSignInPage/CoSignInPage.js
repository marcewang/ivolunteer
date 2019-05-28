import React from "react"

function CoSignInPage(props) {
    return (
        <div>
            <h1>Companies </h1>
            <h1>Please Log-In </h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                return props.handleCoSignIn("welcomePageCo", e)
            }}>
                Email: <input name="email" type="email"></input><br />
                Password: <input name="password" type="password"></input><br />
                <input type="submit" value="Log-In"></input>
                {props.error && <p style={{ color: "red" }}>{props.error}</p>}
            </form>

        </div>
    )

}

export default CoSignInPage

