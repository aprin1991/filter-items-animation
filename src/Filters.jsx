import { useEffect } from "react";

function Filters({ popular, setFilterFunction, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilterFunction(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie?.genre_ids.includes(activeGenre)
    );
    setFilterFunction(filtered);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={`${activeGenre === 0 ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={`${activeGenre === 35 ? "active" : ""}`}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={`${activeGenre === 28 ? "active" : ""}`}
      >
        Action
      </button>
    </div>
  );
}

export default Filters;
