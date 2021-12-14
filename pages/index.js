import Link from 'next/link';
import { getFeaturedEvents } from '../data/dummy_data';

import Heading from '../components/ui/Heading';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Heading title='Featured Events' big={true} center={true} />
      <div className='container'>
        <EventList
          className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
          items={featuredEvents}
        />
      </div>
    </>
  );
};

export default HomePage;
