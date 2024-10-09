import { useQuery } from '@tanstack/react-query';
import getDisplay from '../apis/getDisplay';

const useGetDisplay = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-display'],
    queryFn: async () => await getDisplay(),
  });

  return { display: data, isLoading };
};

export default useGetDisplay;
