function TodoItem({content, changeTodo, onCreate}) {
  return (
    <>
      <form>
        <input
          type="text"
          value={content}
          placeholder="할 일을 입력해주세요."
          onChange={changeTodo}
        />
        <button onClick={onCreate}>Add</button>
      </form>
      <hr />
    </>
  );
}

export default TodoItem;
