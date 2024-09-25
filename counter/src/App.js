import { useState } from 'react';
import './App.css';
import Button from './Button.js' // export default 로 하면 그냥 들고 와짐 여러개면 구조 분할 할당
import P from './P.js'
// import {P} from './P.js' 이런식으로 구조 분할 할당!

function App() {
  let [counter, setCounter] = useState(0);
  console.log(counter);
  console.log(setCounter);
  return (
    <>
      <P />
      <Button />
    </>
  );
}

export default App;
