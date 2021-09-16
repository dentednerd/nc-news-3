import { Link } from 'react-router-dom';
import { GetUser } from '../../hooks/UserContext';
import { styled } from '../../stitches.config';
import Avatar from '../../atoms/avatar';

export default function CurrentUser() {
  const { name, username, avatar_url } = GetUser();

  const StyledCurrentUser = styled('section', {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '$default',

    img: {
      margin: '0 $default',

      '@bp1': {
        margin: '0'
      }
    },

    'div.text': {
      display: 'flex',
      flexFlow: 'column nowrap',

      'a.logout': {
        fontSize: '$0',
        lineHeight: '$0'
      }
    }
  });

  return (
    <StyledCurrentUser>
      <Link to={`/users/${username}`} className="user">
        <Avatar avatarUrl={avatar_url} username={username} />
      </Link>

      <div className="text">
        <Link to={`/users/${username}`}>
          {name}
        </Link>
        <Link to="/users" className="logout">
          Log out
        </Link>
      </div>
    </StyledCurrentUser>
  )
}
