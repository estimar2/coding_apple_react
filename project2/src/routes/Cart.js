import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  // Redux를 사용하면 컴포넌트들이 props없이 state공유 가능(리액트 구인시 대부분 Redux요구)
  // 1. store.js 파일 생성
  // 2. index.js파일가서 <Provider store={store}>쓰기
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
