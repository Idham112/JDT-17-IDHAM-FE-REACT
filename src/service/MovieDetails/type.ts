export interface ResponseData {
  total_results: number;
  total_pages: number;
  page: number;
  results: MovieDetails;
}

export interface MovieDetails {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string;
}
