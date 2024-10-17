import { api } from '../api';

const getStudioWorks = async (studioId: number) => {
  const { data } = await api.get(`/studio/${studioId}/works`);

  return data;
};

export default getStudioWorks;
