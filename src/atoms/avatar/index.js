import { styled } from '../../stitches.config';

export default function Avatar({ username, avatarUrl}) {
  const StyledAvatar = styled('img', {
    height: '3rem',
    width: '3rem',
    borderRadius: '$circle',
    backgroundColor: 'white',
    objectFit: 'contain'
  });

  return <StyledAvatar src={avatarUrl} alt={username} />;
}
