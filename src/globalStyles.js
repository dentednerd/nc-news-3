import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*, *:before, *:after': {
    margin: '0',
    padding: '0'
  },

  body: {
    backgroundColor: '$lightBlue',
    color: '$darkBlue',
    padding: '0',
    margin: '0',
    fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontSize: '16px',
    lineHeight: '1.2'
  },

  main: {
    backgroundColor: '$lightBlue',
    width: '100%',

    'section.content': {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '$default',
      minHeight: '100vh'
    }
  },

  p: {
    marginBottom: '1.2rem'
  },

  h1: {
    display: 'inline',
    fontFamily: '$heading',
    fontSize: '$4',
    padding: '0',
    margin: '0'
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
