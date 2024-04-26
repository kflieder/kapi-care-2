"use client";
import Header from '@/app/sections/header';
import appwriteService from '@/appwrite/config';
import React, { useEffect } from 'react'

export default function adminProfilePage() {
  const [applications, setApplications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    appwriteService.getApplications()
      .then((apps: any) => {
        console.log("Fetched data:", apps); // Log fetched data
        setApplications(apps as any);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("getApplications error:", error);
      });
  }, []);


  // async function getApplicationsForAdmin() {
  //   try {
  //     const apps = await appwriteService.getApplications();
  //     console.log("Fetched data:", apps); // Log fetched data
  //     setApplications(apps as any);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log("getApplications error:", error);
  //   }
  // }
  
 
  
  console.log("Applications state:", applications); // Log applications state
  
  return (
    <div>
      <Header />
    <div className="flex justify-center items-center h-screen">
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          applications.length > 0 ? (
            applications.map((app: any) => (
              <div className="border border-black m-2" key={app.$id}>
                <p className="border p-2">Name: {app.name}</p>
                <p className="border p-2">Email: {app.email}</p>
                <p className="border p-2">Phone: {app.phone}</p>
                <p className="border p-2">Experience: {app.experience}</p>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )
        )
      }
    </div>
    </div>
  )
    }  