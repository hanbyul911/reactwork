function Search({search, inputSearch}) {
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      // 리스트 뽑아주는 것 구현
      // 일단 alter로 뽑아주기
      alert(`'${search}'를 검색했습니다.`);
    }
  }

  

  return (
    <>
      <input type="text" value={search} placeholder="검색어를 입력하세요." onKeyDown={handleEnterPress}/>
    </>
  );
}

export default Search;
