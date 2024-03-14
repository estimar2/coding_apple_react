import React from "react";

const Modal = ({ modalData, _changeTitle }) => {
  return (
    <>
      <div className="modal">
        <h4>{modalData.title}</h4>
        <p>{modalData.date}</p>
        <p>{modalData.con}</p>
        <button onClick={() => _changeTitle(0, "여자코트 추천")}>
          글 수정
        </button>
      </div>
    </>
  );
};

export default Modal;
