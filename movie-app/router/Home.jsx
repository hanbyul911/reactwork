import { useState, useEffect } from "react";
import Movie from "../src/components/Movie";
import { change_title } from "../src/function/change_title";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(isLoading, setIsLoading);

  change_title("영화 정보 사이트");

  const getMovies = async () => {

    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Movie App !</h1>
      {isLoading ? (
        "Loading ..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
