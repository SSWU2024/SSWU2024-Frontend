import { useQuery } from '@tanstack/react-query';
import getStudioWorks from '../apis/getStudioWorks';

const useGetStudioWorks = (studioId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-studio-works'],
    queryFn: async () => await getStudioWorks(studioId),
  });

  return { totalWorks: data, isLoading };
};

export default useGetStudioWorks;
