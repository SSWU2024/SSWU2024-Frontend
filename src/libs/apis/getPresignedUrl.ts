import { api } from '../api';

const getPresignedUrl = async (
  category: string | null,
  fileName: string | null,
  fileType: string | null,
  id?: number | null,
) => {
  const url = id
    ? `/aws/s3/presigned-url?category=${category}&fileName=${fileName}&contentType=${fileType}&id=${id}`
    : `/aws/s3/presigned-url?category=${category}&fileName=${fileName}&contentType=${fileType}`;

  const { data } = await api.get(url);

  return data;
};

export default getPresignedUrl;
