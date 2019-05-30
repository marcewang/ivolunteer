import React from 'react'
import Opportunity from '../../Components/Opportunity/Opportunity'
import './styleresults.css'
import hands from '../../Images/hands.jpg'

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
            loading: true
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/opportunities/${encodeURIComponent(this.props.city)}/${encodeURIComponent(this.props.date)}`, {
            method: 'GET'
        }).then(response => response.json())
            .then(
                data => this.setState({ data, loading: false })
            )
    }


    render() {
        if (this.state.loading) {
            return "Loading..."
        } // we do this because usually the page loads first and then the componentdidmount gets loaded
        return (
            <div>
                    <img className="image-inner" src={hands} alt="background" />

                <div className="opportunities">
                    {this.state.data.map(data => {
                        return <Opportunity handleOpportunity={this.props.handleOpportunity} data={data} />
                    })}
                </div>


            </div>
        )
    }
}

export default ResultsPage

// look through opportunities after fetching and inputting the opportunities 