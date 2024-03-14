import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

import data from "./data.js";
import List from "./list.js";

import Detail from "./detail.js";

// /detail : 상세페이지
// /cart : 장바구니 페이지

// 페이지 나누는법
// 1. 컴포넌트 만들어서 상세페이지 내용 채움
// 2. 누가 /detail 접속하면 그 컴포넌트 보여줌
// => react-router-dom 라이브러리 쓰면 쉽게 만들 수 있음

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#detail">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* Route : 페이지 */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Container>
                <Row>
                  {shoes ? shoes.map(data => <List data={data} />) : null}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
