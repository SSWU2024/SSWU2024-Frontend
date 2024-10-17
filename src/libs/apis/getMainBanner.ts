import { api } from '../api';

const getMainBanner = async () => {
  const { data } = await api.get('/main/banner');

  return data;
};

export default getMainBanner;
