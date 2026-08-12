import { useEffect, useState } from 'react';

/**
 * Hook que retorna o ID da seção atualmente visível na viewport.
 * Usado para destacar o link ativo no menu de navegação.
 */
export const useScrollSpy = (sectionIds: readonly string[], offset = 120): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + offset;

      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
