import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getDesigners from '../apis/getDesigners';

const useGetDesigners = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.designers,
    queryFn: async () => await getDesigners(),
  });

  return { designers: data, isLoading };
};

export default useGetDesigners;
