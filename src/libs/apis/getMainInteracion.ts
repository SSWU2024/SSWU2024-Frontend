import { api } from '../api';

const getMainInteracion = async () => {
  const { data } = await api.get('/main/inter');

  return data;
};

export default getMainInteracion;
