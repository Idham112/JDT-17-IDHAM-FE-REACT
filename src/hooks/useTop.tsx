import { getTopMovies, type Movie } from "../service/Movies";
import { useEffect, useState } from "react";

export const useTop = (page: number) => {
  const [topList, setTopList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        setLoading(true);
        const response = await getTopMovies(page);
        if (response) {
          setTopList(response.results);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTop();
  }, [page]);

  return { topList, loading, totalPages };
};
