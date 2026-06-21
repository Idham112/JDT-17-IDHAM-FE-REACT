import { getNowPlayingMovies, type Movie } from "../service/Movies";
import { useEffect, useState } from "react";

export const useNowPlaying = (page: number) => {
  const [nowPlayingList, setNowPlayingList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setLoading(true);
      try {
        const response = await getNowPlayingMovies(page);
        if (response) {
          setNowPlayingList(response.results);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNowPlaying();
  }, [page]);

  return { nowPlayingList, loading, totalPages };
};
