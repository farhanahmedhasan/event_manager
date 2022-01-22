import { connectToMongoDB } from '../../../lib/dbConnect';
import Newsletter from '../../../models/newsletterModel';

const registrationHandler = async (req, res) => {
  await connectToMongoDB();

  if (req.method === 'POST') {
    const { emailAddress } = req.body;

    if (!emailAddress || !emailAddress.includes('@')) {
      return res.status(422).json({ message: 'EmailAddress is required and must be valid' });
    }

    try {
      await Newsletter.create({ emailAddress });

      res.status(201).json({ message: 'Thank you for subscribing to our newsletter!' });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};
export default registrationHandler;
