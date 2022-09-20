export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#000000',
    primery: '#010101',
    secondary: '#808080',
    border: '#dddddd',
    background: '#f1f1f1',
    hover: 'turquoise',
  },

  spacing: value => `${2 * value}px`,

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
});
