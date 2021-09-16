import { styled } from '../../stitches.config';
import Button from '../../atoms/button';

const StyledPagination = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.5rem',
  margin: '0 auto',

  button: {
    width: '16ch'
  }
});

export default function Pagination({ page, setPage, pageLength }) {
  const handlePrev = () => {
    setPage((page) => {
      return page - 1;
    })
  };

  const handleNext = () => {
    setPage((page) => {
      return page + 1;
    })
  };

  return (
    <StyledPagination>
      {page > 1 ? (
        <Button
          text="Later Stories"
          onClick={() => handlePrev()}
        />
      ) : <div />}
      {pageLength === 10 ? (
        <Button
          text="Earlier Stories"
          onClick={() => handleNext()}
        />
      ) : <div />}
    </StyledPagination>
  );
}
