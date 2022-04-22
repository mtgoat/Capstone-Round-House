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
      <Navbar bg="gray" variant="light">
            <Container>
            
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Navbar.Brand href="/"><img src="\img\Logo4.png"  alt="logo" style={{ width: '5rem', height: '5rem' }}  className="d-inline-block align-top"/></Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/documents/create/">Add New Document</Nav.Link>
                    <Nav.Link href="/suggested">Suggested List</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    
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