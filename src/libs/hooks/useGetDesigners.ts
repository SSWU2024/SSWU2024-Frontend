import { useQuery } from '@tanstack/react-query';
import getDesigners from '../apis/getDesigners';

const useGetDesigners = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-designers'],
    queryFn: async () => await getDesigners(),
  });

  return { designers: data, isLoading };
};

export default useGetDesigners;
