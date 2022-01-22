import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: [true, 'A newsletter must have an email'],
    unique: true,
  },
});

export default mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);
