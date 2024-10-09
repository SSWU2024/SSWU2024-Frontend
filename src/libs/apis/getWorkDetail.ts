import { api } from '../api';

const getWorkDetail = async (workId: number) => {
  const { data } = await api.get(`/work/${workId}`);

  return data;
};

export default getWorkDetail;
