import React, { use, useState } from 'react'
import Landing from './Landing'
import Image from 'next/image'
import Dailyplanner from './Dailyplanner'
import Footer from './Footer'








function Diary1() {

    const [btnValue, setbtnValue] = useState(1)

    const handleclick = (index) => {
        setbtnValue(index);
        console.log(index)
    }

    let toggleClass = btnValue ? 'bg-blue-500 rounded-xl py-3 px-7' : 'bg-white hover:bg-white/75 rounded-xl py-3 px-7'

    return (
        <>
            <div className='bg-primary '>
                <header className='flex justify-center items-center'>
                    <Image src={'/images/logo.svg'} height={120} width={230} alt='logo' />
                </header>
                <hr />

                <div className='flex justify-center gap-12 mt-12   '>
                    <button onClick={() => handleclick(1)} className={btnValue === 1 ? 'bg-black text-white font-semibold rounded-xl py-3 px-7' : 'bg-white text-black rounded-xl font-semibold py-3 px-7'}>Journal</button>
                    <button onClick={() => handleclick(2)} className={btnValue === 2 ? 'bg-black text-white font-semibold rounded-xl py-3 px-7' : 'bg-white text-black rounded-xl font-semibold py-3 px-7'}>Monthly Planner</button>
                    <button onClick={() => handleclick(3)} className={btnValue === 3 ? 'bg-black text-white font-semibold rounded-xl py-3 px-7' : 'bg-white text-black font-semibold rounded-xl py-3 px-7'}>Habit Tracker</button>

                </div>
                <div className='grid place-items-center mt-12'>
                    <div className={btnValue === 1 ? 'flex justify-center' : 'hidden'}>
                        <Dailyplanner />
                    </div>
                    <div className={btnValue === 2 ? 'flex justify-center' : 'hidden'}>
                        <Editablefield />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Diary1


function Editablefield() {
    return (
        <>


            <section className='bg-red-500 min-h-screen text-white  m-5'>
                <span className='' contentEditable='true'>Start adding your day</span>
            </section>

        </>
    )
}