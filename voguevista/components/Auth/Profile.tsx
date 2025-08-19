"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-gray-700 text-lg">You are not signed in.</p>
        <Link href="/auth/login">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500">
            Sign In
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 p-4">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, {session.user?.name || session.user?.email}</h1>
      <p className="text-gray-600">This is your profile placeholder page.</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
