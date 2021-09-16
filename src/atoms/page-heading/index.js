import { styled } from '../../stitches.config';

export default function PageHeading({ children }) {
  const StyledPageHeading = styled('header', {
    backgroundColor: '$lightBlue',
    padding: '$default',
    marginBottom: '$default',
    borderTop: 'solid 1px $colors$blue',
    borderBottom: 'solid 1px $colors$blue',

    p: {
      marginBottom: '0'
    }
  });

  return (
    <StyledPageHeading>
      {children}
    </StyledPageHeading>
  )
}
