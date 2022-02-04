import { useRef } from 'react';
import Button from '../ui/Button';
import useNotificationContext from '../../store/notificationContext';

const NewsletterReg = () => {
  const { showNotification } = useNotificationContext();
  const emailRef = useRef();

  const postEmail = async (emailAddress) => {
    try {
      showNotification({
        title: 'Signing up...',
        message: 'Registering your email address...',
        status: 'pending',
      });

      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress }),
      });
      const data = await res.json();

      if (res.status === 500 || !res.ok) {
        if (data.message.includes('duplicate')) {
          throw new Error('Email address already registered.');
        }
        throw new Error(data.message);
      }

      if (!data.message.includes('duplicate') && res.status === 201) {
        showNotification({
          title: 'Success',
          message: 'You have been successfully registered.',
          status: 'success',
        });
      }
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message || 'Something went wrong.',
        status: 'error',
      });
    }
  };

  const registrationHandler = (e) => {
    e.preventDefault();
    const emailAddress = emailRef.current.value;

    postEmail(emailAddress);
    emailRef.current.value = '';
  };

  return (
    <section>
      <h2 className='text-2xl text-center mb-6 font-semibold'>Sign up to stay updated</h2>
      <form className='flex justify-center mb-8 lg:max-w-3xl mx-auto' onSubmit={registrationHandler}>
        <div className='basis-3/4'>
          <input
            required
            type='email'
            ref={emailRef}
            className='text-xl h-full w-full p-[14px] border focus:outline-none focus:border-pink-400'
            placeholder='Your Email Address'
          />
        </div>
        <Button className='basis-1/4 -ml-[41px]'>Register</Button>
      </form>
    </section>
  );
};

export default NewsletterReg;
