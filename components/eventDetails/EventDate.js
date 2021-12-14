import { BsCalendar2 } from 'react-icons/bs';

const EventDate = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <time className='flex items-center'>
        {props.icon && <BsCalendar2 size={20} className='mr-2' />}
        {humanReadableDate}
      </time>
    </>
  );
};

export default EventDate;
