import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Detail = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        "https://yts.mx/api/v2/movie_details.json?movie_id=60929&with_images=true&with_cast=true"
      );
      const json = await response.json();
      // json.data를 사용하여 영화 데이터를 가져옵니다.
      setMovieInfo(json.data.movie); // 'movie'에 데이터 설정
    }

    getMovie();
  }, []);

  console.log(movieInfo);

  return (
    <>
      <h3>Detail.jsx</h3>
      <div>
        {
          <Movie
            key={movieInfo.id}
            title={movieInfo.title}
            coverImage={movieInfo.medium_cover_image}
            summary={movieInfo.summary}
            genres={movieInfo.genres}
          />
        }
      </div>
    </>
  );
};

export default Detail;
