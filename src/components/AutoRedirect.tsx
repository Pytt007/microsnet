import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const AutoRedirect = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  return null;
};

export default AutoRedirect;
