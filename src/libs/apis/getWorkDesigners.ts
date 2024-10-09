import { api } from '../api';

const getWorkDesigners = async (workId: number) => {
  const { data } = await api.get(`/work/${workId}/designers`);

  return data;
};

export default getWorkDesigners;
