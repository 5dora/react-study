import { useEffect, useState } from "react";
import "./App.css"
import Input from "./Input";
import List from "./List";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [noCnt, setNoCnt] = useState(todoList.length+1);

  useEffect(function() {
    let todoListData = localStorage.getItem("todoListData");
    if(todoListData != null) {
      let todoListObj = JSON.parse(todoListData);
      setTodoList(todoListObj.todoList);
      setNoCnt(todoListObj.noCnt);
    }
  }, []);

  // localStorage에 저장하기: setItem(), 가져오기: getItem() ...
  //localStorage.setItem("user", "김범준");
  //console.log("User: ", localStorage.getItem("user"));

  function saveData(newTodoList, newNoCnt) {
    localStorage.setItem("todoListData", JSON.stringify({"todoList":newTodoList, newNoCnt}) );
  }

  function addItem(msg) {
    // todoList에 바로 새 아이템을 추가 할 수 없다.(상수니까)
    // todoList의 배열을 복제해서 새 todo 아이템을 추가한다.
    // 그리고 복제된 새 배열을 setTodoList 한다.
    // 데이터를 복제 할때 스프레드 연산자 사용
    var newList = [...todoList];
    newList.push({no:noCnt, title:msg, done:false});
    setTodoList(newList);
    //setTodoList([...todoList, {no:noCnt, title:msg, done:false}]);
    setNoCnt(noCnt+1);
    saveData(newList, noCnt);
  }

  function removeItem(todo) {
    //let no = todo.no;
    // filter()나 findIndex()사용
    let index = todoList.findIndex(function(item, i, arr){
      return item.no == todo.no;
    });
    var newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    saveData();
    saveData(newList, noCnt);
  }

  function updateItem(todo) {
    console.log(todo);
    let index = todoList.findIndex(function(item, i, arr){
      return item.no == todo.no;
    });
    var newList = [...todoList];
    newList[index] = todo;
    setTodoList(newList);
    saveData();
    saveData(newList, noCnt);
  }

  // 리액트는 state 값에 변화가 생기면 화면이 자동으로 다시 그려진다.
  console.log(todoList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List v0.1</h1>
      </header>
      <Input addItem={addItem} />
      <hr />
      <List todoList={todoList} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
