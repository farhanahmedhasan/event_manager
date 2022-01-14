import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import EventList from '../../components/events/EventList';
import ResultTilte from '../../components/eventDetails/ResultTilte';
import Head from 'next/head';

const FilteredEventsPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [events, setEvents] = useState(null);

  const { data, error } = useSWR('https://events-70ebd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');

  useEffect(() => {
    setEvents(null);

    if (data) {
      const allEvents = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });
      setEvents(allEvents);
    }
  }, [data]);

  if (!events) {
    return <Heading title='Loading....' center={true} big={true} />;
  }

  const year = parseInt(slug[0]);
  const month = parseInt(slug[1]);

  if (isNaN(year) || isNaN(month) || error) {
    return (
      <div className='text-center'>
        <ErrorAlert>
          <p>Invlid URL!! Adust your Values</p>
        </ErrorAlert>
        <Button className='mt-8' link='/events'>
          Visit All The Events
        </Button>
      </div>
    );
  }

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  const date = new Date(year, month - 1);

  return (
    <>
      {(filteredEvents.length < 1 || !filteredEvents) && (
        <div className='text-center'>
          <ErrorAlert large={true}>
            <p>
              No Events Founds On:
              <span className='ml-2'>
                <ResultTilte date={date} />
              </span>
            </p>
          </ErrorAlert>

          <Button className='mt-8 ' link='/events'>
            Visit All The Events
          </Button>
        </div>
      )}

      {filteredEvents.length > 0 && (
        <div className='container'>
          <Head>
            <title>Filtered Events</title>
            <meta name='description' content={`All events for ${year}/${month}`} />
          </Head>
          <Heading title='Events in: ' big={true} center={true}>
            <ResultTilte date={date} />
          </Heading>
          <EventList
            items={filteredEvents}
            className='grid sm:gap-y-12 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8 place-items-center items-start'
          />
        </div>
      )}
    </>
  );
};
export default FilteredEventsPage;
