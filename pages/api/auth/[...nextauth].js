// import NextAuth from "next-auth"
// import Providers from "next-auth/providers"
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from "lib/mongodb"

// export default async function auth(req, res) {
//   return await NextAuth(req, res, {

//     adapter: MongoDBAdapter({
//       db: (await clientPromise).db(process.env.MONGODB_URI)

//     }),

//   })
// }

import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../lib/db/mongodb';
import { verifyPassword } from '../../../lib/auth/auth';
// import { FirebaseAdapter } from "@next-auth/firebase-adapter"
// import firebase from "firebase/app"
// import "firebase/firestore"

const options = {
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        try {
          const { db } = await connectToDatabase();
          const user = await db.collection('users-permissions_user').findOne({
            email: credentials.email,
          });

          if (!user) throw new Error('No user found');

          const isPasswordValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) throw new Error('Password is not valid');

          return {
            email: user.email,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // async authorize(credentials) {
      //   try {
      //     const { db } = await connectToDatabase();
      //     const user = await db.collection('users-permissions_user').findOne({
      //       email: credentials.email,
      //     });

      //     if (!user) throw new Error('No user found');

      //     const isPasswordValid = await verifyPassword(
      //       credentials.password,
      //       user.password
      //     );

      //     if (!isPasswordValid) throw new Error('Password is not valid');

      //     return {
      //       email: user.email,
      //     };
      //   } catch (error) {
      //     throw new Error(error);
      //   }
      // },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // async authorize(credentials) {
      //   try {
      //     const { db } = await connectToDatabase();
      //     const user = await db.collection('users-permissions_user').findOne({
      //       email: credentials.email,
      //     });

      //     if (!user) throw new Error('No user found');

      //     const isPasswordValid = await verifyPassword(
      //       credentials.password,
      //       user.password
      //     );

      //     if (!isPasswordValid) throw new Error('Password is not valid');

      //     return {
      //       email: user.email,
      //     };
      //   } catch (error) {
      //     throw new Error(error);
      //   }
      // },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
