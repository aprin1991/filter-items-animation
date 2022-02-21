import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filters from "./Filters";
import { motion, AnimatePresence } from "framer-motion";
const API_KEY = "6972f4ca31e2ed4a944b53b9b7785c6b";
function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setPopular(data?.results);
    setFiltered(data?.results);
  };
  return (
    <div className="App">
      <Filters
        popular={popular}
        setFilterFunction={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie?.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
