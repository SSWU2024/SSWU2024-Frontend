import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
}

interface postBodyType {
  displayId: number;
  imgIds: number[];
}

const postDisplayImg = async (data: postBodyType): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await api.post(
    '/display',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export { postDisplayImg };
