//선언한다.
function Hello(){
    return (<div>
      <h2>이것은 React모듈입니다.</h2>
    </div>);
}
      //jsx기술로 사용가능 문자열로 하지 않아도
      //xml기술을 자바스크립트에서 쓸 수 있도록
      //js에서는 오류. 

//호출한다.
//Hello();

//리액트 모듈로 등록해야 사용하는 곳에서 import 가능
// export
export default Hello;
