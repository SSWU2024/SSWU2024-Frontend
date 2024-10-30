import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getWorkDesigners from '../apis/getWorkDesigners';

const useGetWorkDesigners = (workId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.workDesigners, workId],
    queryFn: async () => await getWorkDesigners(workId),
  });

  return { workDesigners: data, isWorkDesignersLoading: isLoading };
};

export default useGetWorkDesigners;
