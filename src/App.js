import React from 'react';
import './App.css';
import MainPage from "./Views/MainPage/MainPage"
import ResultsPage from "./Views/ResultsPage/ResultsPage"
import RegisterPage from "./Views/RegisterPage/RegisterPage"
import CongratsPage from './Views/CongratsPage/CongratsPage'
import NavBar from './Components/NavBar/NavBar'
import SignInPage from './Views/SignInPage/SignInPage'
import WelcomeBackPage from './Views/WelcomeBackPage/WelcomeBackPage'
import OpportunityPage from './Views/OpportunityPage/OpportunityPage';
import SignedUpPage from './Views/SignedUpPage/SignedUpPage';
import AccountPage from './Views/AccountPage/AccountPage';
import CoSignInPage from './Views/CoSignInPage/CoSignInPage'
import CoRegisterPage from './Views/CoRegisterPage/CoRegisterPage'
import CoCongratsPage from './Views/CoCongratsPage/CoCongratsPage'
import CoPostPage from './Views/CoPostPage/CoPostPage'
import CoWelcomeBackPage from './Views/CoWelcomeBackPage/CoWelcomeBackPage';
import CoAccountPage from './Views/CoAccountPage/CoAccountPage';
import CongratsPostedPage from './Views/CongratsPostedPage/CongratsPostedPage'





