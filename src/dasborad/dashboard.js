import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import '../component/all.css';

export default class dashborad extends Component {
	state = {
		name: '',
		assignedClass: '',
		age: '',
		phone: '',
		email: '',
		password: '',
		buttonColor: {
			backgroundColor: '',
		},
    	buttonJoyColor: {
			backgroundColor: '',
    },
      	buttonJoyzColor: {
			backgroundColor: '',
		},
		buttonRedColor: {
			backgroundColor: '',
    },
    buttonRedJoyColor: {
			backgroundColor: '',
    },
    buttonRedJoyzColor: {
			backgroundColor: '',
		}
	};
	handleDisplay = () => {
		const form = document.getElementById('addProductSection');
		const homem = document.getElementById('homeSection');
		form.style.display = 'block';
		homem.style.display = 'none';
	};

	handleHome = () => {
		const form = document.getElementById('addProductSection');
		const homem = document.getElementById('homeSection');
		form.style.display = 'none';
		homem.style.display = 'block';
	};

	handleGeneralColor (e) {
    this.setState({ buttonColor: { backgroundColor: 'white' } });
    this.setState({ buttonJoyColor: { backgroundColor: 'white' } });
    this.setState({ buttonJoyzColor: { backgroundColor: 'white' } });
    this.setState({ buttonRedColor: { backgroundColor: 'white' } });
    this.setState({ buttonRedJoyColor: { backgroundColor: 'white' } });
    this.setState({ buttonRedJoyzColor: { backgroundColor: 'white' } });

	}

  handleColor = (e) => {
    this.handleGeneralColor(e);
    	this.setState({ buttonColor: { backgroundColor: 'green' } });
  }
  handleJoyColor = (e) => {
    this.handleGeneralColor(e);
    	this.setState({ buttonJoyColor: { backgroundColor: 'green' } });
  }
  handleJoyzColor = (e) => {
    this.handleGeneralColor(e);
    	this.setState({ buttonJoyzColor: { backgroundColor: 'green' } });
  }
  handleRedColor = (e) => {
		this.handleGeneralColor(e);
		this.setState({ buttonRedColor: { backgroundColor: 'red' } });
  };
  handleRedJoyColor = (e) => {
		this.handleGeneralColor(e);
		this.setState({ buttonRedJoyColor: { backgroundColor: 'red' } });
  };
  handleRedJoyzColor = (e) => {
		this.handleGeneralColor(e);
		this.setState({ buttonRedJoyzColor: { backgroundColor: 'red' } });
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
									{/* <Nav.Link href="#addProductSection" id="display" onClick={this.handleDisplay}>Attendance</Nav.Link> */}
									<NavDropdown title='Attendance' id='basic-nav-dropdown'>
										<NavDropdown.Item id='display' href='#addProductSection' onClick={this.handleDisplay}>
											Daily Attendance
										</NavDropdown.Item>
									</NavDropdown>
									<Nav.Link href='#student' id='display' onClick={this.handleDisplay}>
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
							<div id='addProductSection' style={{visibility:'hidden'}}>
								<h3>Daily Attendance</h3>
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>#</th>
											<th>Student Name</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Mark</td>
											<td>
												<ButtonGroup aria-label='Basic example'>
													<Button
														variant='light'
														style={this.state.buttonColor}
														id='joy'
														onClick={this.handleColor}
													>
														Present
													</Button>
													<Button
														variant='light'
														style={this.state.buttonRedColor}
														id='fear'
														onClick={this.handleRedColor}
													>
														Absent
													</Button>
												</ButtonGroup>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Jacob</td>
											<td>
												<ButtonGroup aria-label='Basic example'>
													<Button
														variant='light'
														style={this.state.buttonJoyColor}
														id='joys'
														onClick={this.handleJoyColor}
													>
														Present
													</Button>
													<Button
														variant='light'
														style={this.state.buttonRedJoyColor}
														id='fear'
														onClick={this.handleRedJoyColor}
													>
														Absent
													</Button>
												</ButtonGroup>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Ayooluwa Tochi</td>
											<td>
												<ButtonGroup aria-label='Basic example'>
													<Button
														variant='light'
														style={this.state.buttonJoyzColor}
														id='joyz'
														onClick={this.handleJoyzColor}
													>
														Present
													</Button>
													<Button
														variant='light'
														style={this.state.buttonRedJoyzColor}
														id='fear'
														onClick={this.handleRedJoyzColor}
													>
														Absent
													</Button>
												</ButtonGroup>
											</td>
										</tr>
									</tbody>
								</Table>
              </div>
              <div id="student">

              </div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
