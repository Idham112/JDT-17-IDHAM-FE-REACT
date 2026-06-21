import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useLocation } from "react-router";

const MovieDetail = () => {
  const location = useLocation();
  const { movieDetail } = useMovieDetail(location.state);

  if (!movieDetail) {
    return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.original_title}
          className="w-72 rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white">
            {movieDetail.original_title}
          </h1>
          <p className="text-gray-300 leading-relaxed">
            {movieDetail.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
