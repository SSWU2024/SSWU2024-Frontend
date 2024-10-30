import { AxiosResponse } from 'axios';
import { api } from '../api';

interface ApiResponse {
  code: number;
  message: string;
  data: {
    imgId: number;
    imgNm: string;
    imgTp: string;
    sort: number;
    imgPath: string;
    fileFormat?: string;
  };
}

interface postBodyType {
  imgNm: string;
  imgTp: string;
  sort: number;
  imgPath: string;
  fileFormat?: string;
}

const postImgCommon = async (data: postBodyType[]): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await api.post(
    '/common/adm/img/ins',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};

export { postImgCommon };
