import React from 'react'
import ImgAndQuote from '../myComponents/ImgAndQuote'
import RequestSitter from '../myComponents/RequestSitter'
import ApplyToSit from '../myComponents/ApplyToSit'

export default function body() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center bg-gray-200 h-screen">
      <div className="hidden md:block">
        <ImgAndQuote />
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-0 sm:mt-20">
        <RequestSitter />
        <ApplyToSit />
        <div className='flex mt-5 max-w-84'>
          <div className="border-2 rounded border-orange-500 bg-white outline outline-white w-36 h-10 flex flex-col justify-center text-center items-center mx-10">About Us</div>
          <div className="border-2 rounded border-orange-500 bg-white outline outline-white w-36 h-10 flex flex-col justify-center text-center items-center mx-10">Our Mission</div>
        </div>
      </div>

    </div>
  )
}
