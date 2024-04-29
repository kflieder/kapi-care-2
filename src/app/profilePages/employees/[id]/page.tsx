"use client";
import Earnings from '@/app/myComponents/EmployeeComponents/Earnings'
import EditAvailability from '@/app/myComponents/EmployeeComponents/EditAvailability';
import EditPets from '@/app/myComponents/EmployeeComponents/EditPets';
import EditRegion from '@/app/myComponents/EmployeeComponents/EditRegion';
import SideBarOptions from '@/app/myComponents/EmployeeComponents/SideBarOptions'
import UpcomingBookings from '@/app/myComponents/EmployeeComponents/UpcomingBookings'
import WorkHistory from '@/app/myComponents/EmployeeComponents/WorkHistory';
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
        return <EditAvailability />
      case 'Edit Pets':
        return <EditPets />
      case 'Edit Region':
        return <EditRegion />
      case 'Sitting History':
        return <WorkHistory />
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
