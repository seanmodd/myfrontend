import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { HStack, Text, VStack } from '@chakra-ui/layout';
import styles from './header.module.css';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function MyHeader() {
  const [session, loading] = useSession();

  return (
    <header>
      <noscript>
        {/* <style>{`.nojs-show { opacity: 1; top: 0; }`}</style> */}
      </noscript>

      {/* <p
        className={`nojs-show ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      > */}
      <VStack w="200px">
        {!session && (
          <>
            {/* <span className={styles.notSignedInText}> */}
            {/* <span>You are not signed in</span> */}
            {/* <a
              href="/api/auth/signin"
              className={styles.buttonPrimary}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a> */}
          </>
        )}
        {session && (
          <VStack my="10px">
            {session.user.image && (
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={styles.avatar}
              />
            )}
            {/* <span className={styles.signedInText}> */}
            <VStack>
              <Text fontSize={{ base: '0px', md: '0px', lg: '0px' }}>
                Signed in as
              </Text>
              <Text fontSize={{ base: '8px', md: '12px', lg: '14px' }}>
                {session.user.email || session.user.name}
              </Text>
            </VStack>
            {/* <a
              href="/api/auth/signout"
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a> */}
          </VStack>
        )}
        {/* </p> */}
      </VStack>
    </header>
  );
}
