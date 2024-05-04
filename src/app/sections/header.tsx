"use client";
import appwriteService from '@/appwrite/config';
import Link from 'next/link'
import React, { useEffect } from 'react'
import LogOutBtn from '../myComponents/LogOutBtn';
import { useRouter } from 'next/navigation';

export default function header() {
  const [currentUserLabel, setCurrentUserLabel] = React.useState<any>('');
  const [currentUser, setCurrentUser] = React.useState<string | undefined>('');
  const router = useRouter();

  async function getUserDetails() {
    try {
      const user = await appwriteService.getCurrentUser();
      setCurrentUser(user?.name);
      setCurrentUserLabel(user?.labels)
    } catch (error) {
      console.log(error);
    }
  }

  function goToHome() {
    router.push('/');
  }
  function goToProfile() {
    const profilePage = currentUserLabel?.includes('admin') ? '/profilePages/admins/[id]' : currentUserLabel?.includes('employee') ? '/profilePages/employees/[id]' : '/profilePages/users/[id]';
    router.push(profilePage);
  }
  useEffect(() => {
    getUserDetails();
  }, [currentUser]);


  return (
    <header className="fixed shadow-md z-10 border-b border-gray-500 h-14 w-full text-2xl flex bg-white justify-between items-center px-5">
      <div>
        <img src="/assets/logo.png" alt="logo" className="h-14 border-b border-gray-500 cursor-pointer" onClick={goToHome}/>
      </div>
      <div className="text-base flex flex-col">
        {currentUser ? <p>Welcome, <span onClick={goToProfile} className="cursor-pointer">{currentUser}</span>!</p> : <Link href="/forms/Login">Log in</Link>}

        {currentUser ? <LogOutBtn /> : <Link href="/forms/SignUp">Sign Up</Link>}
      </div>
    </header>
  )
}
