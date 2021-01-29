import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"
import { NavLink } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import './all.css';
import axios from 'axios';
import { TEACHER_LOGIN, BASE_URL } from './../url';


export default class teacherLogin extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleSubmit = async(e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {
          const resposne  = await axios.post(`${BASE_URL}${TEACHER_LOGIN}`, {
              email: this.state.email,
              password: this.state.password
          });
          if (resposne.status === 200) {
              this.props.history.push('/dashboard')
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
          <div className="king">
               <Container className="pt-5">
                <Col md={{ span: 6, offset: 3 }}  className="broomstick">
                <Form onSubmit= {this.handleSubmit} >
                    <Form.Group id="Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                    </Form.Group>

                    <Form.Group id="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="broom">
                    <CircularProgress/>
                     Login
                    </Button>
                    <Form.Text className="text-dark text-center stew" >
                        Don't have an account? <NavLink to="/RegisterTeacher" className="stewed text-dark">Sign up</NavLink>
                    </Form.Text>
                    </Form>
              </Col>
              <div style={{visibility:'hidden'}}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
            </Container>
          </div>
        )
    }
}