import { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState(0);
  const [invert, setInvert] = useState(false);
  const handler = (event) => {
    setNumbers(event.target.value);
  };

  const resetNumbers = () => {
    setNumbers(0);
  };

  const inverted = () => {
    setInvert((cur) => !cur);
    setNumbers(0);
  };

  return (
    <>
      <h1>Converter from minutes</h1>
      <input
        type="number"
        step="10"
        min="0"
        value={invert ? numbers * 60 : numbers}
        id="minutes"
        onChange={handler}
        disabled={invert}
      />
      <label htmlFor="minetes">분</label>
      <input
        type="number"
        id="hour"
        min="0"
        placeholder="시간"
        value={invert ? numbers : Math.round(numbers / 60)}
        onChange={handler}
        disabled={!invert}
      />
      <label htmlFor="hour">시간</label>
      <button onClick={resetNumbers}>Reset</button>
      <button onClick={inverted}>
        {invert ? "시간을 분으로" : "분을 시간으로"}
      </button>
    </>
  );
}

export default App;
