import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MovieHome from "../router/MovieHome";
import MovieDetail from "../router/MovieDetail";
import ParamEx2 from "../router/ParamEx2";
import ParamEx1 from "../router/ParamEx1";
import Home from "../router/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/movieDetail/60929">
            Detail
          </Link>
          <Link className="link" to="/param/1">
            Param
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetail/:movieid" element={<MovieDetail />} />
          <Route path="/param/:id" element={<ParamEx1 />} />
          <Route path="/query" element={<ParamEx2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
