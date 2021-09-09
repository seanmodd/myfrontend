import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

const NavList = ({ styles }) => {
  const [session, isLoading] = useSession();
  const router = useRouter();

  const handleSignOut = async (event) => {
    event.preventDefault();

    const data = await signOut({ redirect: false, callbackUrl: '/auth' });

    if (data) {
      router.push('/auth/signin');
    }
  };
  return (
    // <ul
    //   className={`${styles} mt-10 md:mt-0 md:flex-row md:space-x-1 items-center w-full md:w-96`}
    // >
    <ul
      className={`${styles} mt-10 md:mt-0 md:flex-row md:space-x-1 items-center w-full md:w-96`}
    >
      <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
        <Link href="/products/store">
          <a className="nav-link">SHOP</a>
        </Link>
      </li>
      <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
        <Link href="/todos">
          <a className="nav-link">TODO</a>
        </Link>
      </li>
      <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
        <Link href="/contact">
          <a className="nav-link">CONTACT</a>
        </Link>
      </li>

      {session && !isLoading && (
        <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
          <Link href="/profile">
            <a className="nav-link cursor-pointer">PROFILE</a>
          </Link>
        </li>
      )}
      {session && !isLoading ? (
        <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
          <a className="nav-link cursor-pointer" onClick={handleSignOut}>
            LOGOUT
          </a>
        </li>
      ) : (
        <li className="p-0 w-full md:flex md:justify-center hover:bg-gray-300 hover:bg-opacity-60 transition-colors duration-300 cursor-pointer">
          <Link href="/auth/signin">
            <a className="nav-link">SIGN IN</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavList;
