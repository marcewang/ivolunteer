import React from 'react'
import { Button, Form, Label, Input } from 'reactstrap';

class CoPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                logo: this.props.userInfo[0].co_logo,
                email: this.props.userInfo[0].co_email,
                date: undefined,
                start_time: undefined,
                end_time: undefined,
                location:this.props.userInfo[0].co_location,
                city: this.props.userInfo[0].co_city, 
                phone: this.props.userInfo[0].co_phone, 
                website:this.props.userInfo[0].co_website,
                title: undefined,
                description: undefined 
            }
        }
    }

    handleClick = (e) => {
        const { name, value } = e.target
        const newFormData = { ...this.state.formData, [name]: value }
        this.setState({ formData: newFormData }, () => { console.log(this.state) })
    }

    render() {
        return (
            <div>
                <h1> Post a Volunteering Opportunity</h1>
                <Form
                    formAction=""
                >
                    <img src={this.state.formData.logo} name="logo" alt="your logo" required/>
                    <Label>Date: </Label>
                    <Input onChange={this.handleClick} type="date" name="date"  value={this.state.formData.date} required /><br />
                    <Label>Start Time: </Label>
                    <Input onChange={this.handleClick} type="time" name="start_time" value={this.state.formData.start_time} required/><br />
                    <Label>End Time: </Label>
                    <Input onChange={this.handleClick} type="time" name="end_time" value={this.state.formData.end_time} required/><br />
                    <Label>Address: </Label>
                    <Input onChange={this.handleClick} type="text" name="location" value={this.state.formData.location} required/><br />
                    <Label>City: </Label>
                    <Input onChange={this.handleClick} type="text" name="city" value={this.state.formData.city}  required/><br />
                    <Label>Phone: </Label>
                    <Input onChange={this.handleClick} type="tel" name="phone" value={this.state.formData.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /> Format: 587-574-3159<br />
                    <Label>Email: </Label>
                    <Input onChange={this.handleClick} type="email" name="email" value={this.state.formData.email} required /><br />
                    <Label>Website: </Label>
                    <Input onChange={this.handleClick} type="text" name="website" value={this.state.formData.website} required /><br />
                    <Label>Title: </Label>
                    <Input onChange={this.handleClick} type="text" name="title" value={this.state.formData.title} required /><br />
                    <Label>Description: </Label><Input onChange={this.handleClick} type="textarea" name="description" value={this.state.formData.description}   required/>
                    <Button onClick={() => this.props.setParentState(this.state.formData)}>Post</Button>
                    </Form>
            </div>
        )
    }

}

// issue with the time front end and back end
// make back end time just be whatever bootstrap gives us as values 
// make bootstrap first and then edit backend style to fit front end 
// <br />





export default CoPostPage
