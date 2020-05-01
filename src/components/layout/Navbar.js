import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand
            href="/"
            style={{
              color: "rgb(0,144,158)",
              fontFamily: "Arial",
            }}
          >
            Cash<span className="lead-secondColor">Invest</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="/aboutus"
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Arial",
                }}
              >
                Sobre nós
              </Nav.Link>
              <Nav.Link
                href="/statistics"
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Arial",
                }}
              >
                Aprendizagem
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
