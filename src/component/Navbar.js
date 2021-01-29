import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './all.css'

 class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="high">
          <Navbar.Brand href="/">E-learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" variant="pills" defaultActiveKey="/LoginStudent">
              <Button variant="outline-primary" href="/LoginStudent">Log in Student</Button>
              <Nav.Link href="/RegisterStudent">Register as Student</Nav.Link>
            </Nav>
            <Nav  variant="pills" defaultActiveKey="#deets">
              <Button  variant="outline-primary" href="/LoginTeacher">Log in Teacher</Button>
              <Nav.Link eventKey={2} href="/RegisterTeacher">
                Register as Teacher
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default navbar