import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getDesignerDetial from '../apis/getDesignerDetial';

const useGetDesignerDetail = (designerId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.designer,
    queryFn: async () => await getDesignerDetial(designerId),
  });

  return { designerDetail: data, isLoading };
};

export default useGetDesignerDetail;
