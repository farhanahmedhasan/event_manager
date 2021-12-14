import EventItem from './EventItem';

const EventList = (props) => {
  const { items, className } = props;

  return (
    <ul className={className}>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
