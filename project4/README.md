## REACT

- react는 앱처럼 부드럽게 동작하는 html을 만들고 싶을 때 사용하는툴
- 새로고침할 필요없이 부드럽게 전환되는 사이트를 만들고 싶을 때 사용
- Single Page Application

---

#### REACT에서 DB데이터를 보여주고 싶으면?

<h6> server-side rendering</h6>

- html을 서버가 만들어서 보내줌
- nodejs 강의 처럼
  1.  DB에서 데이터 뽑아서
  2.  글목록.html 파일에 꽂아넣고
  3.  그 html 파일을 서버에서 보내주는 것

 <h6>client-side rendering</h6>

- html을 리액트가 브라우저안에서 만드는 것
  1.  react가 서버에 GET요청으로 DB데이터를 가져와서
  2.  그걸 html로 만들어서 보여줌

<h6>리액트를 쓰는 경우 보통 client-side rendering</h6>

1. 서버는 누군가 /product로 GET요청을 하면 DB에서 데이터 꺼내서 보내주라고 API를 짜놓음
2. 리액트는 상품목록을 보여주고 싶을 때 서버 /product 주소로 GET요청 날리면 됨
3. 그럼 데이터를 받고 개발하면됨

- react는 서버와의 통신은 거의 ajax로 진행
- POST요청, 로그인해서 세션만들기 이런것도 ajax로 잘됨

<h6>nodejs 서버파일 상단에</h6>

```
app.use(express.json());
var cors = require("cors");
app.use(cors());
```

- 이 코드 넣고 시작해야 react와 nodejs 서버간 ajax요청이 잘됨
- express.json()은 유자거 보낸 array/object 데이터를 출력해보기 위해 필요하고
- cors는 다른 도메인주소끼리 ajax요청 주고 받을때 필요함

---

#### 서브디렉토리에 리액트앱 발행하고 싶은 경우

지금 메인 페이지가 리액트앱인데
/react 이렇게 접속하면 react로 만든 html
/ 이렇게 접속하면 public 폴더에 있던 그냥 main.html 보여주고 싶은 경우

```
(server.js)

app.use('/', express.static(path.join(__dirname, "public")));
app.use('/react', express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/main.html"));
});

app.get("/react", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
```

▲ server.js 라우팅을 이렇게 바꿔주고

<br/>

```
(react 프로젝트 내의 package.json)

{
    "homepage": "/react",
    "version" : "0.1.0",
    ... 등
}
```

▲ react 프로젝트 내의 package.json에 homepage라는 항목을 원하는 서브디렉토리명으로 새로 기입해주면됨
