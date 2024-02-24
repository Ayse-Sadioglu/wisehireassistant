import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">WISEHIREASSISTANT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              
               
            </Nav>
            
            <Nav className="ml-auto">
              
              <Nav.Link href="https://github.com/Ayse-Sadioglu/wisehireassistant" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
            
            </Nav> 
           
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
       //burasi ekstra gerek olmadigi halde cikarilabilir
    );
  }
}

export default NavBar;
