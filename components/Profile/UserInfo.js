import Link from 'next/link';
import { signIn, signOut, useSession, getSession } from 'next-auth/client';
import { Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import styles from '../header.module.css';

export default function MyHeader() {
  const [session, loading] = useSession();
  console.log(session.user);

  return (
    <>
      <VStack py="50px" justifyContent="center" spacing="10px">
        {session && (
          <>
            <Text>Signed in as</Text>
            <Heading>{session.user.email}</Heading>
          </>
        )}
      </VStack>
    </>
  );
}
