import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getWorkDetail from '../apis/getWorkDetail';

const useGetWorkDetail = (workId: number) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY.workDetail, workId],
    queryFn: async () => await getWorkDetail(workId),
  });

  return { workDetail: data, isWorkDetailLoading: isLoading, refetch };
};

export default useGetWorkDetail;
