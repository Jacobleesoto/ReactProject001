import React from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Logo from "./app/assets/images/c-logo.jpg";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={Logo} alt="Comedy Club logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      The Comedy Club Experience!
    </div>
  );
}

export default App;
