import { useQuery } from '@tanstack/react-query';
import getWorkDesigners from '../apis/getWorkDesigners';

const useGetWorkDesigners = (workId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-work-desginers'],
    queryFn: async () => await getWorkDesigners(workId),
  });

  return { workDesigners: data, isWorkDesignersLoading: isLoading };
};

export default useGetWorkDesigners;
