import { auth, signIn, signOut } from '@/_helpers/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30} />
        </Link>
        <div className='gap-5 flex items-center text-black'>
          {session && session?.user ? (
            <>
              <Link href={'/startup/create'}>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                <button type='submit'>
                  <span>Logout</span>
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  'use server';
                  await signIn('github');
                }}
              >
                <button type='submit'>Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
