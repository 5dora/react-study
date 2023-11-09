// import { useState } from 'react';
// import './App.css';
// import Input from './Input';
// import List from './List';

// //xml 종료 태그 반드시 있어야 해
// function App() {
//   // const [todoList, setTodoList] = useState(["리액트 공부하기","자소서쓰기", "면접 보기"]);
//   const [todoList, setTodoList] = useState([
//     {no:1, title:"밥먹기", done:false},
//     {no:2, title:"밥먹기", done:false},
//     {no:3, title:"밥먹기", done:false},
//     {no:4, title:"밥먹기", done:false}
//   ]);

//   function addItem(msg){
//     alert(msg);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>Todo List v0.1</h1>
//       </header>
//       <Input addItem={addItem} />      
//       <hr />
//       <List />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css"
import Input from "./Input";
import List from "./List";

function App() {
  const [todoList, setTodoList] = useState([
    {no:1, title:"밥 먹기", done:false},
    {no:2, title:"청소 하기", done:true},
    {no:3, title:"취직 하기", done:false},
    {no:4, title:"여행 하기", done:false}
  ]);

  function addItem(msg) {
    //todoList에 바로 새 아이템을 추가 할 수 없음(상수라서)
    //todoList의 배열을 복제해서 새 todo아이템을 추가한다.
    //그리고 복제된 새 배열을 setTodoList한다.
    //복제할 때 spread 연산자 사용
    var newList = [...todoList]
    newList.push({no:5, title:msg, done:false})
    setTodoList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List v0.1</h1>
      </header>
      <Input addItem={addItem} />
      <hr />
      <List todoList={todoList} />
    </div>
  );
}

export default App;