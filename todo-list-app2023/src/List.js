import Item from "./Item";

// 나중에 Redux 또는 Mobx를 props대신 사용가능.

function List({todoList, removeItem, updateItem}) {
    //var todoList = props.todoList;
    //var removeItem = props.removeItem;
    return (<div>
        <ul>
          {
            todoList.map(function(todo, i){
                return <Item key={i} todo={todo} removeItem={removeItem} updateItem={updateItem} />
            })
          }
        </ul>
    </div>);
}

export default List;