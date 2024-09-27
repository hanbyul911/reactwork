import { useState, useRef } from "react";
import "./App.css";
import Component2 from "./componenets/Component2";
import FormSmpl from "./componenets/FormSmpl";
import FormAge from "./componenets/FormAge";
import FormChangeValue from "./componenets/FormChangeValue";

function App() {
  let [student, setStudent] = useState({
    id: 1,
    name: "hanbyul",
    score: 100,
  });

  let [students, setStudentList] = useState([]);

  let changeValue = (e) => {
    let{value, name} = e.target;
    setStudent({...student, [name]:value});
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
      {/* <FormAge student={student} changeScore={changeScore} addAge={addAge} /> */}
      <FormChangeValue student={student} changeValue={changeValue} />
    </>
  );
}

export default App;
