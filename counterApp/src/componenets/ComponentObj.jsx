function ComponentOjb() {
  const name = "홍길동";
  const student = {
    id : 0,
    name,
    score :90
  }

  return (
    <>
    <h2>학생 id : {student.id}</h2>
    <h2>학생 이름 : {student.name}</h2>
    <h2>학생 점수 : {student.score}</h2>
    </>
  )
}

export default ComponentOjb