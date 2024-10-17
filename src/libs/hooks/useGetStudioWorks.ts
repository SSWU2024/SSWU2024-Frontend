import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getStudioWorks from '../apis/getStudioWorks';

const useGetStudioWorks = (studioId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.works,
    queryFn: async () => await getStudioWorks(studioId),
  });

  return { totalWorks: data, isLoading };
};

export default useGetStudioWorks;
