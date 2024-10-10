import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getWorkDetail from '../apis/getWorkDetail';

const useGetWorkDetail = (workId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.workDetail,
    queryFn: async () => await getWorkDetail(workId),
  });

  return { workDetail: data, isWorkDetailLoading: isLoading };
};

export default useGetWorkDetail;
