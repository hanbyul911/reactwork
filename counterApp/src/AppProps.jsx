import { useState, useRef } from "react";
import "./App.css";
import Component2 from "./componenets/Component2";
import FormSmpl from "./componenets/FormSmpl";
import FormAge from "./componenets/FormAge";

function App() {
  let [student, setStudent] = useState({
    id: 1,
    name: "hanbyul",
    score: 100,
  });

  let [students, setStudentList] = useState([]);
  let addStudent = () => {
    setStudent(2, "juyeon", 200);
  }

  let changeScore = (e) => setStudent({...student, score:e.target.value});
  // 바뀐 속성만 바꾸기
  let addAge = (e) => setStudent({...student, age:e.target.value});

  // let student = {
  //   id : 1,
  //   name : "hanbyul",
  //   score :90
  // }

  return (
    <>
      <Component2 num={100} str="student" student={student} />
      {/* <FormSmpl student={student} changeScore={changeScore} /><br /> */}
      <FormAge student={student} addAge={addAge} />
    </>
  );
}

export default App;
