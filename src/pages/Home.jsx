import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const res = await searchMovies(query);
    setMovies(res.data.results);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Search */}
      <div className="flex justify-center pt-10 pb-6">
        <div className="flex w-[60%] rounded-lg overflow-hidden">
          <input
            className="w-full p-3 bg-gray-800 text-white outline-none"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 px-6 hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Movies */}
      {movies.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          Search something to see movies 🎬
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 pb-10">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}
const handleSearch = async () => {
  console.log("clicked"); // 👈 test

  const res = await searchMovies(query);
  console.log(res.data); // 👈 ADD THIS

  setMovies(res.data.results);
};
