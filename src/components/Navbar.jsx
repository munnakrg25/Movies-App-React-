import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-red-500 text-xl">🎬 MovieApp</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}