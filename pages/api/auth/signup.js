import { hashPassword } from '../../../lib/auth/auth';
import { connectToDatabase } from '../../../lib/db/mongodb';

export default async (req, res) => {
  console.log('create user api +++');
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      !password.trim().length > 7
    ) {
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }

    const { db } = await connectToDatabase();

    const existingUser = await db
      .collection('users-permissions_user')
      .findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: 'User is already registered.' });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users-permissions_user').insertOne({
      firstName,
      lastName,
      email,
      username: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Created user!' });
  }
};
