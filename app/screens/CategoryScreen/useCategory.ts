import {Discovery, Genre} from '../../types/database';
import {useEffect, useState} from 'react';

const useCategory = (): [boolean, Discovery[], Error | undefined] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [discoveries, setDiscoveries] = useState<Discovery[]>([]);

  const getAllInformation = async () => {
    /*try {
      const discoveries = await getDiscoverEntries();
      setDiscoveries(discoveries);
      setLoading(false);
    } catch (e) {
      //@TODO Error Handling
      console.error(e);
      setError(e.message);
    }*/
  };

  useEffect(() => {
    getAllInformation();
  }, []);

  return [loading, discoveries, error];
};

export default useCategory;