import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../UserContext';
import './UserProfile.css'


const UserProfile = ()=>{
  // const {user} = useContext(UserContext);


  // if(!user){
  //   return <div>
  //     <h1>Error</h1>
  //   </div>
  // }

    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary shadow navigator p-0">
      <Container>
        <Navbar.Brand href="/"><h2>TourWithUs</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className='textstyle' href="/welcome">Home</Nav.Link>
            <Nav.Link className='textstyle' href="/holidayPackages">HolidayPackages</Nav.Link>
            <NavDropdown title={<span style={{color: 'aliceblue'}}>Book Transport</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><h6>Flight</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><h6>Train</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><h6>Bus</h6></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><h6>Cancel Booking</h6></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>{user.name}</h1>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default UserProfile;