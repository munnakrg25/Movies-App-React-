import { useEffect, useState } from "react";

export default function Watchlist() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setList(data);
  }, []);

  if (list.length === 0) {
    return (
      <h2 className="text-center mt-10 text-gray-400">
        No movies in watchlist
      </h2>
    );
  }

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {list.map((m) => (
        <div key={m.id} className="bg-gray-800 p-3 rounded">
          {m.title}
        </div>
      ))}
    </div>
  );
}