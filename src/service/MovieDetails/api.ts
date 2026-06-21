import API from "../api";
import type { MovieDetails, ResponseData } from "./type";

export const getMovieDetail = async (id: string) => {
  try {
    const response = await API.get(`movie/${id}`);
    return response.data as MovieDetails;
  } catch (error) {
    console.error(error);
  }
};
