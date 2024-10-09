import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getDisplay from '../apis/getDisplay';

const useGetDisplay = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.display,
    queryFn: async () => await getDisplay(),
  });

  return { display: data, isLoading };
};

export default useGetDisplay;
