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
});

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
