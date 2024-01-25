import React, { useState } from "react";
import "./App.css";

function App() {
  // 자바스크립트 destructuring 문법 : 내가 array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 문법
  // + state 는 변동사항이 생기면 state쓰는 html 도 지동으로 재랜더링 해줌
  const [listData, setListData] = useState([
    { title: "남자코드 추천", date: "2월 17일 발행" },
    { title: "강남 우동맛집", date: "2월 17일 발행" },
    { title: "파이썬 독학", date: "2월 17일 발행" },
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {listData.map(({ title, date }) => (
        <div className="list">
          <h4>{title}</h4>
          <p>{date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
