import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList/MovieList";
import Movie from "./pages/movieDetails/movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="movies/:type/movie/:id" element={<Movie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
