import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {Component} from 'react'
import logo from './images/logo.png';
import Image from 'react-bootstrap/Image'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand href="home">
            <img style={{height:50,width:200}} src={logo} alt="Bswap" />Bswap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="exchange">Exchange</Nav.Link> 
            <Nav.Link href="verification">Verificaton</Nav.Link>
            <Nav.Link href="Pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default ColorSchemesExample;