import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import image2 from '../pics/home9.jpg'
import image1 from '../pics/home1.jpg'
import './all.css'

 class home extends Component {
  render() {
    return (
      <Container>
        <Row className="pt-5">
          <Col>
                   <Image src={image2} rounded />
          </Col>
          <Col>
               <p>
                  Education is constantly changing the way students learn and how instructors teach.
                  Technology is often the driving force behind many of the world’s changes and innovations.
                  In education, creating an e-learning culture is more about developing and
                  tweaking what already exists, sharing a common vision, and doing things a little differently.
                  The purpose of this article is to identify and outline a strategy for creating an e-learning culture
                  within a school system ready to step away from traditional teaching.
                </p>
          </Col>
        </Row>
        <Row  className="pt-5">
          <Col>
            <p>
              E-learning refers to learning and teaching using electronic media and requires
              the use of information and communication technologies combined with electronic media
              (Simonson, Smaldino, Albright, & Zvacek, 2000; Kok, 2013).
               In education, e-learning should center on the student with the teacher serving as the learning facilitator.
               Teaching should always be about the needs and abilities of the students and how learning will happen easily for them.
               Learning is an ongoing process that must be purposeful and intentional for each student so that they may reach their fullest potential.
               An e-learning culture is one in which the emphasis is on the teacher, the student,
              and the technology used to facilitate that learning experience (Simonson et al., 2000; Kok, 2013).
            </p>
          </Col>
          <Col>
              <Image src={image1} rounded />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default home