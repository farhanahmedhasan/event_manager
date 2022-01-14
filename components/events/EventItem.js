import Image from 'next/image';

import Button from '../ui/Button';
import { BsArrowRight } from 'react-icons/bs';
import EventDate from '../eventDetails/EventDate';
import EventAddress from '../eventDetails/EventAddress';

const EventItem = (props) => {
  const { item } = props;
  const exploreLink = `/events/${item.id}`;

  return (
    <li className='bg-white max-w-[420px] sm:max-w-none m-2 sm:m-0 mb-10 sm:mb-0 rounded-md shadow-lg shadow-pink-300 overflow-hidden sm:flex items-center sm:space-x-6'>
      <div className='sm:shrink-0 overflow-hidden w-full sm:w-48 h-64'>
        <Image
          blurDataURL='/images/blur.jpg'
          placeholder='blur'
          src={'/' + item.image}
          alt={item.title}
          width={192}
          height={256}
          objectFit='cover'
          layout='responsive'
        />
      </div>

      <div className='p-4 sm:p-0'>
        <h3 className='text-2xl font-bold mb-2'>{item.title}</h3>
        <EventAddress address={item.location} icon={true} mb='mb-4' />
        <p className='mb-4'>{item.description.substring(0, 90)} .....</p>
        <EventDate icon={true} date={item.date} />

        <div className='flex justify-end px-4'>
          <Button arrow={true} link={exploreLink}>
            <span>Explore Event</span>
            <span className='ml-3'>
              <BsArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
