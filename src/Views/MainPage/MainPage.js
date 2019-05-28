import React from 'react';
import hands from '../../Images/hands.jpg'
import './style.css'


class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: undefined,
      loading: true,
      selectedCity: undefined,
      dates: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/cities')
      .then(resp => resp.json())
      .then(cities => {
        this.setState({ cities: cities, loading: false })
      })
  }

  handleChange = (e) => {
    this.setState({ selectedCity: e.target.value }, () => { this.getDates() })

  }

  getDates = () => {
    fetch(`http://localhost:3000/dates/${encodeURIComponent(this.state.selectedCity)}`)
      .then(resp => resp.json())
      .then(dates => {
        this.setState({ dates: dates })
      })
  }

  render() {
    if (this.state.loading) {
      return "Loading..."
    }

    return (
      <div className="outer">
        <img src={hands} className="handpic" />
        <div className="formdiv">
          <form onSubmit={(e) => { this.props.handleSubmit("resultsPage", e) }}>
            <h6>Enter your location:</h6>

            <select className="select-css" name="city" type="text" onChange={this.handleChange}>
              <option disabled selected>Select City</option>
              {this.state.cities.map(city => {
                return <option>{city.vol_city}</option>
              })}
            </select><br />

            
            <select className="select-css" name="date" type="text" disabled={!this.state.selectedCity} >
              <option value="alldates" selected>All Dates...</option>
              {this.state.dates !== undefined &&
                this.state.dates.map(date => {
                  return <option>{new Date(date.vol_date).toDateString()}</option>
                })}
            </select><br />


            <input className="button" type="submit" value="Search" disabled={!this.state.selectedCity} />
          </form>
        </div>
      </div>

    )
  }
}

export default MainPage;

