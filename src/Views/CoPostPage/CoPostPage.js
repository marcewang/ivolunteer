import React from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import hands from '../../Images/hands.jpg'
import './stylecopost.css'
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';


class CoPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                logo: this.props.userInfo[0].co_logo,
                email: this.props.userInfo[0].co_email,
                date: undefined,
                start_time: moment('00:00:00', 'HH:mm:ss'),
                end_time: moment('00:00:00', 'HH:mm:ss'),
                location: this.props.userInfo[0].co_location,
                city: this.props.userInfo[0].co_city,
                phone: this.props.userInfo[0].co_phone,
                website: this.props.userInfo[0].co_website,
                title: undefined,
                description: undefined,
                time: '10:00',
            }
        }
    }

    handleClick = (e) => {
        const { name, value } = e.target
        const newFormData = { ...this.state.formData, [name]: value }
        this.setState({ formData: newFormData }, () => { console.log(this.state) })
    }

    onChange = (timeString, name) => {
        const newFormData = { ...this.state.formData, [name]: timeString }
        this.setState({ formData: newFormData }, () => { console.log(this.state) })
    }


    render() {

        return (
            <div className="outer10">
                <img src={hands} className="handpic10" alt="hopethisworks" />

                <div className="formdiv10">
                    <h3> Post a Volunteering Opportunity</h3>

                    <form
                        className="form10" formAction=""
                    >

                        <div className="row">

                            <div>
                                <img src={this.state.formData.logo} name="logo" alt="your logo" required />
                            </div>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Date</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="date" name="date" value={this.state.formData.date} required />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Start Time:</InputGroupText>
                                </InputGroupAddon>
                                <TimePicker onChange={(time, timeString) => this.onChange(timeString, "start_time")} value={moment(this.state.formData.start_time, 'HH:mm:ss')} />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>End Time:</InputGroupText>
                                </InputGroupAddon>
                                <TimePicker onChange={(time, timeString) => this.onChange(timeString, "end_time")} value={moment(this.state.formData.end_time, 'HH:mm:ss')} />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Address:</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="text" name="location" value={this.state.formData.location} required />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>City:</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="text" name="city" value={this.state.formData.city} required />
                            </InputGroup>
                        </div>
                        <div className="row">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Phone:</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="tel" name="phone" value={this.state.formData.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            </InputGroup>


                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Email: </InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="email" name="email" value={this.state.formData.email} required />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Website: </InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="text" name="website" value={this.state.formData.website} required />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Title: </InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={this.handleClick} type="text" name="title" value={this.state.formData.title} required />
                            </InputGroup>

                            <InputGroup className="desc">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText >Description:</InputGroupText>
                                </InputGroupAddon>
                                <Input  onChange={this.handleClick} type="textarea" name="description" value={this.state.formData.description} required />
                            </InputGroup>

                        </div>

                    </form>
                    <button className="button10" onClick={() => this.props.setParentState(this.state.formData)}>Post</button>

                </div>

            </div>
        )
    }

}

// issue with the time front end and back end
// make back end time just be whatever bootstrap gives us as values 
// make bootstrap first and then edit backend style to fit front end 
// <br />





export default CoPostPage
