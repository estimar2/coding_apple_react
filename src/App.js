/* eslint-disable */
// Lint 끄는 기능

import React, { useState } from "react";
import Modal from "./Modal";

import "./App.css";

function App() {
  // 자바스크립트 destructuring 문법 : 내가 array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 문법
  // + state 는 변동사항이 생기면 state쓰는 html 도 지동으로 재랜더링 해줌
  const [listData, setListData] = useState([
    { title: "남자코트 추천", date: "2월 17일 발행", good: 0 },
    { title: "강남 우동맛집", date: "2월 17일 발행", good: 0 },
    { title: "파이썬 독학", date: "2월 17일 발행", good: 0 },
  ]);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);

  // 좋아요 클릭
  const _onAdd = idx => {
    setListData(prevListData => {
      return prevListData.map((item, index) => {
        if (index === idx) {
          return { ...item, good: item.good + 1 };
        }
        return item;
      });
    });
  };

  // 타이틀 변경
  const _changeTitle = (idx, changeTitle) => {
    // stage 변경 함수 특징
    // -> 기존 stage == 신규 stage 의 경우 변경 안해줌

    // arrsy/object 동작 원리
    // -> 1.자바스크립트는 array/object 자료를 하나 만들면 램이라는 가상공간에 몰래 저장하고, 변수엔 그 자료가 어디있는지 가리키는 화살표만 담겨있음
    // -> 2. 그래서 array/obejct 자료를 복사하면 data1과 data2는 똑같은 값을 공유함
    //        ∴ data1을 변경하면 data2도 자동으로 변경됨
    // -> 3. 그래서 같은 화살표를 가지고 있는 변수끼리는 등호로 비교해도 똑같다고 나옴
    //        + 자세한건 javascript reference data type 이라고 검색

    let newList = [...listData];
    // ... -> spred operator
    // 1. array나 object 자료형 왼쪽에 붙일 수 있으며, 괄호를 벗겨주세요~ 의 뜻
    // 2. array, object 자료형을 복사할 때 많이 사용
    // 3. let data2 = [...data1]
    //    => 독립적인 array 복사본을 생성(object 도 마찬가지)
    //    => shallow copy, deep copy 라고 함

    newList[idx] = { ...newList[idx], title: changeTitle };

    setListData(newList);
  };

  // 글 정렬 변경
  const _sortList = () => {
    let sortList = [...listData].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    setListData(sortList);
  };

  // 제목클릭 > Modal show
  const _showModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => _changeTitle(0, "여자코트 추천")}>
        타이틀 변경
      </button>

      <button onClick={_sortList}>글 정렬 변경</button>

      {/* <div className="list">
        <h4>
          {listData[0].title}
          <span onClick={_onAdd}>👍</span> {good}
        </h4>
        <p>{listData[0].date}</p>
      </div>

      <div className="list">
        <h4>
          {listData[1].title}
          <span>👍</span> 0
        </h4>
        <p>{listData[1].date}</p>
      </div>

      <div className="list">
        <h4 onClick={_showModal}>
          {listData[2].title}
          <span>👍</span> 0
        </h4>
        <p>{listData[2].date}</p>
      </div> */}

      {/* map
          1. array 자료 갯수만큼 함수안의 코드 실행
          2. 함수의 파라미터는 array 안에 있던 자료
          3. return 뭐 적으면 array 로 담아줌 */}
      {listData.map((data, idx) => (
        <div className="list" key={idx}>
          <h4 onClick={_showModal}>{data.title}</h4>
          <p>{data.date}</p>
          <span onClick={() => _onAdd(idx)}>👍</span> {data.good}
        </div>
      ))}

      {/* 컴포넌트로 만들면 좋은경우
          1. 반복적인 html축약할때
          2. 큰 페이지들
          3. 자주 변경되는 것들 */}
      {/* 컴포넌트 만들때 주의점
          1. 컴포넌트 작명할 땐 영어 대문자로 보통 작명함
          2. return ()안엔 html 태그들이 평행하게 여러개 들어갈 수 없음
          3. function App(){} 내부에 만들면 안됨
          4. <component></component> 또는 <component /> 로 써도 됨 */}

      {modalOpen ? <Modal title={""} date={""} con={""} /> : null}

      {/* 동적인 UI 만드는 Step
          1. html, css 로 미리 디자인 완성
          2. UI의 현재상태를 state로 저장
          3. state에 따라 UI가 어떻게 보일지 작성 */}
    </div>
  );
}

export default App;
