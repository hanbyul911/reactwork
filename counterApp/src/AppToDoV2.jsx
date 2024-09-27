import { useState, useRef } from "react";
import "./App.css";
import Header from "./componenets/Header.jsx";
import TodoEditor from "./componenets/TodoEditor.jsx";
import ComponentOjb from "./componenets/ComponentObj.jsx";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");
  // const idRef = useRef(0); // user의 아이디 레퍼 하나 만들기
  const addTodoList = (event) => {
    event.preventDefault();
    if (!todo) return;
    setTodo("");
    setTodolist((arr) => [...arr, todo]); // 맨 뒤에 투두값 추가해서 리스트에 넣기, 맨 앞에 넣고 싶다면 todo,...arr 로 한다
  };
  const changeTodo = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <Header />
      <TodoEditor
        value={todo} str="test" bool={true}
        number={200} todo={todo} changeTodo={changeTodo} addTodolist={addTodoList} todolist={todolist}
      />
    </>
  );
}

export default App;
