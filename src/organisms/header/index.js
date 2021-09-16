import { Link, useLocation } from 'react-router-dom';
import { styled } from '../../stitches.config';
import CurrentUser from '../../molecules/current-user';

export default function Header(props) {
  const { pathname } = useLocation();
  let topic = pathname.includes('/topic/') ? pathname.split('/topic/')[1] : '';
  if (pathname === '/') topic = 'latest';

  const StyledHeader = styled('header', {
    background: `
      -webkit-linear-gradient(top, black 0%,$colors$blue 6%, $colors$darkBlue 100%),
      -webkit-radial-gradient(center bottom, $colors$blue 0%, black 70%)`,
    color: 'white',
    height: 'auto',
    padding: '$default 0 0',
    boxShadow: '0 0 0.5rem 0.25rem $colors$blue',
    zIndex: '3',

    a: {
      color: 'white'
    },

    'a.user': {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: '$default'
    },

    'section.wrapper': {
      padding: '$default 0 0',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateRows: 'repeat(3, auto)',
      rowGap: '$default',

      h1: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontFamily: '$heading',
        fontSize: '10vw',
        padding: '0 $default',
        margin: '0',
        textShadow: '$default',
        textAlign: 'right',

        '@bp1': {
          fontSize: '5rem',
          padding: '0'
        }
      },

      ul: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        listStyleType: 'none',
        borderLeft: 'solid 1px $colors$blue',

        li: {
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: 'solid 1px $colors$blue',
          borderRight: 'solid 1px $colors$blue',

          '&.border-top': {
            borderTop: 'solid 0.125rem $colors$gold'
          },

          a: {
            display: 'block',
            width: '100%',
            textAlign: 'center'
          }
        }
      }
    }
  });

  return (
    <StyledHeader>
      <section className="wrapper">
        <CurrentUser />

        <Link to="/">
          <h1>Northcoders News</h1>
        </Link>

        <ul>
          <li className={topic === 'latest' ? 'border-top' : ''}>
            <Link to="/">
              Latest
            </Link>
          </li>
          <li className={topic === 'football' ? 'border-top' : ''}>
            <Link to="/topic/football">
              Football
            </Link>
          </li>
          <li className={topic === 'cooking' ? 'border-top' : ''}>
            <Link to="/topic/cooking">
              Cooking
            </Link>
          </li>
          <li className={topic === 'coding' ? 'border-top' : ''}>
            <Link to="/topic/coding">
              Coding
            </Link>
          </li>
        </ul>
      </section>
    </StyledHeader>
  );
}
