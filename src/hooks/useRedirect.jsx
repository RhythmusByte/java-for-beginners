import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (path) => {
    navigate(path);
  };

  return redirect;
};

export default useRedirect;
