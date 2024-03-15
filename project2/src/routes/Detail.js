import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Detail = () => {
  return (
    <>
      <Container className="container">
        <Row>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </Col>
          <Col>
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>{Number(120000).toLocaleString()}</p>
            <Button variant="danger">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
