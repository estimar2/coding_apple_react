### Project2

1. <h3>컴포넌트 안에서 쓰는 if/else</h3>
   else 생략 가능
   if -> else if -> else로 구성된 조건문도 if두개로 축약 가능

   ```
       function Component() {
           if(true){
               return <p>참</p>
           }
           return null;
       }
   ```

<br/>

2. <h3>JSX안에서 쓰는 삼항 연산자</h3>
   조건문 ? 조건문 참일때 실행할 코드 : 거짓일때 실행할 코드
   중첩 사용도 가능

   ```
       function Component() {
           return (
               <>
                   {
                       1 === 1
                       ? <p>참</p>
                       : null
                   }
               </>
           )
       }
   ```

<br/>

3. <h3>&&연산자로 if역할 대신하기</h3>
   왼쪽 오른쪽 둘다 true 면 전체를 true 로 바꿔주세요~

   ```
    function Component() {
        return (
            <>
                { 1 === 1 && <p>참</p>}
            </>
        )
    }
   ```

<br/>

4. <h3>switch / case 조건문</h3>

   1. switch (검사할변수) {} 부터 작성
   2. 그 안에 case 검사할 변수가 이거랑 일치하냐 : 를넣어줌
   3. 그래서 이게 일치하면 case : 밑에 있는 코드를 실행
   4. default : 는 그냥 맨 마지막에 쓰는 else 문과 동일

      - 장점 : if문 연달아쓸 때 코드가 약간 줄어들 수 있음
      - 단점 : 조건식란에서 변수 하나만 검사할 수 있음

   ```
    function Component() {
        var user = 'seller';

        switch (user){
            case 'seller' :
                return <p>판매자</p>
            case 'customer' :
                return <p>구매자</p>
            default :
                return <p>그냥 로그인</p>
        }
    }
   ```

   <br/>

5. <h3>object/array 자료형 응용</h3>
   마지막 object{}뒤에 []대괄호를 붙여서 'key값이 현재상태인 자료를 뽑겠습니다'

   ```
    function Component() {
        var 현재상태 = 'info';

        return (
            <>
                {
                    info : <p>상품정보</p>,
                    shipping : <p>배송관련</p>,
                    refund : <p>환불약관</p>
                } [현재상태]
            </>
        )
    }
   ```

---

### PWA(Progressive Web App)

: 웹사이트를 안드로이드/IOS 모바일 앱처럼 사용할 수 있도록 만들어주는 일종의 웹 개발 기술

<h3>장점</h3>

1. 스마트폰, 태블릿 바탕화면에 여러분 웹 사이트 설치 가능
2. 오프라인에서도 동작할 수 있음
   - service-worker.js라는 파일과 브라우저의 Cache sotrage 덕분에
3. 설치 유도비용이 매우 적음(마케팅 비용이 적게든다)
