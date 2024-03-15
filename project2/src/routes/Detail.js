import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Detail = ({ shoes }) => {
  // 유저가 URL파라미터에 입력한거 가져오려면 : useParams()
  let { id } = useParams();

  // 1. find는 array 뒤에 뭍일 수 있으며 return 조건식 적으면됨. 그럼 조건식에 맞는 자료 남겨줌
  // 2. find() 콜백홤수에 파라미터 넣으면 array 자료에 있던 자료를 뜻함
  // 3. x.id == id 일 경우 결과를 변수가 담아줌
  let returnData = shoes.find(a => {
    return a.id == id;
  });

  return (
    <>
      <Container className="container">
        <Row>
          <Col>
            <img src={returnData.img} width="100%" />
          </Col>
          <Col>
            <h4 className="pt-5">{returnData.title}</h4>
            <p>{returnData.content}</p>
            <p>{Number(`${returnData.price}`).toLocaleString()}</p>
            <Button variant="danger">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
