'use client';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import UserMenu from '@/components/UserMenu';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center">
            <FaFacebook className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-800">Network Society</h1>
          </div>
          <UserMenu />
        </div>
      </header>
      
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="max-w-md text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Welcome to Network Society</h2>
          <p className="mb-8 text-lg text-gray-600">
            Connect with friends and the world around you on Network Society.
          </p>
          <Link href="/login">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
