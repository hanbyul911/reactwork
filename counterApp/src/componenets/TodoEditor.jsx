const TodoEditor = ({ number, str, bool, todo, changeTodo, addTodolist, todolist }) => {
  return (
    <form>
      <div className="TodoEditor">
        <p>{number} : {str} : {bool? "true" : "false"}</p>
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
          {todolist.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default TodoEditor;
