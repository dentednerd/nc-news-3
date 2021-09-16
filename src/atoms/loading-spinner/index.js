import { styled, keyframes } from '../../stitches.config';

const spinnerAnim = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const StyledSpinner = styled('div', {
  display: 'block',
  position: 'relative',
  width: '80px',
  height: '80px',
  margin: '$space$default auto',

  div: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '64px',
    height: '64px',
    margin: '8px',
    border: '8px solid $gold',
    borderRadius: '$circle',
    animation: `${spinnerAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: '$gold transparent transparent transparent',

    '&:nth-child(1)': {
      animationDelay: '-0.45s'
    },

    '&:nth-child(2)': {
      animationDelay: '-0.3s'
    },

    '&:nth-child(3)': {
      animationDelay: '-0.15s'
    },
  }
});

export default function LoadingSpinner() {
  return (
    <section className="content">
      <StyledSpinner>
        <div />
        <div />
        <div />
        <div />
      </StyledSpinner>
    </section>
  );
}
