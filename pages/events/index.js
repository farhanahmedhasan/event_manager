import Head from 'next/head';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helper/api-util';

import EventList from '../../components/events/EventList';
import Heading from '../../components/ui/Heading';
import EventSearch from '../../components/events/EventSearch';

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const findEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div className='container pb-12'>
      <EventSearch onSearch={findEvents} />
      <Heading title='All The Events' big={true} center={true} />
      <Head>
        <title>All Events</title>
        <meta name='description' content='Best Event manager app in the world.' />
      </Head>
      <EventList
        items={events}
        className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
      />
    </div>
  );
};

export default AllEventsPage;

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800, // 30 minutes
  };
};
