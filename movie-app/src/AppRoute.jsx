import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "../router/home";
import Detail from "../router/Detail";
import Info from "../router/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/detail">
            Detail
          </Link>
          <Link className="link" to="/info">
            info
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
