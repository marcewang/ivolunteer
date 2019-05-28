import React from 'react'
import './style.css'

class Opportunity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='box' onClick={() => this.props.handleOpportunity("opportunityPage", this.props.data.id)}>
                <img src={this.props.data.co_logo} alt="company logo" />
                <p> Date: {new Date(this.props.data.vol_date).toDateString()}</p>
                <p> Time: {this.props.data.vol_start_time} - {this.props.data.vol_end_time} </p>
                <p> Address: {this.props.data.vol_location} </p>
                <p> {this.props.data.vol_title} </p>
                <p> Description: {this.props.data.vol_description} </p>
            </div>

        )
    }
}

export default Opportunity
