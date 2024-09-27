const TodoEditor = ({ todo, changeTodo, addTodolist, todolist }) => {
  return (
    <form>
      <div className="TodoEditor">
        <h4>새로운 Todo 작성하기</h4>
        <div className="editor_wrapper">
          <input
            type="text"
            value={todo}
            placeholder="새로운 Todo..."
            onChange={changeTodo}
          />
          <button onClick={addTodolist}>추가</button>
        </div>
        <hr />
        <ul>
          {/* Done 체크박스 만들기 -> 넘겨받을 값 true or false*/}
          {todolist.map((todo) => (
            <li>{todo}</li>
          ))}
          {/* delete 버튼 만들기 onClick 하면 해당 데이터 삭제*/}
        </ul>
      </div>
    </form>
  );
};

export default TodoEditor;
