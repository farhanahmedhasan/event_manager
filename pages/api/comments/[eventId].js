import { connectToMongoDB } from '../../../lib/dbConnect';
import Comments from '../../../models/commentsModel';

const commentHandler = async (req, res) => {
  const { eventId } = req.query;

  if (req.method === 'POST') {
    const { email, name, comment } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !comment || comment.trim() === '') {
      return res.status(422).json({ message: 'Please provide Inputs' });
    }

    try {
      const error = await connectToMongoDB();
      if (error) {
        throw error;
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error connecting to Database!! Please try again later' });
    }

    try {
      const newComment = await Comments.create({ eventId, email, name, comment });
      return res.status(201).json({
        message: 'Comment added successfully',
        data: newComment,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong',
        error,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const error = await connectToMongoDB();
      if (error) {
        throw error;
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error connecting to Database!! Please try again later' });
    }

    try {
      const comments = await Comments.find({ eventId });
      return res.status(200).json({
        message: 'Comments fetched successfully',
        data: comments,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong',
        error,
      });
    }
  }
};

export default commentHandler;
