import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import classes from './main-navigation.module.css';

function MainNavigation() {
  const { status } = useSession();

  function handleLogout() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/'>
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {status === 'unauthenticated' && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {status === 'authenticated' && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {status === 'authenticated' && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
