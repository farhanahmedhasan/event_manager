import Header from './Header';
import Notification from '../ui/Notification';
import useNotificationContext from '../../store/notificationContext';

const Layout = (props) => {
  const { notification, showNotification, hideNotification } = useNotificationContext();

  return (
    <>
      <Header />
      <main>{props.children}</main>

      {notification && (
        <Notification title={notification.title} status={notification.status} message={notification.message} />
      )}
    </>
  );
};

export default Layout;
