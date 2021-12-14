import { VscLocation } from 'react-icons/vsc';

const EventAddress = (props) => {
  return (
    <address className={`text-sm ${props.mb} flex items-center`}>
      {props.icon && <VscLocation size={24} />}
      {props.address}
    </address>
  );
};

export default EventAddress;
