import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";
import { useState } from "react";

function App() {
  // State to store the list of movies
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "src/04.webp",
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      description: "Batman fights Joker",
      posterURL: "src/04.webp",
      rating: 9.0,
    },
  ]);

  // State to store filtered movies
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // State to store filter criteria
  const [filter, setFilter] = useState({
    title: "",
    rating: 0,
  });

  // Function to add a new movie
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); // Update filtered movies as well
  };

  // Function to filter movies by title and rating
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(newFilter.title.toLowerCase()) &&
        movie.rating >= newFilter.rating
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: "New Movie",
            description: "This is a new movie",
            posterURL: "src/04.webp",
            rating: 7.5,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
}

export default App;
