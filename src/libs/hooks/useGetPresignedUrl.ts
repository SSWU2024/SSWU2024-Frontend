import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants/queryKeys';
import getPresignedUrl from '../apis/getPresignedUrl';

/** getPresignedUrl Params
 * category(string) : s3에 저장될 파일 상위경로
 * id(int) ?: s3에 저장될 파일 세부 경로 / 처음 생성하는 객체라면 작성X
 * filename(string) : 원본 파일명
 * contentType(string) : 파일의 MIME타입 image/png, image/jpeg, image/gif)
 */

const useGetPresignedUrl = (
  category: string | null,
  fileName: string | null,
  fileType: string | null,
  id?: number | null,
) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.presignedUrl,
    queryFn: async () =>
      await getPresignedUrl(category, fileName, fileType, id),

    // category, fileName, fileType이 존재할 때만 api 호출
    enabled: Boolean(category) && Boolean(fileName) && Boolean(fileType),
  });

  return { response: data, isLoading };
};

export default useGetPresignedUrl;
