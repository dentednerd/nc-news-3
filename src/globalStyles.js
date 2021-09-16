import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*, *:before, *:after': {
    margin: '0',
    padding: '0'
  },

  ':root': {
    backgroundColor: 'black'
  },

  body: {
    backgroundColor: 'white',
    color: '$darkBlue',
    padding: '0',
    margin: '0',
    fontFamily: "'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontSize: '16px',
    lineHeight: '1.5'
  },

  main: {
    width: '100%',
    minHeight: 'calc(100vh - 4rem)',
    zIndex: '1',

    'section.content': {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '$default',
      zIndex: '1'
    }
  },

  p: {
    marginBottom: '1.2rem'
  },

  h2: {
    fontFamily: '$heading'
  },

  h3: {
    fontFamily: '$heading'
  },

  a: {
    color: '$gold',
    textDecoration: 'none'
  }
});

export default globalStyles;
