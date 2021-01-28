import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

 class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">E-learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Button href="#features">Log in Student</Button>
              <Nav.Link href="#pricing">Register as Student</Nav.Link>
            </Nav>
            <Nav>
              <Button href="#deets">Log in Teacher</Button>
              <Nav.Link eventKey={2} href="#memes">
                Register as Teacher
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default navbar