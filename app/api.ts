import {Discovery, DiscoveryJson, Genre, GenreJson} from './interfaces/database';
import {genreUrl, movieList} from './constants';

function getMovieDbInfo<JsonType>(url: string): Promise<JsonType> {
  return new Promise<JsonType>(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const genreJson = (await res.json()) as JsonType;
        resolve(genreJson);
      } else {
        reject(new Error(`Error: Status Code ${res.status}`));
      }
    } catch (e) {
      reject(e);
    }
  });
}

export const getGenres = () =>
  new Promise<Genre[]>(async (resolve, reject) => {
    try {
      const json = await getMovieDbInfo<GenreJson>(genreUrl);
      resolve(json.genres);
    } catch (e) {
      reject(e);
    }
  });

export const getDiscoverEntriesForPageAndGenre = (
  page: number | undefined,
  genre: Genre | undefined,
) =>
  new Promise<Discovery[]>(async (resolve, reject) => {
    let movieListUrl = movieList;
    if (page !== undefined) {
      movieListUrl += `&page=${page}`;
    }
    if (page !== undefined) {
      movieListUrl += `&with_genres=${genre?.id}`;
    }
    try {
      const json = await getMovieDbInfo<DiscoveryJson>(movieListUrl);
      resolve(json.results);
    } catch (e) {
      reject(e);
    }
  });
