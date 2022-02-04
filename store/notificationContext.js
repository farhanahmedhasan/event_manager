import { useContext, createContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState();

  const showNotification = (notification) => {
    setNotification(notification); // holidng the notification object {title,message,status}
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const contextValue = {
    notification,
    showNotification,
    hideNotification,
  };

  useEffect(() => {
    if (notification && (notification.status === 'error' || notification.status === 'success')) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return <NotificationContext.Provider value={contextValue}>{props.children}</NotificationContext.Provider>;
};

const useNotificationContext = () => {
  const newContext = useContext(NotificationContext);
  if (!newContext) {
    throw new Error(`useNotificationContext must be used within a NotificationContextProvider`);
  }
  return newContext;
};

export default useNotificationContext;
