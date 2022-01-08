import React, { Component } from "react";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import { Logout } from "../auth/Logout";
import { Howdy, Welcome } from "../welcome/Welcome";

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
                    <div className="navbar--howdy"><Welcome name={JSON.parse(localStorage.getItem('react_Roundhouse_user')).firstName} /></div> 
                    <Logout/>
                  </Navbar.Collapse>  
            </Container>
      </Navbar>
      </>
      )
  }
}

export default NavBar