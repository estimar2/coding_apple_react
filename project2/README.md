### Project2

1. <h6>컴포넌트 안에서 쓰는 if/else</h6>
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

2. <h6>JSX안에서 쓰는 삼항 연산자</h6>
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

3. <h6>&&연산자로 if역할 대신하기</h6>
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

4. <h6>switch / case 조건문</h6>

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

5. <h6>object/array 자료형 응용</h6>
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
