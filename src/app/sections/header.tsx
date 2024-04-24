"use client";
import appwriteService from '@/appwrite/config';
import Link from 'next/link'
import React, { useEffect } from 'react'
import LogOutBtn from '../myComponents/LogOutBtn';

export default function header() {

  const [currentUser, setCurrentUser] = React.useState<string | undefined>('');

  async function getUserDetails() {
    try {
      const user = await appwriteService.getCurrentUser();
      setCurrentUser(user?.name);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [currentUser]);


  return (
    <header className="fixed shadow-md z-10 border-b border-gray-500 h-14 w-full text-2xl flex bg-white justify-between items-center px-5">
      <div>
        <img src="/assets/logo.png" alt="logo" className="h-14 border-b border-gray-500" />
      </div>
      <div className="text-base flex flex-col">
        {currentUser ? <p>Welcome, <Link href='/'>{currentUser}</Link>!</p> : <Link href="/forms/Login">Log in</Link>}

        {currentUser ? <LogOutBtn /> : <Link href="/forms/SignUp">Sign Up</Link>}
      </div>
    </header>
  )
}
