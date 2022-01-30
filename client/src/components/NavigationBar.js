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
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">MoI Rep Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Button onClick={handleLogoutClick}>Logout</Button>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Men of Integrity Rep Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => navigate('/register')}>Register</Button>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;