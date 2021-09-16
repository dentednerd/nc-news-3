import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import { GetUser } from '../../hooks/UserContext';
import PageHeading from '../../atoms/page-heading';
dayjs.extend(AdvancedFormat);

export default function HomeHeader() {
  const { name } = GetUser();

  const amPm = dayjs().format('A');
  const hour = dayjs().format('HH');
  const sectionOfDay = () => {
    if (amPm === 'AM') { return 'morning'}
    if (amPm === 'PM' && hour < 17) { return 'afternoon'}
    if (amPm === 'PM' && hour >= 17) { return 'evening' }
  };
  const dateToDisplay = dayjs().format('HH:mm on dddd, Do MMMM, YYYY');

  const firstName = name && name.split(' ')[0];

  return (
    <>
      <PageHeading>
        <h2>Good {sectionOfDay()}{firstName && `, ${firstName}`}!</h2>
        <p>It's {dateToDisplay}.</p>
      </PageHeading>
      <PageHeading>
        <h2>Latest Headlines</h2>
      </PageHeading>
    </>
  );
}
