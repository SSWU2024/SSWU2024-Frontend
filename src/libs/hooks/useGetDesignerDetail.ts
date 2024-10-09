import { useQuery } from '@tanstack/react-query';
import getDesignerDetial from '../apis/getDesignerDetial';

const useGetDesignerDetail = (designerId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-designer-detail'],
    queryFn: async () => await getDesignerDetial(designerId),
  });

  return { designerDetail: data, isLoading };
};

export default useGetDesignerDetail;
