import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Cart = () => {
  // Redux를 사용하면 컴포넌트들이 props없이 state공유 가능(리액트 구인시 대부분 Redux요구)
  // 셋팅
  //    1. store.js 파일 생성
  //    2. index.js파일가서 <Provider store={store}>쓰기
  // Redux store의 state꺼내쓰는법 : useSelector(() => {})
  // Redux store안에 모든걸 넣지말고, 컴포넌트간 공유가 필요없으면 그냥 useState() 쓰면됨
  let cartList = useSelector(state => state.cartList);
  console.log(cartList, ">> cartList");

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {cartList.length !== 0
            ? cartList.map((data, idx) => (
                <>
                  <tr key={idx}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.count}</td>
                  </tr>
                </>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
