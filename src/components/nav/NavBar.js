import React, { Component } from "react";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import { Logout } from "../auth/Logout";

class NavBar extends Component{
  render () {
    return (
      <>
      <Navbar bg="light" variant="light">
            <Container>
            
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/documents/create/">Add New Document</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    
                    </Nav>
                    <Logout/>
                  </Navbar.Collapse>  
            </Container>
      </Navbar>
      </>
      )
  }
}

export default NavBar