import { useState } from 'react';
import './App.css';
import Hello from './hello';
import List from './List';
//jsx사이에 js문법을 사용할 때는 {} 중괄호 사이에 사용


// function App() {
//   var titleTag = [<h1>Hello 1</h1>, <h1>Hello 2</h1>, <h1>Hello 3</h1>];
//   return (
//     <div className="App">
//       <header className="App-header">
//         {
//           titleTag.map(function(item) {
//             return item;
//           })
//         }
//         <h1>Hello World</h1>
//       </header>
//         <h3>Welcome</h3>
//         <Hello />
//         <Snack />
//     </div>
//   );
// }

// function App() {
//   var titleTag = ["Apple", "Banna", "Orange"];
//   return (
//     <div className="App">
//       <header className="App-header">
//         {
//           titleTag.map(function(item) {
//             return <h2>{item}</h2>;
//           })
//         }
//       </header>
//         <h3>Welcome</h3>
//         <Hello />
//         <Snack />
//     </div>
//   );
// }


function App() {
  var titleTag = ["길동 생선 가게"];
  var fishList = ["오징어","꼴뚜기","대구","명태","거북이"];

  // 리랜더링
  // state변수의 데이터가 변경되면 리액트 컴포넌트가 자동 랜더링됨.
  //useState훅 사용-구조분해 할당(state변수, setter함수)

  //onchange js이벤트 데이터바뀔때마다
  var [newItemVal, setNewItemVal] = useState("aaa");

  return (
    <div className="App">
      <header className="App-header">
        {
          titleTag.map(function(item) {
            return <h2>{item}</h2>;
          })
        }
      </header>
      <Hello />
      새 생선 : <input value={newItemVal} onChange={function(e){
        setNewItemVal(e.target.value);
      }} /> <button>추가</button><br />
      <List fishList={fishList}/>

    </div>
  );
}


export default App;
