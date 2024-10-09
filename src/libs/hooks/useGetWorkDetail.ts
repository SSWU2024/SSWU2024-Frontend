import { useQuery } from '@tanstack/react-query';
import getWorkDetail from '../apis/getWorkDetail';

const useGetWorkDetail = (workId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-work-detail'],
    queryFn: async () => await getWorkDetail(workId),
  });

  return { workDetail: data, isWorkDetailLoading: isLoading };
};

export default useGetWorkDetail;
