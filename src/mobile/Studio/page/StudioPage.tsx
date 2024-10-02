import { useLocation } from 'react-router-dom';

const StudioPage = () => {
  const location = useLocation();
  console.log(location);
  return <div>StudioPage</div>;
};

export default StudioPage;
