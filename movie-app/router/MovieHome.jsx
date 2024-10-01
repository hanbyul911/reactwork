import { Link } from "react-router-dom";

const MovieHome = () => {

  return (
    <>
      <h1>Home.jsx</h1>
      <Link className="link" to="/param/1">
      path param 전달
      </Link>
      <Link className="link" to={{pathname:"/query",
                                  search: "id=1&use-image=true&use-case=false"
      }}>
      뭐지
      </Link>
      <Link className="link" to="/movieDetail/60929">test</Link>
      </>
  );
}

export default MovieHome;