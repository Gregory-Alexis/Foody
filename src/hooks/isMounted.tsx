import { useEffect, useRef } from 'react';

// Vérifie que le composant qui sert à afficher les données est bien monté
export const useIsMounted = (): React.MutableRefObject<boolean> => {
  const isMounted: React.MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
