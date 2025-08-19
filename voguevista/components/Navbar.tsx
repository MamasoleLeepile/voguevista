"use client"

import { useEffect, useState } from 'react'
import { signOut, useSession } from "next-auth/react"; // Import useSession to check session

// Extend the default Session type to include 'role'
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

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login"); // Redirect to home after sign out
  };

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (session) {
      // Redirect if logged in
      // router.push("/");
    }
  }, [session, router]);
  
  const [state, setState] = useState(false)

  const navigation = [

    { title: "Home", path: "/" },
    { title: "Properties", path: "/properties" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="bg-white w-full md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block" style={{zIndex: 9999}}>
          <Link href="/" className="flex items-center lg:ml-10 gap-2 font-semibold">
            <Image 
              src='/logo.png' 
              alt='logo'
              width="40"
              height="40"
            />
              {/* <span className="text-bold text-xl text-blue-600">Rentify</span> */}
            </Link>
          <div className="md:hidden">
            <button className="text-gray-400 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-self-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:ml-52">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-indigo-600 z-50">
                  <Link href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* Show Dashboard link only if user is logged in and is admin */}
              {(session?.user?.role === "ADMIN" ) && (
                  <li className="text-gray-600 hover:text-indigo-600">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                )}

              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                {session ? (
                  <Button
                    onClick={handleSignOut}
                    className="bg-gray-500 hover:bg-gray-950 px-6 py-2 transform hover:-translate-y-1 transition duration-400"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link href="/auth/login">
                      <Button className="bg-indigo-600 hover:bg-gray-950 px-6 py-2 transform hover:-translate-y-1 transition duration-400">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/register">
                      <Button className="bg-indigo-600 hover:bg-gray-950 px-6 py-2 transform hover:-translate-y-1 transition duration-400">
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