import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
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

// 컴포넌트의 Lifecycle
// 페이지에 장착되기도 하고(mount)
// 가끔 업데이트가 되기도 하고(update)
// 필요 없으면 제거되고(unmount)
// >> 알고있으면 중간중간 코드실행 가능

const Detail = ({ shoes }) => {
  useEffect(
    () => {
      // detail 컴포넌트가 mount, update 시 코드가 실행됨
      console.log("hello");

      // setTimeout(() => {
      //   실행할 코드
      // }, ms단위의 시간)

      // 2초 뒤에 alert창 안보이도록
      let a = setTimeout(() => {
        setShow(false);
      }, 2000);

      // useEffect쓰는 이유
      // useEffect안에 있는 코드는 html 렌더링 후에 동작함

      // useEffect안에 적는 코드들은
      // 1. 어려운 연산
      // 2. 서버에서 데이터 가져오는 작업
      // 3. 타이머 장착하는거

      // clean up function : useEffect안에 return () => {}; 을 적을 경우 useEffect 동작 전에 실행되는 코드
      // ++ mount시 실행 안됨, umount시 실행됨
      return () => {
        // 기존 코드 치우는거 여기에 많이 작성함
        clearTimeout(a);
      };
    },
    [
      // useEffect 실행 조건을 넣을 수 있는 곳 state 혹은 변수를 넣어줄 수 있음
      // 조건이 변경될 때 코드가 실행됨
      // 컴포넌트 mount시 1회만 실행하고싶을 경우 '}, [])' 이렇게 사용
    ],
  );

  // useEffect(() => {}) 1.재렌더링마다 코드 실행하고 싶으면
  // useEffect(() => {}, []) 2. mount시 1회 코드 실행하고 싶으면
  // useEffect(() => { return () => {} }) 3. unmount시 1회 코드실행하고 싶으면
  // useEffect(() => { return () => {} }), useEffect(() => { return () => {} }, []) 4. useEffect 실행 전에 뭔가 실행하려면 언제나
  // useEffect(() => {}, [변수명]) 5. 특정 state 변경시에만 실행하려면

  // 유저가 URL파라미터에 입력한거 가져오려면 : useParams()
  let { id } = useParams();

  // 1. find는 array 뒤에 뭍일 수 있으며 return 조건식 적으면됨. 그럼 조건식에 맞는 자료 남겨줌
  // 2. find() 콜백홤수에 파라미터 넣으면 array 자료에 있던 자료를 뜻함
  // 3. x.id == id 일 경우 결과를 변수가 담아줌
  let returnData = shoes.find(a => {
    return a.id == id;
  });

  const [show, setShow] = useState(true);

  return (
    <>
      <Container className="container">
        {/* <Btn1 bg="blue">버튼1</Btn1>
        <Btn1 bg="orange">버튼2</Btn1> */}

        <Alert show={show} variant="warning">
          2초 이내 구매시 할인
        </Alert>

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
