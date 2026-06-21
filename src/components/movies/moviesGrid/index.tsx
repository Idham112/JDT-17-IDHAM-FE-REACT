import MoviesComponent from "..";
import type { Movie } from "../../../service/Movies";

interface Props {
  movies: Movie[];
  loading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MovieGrid = ({
  movies,
  loading,
  page,
  totalPages,
  onPageChange,
}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 justify-items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((el) => <MoviesComponent key={el.id} movie={el} />)
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 rounded-lg font-semibold bg-peach-light text-stone-800 hover:bg-peach disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
          >
            Prev
          </button>
          <span className="px-4 py-2 font-semibold text-stone-800">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 rounded-lg font-semibold bg-peach-light text-stone-800 hover:bg-peach disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
