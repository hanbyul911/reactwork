import "./App.css";
import TodoItem from "./componenets/TodoItem";
import Header from "./componenets/Header";
import Detail from "./componenets/Detail";
import { useState, useRef } from "react";

/*

state (계속 값이 바뀌는 것들을 state로 설정한다.)
1. todo (id, isDone, content, date) 
  id 는 useRef 로 렌더와 관계없이 증가하는 값 유지
  isDone -> true or false 로 checkbox
2. todolist 배열
  추가 버튼을 누르면 기존 배열에 추가 (위치는 알아서)
3. search value
  todolist 중 검색키워드에 해당하는 내용 찾기

function
1. onCreate : todoItem 으로 props 전달
2. onUpdate : Detail 로 전달 ==> todolist로 전달
3. onDelete : Detail 로 전달 ==> todolist로 전달
4. onSearch : SearchBar 에서 입력받은 값 -> todolist에 일치하는 값이 있는지 검색
              그 후 해당하는 값만 화면에 보여주기

component(props)
1.Header
2.TodoItem
3.Detail
    3-1.Searchbar
    3-2.TodoList
*/

function App() {
  let content = "";
  let count = useRef(0);
  let isDone = false;
  let [todolist, setTodolist] = useState([]);
  let [todo, setTodo] = useState({
    id: 0,
    isDone: false,
    content,
    date: new Date().toLocaleDateString(),
  });

 

  let changeTodo = (e) => {
    setTodo({ ...todo, content: e.target.value });
  }

  // 새로운 투두를 리스트에 추가
  let onCreate = (e) => {
    e.preventDefault();
    const newTodo = {...todo, id : count.current++};
    setTodolist((todolist) => [newTodo, ...todolist]);
    setTodo({
      id: 0,
      isDone: false,
      content,
      date: new Date().toLocaleDateString(),
    })
  };

  const onUpdate = (updateId) => {
//    todolist.map(todo => todo.id == updateId ? {...todo, isDone =!todo.isDone} : todo);
  };

  const onDelete = (deleteId) => {
 //   setTodolist(todolist.filter(todo => todo.id != deleteId));
  };

  return (
    <>
      <Header />
      <TodoItem
        content={todo.content}
        changeTodo={changeTodo}
        onCreate={onCreate}
      />
      <Detail
        todolist={todolist}
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
