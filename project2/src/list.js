import React from "react";
import { Col } from "react-bootstrap";

const List = ({ data }) => {
  return (
    <>
      <Col key={data.id}>
        <img src={data.img} width="80%" />
        <h4>{data.title}</h4>
        <p>{data.content}</p>
        <p>{Number(data.price).toLocaleString()}</p>
      </Col>
    </>
  );
};

export default List;
