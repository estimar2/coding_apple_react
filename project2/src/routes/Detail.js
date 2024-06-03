import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Alert, Tab, Tabs } from "react-bootstrap";

import { Context1 } from "./../App.js";

import { addList } from "./../store.js";

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
  let a = useContext(Context1); // 보관함 해체해줌

  let dispatch = useDispatch();

  useEffect(
    () => {
      let check = localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [];

      check.push(returnData.id);

      let newCheck = [...new Set(check)];

      localStorage.setItem("watched", JSON.stringify(newCheck));

      // Jotai, Zustand 리덕스와 비슷하고 더 쉬움

      // detail 컴포넌트가 mount, update 시 코드가 실행됨
      // console.log("hello");

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

  const [tabKey, setTabKey] = useState("0");

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
            <Button
              variant="danger"
              onClick={() => {
                dispatch(
                  addList({
                    id: id,
                    name: returnData.title,
                    count: 1,
                  }),
                );
              }}
            >
              주문하기
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Tabs
              defaultActiveKey="0"
              activeKey={tabKey}
              onSelect={e => setTabKey(e)}
            >
              <Tab eventKey="0" title="버튼 0">
                <TabContent tabKey={tabKey} />
              </Tab>
              <Tab eventKey="1" title="버튼 1">
                <TabContent tabKey={tabKey} />
              </Tab>
              <Tab eventKey="2" title="버튼 2">
                <TabContent tabKey={tabKey} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// react 에서 if 문사용하려면 commponent 형태로 만들어서 사용
function TabContent({ tabKey }) {
  // props싫으면
  // 1.Context API(리액트 기본문법)
  // props전송없이 state공유가능 -> 실전에서 많이 사용하지x why? 1.성능이슈, 2.컴포넌트 재활용이 어렵다
  //                                특징1. state변경시 쓸데없는 것까지 재렌더링
  //                                특징2. 나중에 컴포넌트 재사용이 어려움(Context를 import 하는게 귀찮아질수있음)
  // Context API 문법으로 prps없이 state 공유하기
  //    1.createContext() 함수를 가져와서 context(state보관함)를 하나 만들어줌
  //    2.만든 contexxt로 원하는 곳을 감싸고 공유를 원하는 state를 value안에 다 적어준다.
  // Context안에 있던 state 사용하려면
  //    1.만들어둔 Context를 import 해온다.
  //    2.useContext()안에 넣는다.
  // 2.Redux 등 외부라이브러리 사용

  const [fade, setFade] = useState("");

  // tabKey가 변경될때 className = 'end' 추가
  useEffect(() => {
    // react v18이상의 버전
    // automatic batching 기능 : state 변경한 함수들이 근처에 있을 경우 최종적으로 한번만 state변경해줌
    setTimeout(() => {
      setFade("end");
    }, 100);

    // clean up function
    return () => {
      setFade("");
    };
  }, [tabKey]);

  return (
    <Row className={`start ` + fade}>
      <Col>내용{tabKey}</Col>
    </Row>
  );

  // if문 안쓰고 이렇게 써도 됨
  // return [
  //   <Row><Col>내용0</Col></Row>,
  //   <Row><Col>내용1</Col></Row>,
  //   <Row><Col>내용2</Col></Row>,
  // ][tabKey];
}

export default Detail;
