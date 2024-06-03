import { configureStore, createSlice } from "@reduxjs/toolkit";

// Redux 왜씀?
// - component간 state공유 편해짐

// Redux store에 state보관하는 법
// createSlice()로 state(state하나를 slice라고 부름)만들고 = useState()역할임
//               name : state이름, initialState : state값
// configureStore reducer에 {작명 : createSlice만든거.reducer}형태로 등록해야 사용 가능

let user = createSlice({
  name: "user",
  initialState: "kim",
  // Redux의 state변경하는법 : state 수정해주는 함수 만들고 -> 원할때 그 함수 실행해달라고 store.js에 요청
  // 1. state수정해주는 함수 만들기
  // 2. 만든 함수 export 해야함
  // 3. 만든함수 import 해서 사용
  reducers: {
    changeName(state) {
      return `John` + state;
    },
  },
});

// state변경함수들 export
export let { changeName } = user.actions;

let cartList = createSlice({
  name: "cartList",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cartList: cartList.reducer,
  },
});
