import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { styled } from '../../stitches.config';

dayjs.extend(advancedFormat);

const StyledTime = styled('span', {
  color: 'inherit'
});

const longFormat = "dddd Do MMMM YYYY";
const shortFormat = "Do MMM 'YY";

export default function Time({ timestamp, long }) {
  return (
    <StyledTime>
      {dayjs(timestamp).format(long ? longFormat : shortFormat)}
    </StyledTime>
  );
}
