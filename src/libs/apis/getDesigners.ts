import { api } from '../api';

const getDesigners = async () => {
  const { data } = await api.get('/designer');

  return data;
};

export default getDesigners;
