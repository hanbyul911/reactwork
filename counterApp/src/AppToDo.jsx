import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const changeTodo = (event) => {
    setTodo(event.target.value);
  };
  const addTodoList = (event) => {
    event.preventDefault();
    if (!todo) return;
    setTodo("");
    setTodolist((arr) => [...arr, todo]); // 맨 뒤에 투두값 추가해서 리스트에 넣기, 맨 앞에 넣고 싶다면 todo,...arr 로 한다
    console.log("함수 내부 ==> " + todolist);
  };
  console.log("함수 외부 ==>" + todolist);

  return (
    <>
      <form>
        <input
          type="text"
          value={todo}
          placeholder="할 일을 입력해주세요."
          onChange={changeTodo}
        />
        <button onClick={addTodoList}>할일 추가</button>
        <hr />
        <ul>
          {todolist.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
