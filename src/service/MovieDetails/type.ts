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

export interface MovieVideoResponse {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo{
  id: string;
  name: string;
  site: string;
  key: string;
  type: string;
  official: boolean
}
