import { useState, useRef } from 'react'
import './App.css'
import Header from './Header.jsx'
import TodoEditor from './TodoEditor.jsx';


function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");
  const idRef = useRef(0); // user의 아이디 레퍼 하나 만들기
  const addTodoList = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime()
    }
    setTodolist([newItem, ...todolist]);
    idRef.current += 1;
  }
  const changeTodo = (event) => {
    setTodo(event.target.value);
  }

  const createTodo = () => {}
 
  return (
    <>
      <Header />
      <form>
        <TodoEditor onCreate={createTodo} />
        <hr />
        <ul>
         {todolist.map(todo => <li>{todo}</li>)}
        </ul>
      </form>
    </>
  )
}

export default App
