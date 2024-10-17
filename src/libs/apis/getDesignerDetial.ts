import { api } from '../api';

const getDesignerDetial = async (designerId: number) => {
  const { data } = await api.get(`/designer/${designerId}`);

  return data;
};

export default getDesignerDetial;
