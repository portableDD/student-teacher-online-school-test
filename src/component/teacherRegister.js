import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import './all.css'
import axios from 'axios';
import { BASE_URL, TEACHER_REG } from './../url';

class teacherRegister extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    teacherName: '',
    assignedclass: '',
    age: '',
    phone: '',
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
    }

  handlePasswordChange = (e) => {
  this.setState({password: e.target.value})
  }

  handleTeacherChange = (e) => {
   this.setState({teacherName: e.target.value})
  }

  handleAgeChange = (e) => {
    this.setState({age: e.target.value})
  }

  handlePhoneChange = (e) => {
   this.setState({phone: e.target.value})
  }

  handleclassChange = (e) => {
   this.setState({assignedclass: e.target.value})
  }


  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({
        loading: true
    })
    e.preventDefault()
    try {
      const resposne  = await axios.post(`${BASE_URL}${TEACHER_REG}`, {
          email: this.state.email,
          password: this.state.password,
          name: this.state.studentName,
          phone: this.state.phone,
          age: this.state.age,
          assignedclass: this.state.assignedclass
      });
      if (resposne.status === 200) {
        // alert("register successful");
        this.props.history.push('./dashboard/dashboard')
        this.setState({
          loading: false
        })
      }
    } catch (error) {
        alert(error)
        this.setState({
            loading: false
        })
    }
}


  render() {
    return (
      <div  className="brave">
            <Container className="pt-3">
                <Col md={{ span: 6, offset: 3 }}>
                      <Form className=" shy" onSubmit= {this.handleSubmit}>
                            <Form.Group id="namel">
                              <Form.Label className="text-white">Teacher's Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter name" onChange= {this.handleTeacherChange}/>
                            </Form.Group>

                            <Form.Group id="assignedclass">
                              <Form.Label className="text-white">Teacher's class</Form.Label>
                              <Form.Control type="text" placeholder="Enter class" onChange={this.handleclassChange}/>
                            </Form.Group>

                            <Form.Group  id="phone">
                              <Form.Label className="text-white">Phone Number</Form.Label>
                              <Form.Control placeholder="Enter Phone number" onChange={this.handlePhoneChange}/>
                            </Form.Group>

                             <Form.Group  id="age">
                              <Form.Label className="text-white">Age</Form.Label>
                              <Form.Control placeholder="Enter your Age" onChange={this.handleAgeChange}/>
                            </Form.Group>

                            <Form.Group  id="email">
                              <Form.Label className="text-white">Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" onChange= {this.handleEmailChange}/>
                            </Form.Group>

                            <Form.Group  id="password">
                              <Form.Label className="text-white">Password</Form.Label>
                              <Form.Control type="password" placeholder="password" onChange={this.handlePasswordChange}/>
                            </Form.Group>

                          <Button variant="primary" type="submit" className="ade">
                          {this.state.loading && <CircularProgress size={20} color={"white"}/>}  
                            Submit
                          </Button>
                    </Form>
                </Col>

            </Container>
      </div>

    )
  }
}

export default teacherRegister