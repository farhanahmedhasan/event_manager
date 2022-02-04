import useNotificationContext from '../../store/notificationContext';

const Notification = (props) => {
  const { hideNotification } = useNotificationContext();
  const { title, message, status } = props;

  return (
    <div
      onClick={hideNotification}
      className={`${
        status === 'success'
          ? 'bg-pink-400'
          : status === 'error'
          ? 'bg-pink-600'
          : status === 'pending'
          ? 'bg-green-600'
          : 'bg-green-600'
      } text-white cursor-pointer container fixed bottom-0 left-1/2 -translate-x-1/2 z-50 py-4
      ${props.className} `}
    >
      <div className='flex items-center space-x-32'>
        <h2 className='ml-4 text-xl font-bold'>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
