import { useQuery } from '@tanstack/react-query';
import getMainBanner from '../apis/getMainBanner';

const useGetMainBanner = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-main-banner'],
    queryFn: async () => await getMainBanner(),
  });

  return { mainBanner: data, isMainBannerLoading: isLoading };
};

export default useGetMainBanner;
