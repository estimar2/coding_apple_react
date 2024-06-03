import React from "react";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

const List = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      <Col
        key={data.id}
        onClick={() => {
          navigate(`detail/${data.id}`);
        }}
      >
        <img src={data.img} width="80%" />
        <h4>{data.title}</h4>
        <p>{data.content}</p>
        <p>{Number(data.price).toLocaleString()}</p>
      </Col>
    </>
  );
};

export default List;
