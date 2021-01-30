import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from 'react-bootstrap/Table';
import '../component/all.css';
import axios from 'axios';
import { BASE_URL, LIST_STUDENT } from './../url';

export default class dashborad extends Component {

	state = {
		studentList: [],
		loading: false,
		name: '',
		assignedClass: '',
		age: '',
		phone: '',
		email: '',
		password: '',
		buttonGreen: {
			backgroundColor: 'green',
			color: 'white'
		},
		buttonColor: {
			backgroundColor: 'white',
		},
    	
		buttonRedColor: {
			backgroundColor: 'red',
			color: 'white'
    },
	};


	componentDidMount(){
		this.getStudntDetails();
	}


// fetch student records
 getStudntDetails = async () => {
   this.setState({
	   loading: true
   })
   try {
	  const list = await axios.get(`${BASE_URL}${LIST_STUDENT}`);
	  if (list.status === 200) {
        this.setState({
			loading: false,
			studentList : list.data['data']
		})
	  }
   } catch (error) {
	   console.log(error);
	   alert(error)
   }
 }





 displayDaily = () => {
	 const { loading, studentList } = this.state;
	 if (loading){
		 return <div><CircularProgress size={20} color={"white"}/></div>
	 } else if (studentList) {
		  
		return <tbody>
			{studentList.map((item, index) => {
				return <tr key={item._id}>
				<td>{((index + 1).toString())}</td>
				<td>{item.name}</td>
				<td>
					<ButtonGroup aria-label='Basic example'>
						<Button
							variant='light'
							style={this.state.buttonColor}
							id= {item._id}
							onClick={this.handleColor}
							key={item._id}
						>
							Present
						</Button>
						<Button
							variant='light'
							style={this.state.buttonRedColor}
							id= {`${item._id}xx`}
							onClick={this.handleRedColor}
							key={`${item._id}xx`}
						>
							Absent
						</Button>
					</ButtonGroup>
				</td>
				</tr>
	 })}
	 </tbody>
	 }
 }



 displayStudentList = () => {
	const { loading, studentList } = this.state;
	if (loading){
		return <div><CircularProgress size={20} color={"white"}/></div>
	} else if (studentList) {
		 
	   return <tbody>
		   {studentList.map((item, index) => {
			   return <tr>
			   <td>{((index + 1).toString())}</td>
			   <td>{item.name}</td>
			   <td>{item.email}</td>
			   <td>{item.phone}</td>
			   <td>{item.age}</td>
			   </tr>
	})}
	</tbody>
	}
}





	handleDisplay = () => {
		const form = document.getElementById('addProductSection');
		const homem = document.getElementById('homeSection');
		const stdlist = document.getElementById('student');
		form.style.display = 'block';
		homem.style.display = 'none';
		stdlist.style.display = 'none';
	};

	handleDisplayStudents = () => {
		const form = document.getElementById('addProductSection');
		const homem = document.getElementById('homeSection');
		const stdlist = document.getElementById('student');
		stdlist.style.display = 'block';
		form.style.display = 'none';
		homem.style.display = 'none';
	};

	handleHome = () => {
		const form = document.getElementById('addProductSection');
		const homem = document.getElementById('homeSection');
		const stdlist = document.getElementById('student');
		form.style.display = 'none';
		homem.style.display = 'block';
		stdlist.style.display = 'none';
	};

	handleGeneralColor (e) {
    this.setState({ buttonColor: { backgroundColor: 'white' } });
    this.setState({ buttonRedColor: { backgroundColor: 'white' } });

	}

  handleColor = (e) => {
	const greenB = document.getElementById(e.target.attributes.id.nodeValue.toString());
	const redB = document.getElementById(`${e.target.attributes.id.nodeValue}xx`.toString());
	greenB.style.backgroundColor = "green";
	redB.style.backgroundColor = "white";
	redB.style.color = "black";
	greenB.style.color = "white";
  }
  handleRedColor = (e) => {
	const xx = e.target.attributes.id.nodeValue.toString();
	const greenB = document.getElementById(xx.substring(0, xx.length-2));
	const redB = document.getElementById(`${e.target.attributes.id.nodeValue}`.toString());
	greenB.style.backgroundColor = "white";
	redB.style.backgroundColor = "red";
	redB.style.color = "white";
	greenB.style.color = "black";
  };

	render () {
		return (
			<div className='bg-secondary'>
				<Container className='pt-5'>
					<Row>
						<Col md={3} sm={4} xl={2} lg={3}>
							<Navbar bg='light' variant='light'>
								<Nav className='flex-column' variant='pills' defaultActiveKey='#homeSection'>
									<Nav.Link href='#homeSection' id='pure' onClick={this.handleHome}>
										User
									</Nav.Link>
									<NavDropdown title='Attendance' id='basic-nav-dropdown'>
										<NavDropdown.Item id='display' href='#addProductSection' onClick={this.handleDisplay}>
											Daily Attendance
										</NavDropdown.Item>
									</NavDropdown>
									<Nav.Link href='#student' id='display' onClick={this.handleDisplayStudents}>
										Student
									</Nav.Link>
								</Nav>
							</Navbar>
						</Col>
						<Col className='freeze pb-3' sm={1} lg={1} />
						<Col className='bg-light pt-2' sm={8} md={8} lg={8}>
							<div id='homeSection' className=' pt-3'>
								<h6 className='pl-3'> Owner's Name : {this.state.name}</h6>
								<h6 className='pt-2 pl-3'>Business Address : {this.state.assignedClass}</h6>
								<h6 className='pt-2 pl-3'>Business Type: {this.state.age}</h6>
								<h6 className='pt-2 pl-3'>Phone Number: {this.state.phonen}</h6>
								<h6 className='pt-2 pl-3 pb-2'>Email Address: {this.state.email}</h6>
							</div>
							<div id='addProductSection' style={{display:'none'}}>
								<h3>Daily Attendance</h3>
								<Table striped bordered hover responsive= "sm">
									<thead>
										<tr>
											<th>#</th>
											<th>Student Name</th>
											<th>Status</th>
										</tr>
									</thead>
									{this.displayDaily()}
								</Table>
              </div>
              <div id="student" style={{display:'none'}}>
			  <h3>List of Students</h3>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Student Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Age</th>
								</tr>
							</thead>
							{this.displayStudentList()}
						</Table>
              </div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
