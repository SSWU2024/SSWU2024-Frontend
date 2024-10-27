import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
}

interface postBodyType {
  workId: number;
  imgIds: number[];
}

const postDisplayWork = async (data: postBodyType): Promise<ApiResponse> => {
  const { workId } = data;
  const response: AxiosResponse<ApiResponse> = await api.post(
    `/work/${workId}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export { postDisplayWork };
