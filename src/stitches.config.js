import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      darkBlue: '#354262',
      blue: '#667295',
      lightBlue: '#E5F0FF',
      gold: '#D6A419'
    },
    fontSizes: {
      0: '0.875rem',
      1: '1rem',
      2: '1.25rem',
      3: '1.5rem',
      4: '1.75rem',
      5: '2rem'
    },
    lineHeights: {
      0: '1rem',
      1: '1.2rem',
      2: '1.5rem',
      3: '1.8rem',
      4: '2.1rem',
      5: '2.4rem'
    },
    fonts: {
      heading: '"Zilla Slab", serif',
      body: '"Open Sans", sans-serif'
    },
    radii: {
      corner: '1rem',
      circle: '50%'
    },
    space: {
      default: '1rem'
    },
  },
  media: {
    bp1: '(min-width: 768px)',
  },
});
