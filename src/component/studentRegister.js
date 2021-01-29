import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import './all.css'
import axios from 'axios';
import { BASE_URL, STUDENT_REG } from './../url';

class studentRegister extends Component {
  state = {
     email: '',
     password: '',
     loading: false,
     studentName: '',
     studentClass: '',
     age: '',
     phone: '',
   }


   handleEmailChange = (e) => {
    this.setState({email: e.target.value})
    }

  handlePasswordChange = (e) => {
  this.setState({password: e.target.value})
  }

  handleNameChange = (e) => {
   this.setState({studentName: e.target.value})
  }

  handleAgeChange = (e) => {
    this.setState({age: e.target.value})
  }

  handlePhoneChange = (e) => {
   this.setState({phone: e.target.value})
  }

  handleclassChange = (e) => {
   this.setState({studentClass: e.target.value})
  }


  handleSubmit = async (e) => {
    this.setState({
      loading: true
    })
    e.preventDefault()
    try {
      const resposne = await axios.post(`${BASE_URL}${STUDENT_REG}`, {
        email: this.state.email,
        password: this.state.password,
        name: this.state.studentName,
        phone: this.state.phone,
        age: this.state.age,
        studentClass: this.state.studentClass
      });
      if (resposne.status === 200) {
        alert("register successful");
        // this.props.history.push('/dashboard')
      }
    } catch (error) {
      alert(error)
      this.setState({
        loading: false
      })
    }
    alert('form submitted proceed to login')
  }


  render() {
    return (
      <div className="brave">
        <Container className="pt-3">
          <Col md={{ span: 6, offset: 3 }}>
                <Form className=" shy">
                    <Form.Group  id="name"> onSubmit= {this.handleSubmit}
                      <Form.Label className="text-white">Student's Name</Form.Label >
                      <Form.Control type="text" placeholder="Enter name" onChange={this.handleNameChange}/>
                    </Form.Group>

                    <Form.Group id="studentClass">
                      <Form.Label className="text-white">Student's class</Form.Label >
                      <Form.Control type="text" placeholder="Enter class" onChange={this.handleclassChange}/>
                    </Form.Group>

                    <Form.Group  id="phone">
                      <Form.Label className="text-white">Phone Number</Form.Label >
                      <Form.Control placeholder="Enter Phone number" onChange = {this.handlePhoneChange}/>
                   </Form.Group>

                    <Form.Group  id="age">
                      <Form.Label className="text-white">Age</Form.Label >
                      <Form.Control placeholder="Enter your Ager" onChange={this.handleAgeChange}/>
                    </Form.Group>

                    <Form.Group  id="email">
                      <Form.Label className="text-white">Email</Form.Label >
                      <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                    </Form.Group>

                    <Form.Group  id="password">
                      <Form.Label className="text-white">Password</Form.Label >
                      <Form.Control type="password" placeholder="password" onChange={this.handlePasswordChange}/>
                    </Form.Group>

                  <Button variant="primary" type="submit" className="ade">
                  <CircularProgress visible = {this.state.loading}/>
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