function FormAge ({student, changeScore, addAge}) {
  return (
    <>
    <label htmlFor="id">id </label><input type="text" value={student.id} id="id" disabled />
    <label htmlFor="name">name </label><input type="text" value={student.name} id="name" disabled/>
    <label htmlFor="score">score </label><input type="text" value={student.score} 
    id="score" onChange={changeScore}/>
    <label htmlFor="age">age </label><input type="text" value={student.age} 
    id="age" onChange={addAge}/>
    </>
  )
}

export default FormAge