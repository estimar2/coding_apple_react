import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

import data from "./data.js";
import List from "./list.js";

import { Detail, About, Event } from "./routes";

// /detail : 상세페이지
// /cart : 장바구니 페이지

// 페이지 나누는법
// 1. 컴포넌트 만들어서 상세페이지 내용 채움
// 2. 누가 /detail 접속하면 그 컴포넌트 보여줌
// => react-router-dom 라이브러리 쓰면 쉽게 만들 수 있음

// react 프로젝트 폴더구조 : 비슷한.js 파일끼리 한 폴더에 묶어놓으면 그게 좋은 폴더 구조
// ex) 컴포넌트 역할하는 js파일은 components폴더에 묶고,
//     페이지 역할하는 js파일은 routes 아니면 pages폴더에 묶고,
//     자주 쓰는 함수가 들어있는 js파일은 utils폴더에 묶고
//     알아서 필요할 때마다 폴더를 만들어서 사용하면 됨

function App() {
  const [shoes] = useState(data);

  // useNavigate : 페이지 이동을 도와주는 hook
  // navigate(2)과 같이 숫자를 넣으면 앞으로가기, 뒤로가기 기능개발도 가능함
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#detail">Cart</Nav.Link> */}
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

        {/* Nested Routes : route 안에 route 작성하기
        1. route 작성이 약간 간단해짐 nested routes의 element
        2. 보여주는 곳은 <Outlet></Outlet>
        3. 여러 유사한 페이지가 필요할때 사용하면 용이함 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>1</div>} />
          <Route path="location" element={<div>2</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        {/* 유저가 이상한 경로로 접속했을 때 '없는 페이지입니다'를 보여지고 싶을때 사용
        *경로는 모든 경로를 뜻해서
        위에 만들어둔 /detail 이런게 아닌 이상한 페이지 접속시 *경로로 안내 해줌 */}
        <Route path="*" element={<div>없는 페이지당</div>} />
      </Routes>
    </div>
  );
}

export default App;
