import { styled } from '../../stitches.config';

export default function Footer() {
  const StyledFooter = styled('footer', {
    backgroundColor: '$darkBlue',
    color: 'white',
    padding: '$default'
  });

  return (
    <StyledFooter>
      <p>NCNews v3... the prophecy is fulfilled</p>
    </StyledFooter>
  )
}
