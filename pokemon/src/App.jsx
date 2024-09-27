import { useEffect, useState } from "react";

import "./App.css";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  let [selectedPokemon, setSelectedPokemon] = useState("");

  const handleSelectChange = (e) => {
    fetch(e.target.value)
    .then(response => response.json())
    .then(json => {
      setSelectedPokemon(json.sprites.front_default)
    })
  };

  useEffect(
    () =>
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1280")
        .then((response) => response.json())
        .then((json) => {
          setData(json.results);
          setIsLoading(false);
          console.log(json);
        }),
    []
  );

  return (
    <>
      <div>
        <h1>Pokemons</h1>
        <p>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              {/* Select box에서 선택된 포켓몬의 URL을 추적 */}
              <select onChange={handleSelectChange}>
                <option value="">Select a Pokemon</option> {/* 기본 옵션 */}
                {data.map((pokemon) => (
                  <option key={pokemon.url} value={pokemon.url}>
                    {pokemon.name}
                  </option>
                ))}
              </select><br/>

              {/* 선택된 포켓몬이 있으면 이미지 출력 */}
              {selectedPokemon && (
                <img
                  id="selectedImg"
                  src={selectedPokemon} // 선택된 포켓몬의 이미지
                />
              )}
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default App;
