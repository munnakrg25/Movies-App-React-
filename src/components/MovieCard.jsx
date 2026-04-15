import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        className="w-full h-72 object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">⭐ {movie.vote_average}</p>

        <Link to={`/movie/${movie.id}`}>
          <button className="mt-3 w-full bg-red-500 py-2 rounded-lg hover:bg-red-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}