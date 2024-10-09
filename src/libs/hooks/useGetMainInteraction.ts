import { useQuery } from '@tanstack/react-query';
import getMainInteracion from '../apis/getMainInteracion';

const useGetMainInteraction = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-main-interaction'],
    queryFn: async () => await getMainInteracion(),
  });

  return { mainInteraction: data, isMainInteractionLoading: isLoading };
};

export default useGetMainInteraction;
