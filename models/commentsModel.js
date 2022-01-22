import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  eventId: String,
  comment: {
    type: String,
    required: [true, 'A comment must have a some text'],
  },
  name: {
    type: String,
    required: [true, 'A comment must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A comment must have an email'],
  },
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
