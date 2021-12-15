import Link from 'next/link';
import { getAllEvents } from '../../data/dummy_data';
import EventList from '../../components/events/EventList';
import Heading from '../../components/ui/Heading';
import EventSearch from '../../components/events/EventSearch';

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div className='container pb-12'>
      <EventSearch />
      <Heading title='All The Events' big={true} center={true} />
      <EventList
        items={events}
        className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
      />
    </div>
  );
};

export default AllEventsPage;
