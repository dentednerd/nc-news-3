import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  maxWidth: '16ch',
  height: '2rem',
  fontFamily: '$body',
  fontSize: '$0',
  lineHeight: '$0',
  fontWeight: '700',
  backgroundColor: '$gold',
  color: '$darkBlue',
  border: 'none',
  boxShadow: '$wide',
  cursor: 'pointer',
  transition: '$all',
  padding: '0 $default',
  margin: '0 auto',

  '&:hover': {
    boxShadow: '$default'
  },

  variants: {
    sort: {
      true: {
        fontFamily: '$body',
        padding: '0.5rem $space$default',
        height: 'auto',
        width: '100%'
      }
    }
  }
});

export default function Button({
  type,
  text,
  onClick,
  sort
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      sort={sort}
    >
      {text}
    </StyledButton>
  );
}
