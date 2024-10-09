import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getMainBanner from '../apis/getMainBanner';

const useGetMainBanner = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.mainBanner,
    queryFn: async () => await getMainBanner(),
  });

  return { mainBanner: data, isMainBannerLoading: isLoading };
};

export default useGetMainBanner;
