import React, {useEffect, useState} from 'react';
import {Discovery, Genre} from '../../types/database';
import {getDiscoverEntriesForPageAndGenre, getGenres} from '../../interfaces/api';

const useStart = (): [boolean, Genre[], Discovery[], Error | undefined] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [discoveries, setDiscoveries] = useState<Discovery[]>([]);

  const getAllInformation = async () => {
    try {
      const genres = await getGenres();
      setGenres(genres);
      const discoveries = await getDiscoverEntriesForPageAndGenre(undefined, undefined);
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
