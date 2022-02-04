import { useState, useRef } from 'react';
import Button from '../ui/Button';

const NewComment = (props) => {
  const [isInValid, setIsInValid] = useState(false);

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const commentRef = useRef(null);

  const supressEnterPropagation = (e) => {
    const ENTER_KEY_CODE = 13;
    if (e.target.name === 'comment' && (e.key === 'Enter' || e.keyCode === ENTER_KEY_CODE)) {
      e.preventDefault();
      const email = emailRef.current.value;
      const name = nameRef.current.value;
      const comment = commentRef.current.value;

      if (
        !email ||
        email.trim() === '' ||
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !comment ||
        comment.trim() === ''
      ) {
        setIsInValid(true);
        return;
      } else {
        setIsInValid(false);
      }

      const commentInfo = { email, name, comment };

      props.addComment(commentInfo);
      commentRef.current.value = '';
    }
  };

  const sendCommentHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const comment = commentRef.current.value;

    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !comment ||
      comment.trim() === ''
    ) {
      setIsInValid(true);
      return;
    } else {
      setIsInValid(false);
    }

    const commentInfo = { email, name, comment };

    props.addComment(commentInfo);
    commentRef.current.value = '';
  };

  return (
    <form
      onSubmit={sendCommentHandler}
      className='bg-pink-400 py-8 px-12 rounded-md max-w-3xl mx-auto grid grid-cols-6 gap-4 justify-items-center'
    >
      <div className='col-span-3 place-self-stretch'>
        <label className='block mb-2' htmlFor='email'>
          Your Email
        </label>
        <input
          ref={emailRef}
          required
          className='rounded-md p-1 w-full outline-none border focus:border-pink-900'
          type='email'
          name='email'
          id='email'
        />
      </div>

      <div className='col-span-3 place-self-stretch'>
        <label className='block mb-2' htmlFor='name'>
          Your Name
        </label>
        <input
          required
          ref={nameRef}
          className='rounded-md p-1 w-full outline-none border focus:border-pink-900'
          type='text'
          name='name'
          id='name'
        />
      </div>

      <div className='col-span-6 place-self-stretch'>
        <label className='block mb-2' htmlFor='comment'>
          Your Comment
        </label>
        <textarea
          required
          onKeyDown={supressEnterPropagation}
          ref={commentRef}
          className='rounded-md p-1 w-full outline-none border focus:border-pink-900'
          name='comment'
          id='comment'
          cols='30'
          rows='6'
        />
      </div>

      <div className='col-span-6'>{isInValid && <p>Please enter a valid email address and comment!</p>}</div>

      <div className='col-span-6'>
        <Button type='submit' style={{ backgroundColor: '#FFF' }}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NewComment;
