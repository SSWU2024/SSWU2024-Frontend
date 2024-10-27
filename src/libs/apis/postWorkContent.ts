import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
}

interface postBodyType {
  workTitle: string;
  workEngTitle: string;
  workBody: string;
  workEngBody: string;
  studioId: number;
  imgIds: number[];
  designerIds: number[];
}

const postWorkContent = async (data: postBodyType): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await api.post('/work', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export { postWorkContent };
