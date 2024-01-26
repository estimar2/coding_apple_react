import React from "react";

const Modal = ({ title, date, con }) => {
  return (
    <>
      <div className="modal">
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{con}</p>
      </div>
    </>
  );
};

export default Modal;
