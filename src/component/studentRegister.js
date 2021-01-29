import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import './all.css'

class studentRegister extends Component {
  state = {
    name: '',
    studentClass: '',
    age: '',
    phone: '',
    email: '',
    password:''
  }

  handleNameChange = (e) => {
     this.setState({name: e.target.value})
  }
  handleClassChange = (e) => {
    this.setState({studentClass: e.target.value})
  }
  handleAgeChange = (e) => {
    this.setState({age: e.target.value})
  }
  handlePhoneChange = (e) => {
     this.setState({Phone: e.target.value})
  }
  handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
handleSubmit = () => {
  alert('form submitted proceed to login')
}

  render() {
    return (
      <div className="brave">
        <Container className="pt-3">
          <Col md={{ span: 6, offset: 3 }}>
                <Form className=" shy"  onSubmit={this.handleSubmit}>
                    <Form.Group  id="name">
                      <Form.Label className="text-white">Student's Name</Form.Label >
                      <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange }/>
                    </Form.Group>

                    <Form.Group id="studentClass">
                      <Form.Label className="text-white">Student's class</Form.Label >
                      <Form.Control type="text" placeholder="Enter class" onChange={this.handleClassChange} />
                    </Form.Group>

                    <Form.Group  id="phone">
                      <Form.Label className="text-white">Phone Number</Form.Label >
                      <Form.Control placeholder="Enter Phone number" onChange={this.handlePhoneChange} />
                   </Form.Group>

                    <Form.Group  id="age">
                      <Form.Label className="text-white">Age</Form.Label >
                      <Form.Control placeholder="Enter your Ager" onChange={this.handleAgeChange} />
                    </Form.Group>

                    <Form.Group  id="email">
                      <Form.Label className="text-white">Email</Form.Label >
                      <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                    </Form.Group>

                    <Form.Group  id="password">
                      <Form.Label className="text-white">Password</Form.Label >
                      <Form.Control type="password" placeholder="password" onChange={this.handlePasswordChange} />
                    </Form.Group>

                  <Button variant="primary" type="submit" className="ade">
                    Submit
                  </Button>
              </Form>
          </Col>
          </Container>
      </div>

    )
  }
}

export default studentRegister