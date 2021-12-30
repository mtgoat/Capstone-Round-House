import React, { Component } from "react";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, Image } from "react-bootstrap"

class NavBar extends Component{
  render () {
    return (
      <>
      <Navbar bg="dark" variant="dark">
            <Container>
            
              <Navbar.Brand href="#home">Round House| Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#documents/create">Add New Document</Nav.Link>
                    <Nav.Link href="#search">Search</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>  
            </Container>
      </Navbar>
      </>
      )
  }
}

export default NavBar