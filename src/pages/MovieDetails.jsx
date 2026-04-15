import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res.data);

        const vid = await getMovieVideos(id);
        const trailer = vid.data.results.find(
          (v) => v.type === "Trailer"
        );

        if (trailer) setVideo(trailer.key);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl">{movie.title}</h2>
      <p className="mt-3">{movie.overview}</p>

      {video && (
        <iframe
          className="mt-5 w-full h-[400px]"
          src={`https://www.youtube.com/embed/${video}`}
          title="Trailer"
        />
      )}
    </div>
  );
}