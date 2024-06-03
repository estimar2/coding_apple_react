import { createSlice } from "@reduxjs/toolkit";

// Redux 왜씀?
// - component간 state공유 편해짐

// Redux store에 state보관하는 법
// createSlice()로 state(state하나를 slice라고 부름)만들고 = useState()역할임
//               name : state이름, initialState : state값
// configureStore reducer에 {작명 : createSlice만든거.reducer}형태로 등록해야 사용 가능

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  // Redux의 state변경하는법 : state 수정해주는 함수 만들고 -> 원할때 그 함수 실행해달라고 store.js에 요청
  // 1. state수정해주는 함수 만들기
  // 2. 만든 함수 export 해야함
  // 3. 만든함수 import 해서 사용

  // state가 array/object인 경우
  reducers: {
    changeName(state) {
      // return { name: "Park", age: 30 };
      // array/object의 경우 직접수정해도 state변경됨(자동설치되는 라이브러리 immer.js의 도움)
      //     => 그래서 문자 하나만 필요해도 일부러 {} 안에 담기도함
      state.name = "park";
    },
    changeAge(state, action) {
      // state변경 함수에 파라미터 뚫는법 (파라미터 추가하고 파라미터.payload 로 사용)
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
