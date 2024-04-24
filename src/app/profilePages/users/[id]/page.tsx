"use client";
import React, { useEffect, useState } from 'react'
import { useLoggedInContext } from '@/context/loggedInContext';
import appwriteService from '@/appwrite/config';



export default function page() {
  const { isLoggedIn, setLoggedin } = useLoggedInContext();
  

  useEffect(() => {
    appwriteService.isLoggedIn()
    .then(setLoggedin)
  }, [])


  console.log(isLoggedIn)
  return (
    <div>page</div>
  )
}
