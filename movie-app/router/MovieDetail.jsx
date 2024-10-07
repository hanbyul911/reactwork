import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cast from "../src/components/Cast";
import "../css/style.css";
import {change_title} from "../src/function/change_title";

const MovieDetail = () => {
  let { movieid } = useParams();
  const [movie, setMovie] = useState({});
  let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${movieid}&with_images=true&with_cast=true`;

  change_title(`${movie.title} 영화 상세보기`)

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(url);
      const json = await response.json();
      // json.data를 사용하여 영화 데이터를 가져옵니다.
      setMovie(json.data.movie); // 'movie'에 데이터 설정
    }

    getMovie();
  }, []);

  console.log(movie);

  return (
    <>
      <h3>{movie.title}</h3>
      <div>
        <div>
          <img id="poster" src={movie.large_cover_image} alt="포스터" />
        </div>
        <div>좋아요 : {movie.like_count}</div>
        <div> 평점 : {movie.rating}</div>
        <div>
          {Array.isArray(movie.cast) &&
            movie.cast.map((actor, index) => (
              <Cast
                key={index}
                coverImage={actor.url_small_image}
                characterName={actor.character_name}
                name={actor.name}
              />
            ))}
        </div>
        {/* {
          <Movie
            key={movieInfo.id}
            title={movieInfo.title}
            coverImage={movieInfo.medium_cover_image}
            summary={movieInfo.summary}
            genres={movieInfo.genres}
          />
        } */}
      </div>
    </>
  );
};

export default MovieDetail;
