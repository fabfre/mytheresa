import {Discovery, Genre} from '../../types/database';
import {useEffect, useState} from 'react';
import {getDiscoverEntriesForPageAndGenre} from '../../interfaces/api';

const useCategory = (page: number, genre: Genre): [boolean, Discovery[], Error | undefined] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [discoveries, setDiscoveries] = useState<Discovery[]>([]);

  const getAllInformation = async () => {
    try {
      const newDiscoveries = await getDiscoverEntriesForPageAndGenre(page, genre);
      setDiscoveries(discoveries.concat(newDiscoveries));
      setLoading(false);
    } catch (e) {
      //@TODO Proper Error Handling
      console.error(e);
      setError(e.message);
    }
  };

  useEffect(() => {
    getAllInformation();
  }, [page, genre]);

  return [loading, discoveries, error];
};

export default useCategory;
