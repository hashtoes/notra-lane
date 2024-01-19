export const cssString = (styles: Object) =>
  Object.entries(styles)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
