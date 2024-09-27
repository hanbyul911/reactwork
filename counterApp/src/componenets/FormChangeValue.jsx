function FormChangeValue ({student, changeValue}) {
  return ( 
    <>
    <label htmlFor="id">id </label><input type="text" value={student.id} id="id" disabled />
    <label htmlFor="name">name </label><input type="text" value={student.name} id="name" disabled/>
    <label htmlFor="score">score </label><input type="text" value={student.score} 
    id="score" name="score" onChange={changeValue}/>
    <label htmlFor="age">age </label><input type="text" value={student.age} 
    id="age" name="age" onChange={changeValue}/>
    <label htmlFor="school">school </label><input type="text" value={student.school} 
    id="school" name="school" onChange={changeValue}/>
    </>
  );
}

export default FormChangeValue;