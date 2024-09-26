import { useState } from "react";

function App() {
  const [distance, setDistance] = useState(0);
  const handler = (event) => {
    setDistance(event.target.value)
  }
  const [invert, setInvert] = useState(false);
  const inverted = () => {
    setInvert(cur => !cur);
    resetDistance();
  }

  const resetDistance = () => {
    setDistance(0);
  }


  return (
    <>
    <h1>Converter from {distance} {invert?"miles" : "km"} to {invert? distance * 1.609: (distance/1.609).toFixed(4)} {invert?"km" : "miles"}</h1>
    <label htmlFor="km">km</label>
    <input type="number" value={invert? distance * 1.609 : distance} onChange={handler} min="0" disabled={invert}></input>
    <label htmlFor="miles">miles</label>
    <input type="number" value={invert? distance : (distance/1.609).toFixed(4)} onChange={handler} min="0" disabled={!invert}></input>
    <button onClick={inverted}>invert</button>
    <button onClick={resetDistance}>reset</button>
    </>
  )
}

export default App