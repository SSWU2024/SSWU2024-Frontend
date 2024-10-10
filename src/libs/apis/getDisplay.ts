import { api } from '../api';

const getDisplay = async () => {
  const { data } = await api.get('/display');

  return data;
};

export default getDisplay;
