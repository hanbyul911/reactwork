import { useState } from "react";
import Search from "./Search";

function Detail({ todolist, onUpdate, onDelete }) {
  let [search, setSearch] = useState("");
  const handleSearch = (e) => {setSearch(e.target.value)};

  let doSearch = () => {
    // todolist를 필터링하여 검색 결과를 반환
    const filteredTodos = todolist.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );

    return filteredTodos.map((todo) => (
      <li key={todo.id}>{todo.content}</li> // 고유한 key 사용
    ));
  };

  return (
    <>
      <h3>Todos</h3>
      <Search search={search} onChange={handleSearch} todolist={todolist} onKeyDown={doSearch}/>
      <ul>
        {
          search === ""
            ? todolist.map((todo) => (
                <li key={todo.id}>{todo.content}</li> // key 속성 추가
              ))
            : (search && doSearch()) // doSearch()가 JSX를 반환해야 함
        }
      </ul>
    </>
  );
}

export default Detail;
