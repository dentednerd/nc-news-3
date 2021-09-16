import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

export default function Footer() {
  const StyledFooter = styled('footer', {
    background: `
      -webkit-linear-gradient(top,  $colors$darkBlue 0%, $colors$blue 94%, black 100%),
      -webkit-radial-gradient(center top, black 0%, $colors$blue 70%)`,
    color: 'white',
    padding: '$default',
    boxShadow: '0 0 0.5rem 0.25rem $colors$blue',

    'section.wrapper': {
      maxWidth: '800px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: '1fr',

      '@bp1': {
        gridTemplateRows: '1fr',
        gridTemplateColumns: 'repeat(2, 1fr)'
      },

      ul: {
        listStyleType: 'none'
      },

      a: {
        color: 'white'
      }
    }
  });

  return (
    <StyledFooter>
      <section className="wrapper">
        <div>
          <h3>NCNews v3</h3>
        </div>
        <ul>
          <li>
            <Link to="/about">About (what's this then?)</Link>
          </li>
          <li>
            <a href="https://joeyimlay.dev">Contact (who is dentednerd?)</a>
          </li>
          <li>
            <a href="https://www.northcoders.com">Privacy Policy (what is Northcoders?)</a>
          </li>
        </ul>
      </section>
    </StyledFooter>
  );
}
