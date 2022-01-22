const CommentList = (props) => {
  const { comments } = props;

  if (!comments) {
    return <p className='text-center m-8 text-gray-500'>Loading Comments</p>;
  }

  if (comments.length === 0) {
    return <p className='text-center m-8 text-gray-500'>No comments yet</p>;
  }

  return (
    <ul className='divide-y-2 mt-6 '>
      {comments.map((comment) => {
        return (
          <li className='flex justify-between pt-4 pb-2' key={comment._id}>
            <p className='ml-4 basis-4/6'>{comment.comment}</p>
            <p className='ml-4 basis-2/6 text-gray-500 transform -translate-y-4 text-right italic'>
              Comment By {comment.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
