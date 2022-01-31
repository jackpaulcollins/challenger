import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'

const NavigationBar = props => {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    props.handleLogout()
    navigate("/")
  }

  if (props.isLoggedIn) {
    return (
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">MoI Rep Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Button className="button" onClick={handleLogoutClick}>Logout</Button>
          </Nav>
          <Nav>
          <Button className="button" onClick={() => navigate('/create-report')}>
            Report Reps!
          </Button>
          </Nav>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">MoI Rep Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Button className="button" onClick={() => navigate('/login')}>Login</Button>
            <Button className="button" onClick={() => navigate('/register')}>Register</Button>
          </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;