import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
}

const postDisplayImg = async (
  displayId: number,
  imgIds: number[],
): Promise<ApiResponse> => {
  console.log(`request body{ displayId: ${displayId}, imgIds: ${imgIds}}`);

  const response: AxiosResponse<ApiResponse> = await api.post(
    '/display',
    { displayId, imgIds },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export { postDisplayImg };
