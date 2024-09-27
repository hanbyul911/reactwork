import "./App.css";
import { useState, useRef } from "react";
import CondComponent from "./componenets/CondComponent";
import LogButton from "./componenets/LogButton";

function App() {
  let [isLogin, setLogin] = useState(false);
  let changeStatus = () => {
    setLogin((cur) => !cur);
  };

  return (
    <>
      {isLogin ? <CondComponent /> : null}
      {isLogin ? <h1>참</h1> : <h1>거짓</h1>}
      <LogButton isLogin={isLogin} changeStatus={changeStatus} />
    </>
  );
}

export default App;
