import { useNavigate } from "react-router";
import type { Movie } from "../../service/Movies";

interface Props {
  movie: Movie;
}

const MoviesComponent = ({ movie }: Props) => {
  const navigate = useNavigate();

  const movePageState = (url: string, state?: number|string) => {
    navigate(url, {
      state: state,
    });
  };
  return (
    <div
      className="group cursor-pointer"
      onClick={() => movePageState("/movie-detail", movie.id)}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="w-full max-w-[200px] h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-sm truncate max-w-[200px] text-text">
        {movie.original_title}
      </p>
    </div>
  );
};

export default MoviesComponent;
