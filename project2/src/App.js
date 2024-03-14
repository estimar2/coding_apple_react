import { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

import data from "./data.js";
import List from "./list.js";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>{shoes ? shoes.map(data => <List data={data} />) : null}</Row>
      </Container>
    </div>
  );
}

export default App;
