import Link from 'next/link';

const AllEventsPage = () => {
  return (
    <div>
      <h1 className='text-6xl flex  justify-center'>All Events</h1>
      <ul>
        <li>
          <Link href={`events/1`}>awesome</Link>
        </li>
        <li>
          <Link href={`events/2`}>sgeg</Link>
        </li>
        <li>
          <Link href={`events/3`}>sdfgsgsg</Link>
        </li>
        <li>
          <Link href={`events/4`}>sdfgsdg</Link>
        </li>
        <li>
          <Link href={`events/5`}>sdgsdgs</Link>
        </li>
      </ul>
    </div>
  );
};

export default AllEventsPage;
