"use client";
import React from 'react'
import { PiPawPrintFill } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import regions from "@/regions/regionsData.json"



export default function RequestSitter() {

  return (
    <div className="border-2 rounded border-orange-500 bg-white outline-white w-96 h-80 flex flex-col justify-around text-center items-center mx-10 mb-10">
      Request a Sitter
      <PiPawPrintFill className='text-6xl' />
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            {
              regions.regions.map((region) => (
                <SelectItem key={region.name} value={region.name}>{region.name}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}