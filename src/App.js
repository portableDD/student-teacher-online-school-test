import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/home'
import StudentRegister from './component/studentRegister'
import StudentLogin from "./component/loginStudent"
import TeacherRegister from './component/teacherRegister'
import TeacherLogin from './component/loginTeacher'
import Dashboard from './dasborad/dashboard'
 class App extends Component {

  state = {
    userDetails: {
      name: '',
      phone: '',
      email: '',
      age: ''
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/RegisterStudent' component={StudentRegister} />
          <Route path='/LoginStudent' component={StudentLogin} />
          <Route path='/RegisterTeacher' component={TeacherRegister} />
          <Route path='/LoginTeacher' component={TeacherLogin}/>
          <Route path='/Dashboard' component={Dashboard}/>
          {/* <Route path='/product' component={Product} />
          <Route path='/payment' component={Payment} /> */}
          {/* <Route path='/paystack' component={Paystack} /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
