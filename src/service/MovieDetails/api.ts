import API from "../api";
import type { MovieDetails, MovieVideoResponse } from "./type";

export const getMovieDetail = async (id: string) => {
  try {
    const response = await API.get(`movie/${id}`);
    return response.data as MovieDetails;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieVideos = async (id: string) => {
  try {
    const response = await API.get(`movie/${id}/videos`);
    return response.data as MovieVideoResponse;
  } catch (error) {
    console.error(error);
  }
};
