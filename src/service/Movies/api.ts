import API from "../api";
import type { ResponseData } from "./type";

export const getPopularMovies = async (page: number) => {
  try {
    const response = await API.get(`movie/popular?page=${page}&language=en-US`);
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getNowPlayingMovies = async (page: number) => {
  try {
    const response = await API.get(
      `movie/now_playing?page=${page}&language=en-US`,
    );
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getUpcomingMovies = async (page: number) => {
  try {
    const response = await API.get(
      `movie/upcoming?page=${page}&language=en-US`,
    );
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getTopMovies = async (page: number) => {
  try {
    const response = await API.get(
      `movie/top_rated?page=${page}&language=en-US`,
    );
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchedMovies = async (page: number, search: string) => {
  try {
    const response = await API.get(
      `search/movie?query=${search}&page=${page}&language=en-US`,
    );
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};
