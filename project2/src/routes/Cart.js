import React, { useState, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";

import { changeAge, changeName } from "../store/userSlice.js";
import { changeCount } from "../store.js";

// 꼭 필요할때만 재렌더링하려면 memo로 감싸주기
// memo 로 재렌더링 오래걸리는 컴포넌트 감싸놓으면 좋음
// memo 의 원리 (그냥 재랜더링을 막아주는게 아니라 특정 상황에서만 재렌더링을 시켜줌)
//    => props 가 변할때만 재렌더링해줌
//    => props 가 길고 복잡하면 손해일수도 있음
// const Child = memo(() => {
//   console.log("재랜더링");
//   return <div>자식임</div>;
// });

// useMemo 사용법 : 컴포넌트 렌더링시 1회만 실행해줌(useEffect와 비슷한 용도)
// + useEffect처럼 dependency도 넣을 수 있어서 특정 state, props 가 변할때만 실행할 수 있음
// function 함수() {
//   return '반복문10억번 돌린결과'
//   }

const Cart = () => {
  // Redux를 사용하면 컴포넌트들이 props없이 state공유 가능(리액트 구인시 대부분 Redux요구)
  // 셋팅
  //    1. store.js 파일 생성
  //    2. index.js파일가서 <Provider store={store}>쓰기
  // Redux store의 state꺼내쓰는법 : useSelector(() => {})
  // Redux store안에 모든걸 넣지말고, 컴포넌트간 공유가 필요없으면 그냥 useState() 쓰면됨
  let user = useSelector(state => state.user);
  // console.log(user, ">> user");

  let cartList = useSelector(state => state.cartList);
  // console.log(cartList, ">> cartList");

  // store.js로 state변경 요청을 보내주는 함수
  let dispatch = useDispatch();

  // useMemo 사용법
  // let result = useMemo(() => {return 함수()}, [state])

  return (
    <>
      {/* <Child /> */}
      <h6>
        {user.name}({user.age})의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
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
                    <td>
                      <Button
                        onClick={() => {
                          // dispatch(state변경함수()) 이렇게 사용
                          // dispatch(changeName());
                          dispatch(changeCount(data.id));
                        }}
                      >
                        +
                      </Button>
                    </td>
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
