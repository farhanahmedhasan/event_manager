import Image from 'next/image';
import Head from 'next/head';

import { getEventById, getFeaturedEvents } from '../../helper/api-util';
import Heading from '../../components/ui/Heading';
import EventDate from '../../components/eventDetails/EventDate';
import EventAddress from '../../components/eventDetails/EventAddress';

const EventDetailsPage = ({ event }) => {
  if (!event) {
    return (
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <div className='bg-white container space-x-8 my-6 p-12 rounded-lg flex items-center'>
        <div className=' overflow-hidden basis-1/3'>
          <Image
            blurDataURL='/images/blur.jpg'
            placeholder='blur'
            src={'/' + event.image}
            alt={event.title}
            objectFit='cover'
            height={320}
            width={220}
            layout='responsive'
          />
        </div>

        <div className='basis-2/3'>
          <Heading title={event.title} big={true} />
          <p className='mb-8'>{event.description}</p>
          <div className='flex items-center space-x-16'>
            <EventDate date={event.date} icon={true} />
            <EventAddress address={event.location} icon={true} mb='mb-0' />
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetailsPage;

export const getStaticProps = async (context) => {
  const { event_id } = context.params;
  const event = await getEventById(event_id);

  return {
    props: {
      event,
    },
    revalidate: 30, // 30 seconds
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();

  const paths = allEvents.map((event) => ({ params: { event_id: event.id } }));

  return {
    paths,
    fallback: true,
  };
};
