import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(isLoading, setIsLoading);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  // async fuction getMovies() {}

  // 컴포넌트의 생애주기에 연결되어 있는 hook. (실행할 콜백함수, deps) 뎁스는 배열이고 이 배열이 비어있다면 한번만 실행한다.
  // useEffect(() => {
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json.data.movies);
  //     setMovies(json.data.movies);
  //     setIsLoading(false);
  //   })
  // }, []);

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Movie App !</h1>
      {isLoading ? ("Loading ...") : 
                  <div>{movies.map(movie => 
                    <Movie key={movie.id} title={movie.title}
                    coverImage={movie.medium_cover_image}
                    summary={movie.summary}
                    genres={movie.genres}
                    />)}
                  </div>
      }
    </>
  );
}

export default App;
