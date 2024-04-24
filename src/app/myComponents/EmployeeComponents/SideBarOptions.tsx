import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SideBarOptions({onSelect}: {onSelect: any}) {
    return (
        <div className="bg-gray-200 border border-r-2 border-black h-screen p-5 flex justify-center">
            <div className="bg-white border border-black rounded p-5 mt-14 flex flex-col justify-center items-center text-center w-80">

                <div className="border border-black rounded w-56 h-56 flex flex-col justify-center items-center">
                    <Label htmlFor="picture" className="text-center">Profile Picture</Label>
                    <Input className="w-32 text-wrap h-14 mt-2" id="picture" type="file" />
                </div>

                <div>
                    <button onClick={() => onSelect('Messages')} className="border border-black rounded text-center m-3 w-48 p-2 shadow-lg">Messages</button>
                    <button onClick={() => onSelect('Edit Availability')} className="border border-black rounded text-center m-3 w-48 p-2 shadow-lg">Edit Availabity</button>
                    <button onClick={() => onSelect('Edit Pets')} className="border border-black rounded text-center m-3 w-48 p-2 shadow-lg">Edit Pets</button>
                    <button onClick={() => onSelect('Edit Region')} className="border border-black rounded text-center m-3 w-48 p-2 shadow-lg">Edit Region</button>
                    <button onClick={() => onSelect('Sitting History')} className="border border-black rounded text-center m-3 w-48 p-2 shadow-lg">Sitting History</button>
                </div>
            </div>
        </div>
    )
}
