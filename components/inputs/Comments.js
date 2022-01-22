import { useState } from 'react';
import Button from '../ui/Button';

import NewComment from './NewComment';
import CommentList from './CommentList';

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleCommentsHandler = (e) => {
    e.preventDefault();
    setShowComments((prevStatus) => !prevStatus);
    if (!showComments) {
      readComments();
    }
  };

  const readComments = async () => {
    const res = await fetch(`/api/comments/${eventId}`);
    const data = await res.json();
    setComments(data.data);
  };

  const addComment = async (commentInfo) => {
    try {
      await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentInfo),
      });
      readComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='my-8'>
      <Button onClick={toggleCommentsHandler} className='w-48 mx-auto block mb-8'>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </Button>
      {showComments && <NewComment addComment={addComment} />}
      {showComments && <CommentList comments={comments} />}
    </div>
  );
};

export default Comments;
