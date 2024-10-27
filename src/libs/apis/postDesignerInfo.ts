import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
  data: {
    name: string;
    engName: string;
    major: string;
    email: string;
    instagram?: string;
    behance?: string;
    imageId: number;
  };
}

export interface postBodyType {
  name: string;
  engName: string;
  major: string;
  email: string;
  instagram?: string | null;
  behance?: string | null;
  imgId: number;
}

const postDesignerInfo = async (data: postBodyType): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await api.post(
    '/designer',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export { postDesignerInfo };
