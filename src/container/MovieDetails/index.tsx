import { useMovieVideos } from "../../hooks/useMovieVideos";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useLocation } from "react-router";

const MovieDetail = () => {
  const location = useLocation();
  const id = location.state;
  const { movieDetail } = useMovieDetail(id);
  const { videos } = useMovieVideos(id);

  const trailer =
    videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ??
    videos[0];

  if (!movieDetail) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
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
          <h1 className="text-3xl font-bold">{movieDetail.original_title}</h1>
          <p className="leading-relaxed">{movieDetail.overview}</p>
        </div>
      </div>
      {trailer && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Trailer</h2>
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
