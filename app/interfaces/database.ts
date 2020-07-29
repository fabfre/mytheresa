export type Genre = {
  id: number;
  name: string;
};

export type Discovery = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
};

export type DiscoveryJson = {
  page: number;
  total_results: number;
  total_pages: number;
  results: Discovery[];
};

export type GenreJson = {
  genres: Genre[];
};