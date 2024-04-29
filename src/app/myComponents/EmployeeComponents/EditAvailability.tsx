import React, { use, useEffect } from 'react'

export default function EditAvailability() {
    const [selectedDay, setSelectedDay] = React.useState<string[]>([]);


    function handleSelectedDay() {
        const { name }: any = event?.target;
        const isChecked = (event?.target as HTMLInputElement)?.checked;

        setSelectedDay(prevSelectedDay => {
            if (isChecked) {
                return [...prevSelectedDay, name]
            } else {
                return prevSelectedDay.filter(day => day !== name)
            }
        })
    }

    useEffect(() => {
        console.log(selectedDay)
    }, [selectedDay])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border flex p-2 flex-wrap">
                <div className='flex flex-col p-2 w-44 h-44 border'>
                    <div className="flex flex-row outline">
                        <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Monday" id="Monday" />
                        <h1>Monday</h1>
                    </div>
                </div>
                <div className='flex p-2'>
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Tuesday" id="Tuesday" />
                    <h1>Tuesday</h1>
                </div>
                <div className="flex p-2">
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Wednesday" id="Wednesday" />
                    <h1>Wednesday</h1>
                </div>
                <div className="flex p-2">
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Thursday" id="Thursday" />
                    <h1>Thursday</h1>
                </div>
                <div className="flex p-2">
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Friday" id="Friday" />
                    <h1>Friday</h1>
                </div>
                <div className="flex p-2">
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Saturday" id="Saturday" />
                    <h1>Saturday</h1>
                </div>
                <div className="flex p-2">
                    <input onChange={handleSelectedDay} className='mr-2' type="checkbox" name="Sunday" id="Sunday" />
                    <h1>Sunday</h1>
                </div>
            </div>
        </div>
    )
}
