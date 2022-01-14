import Head from 'next/head';
import { getFeaturedEvents } from '../helper/api-util';

import Heading from '../components/ui/Heading';
import EventList from '../components/events/EventList';

const HomePage = ({ featuredEvents }) => {
  return (
    <>
      <Heading title='Featured Events' big={true} center={true} />
      <div className='container'>
        <Head>
          <title>Featured Events</title>
          <meta name='description' content='Best Event manager app in the world.' />
        </Head>
        <EventList
          className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
          items={featuredEvents}
        />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800, // 30 minutes
  };
};

export default HomePage;
