import { useState } from 'react';

import NewComment from './NewComment';
import CommentList from './CommentList';
import Button from '../ui/Button';
import useNotificationContext from '../../store/notificationContext';

const Comments = (props) => {
  const { eventId } = props;
  const { notification, showNotification } = useNotificationContext();

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setErrorMessage] = useState();

  const toggleCommentsHandler = (e) => {
    e.preventDefault();
    setShowComments((prevStatus) => !prevStatus);
    if (!showComments) {
      readComments();
    }
  };

  const readComments = async () => {
    try {
      setLoadingComments(true);
      const res = await fetch(`/api/comments/${eventId}`);
      const data = await res.json();

      if (res.status === 500) {
        throw new Error(data.message);
      }

      setLoadingComments(false);
      setComments(data.data);
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message,
        status: 'error',
      });
      setErrorMessage(error.message);
    }
  };

  const addComment = async (commentInfo) => {
    try {
      showNotification({
        title: 'Adding Comment...',
        message: 'Wait a bit while we add your comment',
        status: 'pending',
      });

      const res = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentInfo),
      });
      const data = await res.json();

      if (res.status === 500 || !res.ok) {
        throw new Error(data.message);
      }

      showNotification({
        title: 'Success',
        message: 'Comment added successfully',
        status: 'success',
      });

      readComments();
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message,
        status: 'error',
      });
    }
  };

  return (
    <div className='my-8'>
      <Button onClick={toggleCommentsHandler} className='w-48 mx-auto block mb-8'>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </Button>
      {showComments && <NewComment addComment={addComment} />}
      {showComments && !loadingComments && <CommentList loading={loadingComments} comments={comments} error={error} />}
      {showComments && loadingComments && (
        <p className='text-center m-8 text-gray-500 mt-6 h-96 overflow-y-auto'>Loading Comments</p>
      )}
    </div>
  );
};

export default Comments;
