import { createContext, useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  json,
} from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Spinner,
} from "react-bootstrap";
import "./App.css";

import data from "./data.js";

import { List, Detail, About, Event, Cart } from "./routes";

export let Context1 = createContext(); // state보관함

// /detail : 상세페이지
// /cart : 장바구니 페이지

// 페이지 나누는법
// 1. 컴포넌트 만들어서 상세페이지 내용 채움
// 2. 누가 /detail 접속하면 그 컴포넌트 보여줌
// => react-router-dom 라이브러리 쓰면 쉽게 만들 수 있음

// react 프로젝트 폴더구조 : 비슷한.js 파일끼리 한 폴더에 묶어놓으면 그게 좋은 폴더 구조
// ex) 컴포넌트 역할하는 js파일은 components폴더에 묶고,
//     페이지 역할하는 js파일은 routes 아니면 pages폴더에 묶고,
//     자주 쓰는 함수가 들어있는 js파일은 utils폴더에 묶고
//     알아서 필요할 때마다 폴더를 만들어서 사용하면 됨

// 서버 : 데이터를 요청하면 데이터를 보내주는 프로그램
//        방법 : GET(데이터 가져올때)/POST(데이터를 서버로 보내고싶을때)
//        어떤 방법 : URL 형식

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const [shoes, setShoes] = useState(data);
  const [prdCount, setPrdCount] = useState([10, 11, 12]);
  const [loading, setLoading] = useState(false);

  const [btnCount, setBtnCount] = useState(0);

  // useNavigate : 페이지 이동을 도와주는 hook
  // navigate(2)과 같이 숫자를 넣으면 앞으로가기, 뒤로가기 기능개발도 가능함
  let navigate = useNavigate();

  // Local Storage
  // 1.key : value 형태로 저장 가능
  // 2.최대 5MB까지 문자만 저장 가능
  //      array/object저장하려면 JSON으로 바꾸면 됨
  //      array/object -> JSON 변환은 JSON.stringify()
  //      JSON -> array/object 변환은 JSON.parse()
  // 3.사이트 재접속해도 남아있음(브라우저 청소하면 삭제됨)
  // 사용법
  //  1.저장 : localStorage.setItem()
  //  2.사용 : localStorage.getItem()
  //  3.삭제 : localStorage.removeItem()

  // Session Storage : 휘발성이 있는 데이터를 저장하고 싶을때 사용

  // 상품 더보기
  const _getMore = () => {
    // ajax : 서버에 get, post 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능
    // ajax쓰려면 옵션 3개중 택 1
    // 1. XMLHttpsRequest
    // 2. fetch()
    // 3. axios

    setLoading(true);

    let count = btnCount + 1;
    setBtnCount(count);

    if (count === 3) {
      setLoading(false);
      return alert("가져올 상품이 없습니다.");
    }

    axios
      .get(`https://codingapple1.github.io/shop/data${count + 1}.json`)
      // 동시에 ajax 요청 여러개 하려면 : Promise.all( [axios.get('URL1'), axiox.get('URL2')]).then(() => {}).catch(() => {}) -> URL1, URL2로 get요청을 동시에 해줌
      // fetch('URL').then(res => res.json()).then(data => {}) : fetch의 경우 JS기본문법으로도 get요청 가능, fetch로 json데이터를 가져왔을 경우 그 json을 그대로 출력해줌 따라서 array/object로 변환 과정 필요 => axios를 사용하면 따로 변환활 필요 없음
      .then(res => {
        if (res.status === 200) {
          setLoading(false);

          const resultData = res.data;

          let newList = [...shoes, ...resultData];

          setShoes(newList);
        }
      })
      .catch(e => {
        console.log(e, "> error");
        alert("목록을 불러오는데 문제가 발생하였습니다.");
      });
  };

  // 사용자 이름 가져오는 api
  // https://codingapple1.github.io/userdata.json

  let userInfo = useQuery(
    "getUserInfo",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then(data => {
        return data.data;
      }),
    // {
    //   staleTime: 2000,
    // },
  );
  // react-query 장점
  // 1. 성공(userInfo.data)/실패(userInfo.error)/로딩중(userInfo.isLoading) 쉽게 파악 가능
  // 2. 틈만나면 자동으로 재요청(refetch)해줌, staleTIme 으로 refetch 간격도 설정해줄수있음
  // 3. 실패시 retry 알아서 해줌
  // 4. state 공유 안해도 됨
  // 5. ajax 결과 캐싱기능
  // * redux-toolkit 설치하면 RTK Query도 자동설치됨(react-query 랑 비슷함)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}

            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>

            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#detail">Cart</Nav.Link> */}
          </Nav>

          <Nav className="ms-auto">
            {userInfo.isLoading && "로딩중"}
            {userInfo.error && "에러남"}
            {userInfo.data && userInfo.data.name}
          </Nav>
        </Container>
      </Navbar>

      {/* React Query 사용하면
          - ajax 성공시/실패시 html보여주려면?
          - 몇초마다 자동으로 ajax요청?
          - 실패시 몇초 후 재요청 시도?
          - prefetch ?
      이것들 쉽게 구현 가능
      but 항상 유용하지는 않음
            - 실시간 데이터를 계속 가져와야하는 사이트들이 쓰면 굿*/}

      <Routes>
        {/* Route : 페이지 */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Container>
                <Row>
                  <Col xs={24} md={0}>
                    <Button
                      variant="warning"
                      onClick={() => {
                        let sortList = [...shoes].sort((a, b) => {
                          return a.title.localeCompare(b.title);
                        });

                        setShoes(sortList);
                      }}
                    >
                      가나다순 정렬
                    </Button>
                  </Col>
                </Row>
                <Row xs={1} md={3}>
                  {shoes ? shoes.map(data => <List data={data} />) : null}
                </Row>
                {btnCount <= 1 ? (
                  <Row>
                    <Col xs={24} md={0}>
                      <Button variant="warning" onClick={_getMore}>
                        상품 더보기
                      </Button>
                    </Col>
                  </Row>
                ) : null}
              </Container>
            </>
          }
        />

        {/* 페이지 여러개 만들고 싶으면 : URL 파라미터 써도 됨 */}
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider vlaue={{ prdCount, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        {/* 장바구니 */}
        <Route path="/cart" element={<Cart />} />

        {/* Nested Routes : route 안에 route 작성하기
        1. route 작성이 약간 간단해짐 nested routes의 element
        2. 보여주는 곳은 <Outlet></Outlet>
        3. 여러 유사한 페이지가 필요할때 사용하면 용이함 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>1</div>} />
          <Route path="location" element={<div>2</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        {/* 유저가 이상한 경로로 접속했을 때 '없는 페이지입니다'를 보여지고 싶을때 사용
        *경로는 모든 경로를 뜻해서
        위에 만들어둔 /detail 이런게 아닌 이상한 페이지 접속시 *경로로 안내 해줌 */}
        <Route path="*" element={<div>없는 페이지당</div>} />
      </Routes>

      {loading && <Spinner animation="border" role="status" />}
    </div>
  );
}

export default App;
