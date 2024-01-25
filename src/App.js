import React, { useState } from "react";
import "./App.css";

function App() {
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
