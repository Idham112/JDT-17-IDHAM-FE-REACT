import React, { useEffect, useState } from "react";
import { usePopular } from "../../hooks/usePopular";
import MoviesComponent from "../../components/movies";
import type { Movie } from "../../service/Movies";
import API from "../../service/api";

const Movies = () => {
  const [nowPlayingList, setNowPlayingList] = useState<Movie[]>([]);
  const [loading, isLoading] = useState<boolean>(true);
  const { popularMovie } = usePopular();

  const getNowPlayingList = async (page: number) => {
    try {
      const response = await API.get(`movie/now_playing?page=${page}&language=en-US`);
      setNowPlayingList(response.data.results);
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    getNowPlayingList(1);
    return () => {};
  }, []);

  return (
    <div>
      <h1>Now Playing</h1>
      <div className="flex gap-2 flex-wrap">
        {loading ? (
          <></>
        ) : (
          nowPlayingList.map((el) => {
            return (
              <MoviesComponent movie={el} />
            );
          })
        )}
      </div>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-4 gap-4">
        {popularMovie.map((el) => {
          return <MoviesComponent movie={el} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
