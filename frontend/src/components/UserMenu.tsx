'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function UserMenu() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  return (
    <div className="relative flex items-center">
      {isAuthenticated ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{session?.user?.name || 'User'}</span>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
          >
            Sign out
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className="flex items-center gap-1 rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
            <FaUser className="h-3 w-3" />
            <span>Sign in</span>
          </button>
        </Link>
      )}
    </div>
  );
} 