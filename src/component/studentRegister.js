import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import './all.css'

class studentRegister extends Component {
  state = {

   }
  render() {
    return (
      <div className="brave">
        <Container className="pt-3">
          <Col md={{ span: 6, offset: 3 }}>
                <Form className=" shy">
                    <Form.Group  id="name">
                      <Form.Label className="text-white">Student's Name</Form.Label >
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group id="studentClass">
                      <Form.Label className="text-white">Student's class</Form.Label >
                      <Form.Control type="text" placeholder="Enter class" />
                    </Form.Group>

                    <Form.Group  id="phone">
                      <Form.Label className="text-white">Phone Number</Form.Label >
                      <Form.Control placeholder="Enter Phone number" />
                   </Form.Group>

                    <Form.Group  id="age">
                      <Form.Label className="text-white">Age</Form.Label >
                      <Form.Control placeholder="Enter your Ager" />
                    </Form.Group>

                    <Form.Group  id="email">
                      <Form.Label className="text-white">Email</Form.Label >
                      <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group  id="password">
                      <Form.Label className="text-white">Password</Form.Label >
                      <Form.Control type="password" placeholder="password" />
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