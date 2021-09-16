import { styled } from '../../stitches.config';
import Avatar from '../../atoms/avatar';

export default function UserHeader({ user }) {
  const StyledUserHeader = styled('section', {
    display: 'grid',
    gridTemplateColumns: '3.5rem auto',
    columnGap: '$default',
    marginBottom: '$default',

    'section.avatar': {
      img: {
        boxShadow: '$default'
      },
    }
  });

  return (
    <StyledUserHeader>
      <section className="avatar">
        <Avatar avatarUrl={user.avatar_url} username={user.username} />
      </section>
      <section>
        <h2>{user.name}</h2>
      </section>
    </StyledUserHeader>
  )
}
