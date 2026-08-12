import { useEffect, useState } from 'react';

/**
 * Hook para reagir a media queries de forma reativa.
 * Usado para alternar menus mobile/desktop.
 */
export const useMediaQuery = (query: string): boolean => {
  const getMatches = (q: string): boolean =>
    typeof window !== 'undefined' ? window.matchMedia(q).matches : false;

  const [matches, setMatches] = useState<boolean>(() => getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent): void => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};
