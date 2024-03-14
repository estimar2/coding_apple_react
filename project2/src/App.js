import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bgImg from "./img/bg.png";

function App() {
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
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            {/* html에서 public 폴더 이미지 사용할땐 그냥 `/이미지 경로
               codingapple.com 에 발행시 별문제없음
               codingapple.com/어쩌구/~~ 에 발행시 문제
               -> 이럴경우 process.env.PUBLIC_URL + '/img/logo.png' 의 형태로 작성하면됨 */}
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>상품명2</h4>
            <p>상품 설명2</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>상품명3</h4>
            <p>상품 설명3</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
