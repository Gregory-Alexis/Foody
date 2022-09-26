import { useEffect, useRef } from 'react';

// Vérifie que le composant qui sert à afficher les données est bien monté
export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
