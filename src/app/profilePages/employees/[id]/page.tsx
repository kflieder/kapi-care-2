"use client";
import Earnings from '@/app/myComponents/EmployeeComponents/Earnings'
import SideBarOptions from '@/app/myComponents/EmployeeComponents/SideBarOptions'
import UpcomingBookings from '@/app/myComponents/EmployeeComponents/UpcomingBookings'
import Messages from '@/app/myComponents/Messages';
import Header from '@/app/sections/header'
import React, { useState } from 'react'

export default function employeeProfilePage() {
  const [selected, setSelected] = useState('Default');
  const handleSelect = (selected: string) => {
    setSelected(selected);
  }

  const renderedComponent = () => {
    switch (selected) {
      case 'Messages':
        return <Messages />
      case 'Edit Availability':
        return <div className="col-span-2 flex flex-col justify-center items-center">Edit Availability</div>
      case 'Edit Pets':
        return <div className="col-span-2 flex flex-col justify-center items-center">Edit Pets</div>
      case 'Edit Region':
        return <div className="col-span-2 flex flex-col justify-center items-center">Edit Region</div>
      case 'Sitting History':
        return <div className="col-span-2 flex flex-col justify-center items-center">Sitting History</div>
      default:
        return <div className="flex flex-col justify-center items-center">
          <UpcomingBookings />
          <Earnings />
        </div>
    }
  }


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="h-screen outline-black grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <SideBarOptions onSelect={handleSelect} />
        </div>
        <div className="col-span-2">
        {renderedComponent()}
        </div>
        
      </div>
    </div>
  )
}
