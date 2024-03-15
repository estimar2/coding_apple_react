import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

// styled-components
// > 장점
//    1. css파일 오픈할 필요없이 js파일에서 바로 스타일 넣을 수 있음
//    2. 여기 적은 스타일이 다른 js파일로 오염되지 않음
//        단, css파일을 '모듈화' 하면 다른 파일에 간섭하지 않음
//            컴포넌트명.modules.css로 작명하고
//            컴포넌트명.js 파일에서 import 해서 쓰면 그 스타일들은 컴포넌트명.js 파이렝만 적용됨
//    3. 페이지 로딩 시간 단축
// > 단점
//     1. js파일이 매우 복잡해짐
//     2. 중복 스타일은 컴포넌트간 import 할텐데 css와 다를바가 없음
//     3. 협업시 css담당의 숙련도 이슈

// let Btn1 = styled.button`
//   background: ${props => props.bg};
//   color: ${props => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// 만들어둔 버튼에 추가적 커스텀할때 사용
// let Btn2 = styled.button(Btn1)`
//   background: grey;
//   padding: 20px;
// `;

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
        {/* <Btn1 bg="blue">버튼1</Btn1>
        <Btn1 bg="orange">버튼2</Btn1> */}

        {/* <BlackBox>
          <YellowBtn>버튼</YellowBtn>
        </BlackBox> */}
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
