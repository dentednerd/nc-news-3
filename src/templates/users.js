import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '../stitches.config';
import { UpdateUser } from '../hooks/UserContext';
import { fetchUsers } from '../api';
import Button from '../atoms/button';
import PageHeading from '../atoms/page-heading';
import UserHeader from '../atoms/user-header';

function Users() {
  const [users, setUsers] = useState([]);
  const setUsername = UpdateUser();
  const history = useHistory();

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);

  if (!users) return null;

  const logInNewUser = (username) => {
    setUsername(username);
    history.push(`/`);
    return;
  }

  const UsersGrid = styled('section', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    margin: '2rem 0',

    '@bp1': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },

    div: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gap: '$default'
    }
  });

  return (
    <section className="content">
      <PageHeading>
        <h2>Log in as another user...</h2>
        <p>Yes, I know this isn't how logging in is meant to work. This is just to make sure my user context is working. One day I'll implement proper authorisation.</p>
      </PageHeading>
      <UsersGrid>
        {users.map((user) => (
          <div key={user.username}>
            <UserHeader user={user} />
            <Button
              text={`Log in`}
              onClick={() => logInNewUser(user.username)}
            />
          </div>
        ))}
      </UsersGrid>
    </section>
  );
}

export default Users;
