import { styled } from '../../stitches.config';

export default function Header() {
  const StyledHeader = styled('header', {
    backgroundColor: '$darkBlue',
    color: 'white',
    padding: '$default'
  });

  return (
    <StyledHeader>
      <h1>dentednerd's Northcoders News v3</h1>
    </StyledHeader>
  );
}
