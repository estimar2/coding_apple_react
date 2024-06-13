### Project3 : PWA(Progressive Web App)

: 웹사이트를 안드로이드/IOS 모바일 앱처럼 사용할 수 있도록 만들어주는 일종의 웹 개발 기술

PWA 잘되나 확인하려면 build 된걸 VScode 로 오픈해서 index.html 미리보기 띄웠을때 설치버튼이 보이면 잘된것

---

<h6>장점</h6>

1. 스마트폰, 태블릿 바탕화면에 여러분 웹 사이트 설치 가능
2. 오프라인에서도 동작할 수 있음
   - service-worker.js라는 파일과 브라우저의 Cache sotrage 덕분에
3. 설치 유도비용이 매우 적음(마케팅 비용이 적게든다)

---

<h6>PWA의 조건</h6>

1. manifest.json 있어야함
   - public폴더 안에 있음
   - 앱 설정 파일
     - Android, iOS, Windows마다 요구하는 아이콘 크기가 다르기때문에 icons
     - start_url : 앱 누르면 처음 뜨는 페이지 경로 설정
       - . 으로 설정해두면 index.html 로 접속
     - display : 상단바 제거 유무
     - theme_color, background_color
2. service-worker.js 있어야함 (src 폴더 안에 있음)
   - index.js 에서 serviceWorkerRegistration.unregister(); 를 serviceWorkerRegistration.register(); 으로 수정
   - 오프라인에서도 사이트열 수 있게 도와줌
     - '나는 html css js 파일을 미리 하드에 저장해둘것임' -> '사이트 접속할 때 html css js 다운받지말고 하드에 있던거 쓰셈'
3. asset-manifest.json
   - 캐싱할 파일 목록
     - 특정 파일 캐싱 안되도록
       - node_modules/react-scripts/config/webpack.config.js > InjectManifest 에 exclude를 정규식으로 입력 (ex. index.html를 제외시키고 싶다 -> /indexhtml\.html/ 형태로 사용)
         보통은 변경하지 않음