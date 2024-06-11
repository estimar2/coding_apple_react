import { useDeferredValue, useState, useTransition } from "react";

// 1. batch 기능
// state 1변경()
// state 2변경()
// state 3변경() -> 여기서만 재렌더링 1회

// ajax, setTimeout 내부라면
// state 1변경() -> 재랜더링X
// state 2변경() -> 재랜더링X
// state 3변경() -> 재랜더링O

// 2. useTransition 으로 느린 컴포넌트 성능향상 가능(like 카드빛돌려막기)

function App() {
  const [name, setName] = useState("");

  let [isPending, startTransition] = useTransition();
  // let [isPending, 늦게처리] = useTransition();
  // startTransition 으로 문제의 state 변경 감싸기
  // startTransition 동작원리 => startTransition 으로 감싼 내부 코드를 조금 늦게 실행
  // isPending은 startTransition이 처리중일때 true 로 변함

  // let state = useDeferredValue(name)
  // useDeferredValue에 넣은 state아니면 변수하나를 집어넣을수있게 되어있고, 변동이 생기면 늦게 처리해줌
  // startTransition()랑 용도가 똑같음

  let a = new Array(10000).fill(0);

  return (
    <div className="App">
      <input
        onChange={e => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "로딩중"
        : a.map(() => {
            return <div>{name}</div>;
          })}
    </div>
  );
}

export default App;
