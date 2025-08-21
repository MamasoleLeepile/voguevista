"use client"

import { useEffect, useState } from 'react'
import { signOut, useSession } from "next-auth/react";

// Extend the NextAuth session type to include 'role'
import type { Session } from "next-auth";
declare module "next-auth" {
  interface User {
    role?: string | null;
  }
  interface Session {
    user?: User;
  }
}
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Navbar () {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [state, setState] = useState(false)

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/auth/login");
  };

  useEffect(() => {
    if (status === "loading") return;
  }, [session, router]);


  const navigation = [

    { title: "Home", path: "/" },
    { title: "Products", path: "/properties" },
    { title: "Cart", path: "/cart" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block" style={{zIndex: 9999}}>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image 
              src='/logo.jpg' 
              alt='logo'
              width={40}
              height={40}
            />
            <span className="text-pink-600 font-bold text-xl">VogueVista</span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-400 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`flex-1 justify-self-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0 lg:ml-52">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-pink-500 transition-colors duration-300 z-50">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}

            {/* Admin Dashboard Link */}
            {session?.user?.role === "ADMIN" && (
              <li className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}

            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              {session ? (
                <Button
                  onClick={handleSignOut}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transform hover:-translate-y-1 transition duration-300"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transform hover:-translate-y-1 transition duration-300">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transform hover:-translate-y-1 transition duration-300">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
