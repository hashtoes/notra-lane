export const cssString = (styles: Record<string, string | number>) =>
  Object.entries(styles)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
