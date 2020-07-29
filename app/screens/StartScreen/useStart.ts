import React, {useEffect, useState} from 'react';
import {genreUrl, movieList} from '../../constants';
import {Discovery, DiscoveryJson, Genre, GenreJson} from '../../types/database';

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

const getGenres = () =>
  new Promise<Genre[]>(async (resolve, reject) => {
    try {
      const json = await getMovieDbInfo<GenreJson>(genreUrl);
      resolve(json.genres);
    } catch (e) {
      reject(e);
    }
  });

const getDiscoverEntries = () => new Promise<Discovery[]>(async (resolve, reject) => {
  try {
    const json = await getMovieDbInfo<DiscoveryJson>(movieList);
    resolve(json.results);
  } catch (e) {
    reject(e);
  }
});

const useStart = (): [boolean, Genre[], Discovery[], Error | undefined] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [discoveries, setDiscoveries] = useState<Discovery[]>([]);

  const getAllInformation = async () => {
    try {
      const genres = await getGenres();
      setGenres(genres);
      const discoveries = await getDiscoverEntries();
      setDiscoveries(discoveries);
      setLoading(false);
    } catch (e) {
      //@TODO Error Handling
      console.error(e);
      setError(e.message);
    }
  };

  useEffect(() => {
    getAllInformation();
  }, []);

  return [loading, genres, discoveries, error];
};

export default useStart;
