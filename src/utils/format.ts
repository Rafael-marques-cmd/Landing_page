/**
 * Formata um número para moeda brasileira (BRL).
 */
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

/**
 * Rótulo amigável para categorias do cardápio.
 */
export const formatCategory = (category: string): string => {
  const labels: Record<string, string> = {
    tradicional: 'Tradicionais',
    especial: 'Especiais',
    doce: 'Doces',
  };
  return labels[category] ?? category;
};