class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "mainPage",
      city: "",
      date: "",
      newUser: "",
      currentUser: undefined,
      id: "",
      selectedOpportunity: undefined,
      accountInfo: undefined,
      userInfo: undefined,
      currentCo: undefined,
      codata: undefined,
      postdata: undefined,
      error: undefined
    }
  }

  changePage = (page) => {
    this.setState({ page: page })
  }
  handleSubmit = (page, e) => {
    this.setState({ page: page, city: e.target.city.value, date: e.target.date.value })
  }
  handleRegister = (page, e) => {
    const { name, email, password, phone } = e.target
    this.setState({ page: page, newUser: { name: name.value, email: email.value, password: password.value, phone: phone.value } }, () => this.registerUser())
  }

  handleSignIn = async (page, e) => {
    try {
      if (e === undefined || e.target.password.value === "" || e.target.email.value === "") {
        this.setState({ error: "Please enter a valid email and password" })
        return setTimeout(() => { this.setState({ error: undefined }) }, 3000)
      }
      const { password, email } = e.target
      await this.setState({ currentUser: { password: password.value, email: email.value } })
      let response = await this.signinUser()
      if (response === "error") {
        this.setState({ error: "Email/password combination failed", currentUser: undefined })
        return
        setTimeout(() => { this.setState({ error: undefined }) }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
    this.setState({ page })
  }

  handleCoSignIn = async (page, e) => {
    try {
      if (e === undefined || e.target.password.value === "" || e.target.email.value === "") {
        this.setState({ error: "Please enter a valid email and password" })
        return setTimeout(() => { this.setState({ error: undefined }) }, 3000)
      }
      const { password, email } = e.target
      await this.setState({ currentCo: { password: password.value, email: email.value } })
      let response = await this.signinCo()
      if (response === "error") {
        this.setState({ error: "Email/password combination failed", currentCo: undefined })
        return setTimeout(() => { this.setState({ error: undefined }) }, 3000)
      }
    } catch (error) {
      console.log(error)
    }
    this.setState({ page })
  }


  signinUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.currentUser.email,
            password: this.state.currentUser.password
          })
        })
      return response.json()
    } catch (error) {
      throw error
    }
  }



  handleOpportunity = (page, id) => {
    this.setState({ page: page, id: id }, () => this.getOpportunity())
  }

  handleSignUp = (page, id) => {
    this.setState({ page: page }, () => this.signUpVolunteer(id))
  }

  handleLogOut = () => {
    this.setState({ page: "mainPage", city: "", date: "", newUser: "", currentUser: undefined, id: "", selectedOpportunity: undefined })
  }

  handleLogOutCo = () => {
    this.setState({ page: "mainPage", city: "", date: "", newUser: "", currentUser: undefined, id: "", selectedOpportunity: undefined, accountInfo: undefined, userInfo: undefined, currentCo: undefined, codata: undefined, postdata: undefined, })
  }

  handleAccount = (page) => {
    this.setState({ page: page }, () => this.getAccountInfo())
  }

  handleCoRegister = (page, e) => {
    this.setState({ page: page, codata: e.target }, () => this.registerCo())
  }



  handleAccountCo = (page) => {
    this.setState({ page: page }, () => this.getCoAccountInfo())
  }

  handlePost = (page) => {
    this.setState({ page: page }, () => this.getCoAccountInfo())
  }

  setParentState = (data) => {
    this.setState({ postdata: data }, () => { this.postAd() })
  }

  postAd = async () => {
    const res = await fetch('http://localhost:3000/postopportunity',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          logo: this.state.postdata && this.state.postdata.logo,
          date: this.state.postdata && this.state.postdata.date,
          start_time: this.state.postdata && this.state.postdata.start_time,
          end_time: this.state.postdata && this.state.postdata.end_time,
          location: this.state.postdata && this.state.postdata.location,
          city: this.state.postdata && this.state.postdata.city,
          phone: this.state.postdata && this.state.postdata.phone,
          email: this.state.postdata && this.state.postdata.email,
          website: this.state.postdata && this.state.postdata.website,
          title: this.state.postdata && this.state.postdata.title,
          description: this.state.postdata && this.state.postdata.description
        })
      })

    if (res.status === 400) {
      await this.setState({ error: "All fields must be completed!" })
      return setTimeout(() => this.setState({ error: "" }), 2000)
    }
    this.setState({ page: "congratsPosted" })
    res.json()

  }


  getCoAccountInfo = () => {
    fetch(`http://localhost:3000/accountco/${encodeURIComponent(this.state.currentCo.email)}`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(accountInfo => {
        this.setState({ accountInfo: accountInfo }, () => this.getCoInfo())
      }
      )
  }

  getCoInfo = () => {
    fetch(`http://localhost:3000/userco/${encodeURIComponent(this.state.currentCo.email)}`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(userInfo => {
        this.setState({ userInfo: userInfo })
      })
  }

  signinCo = async () => {
    const res = await fetch('http://localhost:3000/signinco',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.currentCo.email,
          password: this.state.currentCo.password
        })
      })
    return res.json()
  }


  registerCo = () => {
    fetch('http://localhost:3000/registerco',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.codata.name.value,
          email: this.state.codata.email.value,
          password: this.state.codata.password.value,
          phone: this.state.codata.phone.value,
          logo: this.state.codata.logo.value,
          location: this.state.codata.location.value,
          city: this.state.codata.city.value,
          website: this.state.codata.website.value
        })
      })
      .then(res => res.json())
  }

  getAccountInfo = () => {
    fetch(`http://localhost:3000/myaccount/${encodeURIComponent(this.state.currentUser.email)}`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(accountInfo => {
        this.setState({ accountInfo: accountInfo }, () => this.getUserInfo())
      })
  }

  getUserInfo = () => {
    fetch(`http://localhost:3000/user/${encodeURIComponent(this.state.currentUser.email)}`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(userInfo => {
        this.setState({ userInfo: userInfo })
      })
  }

  signUpVolunteer = (id) => {
    fetch('http://localhost:3000/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.currentUser.email,
          id: id
        })
      })
      .then(res => res.json())

  }

  getOpportunity = () => {
    fetch('http://localhost:3000/description',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id
        })
      })
      .then(res => res.json())
      .then(selectedOpportunity => {
        this.setState({ selectedOpportunity: selectedOpportunity })
      })

  }

  registerUser = () => {
    fetch('http://localhost:3000/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.newUser.name,
          email: this.state.newUser.email,
          phone: this.state.newUser.phone,
          password: this.state.newUser.password
        })
      })
      .then(res => res.json())
  }





  render() {
    return (
      <div>
        {console.log(this.state.postdata && this.state.postdata.logo)}
        <NavBar handlePost={this.handlePost} handleLogOut={this.handleLogOut} changePage={this.changePage} handleAccountCo={this.handleAccountCo} handleAccount={this.handleAccount} currentUser={this.state.currentUser} currentCo={this.state.currentCo} handleLogOutCo={this.handleLogOutCo} />
        {this.state.page === "mainPage" && <MainPage handleSubmit={this.handleSubmit} />}
        {this.state.page === "registerPage" && <RegisterPage handleRegister={this.handleRegister} />}
        {this.state.page === "resultsPage" && <ResultsPage handleOpportunity={this.handleOpportunity} city={this.state.city} date={this.state.date} />}
        {this.state.page === "congratsPage" && <CongratsPage changePage={this.changePage} />}
        {this.state.page === "signinPage" && <SignInPage error={this.state.error} handleSignIn={this.handleSignIn} currentUser={this.state.currentUser} />}
        {this.state.page === "welcomePage" && <WelcomeBackPage changePage={this.changePage} />}
        {this.state.page === "opportunityPage" && <OpportunityPage changePage={this.changePage} currentUser={this.state.currentUser} handleSignUp={this.handleSignUp} selectedOpportunity={this.state.selectedOpportunity} />}
        {this.state.page === "signedUpPage" && <SignedUpPage data={this.state.selectedOpportunity} />}
        {this.state.page === "accountPage" && <AccountPage data={this.state.accountInfo} userData={this.state.userInfo} />}
        {this.state.page === "registerPageCo" && <CoRegisterPage handleCoRegister={this.handleCoRegister} />}
        {this.state.page === "signinPageCo" && <CoSignInPage error={this.state.error} handleCoSignIn={this.handleCoSignIn} />}
        {this.state.page === "coCongratsPage" && <CoCongratsPage changePage={this.changePage} />}
        {this.state.page === "welcomePageCo" && <CoWelcomeBackPage handlePost={this.handlePost} />}
        {(this.state.page === "coPostPage" && this.state.userInfo) && <CoPostPage error={this.state.error} userInfo={this.state.userInfo} setParentState={this.setParentState} />}
        {this.state.page === "coAccountPage" && <CoAccountPage codata={this.state.accountInfo} userData={this.state.userInfo} />}
        {this.state.page === "congratsPosted" && <CongratsPostedPage changePage={this.changePage} />}
      </div>

    )
  }

}

export default App;
