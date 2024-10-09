import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getMainInteracion from '../apis/getMainInteracion';

const useGetMainInteraction = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.mainInteraction,
    queryFn: async () => await getMainInteracion(),
  });

  return { mainInteraction: data, isMainInteractionLoading: isLoading };
};

export default useGetMainInteraction;
