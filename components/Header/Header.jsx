import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">Acumulado</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Test - LN: <a href="#login">Rodrigo benitez</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
