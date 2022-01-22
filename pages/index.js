import Head from 'next/head';
import { useState, useEffect } from 'react';

import { getFeaturedEvents } from '../helper/api-util';

import Heading from '../components/ui/Heading';
import EventList from '../components/events/EventList';
import NewsletterReg from '../components/inputs/NewsletterReg';
import ErrorAlert from '../components/ui/ErrorAlert';

const HomePage = ({ featuredEvents }) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => {
      setMessage(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <>
      <Heading title='Featured Events' big={true} center={true} />
      <div className='container pb-16'>
        <Head>
          <title>Featured Events</title>
          <meta name='description' content='Best Event manager app in the world.' />
        </Head>
        <NewsletterReg setMessage={setMessage} message={message} />
        <EventList
          className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
          items={featuredEvents}
        />
      </div>
      {message && (
        <ErrorAlert color='text-white' className='absolute -top-8 left-1/2 transform -translate-x-1/2 !py-8'>
          {message}
        </ErrorAlert>
      )}
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
