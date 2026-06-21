import { useEffect, useState } from "react";
import { getMovieDetail, type MovieDetails } from "../service/MovieDetails";

export const useMovieDetail = (id: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetails>();

  useEffect(() => {
    if (id) {
      getMovieDetail(id).then((data) => {
        if (data) setMovieDetail(data);
      });
    }
  }, [id]);
  return { movieDetail };
};
