import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// //선언한다.
// function Hello(){
//   return (<div>
//     <h2>이것은 React모듈입니다.</h2>
//   </div>);
// }
//     //jsx기술로 사용가능 문자열로 하지 않아도
//     //xml기술을 자바스크립트에서 쓸 수 있도록
//     //js에서는 오류. 

// //호출한다.
// //Hello();

// 호출한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
//호출을 일관성있게 하려고 태그형식으로 호출
root.render(<App />);
// root.render(Hello());
