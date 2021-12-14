import { useRouter } from 'next/router';

import { getEventById } from '../../data/dummy_data';
import Heading from '../../components/ui/Heading';
import EventDate from '../../components/eventDetails/EventDate';
import EventAddress from '../../components/eventDetails/EventAddress';

const EventDetailsPage = () => {
  const router = useRouter();
  const { event_id } = router.query;
  const event = getEventById(event_id);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <div className='bg-white container space-x-8 my-6 p-12 rounded-lg flex items-center'>
        <div className='h-[520px] basis-1/3'>
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img className='h-full w-full object-cover' src={'/' + event.image} alt={event.title} />
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
